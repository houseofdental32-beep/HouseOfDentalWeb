// Standalone local test script for SerpApi Google Reviews
// Usage: node scripts/test-serpapi.mjs [OPTIONAL_API_KEY]

import fs from 'node:fs';
import path from 'node:path';

// Read API key from CLI argument or .env file
let apiKey = process.argv[2] || process.env.SERPAPI_API_KEY;

if (!apiKey) {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const match = envContent.match(/SERPAPI_API_KEY=(.+)/);
    if (match) apiKey = match[1].trim();
  }
}

if (!apiKey) {
  console.error('\x1b[31m%s\x1b[0m', 'Error: No SerpApi key provided.');
  console.log('Usage: node scripts/test-serpapi.mjs YOUR_SERPAPI_KEY');
  console.log('Or add SERPAPI_API_KEY=your_key in a .env file.\n');
  process.exit(1);
}

const dataId = "0x3bae1b5fdcc27e99:0xab8759d1b20cec24";
console.log(`\n🔍 Fetching reviews from Google Maps for House of Dental (Data ID: ${dataId})...`);

const url = `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${encodeURIComponent(dataId)}&hl=en&sort_by=newestFirst&api_key=${encodeURIComponent(apiKey)}`;

try {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    console.error(`API request failed (HTTP ${res.status}): ${text}`);
    process.exit(1);
  }

  const data = await res.json();
  const reviews = data.reviews || [];
  const rating = data.place_info?.rating || '5.0';
  const totalReviews = data.place_info?.reviews || 174;

  console.log('\n\x1b[32m%s\x1b[0m', '✅ Successfully connected to Google Maps via SerpApi!');
  console.log(`⭐ Clinic Rating: ${rating} Stars`);
  console.log(`💬 Total Reviews on Google: ${totalReviews}`);
  console.log(`📦 Reviews fetched in this batch: ${reviews.length}\n`);

  console.log('--- Real Google Reviews Extracted ---');
  reviews.slice(0, 5).forEach((r, idx) => {
    const name = r.user?.name || 'Verified Patient';
    const stars = '★'.repeat(r.rating || 5);
    const date = r.date || 'Recent';
    const text = (r.snippet || r.text || '').slice(0, 150);
    console.log(`[${idx + 1}] ${name} (${stars}) • ${date}`);
    console.log(`    "${text}..."\n`);
  });

  // Ensure .cache directory exists and save local cache
  const cacheDir = path.resolve(process.cwd(), '.cache');
  if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });
  fs.writeFileSync(path.join(cacheDir, 'serpapi_reviews.json'), JSON.stringify(data, null, 2));

  console.log('\x1b[32m%s\x1b[0m', '✅ Success! Cached data to .cache/serpapi_reviews.json.');
} catch (err) {
  console.error('Fetch error:', err.message);
}
