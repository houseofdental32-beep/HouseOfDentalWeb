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

export interface KvSaveResult {
  success: boolean;
  target: 'cloud' | 'local_only' | 'failed';
  error?: string;
}

function getKvCredentials() {
  const getEnv = (key: string): string => {
    if (typeof process !== 'undefined' && process.env && process.env[key]) {
      return String(process.env[key]);
    }
    const meta = import.meta as any;
    if (meta?.env && meta.env[key]) {
      return String(meta.env[key]);
    }
    return '';
  };

  const rawUrl = 
    getEnv('KV_REST_API_URL') || 
    getEnv('UPSTASH_REDIS_REST_URL') || 
    getEnv('KV_URL') || 
    '';

  const rawToken = 
    getEnv('KV_REST_API_TOKEN') || 
    getEnv('UPSTASH_REDIS_REST_TOKEN') || 
    '';

  let cleanUrl = rawUrl.trim().replace(/\/+$/, '');
  if (cleanUrl.startsWith('redis://') || cleanUrl.startsWith('rediss://')) {
    cleanUrl = cleanUrl.replace(/^rediss?:\/\//, 'https://');
  }

  return {
    url: cleanUrl,
    token: rawToken.trim()
  };
}

function trySaveLocal(data: StoredReviewsData): boolean {
  try {
    const dir = path.dirname(LOCAL_CACHE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(LOCAL_CACHE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch {
    return false;
  }
}

function tryReadLocal(): StoredReviewsData | null {
  try {
    if (fs.existsSync(LOCAL_CACHE_PATH)) {
      const content = fs.readFileSync(LOCAL_CACHE_PATH, 'utf-8');
      const parsed = JSON.parse(content);
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

export async function getKvReviewsData(): Promise<StoredReviewsData | null> {
  const { url, token } = getKvCredentials();

  // 1. If Vercel KV / Upstash credentials exist, fetch from cloud
  if (url && token) {
    try {
      // Primary: Upstash REST command format POST ["GET", key]
      const postRes = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(["GET", "google_reviews_data"])
      });

      if (postRes.ok) {
        const postJson = await postRes.json();
        if (postJson && postJson.result !== null && postJson.result !== undefined) {
          const parsed = typeof postJson.result === 'string' ? JSON.parse(postJson.result) : postJson.result;
          if (parsed && typeof parsed === 'object') {
            return parsed;
          }
        }
      }

      // Secondary fallback: GET /get/google_reviews_data
      const getRes = await fetch(`${url}/get/google_reviews_data`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (getRes.ok) {
        const getJson = await getRes.json();
        if (getJson && getJson.result !== null && getJson.result !== undefined) {
          const parsed = typeof getJson.result === 'string' ? JSON.parse(getJson.result) : getJson.result;
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
  return tryReadLocal();
}

export async function setKvReviewsData(data: StoredReviewsData): Promise<KvSaveResult> {
  const { url, token } = getKvCredentials();
  const serialized = JSON.stringify(data);

  // 1. If Vercel KV / Upstash credentials exist, execute Upstash Redis SET command
  if (url && token) {
    try {
      // Upstash REST API command format: POST to baseUrl with ["SET", key, value]
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(["SET", "google_reviews_data", serialized])
      });

      const resJson = await res.json().catch(() => null);

      if (res.ok && resJson && (resJson.result === 'OK' || !resJson.error)) {
        trySaveLocal(data);
        return { success: true, target: 'cloud' };
      }

      const errMsg = resJson?.error || `HTTP ${res.status}: Failed to set key in Upstash Redis`;
      console.error('[Vercel KV / Upstash SET Error]:', errMsg);
      trySaveLocal(data);
      return { success: false, target: 'failed', error: errMsg };
    } catch (err: any) {
      console.error('[Vercel KV] Upstash SET exception:', err);
      trySaveLocal(data);
      return { success: false, target: 'failed', error: err.message };
    }
  }

  // 2. Dev mode: Save to local cache file only
  const localSaved = trySaveLocal(data);
  return { 
    success: localSaved, 
    target: 'local_only',
    error: 'No UPSTASH_REDIS_REST_URL/TOKEN or KV_REST_API_URL/TOKEN found in environment' 
  };
}

// Backward compatibility helpers
export async function getKvReviews(): Promise<any[] | null> {
  const data = await getKvReviewsData();
  return data ? data.reviews : null;
}

export async function setKvReviews(reviews: any[]): Promise<boolean> {
  const result = await setKvReviewsData({
    reviews,
    rating: 5.0,
    reviewCount: 174,
    lastUpdated: new Date().toISOString()
  });
  return result.success;
}
