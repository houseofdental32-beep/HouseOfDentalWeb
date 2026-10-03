# Project Specification & Rebuild Guide: House of Dental Website

This document provides a comprehensive blueprint and step-by-step instructions for AI systems or developers to reconstruct, maintain, or update the **House of Dental** web application from scratch.

---

## 1. Project Overview & Business Profile

- **Brand Name:** House of Dental
- **Tagline:** Calm Mind. Healthy Smile. / Where Your Smile Matters
- **Core Specialization:** Premium dental clinic and smile studio specializing in single-sitting root canal treatments (RCT), dental implants, clear aligners, laser teeth whitening, pediatric dentistry, cosmetic dentistry (veneers, smile design), and emergency dental care.
- **Canonical Address:** 1st Floor, BMN complex, New Airport Rd, Gummanahalli, Bagaluru, Bengaluru, Karnataka 562149, India
- **Phone / Call Helpline:** `09113563040` (`tel:09113563040`)
- **WhatsApp Desk:** `919113563040` (`https://wa.me/919113563040`)
- **Instagram Profile:** [https://www.instagram.com/houseofdental/?hl=en](https://www.instagram.com/houseofdental/?hl=en)
- **Primary Email:** `houseofdental32@gmail.com`

---

## 2. Technology Stack & Framework Constraints

1. **Framework:** Astro 6.x (`"type": "module"`) with `@astrojs/react` integration.
2. **UI Logic:** React 19 (`react`, `react-dom`) for interactive client islands (`BookingModal`, `CustomCursor`).
3. **Styling & Design System:** Tailwind CSS v4 (`@tailwindcss/vite`, `tailwindcss`) with a Japanese-Nordic (Japandi) warm aesthetic palette (`japandi-cream`, `japandi-sand`, `japandi-clay`, `japandi-moss`, `japandi-earth`, `japandi-charcoal`).
4. **Animations:** Framer Motion 12.x for client components + custom CSS keyframe animations.
5. **3D Background Canvas:** Embedded Three.js r128 WebGL engine loaded via a transparent background iframe.
6. **Deployment & Adapter:** `@astrojs/vercel` for Vercel edge deployment.

---

## 3. Step-by-Step Rebuild Instructions for LLMs

If tasked with regenerating this codebase from scratch, execute the following steps:

### Step 1: Initialize Project Directory & Package Manifest
Create `package.json` with the following configuration:
```json
{
  "name": "house-of-dental-web",
  "type": "module",
  "version": "0.0.1",
  "engines": {
    "node": ">=22.12.0"
  },
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/react": "^5.0.7",
    "@astrojs/vercel": "^11.0.7",
    "@supabase/supabase-js": "^2.112.3",
    "@tailwindcss/vite": "^4.3.1",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "astro": "^6.4.7",
    "framer-motion": "^12.40.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "tailwindcss": "^4.3.1"
  }
}
```
Run `npm install` to resolve dependencies.

---

### Step 2: Resource Assets & Public Mapping

All static resources pulled into pages are served directly from the `public/` directory:

| Resource Path | Type / Description | Usage in Web Application |
| :--- | :--- | :--- |
| `/House_of_Dental_Logo_light.png` | PNG (Transparent) | Primary header, footer & preloader logo for **Light Mode** |
| `/House_of_Dental_Logo.png` | PNG (Transparent) | Primary header, footer & preloader logo for **Dark Mode** |
| `/chisel-cursor.png` | PNG (32x32) | Custom chisel dental cursor (1x resolution) |
| `/chisel-cursor@2x.png` | PNG (64x64) | Custom chisel dental cursor (2x Retina resolution) |
| `/house-of-dental-3d-background.html` | HTML5 / WebGL | Standalone 3D Three.js canvas iframe (contains SDF surface net 3D tooth mesh, procedural GLSL enamel shaders, soft floor shadow, and mouse pointer message relay) |
| `/favicon.svg` | SVG | Browser tab vector icon |
| `/favicon.ico` | ICO | Browser legacy favicon |
| `/site.webmanifest` | JSON | PWA & mobile web application manifest |
| `/sitemap.xml` | XML | Search engine sitemap index |
| `/robots.txt` | TXT | Search engine crawler rules |
| `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js` | CDN Script | Loaded inside 3D background iframe for WebGL rendering |
| `https://fonts.googleapis.com/css2?family=Playfair+Display&family=Plus+Jakarta+Sans` | CDN Fonts | Loaded asynchronously in `Layout.astro` for luxury Japandi typography |

---

## 4. Architecture & Component Mapping

```
HouseOfDentalWeb/
├── public/
│   ├── House_of_Dental_Logo_light.png
│   ├── House_of_Dental_Logo.png
│   ├── chisel-cursor.png
│   ├── chisel-cursor@2x.png
│   ├── house-of-dental-3d-background.html
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── site.webmanifest
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Header.astro            # Sticky header with responsive navigation & theme-adaptive logo
│   │   ├── Footer.astro            # Complete NAP footer, treatment links, and Instagram profile
│   │   ├── BackgroundAnimation.astro # Fixed background container embedding 3D iframe & pointer listener
│   │   ├── Preloader.astro         # Splash preloader with animated logo
│   │   ├── BookingModal.jsx        # Interactive React modal with WhatsApp appointment booking generator
│   │   ├── MobileBottomBar.astro   # Mobile bottom sticky bar with Call, WhatsApp, and Booking CTA
│   │   ├── Hero.astro              # Main landing section with CTA buttons
│   │   ├── HolisticServices.astro  # General dentistry & treatment price list cards
│   │   ├── SpecializedExpertise.astro # Implants, aligners, crowns & smile makeover section
│   │   ├── LocationsAndReviews.astro # Google Maps location info & 5-star patient reviews
│   │   ├── ClinicalTrust.astro     # Hospital-grade sterilization and hygiene assurances
│   │   └── LocalFAQ.astro          # Interactive accordion FAQ with JSON-LD schema
│   ├── data/
│   │   ├── config.json             # Central configuration file storing site metadata, NAP, & services
│   │   ├── dentalServiceCatalog.ts # Catalog of treatments, descriptions, and FAQs
│   │   └── blogPosts.ts            # Oral health journal articles
│   ├── layouts/
│   │   └── Layout.astro            # Main HTML document wrapper, SEO meta tags, fonts, & schema injection
│   ├── pages/
│   │   ├── index.astro             # Main homepage
│   │   ├── 404.astro               # Custom 404 error page with quick treatment shortcuts
│   │   ├── about.astro             # Clinic story and philosophy page
│   │   ├── contact.astro           # Contact page & map directions
│   │   ├── privacy-policy.astro    # Privacy compliance
│   │   ├── terms-and-conditions.astro # Terms of service
│   │   └── treatments/             # Individual treatment pages (clear-aligners, dental-implants, rct, etc.)
│   └── utils/
│       ├── getConfig.ts            # Data loader for config.json
│       └── seoSchemas.ts           # Schema.org JSON-LD generators (DentalClinic, FAQPage, MedicalProcedure)
└── spec.md                         # Project specification document
```

---

## 5. Central Data Configuration (`src/data/config.json`)

All clinic NAP (Name, Address, Phone) details, social links, local areas served, and pricing tiers MUST be configured centrally in `src/data/config.json`:

```json
{
  "site_meta": {
    "title": "Dental Clinic in Bagaluru Bengaluru | House of Dental",
    "description": "House of Dental is a modern dental clinic in Bagaluru, Bengaluru. Gentle root canals, dental implants, clear aligners & teeth whitening. Call 09113563040.",
    "phone": "09113563040",
    "address": "1st Floor, BMN complex, New Airport Rd, Gummanahalli, Bagaluru, Bengaluru, Karnataka 562149",
    "whatsapp_number": "919113563040",
    "whatsapp_default_message": "Hello, I would like to book an appointment at House of Dental.",
    "local_areas_served": [
      "Bagaluru",
      "Gummanahalli",
      "New Airport Rd",
      "Bettahalsoor",
      "Yelahanka",
      "Chikkajala",
      "Devanahalli",
      "North Bengaluru"
    ]
  },
  "social_media": [
    {
      "platform": "Instagram",
      "url": "https://www.instagram.com/houseofdental/?hl=en",
      "icon": "instagram"
    }
  ]
}
```

---

## 6. How to Update or Maintain Project Details

- **To update clinic phone or address:** Modify `src/data/config.json` under `site_meta` and `locations_section`. Then update `src/utils/seoSchemas.ts` to keep Google Structured Data aligned.
- **To modify 3D background animation:** Edit `public/house-of-dental-3d-background.html`. Lighting, exposure, and shader texture values are exposed at the top of the script section.
- **To update logo assets:** Place light-background logo at `public/House_of_Dental_Logo_light.png` and dark-background logo at `public/House_of_Dental_Logo.png`. Components automatically swap logos based on system and user theme toggle preferences.
