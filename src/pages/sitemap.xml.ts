import type { APIRoute } from 'astro';
import { getAllBlogPosts } from '../data/blogPosts';

export const prerender = false;

interface StaticRoute {
  url: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
  lastmod: string;
  title?: string;
}

const STATIC_ROUTES: StaticRoute[] = [
  // Core pages
  { url: 'https://aurevadental.com/', changefreq: 'weekly', priority: '1.0', lastmod: '2026-09-29', title: 'House of Dental - Premium Dental Clinic in Hennur, Bangalore' },
  { url: 'https://aurevadental.com/about', changefreq: 'monthly', priority: '0.8', lastmod: '2026-09-29', title: 'About House of Dental' },
  { url: 'https://aurevadental.com/contact', changefreq: 'monthly', priority: '0.8', lastmod: '2026-09-29', title: 'Contact House of Dental' },
  { url: 'https://aurevadental.com/feedback', changefreq: 'weekly', priority: '0.7', lastmod: '2026-09-29', title: 'Patient Reviews & Feedback' },
  { url: 'https://aurevadental.com/privacy-policy', changefreq: 'yearly', priority: '0.3', lastmod: '2026-09-29', title: 'Privacy Policy' },
  { url: 'https://aurevadental.com/terms-and-conditions', changefreq: 'yearly', priority: '0.3', lastmod: '2026-09-29', title: 'Terms and Conditions' },
  { url: 'https://aurevadental.com/blog', changefreq: 'daily', priority: '0.8', lastmod: '2026-09-29', title: 'Dental Health Blog & Clinical Guides' },

  // Local Catchment Pages
  { url: 'https://aurevadental.com/dentist-in-hennur', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Best Dentist in Hennur Bangalore' },
  { url: 'https://aurevadental.com/dental-clinic-in-hennur', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Dental Clinic in Hennur Bangalore' },
  { url: 'https://aurevadental.com/emergency-dentist-hennur', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Emergency Dentist in Hennur Bangalore' },
  { url: 'https://aurevadental.com/root-canal-treatment-hennur', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Root Canal Treatment in Hennur' },
  { url: 'https://aurevadental.com/dental-implants-hennur', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Dental Implants in Hennur' },
  { url: 'https://aurevadental.com/invisible-aligners-hennur', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Invisible Aligners in Hennur' },
  { url: 'https://aurevadental.com/teeth-whitening-hennur', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Teeth Whitening in Hennur' },
  { url: 'https://aurevadental.com/wisdom-tooth-removal-hennur', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Wisdom Tooth Removal in Hennur' },
  { url: 'https://aurevadental.com/dentist-in-horamavu', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Dentist in Horamavu Bangalore' },
  { url: 'https://aurevadental.com/dentist-near-manyata-tech-park', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Dentist Near Manyata Tech Park' },

  // Treatment Pages (Bangalore-wide intent)
  { url: 'https://aurevadental.com/treatments/clear-aligners', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Clear Aligners & Invisible Braces in Bangalore' },
  { url: 'https://aurevadental.com/treatments/cosmetic-dentistry', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Cosmetic Dentistry in Bangalore' },
  { url: 'https://aurevadental.com/treatments/dental-bridges', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Dental Bridges in Bangalore' },
  { url: 'https://aurevadental.com/treatments/dental-crowns', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Dental Crowns & Caps in Bangalore' },
  { url: 'https://aurevadental.com/treatments/dental-implants', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Dental Implants in Bangalore' },
  { url: 'https://aurevadental.com/treatments/dentures', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Custom Dentures in Bangalore' },
  { url: 'https://aurevadental.com/treatments/emergency-dentist', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Emergency Dentist in Bangalore' },
  { url: 'https://aurevadental.com/treatments/pediatric-dentistry', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Pediatric Dentistry in Bangalore' },
  { url: 'https://aurevadental.com/treatments/root-canal-treatment', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Root Canal Treatment in Bangalore' },
  { url: 'https://aurevadental.com/treatments/scaling-and-polishing', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Teeth Cleaning & Scaling in Bangalore' },
  { url: 'https://aurevadental.com/treatments/smile-makeover', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Digital Smile Makeover in Bangalore' },
  { url: 'https://aurevadental.com/treatments/teeth-whitening', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Laser Teeth Whitening in Bangalore' },
  { url: 'https://aurevadental.com/treatments/tooth-extraction', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Painless Tooth Extraction in Bangalore' },
  { url: 'https://aurevadental.com/treatments/wisdom-tooth-removal', changefreq: 'weekly', priority: '0.9', lastmod: '2026-09-29', title: 'Painless Wisdom Tooth Removal in Bangalore' }
];

export const GET: APIRoute = async () => {
  const blogPosts = getAllBlogPosts();

  const xmlEntries: string[] = [];

  // Add static and treatment routes
  for (const route of STATIC_ROUTES) {
    xmlEntries.push(`  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <image:image>
      <image:loc>https://aurevadental.com/og-image.jpg</image:loc>
      <image:title>${route.title || 'House of Dental'}</image:title>
    </image:image>
  </url>`);
  }

  // Add dynamic blog posts
  for (const post of blogPosts) {
    xmlEntries.push(`  <url>
    <loc>https://aurevadental.com/blog/${post.slug}</loc>
    <lastmod>${post.dateModified || post.datePublished}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>https://aurevadental.com/og-image.jpg</image:loc>
      <image:title>${post.title.replace(/&/g, '&amp;')}</image:title>
    </image:image>
  </url>`);
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
        http://www.google.com/schemas/sitemap-image/1.1
        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
${xmlEntries.join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
};
