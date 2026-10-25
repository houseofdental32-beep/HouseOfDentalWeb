// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://aurevadental.com',
  trailingSlash: 'never',
  output: 'server',
  adapter: vercel(),
  redirects: {
    '/dentist-in-hennur': '/dentist-in-bagalur',
    '/dental-clinic-in-hennur': '/dental-clinic-in-bagalur',
    '/dental-implants-hennur': '/dental-implants-bagalur',
    '/emergency-dentist-hennur': '/emergency-dentist-bagalur',
    '/invisible-aligners-hennur': '/invisible-aligners-bagalur',
    '/root-canal-treatment-hennur': '/root-canal-treatment-bagalur',
    '/teeth-whitening-hennur': '/teeth-whitening-bagalur',
    '/wisdom-tooth-removal-hennur': '/wisdom-tooth-removal-bagalur',
    '/dentist-near-manyata-tech-park': '/dentist-bagalur-colony',
    '/dentist-near-bagalur-colony': '/dentist-bagalur-colony',
    '/dentist-in-horamavu': '/dentist-in-gummanahalli',
    '/blog/root-canal-treatment-cost-hennur': '/blog/root-canal-treatment-cost-bagalur',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});