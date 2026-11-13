// Vercel KV / Upstash Redis helper using native REST API
// Supports local file cache for local development testing

import fs from 'node:fs';
import path from 'node:path';

const LOCAL_CACHE_PATH = path.resolve(process.cwd(), '.cache/kv-reviews.json');

export interface StoredReviewsData {
  reviews: any[];
  rating: number;
  reviewCount: number;
  lastUpdated?: string;
}

export async function getKvReviewsData(): Promise<StoredReviewsData | null> {
  const url = 
    (typeof process !== 'undefined' ? process.env?.KV_REST_API_URL : '') || 
    import.meta.env.KV_REST_API_URL || '';
  const token = 
    (typeof process !== 'undefined' ? process.env?.KV_REST_API_TOKEN : '') || 
    import.meta.env.KV_REST_API_TOKEN || '';

  // 1. If Vercel KV credentials are set, fetch from cloud
  if (url && token) {
    try {
      const res = await fetch(`${url}/get/google_reviews_data`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.ok) {
        const data = await res.json();
        if (data && data.result !== null && data.result !== undefined) {
          const parsed = typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
          if (parsed && typeof parsed === 'object') {
            return parsed;
          }
        }
      }
    } catch (err) {
      console.warn('[Vercel KV] Error fetching reviews from cloud:', err);
    }
  }

  // 2. Local development fallback: check .cache/kv-reviews.json
  try {
    if (fs.existsSync(LOCAL_CACHE_PATH)) {
      const content = fs.readFileSync(LOCAL_CACHE_PATH, 'utf-8');
      const parsed = JSON.parse(content);
      // Support both structured object and legacy flat array
      if (Array.isArray(parsed)) {
        return { reviews: parsed, rating: 5.0, reviewCount: 174 };
      }
      if (parsed && typeof parsed === 'object' && Array.isArray(parsed.reviews)) {
        return parsed;
      }
    }
  } catch {
    // Ignore local read errors
  }

  return null;
}

export async function setKvReviewsData(data: StoredReviewsData): Promise<boolean> {
  const url = 
    (typeof process !== 'undefined' ? process.env?.KV_REST_API_URL : '') || 
    import.meta.env.KV_REST_API_URL || '';
  const token = 
    (typeof process !== 'undefined' ? process.env?.KV_REST_API_TOKEN : '') || 
    import.meta.env.KV_REST_API_TOKEN || '';

  let cloudSuccess = false;

  // 1. If Vercel KV credentials exist, save to cloud
  if (url && token) {
    try {
      const res = await fetch(`${url}/set/google_reviews_data`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(JSON.stringify(data))
      });
      cloudSuccess = res.ok;
    } catch (err) {
      console.warn('[Vercel KV] Failed to set cloud KV:', err);
    }
  }

  // 2. Always write to local cache file for local development testing
  try {
    const dir = path.dirname(LOCAL_CACHE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(LOCAL_CACHE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.warn('[Local Cache] Failed to write local cache:', err);
    return cloudSuccess;
  }
}

// Backward compatibility helpers
export async function getKvReviews(): Promise<any[] | null> {
  const data = await getKvReviewsData();
  return data ? data.reviews : null;
}

export async function setKvReviews(reviews: any[]): Promise<boolean> {
  return setKvReviewsData({
    reviews,
    rating: 5.0,
    reviewCount: 174,
    lastUpdated: new Date().toISOString()
  });
}
