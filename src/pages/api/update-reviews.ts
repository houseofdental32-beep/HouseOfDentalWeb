import type { APIRoute } from 'astro';
import { getKvReviewsData, setKvReviewsData } from '../../lib/kv';

export const prerender = false;

// Canonical Google Maps Data ID for House of Dental, Bagaluru
const HOUSE_OF_DENTAL_DATA_ID = "0x3bae1b5fdcc27e99:0xab8759d1b20cec24";

function inferTreatment(text: string): string | undefined {
  const lower = (text || '').toLowerCase();
  if (lower.includes('root canal') || lower.includes('rct')) return 'Root Canal Treatment';
  if (lower.includes('aligner') || lower.includes('invisalign') || lower.includes('braces')) return 'Clear Aligners';
  if (lower.includes('whiten') || lower.includes('bleach')) return 'Teeth Whitening';
  if (lower.includes('implant')) return 'Dental Implants';
  if (lower.includes('clean') || lower.includes('scaling')) return 'Scaling & Polishing';
  if (lower.includes('kid') || lower.includes('child') || lower.includes('daughter') || lower.includes('son') || lower.includes('pediatric')) return 'Kids Dentistry';
  if (lower.includes('wisdom') || lower.includes('extract') || lower.includes('surgery')) return 'Wisdom Tooth Removal';
  if (lower.includes('crown') || lower.includes('veneer') || lower.includes('cosmetic') || lower.includes('bonding')) return 'Cosmetic Dentistry';
  return undefined;
}

export const GET: APIRoute = async ({ request }) => {
  // 1. Verify Vercel Cron Secret (supports Authorization header from Vercel Cron OR ?secret= query param from browser)
  const authHeader = request.headers.get('authorization');
  const url = new URL(request.url);
  const querySecret = url.searchParams.get('secret') || url.searchParams.get('key');
  const cronSecret = 
    (typeof process !== 'undefined' ? process.env?.CRON_SECRET : '') || 
    import.meta.env.CRON_SECRET;

  const isAuthorized = !cronSecret || authHeader === `Bearer ${cronSecret}` || querySecret === cronSecret;

  if (!isAuthorized) {
    return new Response(JSON.stringify({ 
      error: 'Unauthorized: Invalid cron secret. Pass ?secret=YOUR_CRON_SECRET in the URL or send Authorization header.' 
    }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // 2. Read SerpApi Key from environment
  const serpApiKey = 
    (typeof process !== 'undefined' ? process.env?.SERPAPI_API_KEY : '') || 
    import.meta.env.SERPAPI_API_KEY;

  if (!serpApiKey) {
    return new Response(JSON.stringify({ 
      error: 'Missing SERPAPI_API_KEY. Please add it to your environment.' 
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Number of pages to fetch (default: 3 pages = ~30 raw reviews, max 5)
  const maxPages = Math.min(Math.max(parseInt(url.searchParams.get('pages') || '3', 10), 1), 5);

  try {
    // 3. Query SerpApi Google Maps Reviews Engine with Pagination Support
    const allRawReviews: any[] = [];
    let nextToken: string | null = null;
    let placeRating = 5.0;
    let totalReviews = 174;
    let pagesFetched = 0;

    for (let page = 1; page <= maxPages; page++) {
      let apiUrl = `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${encodeURIComponent(HOUSE_OF_DENTAL_DATA_ID)}&hl=en&sort_by=newestFirst&api_key=${encodeURIComponent(serpApiKey)}`;
      if (nextToken) {
        apiUrl += `&next_page_token=${encodeURIComponent(nextToken)}`;
      }

      const res = await fetch(apiUrl, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!res.ok) {
        if (page === 1) {
          const errText = await res.text();
          return new Response(JSON.stringify({ 
            error: `SerpApi request failed with status ${res.status}: ${errText}` 
          }), {
            status: 502,
            headers: { 'Content-Type': 'application/json' }
          });
        }
        break; // Stop fetching on later page error, keep accumulated reviews
      }

      const payload = await res.json();
      pagesFetched++;

      if (payload.place_info) {
        if (payload.place_info.rating) placeRating = payload.place_info.rating;
        if (payload.place_info.reviews) totalReviews = payload.place_info.reviews;
      }

      if (Array.isArray(payload.reviews)) {
        allRawReviews.push(...payload.reviews);
      }

      nextToken = payload.serpapi_pagination?.next_page_token || null;
      if (!nextToken) {
        break; // No further pages available
      }
    }

    if (allRawReviews.length === 0) {
      return new Response(JSON.stringify({ 
        message: 'No reviews found in response from SerpApi' 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 4. Format reviews for House of Dental website showcase
    // Showcase 4-star and 5-star reviews with text on the public website
    const mapsLink = "https://maps.app.goo.gl/YGLmx9b7MjJN9ua18";
    const newFormattedReviews = allRawReviews
      .filter((r: any) => (r.rating || 5) >= 4 && (r.snippet || r.text))
      .map((r: any) => {
        const text = r.snippet || r.text || '';
        const authorName = r.user?.name || 'Verified Patient';
        const authorAvatar = r.user?.thumbnail || null;
        const reviewDate = r.date || 'Recently';
        const treatment = inferTreatment(text);
        const ratingVal = typeof r.rating === 'number' ? r.rating : 5;

        return {
          name: authorName,
          role: 'Verified Google Review • Bagalur',
          rating: ratingVal,
          text: text,
          date: reviewDate,
          treatment: treatment,
          verified: true,
          avatar_url: authorAvatar,
          google_maps_url: r.link || mapsLink
        };
      });

    // 5. Merge with existing reviews already in KV (so older reviews are retained and accumulate)
    const existingKv = await getKvReviewsData();
    const existingReviews = existingKv?.reviews || [];

    const reviewMap = new Map<string, any>();
    // Insert new reviews first
    for (const r of newFormattedReviews) {
      const key = `${r.name}_${r.text?.slice(0, 40)}`;
      reviewMap.set(key, r);
    }
    // Append existing reviews if not already present
    for (const r of existingReviews) {
      const key = `${r.name}_${r.text?.slice(0, 40)}`;
      if (!reviewMap.has(key)) {
        reviewMap.set(key, r);
      }
    }

    const finalReviews = Array.from(reviewMap.values());

    // 6. Save merged reviews, dynamic rating, and review count to Upstash Redis / Vercel KV
    const parsedRating = typeof placeRating === 'number' ? placeRating : parseFloat(placeRating) || 5.0;
    const parsedCount = typeof totalReviews === 'number' ? totalReviews : parseInt(totalReviews, 10) || finalReviews.length;

    const saveResult = await setKvReviewsData({
      reviews: finalReviews,
      rating: parsedRating,
      reviewCount: parsedCount,
      lastUpdated: new Date().toISOString()
    });

    return new Response(JSON.stringify({
      success: true,
      message: `Successfully synchronized ${finalReviews.length} verified reviews from Google Maps!`,
      database_saved: saveResult.success,
      database_target: saveResult.target,
      database_error: saveResult.error || null,
      pages_fetched: pagesFetched,
      new_reviews_fetched: newFormattedReviews.length,
      total_reviews_saved: finalReviews.length,
      google_rating: parsedRating,
      review_count: parsedCount,
      reviews: finalReviews
    }, null, 2), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('[Update Reviews SerpApi Error]:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
