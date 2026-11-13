import type { APIRoute } from 'astro';
import { setKvReviewsData } from '../../lib/kv';

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

  try {
    // 3. Query SerpApi Google Maps Reviews Engine
    const apiUrl = `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${encodeURIComponent(HOUSE_OF_DENTAL_DATA_ID)}&hl=en&sort_by=newestFirst&api_key=${encodeURIComponent(serpApiKey)}`;

    const res = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!res.ok) {
      const errText = await res.text();
      return new Response(JSON.stringify({ 
        error: `SerpApi request failed with status ${res.status}: ${errText}` 
      }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const payload = await res.json();
    const rawReviews: any[] = payload.reviews || [];
    const placeRating = payload.place_info?.rating || 5.0;
    const totalReviews = payload.place_info?.reviews || 174;

    if (!rawReviews || rawReviews.length === 0) {
      return new Response(JSON.stringify({ 
        message: 'No reviews found in response from SerpApi' 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 4. Format reviews for House of Dental website showcase
    // Showcase 4-star and 5-star reviews on the public website
    const mapsLink = "https://maps.app.goo.gl/YGLmx9b7MjJN9ua18";
    const formattedReviews = rawReviews
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

    // 5. Save reviews, dynamic rating, and review count to Vercel KV
    const parsedRating = typeof placeRating === 'number' ? placeRating : parseFloat(placeRating) || 5.0;
    const parsedCount = typeof totalReviews === 'number' ? totalReviews : parseInt(totalReviews, 10) || formattedReviews.length;

    await setKvReviewsData({
      reviews: formattedReviews,
      rating: parsedRating,
      reviewCount: parsedCount,
      lastUpdated: new Date().toISOString()
    });

    return new Response(JSON.stringify({
      success: true,
      message: `Successfully synchronized ${formattedReviews.length} verified reviews from Google Maps!`,
      count: formattedReviews.length,
      rating: parsedRating,
      total_reviews_on_google: parsedCount,
      reviews: formattedReviews
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
