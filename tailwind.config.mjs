/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'japandi-cream': 'var(--color-bg-primary)',
        'japandi-sand': 'var(--color-bg-secondary)',
        'japandi-clay': 'var(--color-border)',
        'japandi-charcoal': 'var(--color-text-primary)',
        'japandi-moss': 'var(--color-accent-moss)',
        'japandi-earth': 'var(--color-accent-earth)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'slow-fade': 'fadeIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
