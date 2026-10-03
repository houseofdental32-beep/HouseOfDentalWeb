/**
 * SEO Structured Data (JSON-LD) Generator for House of Dental
 * Generates Google Rich Results-compliant schemas for Local SEO, MedicalBusiness/Dentist,
 * FAQPage rich snippets, and BreadcrumbList.
 */

import { DENTAL_OFFER_CATALOG } from '../data/dentalServiceCatalog.ts';

export interface FaqItem {
  question: string;
  answer: string;
}

export const LOCAL_FAQS: FaqItem[] = [
  {
    question: "Where is House of Dental located?",
    answer: "House of Dental is conveniently located at 1st Floor, BMN complex, New Airport Rd, Gummanahalli, Bagaluru, Bengaluru, Karnataka 562149. We serve patients across Hennur, Horamavu, Babusapalya, Kalyan Nagar, HRBR Layout, Kammanahalli, Kothanur, and North Bengaluru with dedicated patient parking."
  },
  {
    question: "Can I pay with credit card or EMI at House of Dental?",
    answer: "We accept all major Credit Cards, Debit Cards, UPI, and Net Banking. Patients wishing to split payments into monthly installments can seamlessly convert credit card transactions into flexible monthly EMIs directly via their bank's post-payment portal or net banking app."
  },
  {
    question: "Who is the lead dentist at House of Dental Hennur?",
    answer: "Dr. Shweta Singh, BDS (The Oxford Dental College, Bangalore; registered with the Karnataka State Dental Council) is the Lead Aesthetic Architect, Clinical Director, and Founder of House of Dental. Our clinical team also includes Dr. Agniss Mishra, BDS (The Oxford Dental College, Bangalore), Dental Surgeon providing gentle preventive and restorative dental care."
  },
  {
    question: "Does House of Dental accept walk-ins or emergency appointments on Sundays?",
    answer: "Yes, House of Dental is open on Sundays from 9:30 AM to 9:00 PM (Monday: 4:00 PM – 9:00 PM; Tuesday – Sunday: 9:30 AM – 9:00 PM). We welcome walk-in patients and prioritize same-day emergency appointments for acute toothaches, chipped or broken teeth, dental trauma, and severe sensitivity with low-radiation digital RVG diagnostics."
  },
  {
    question: "What dental treatments and specialities do you provide?",
    answer: "We offer comprehensive holistic and specialized dental care, including painless Root Canal Treatments (RCT), Clear Aligners and Invisible Braces, Dental Implants, Digital Smile Design, Ceramic & Zirconia Crowns, Advanced Teeth Whitening, Kids Dentistry, and preventative Scaling & Polishing in a calm, Japandi-inspired studio environment."
  },
  {
    question: "How much does a Root Canal Treatment (RCT) or Consultation cost?",
    answer: "Our new patient consultation (including digital RVG low-radiation X-ray) is Rs. 600. Single-sitting and specialized Root Canal Treatments start from Rs. 4,000 to Rs. 10,000 depending on tooth location (anterior, premolar, or molar). Transparent pricing is shared upfront before every procedure with no surprise fees."
  },
  {
    question: "Do you offer Clear Aligners and Smile Makeovers?",
    answer: "Yes, we specialize in Digital Smile Design, customized porcelain/ceramic veneers, and Clear Aligners (ranging from Rs. 80,000 to Rs. 2,50,000). We also offer curated Bridal & Groom smile radiance packages for upcoming weddings and events."
  },
  {
    question: "How can I book an appointment at House of Dental?",
    answer: "You can book directly via WhatsApp at 09113563040, call our clinic reception desk at 09113563040, or tap the 'Book Appointment' button on our website for prompt slot confirmation."
  }
];

export function generateDentalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    "name": "House of Dental",
    "image": "https://aurevadental.com/og-image.jpg",
    "@id": "https://aurevadental.com/#dentist",
    "url": "https://aurevadental.com/",
    "telephone": "09113563040",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, BMN complex, New Airport Rd, Gummanahalli, Bagaluru",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "562149",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0381741,
      "longitude": 77.6416031
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "16:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:30",
        "closes": "21:00"
      }
    ],
    "medicalSpecialty": [
      "Dentistry",
      "CosmeticDentistry",
      "Orthodontics",
      "Periodontics",
      "Endodontics",
      "PediatricDentistry",
      "Prosthodontics",
      "OralSurgery"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "House of Dental Comprehensive Services & Treatments",
      "itemListElement": DENTAL_OFFER_CATALOG
    }
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://aurevadental.com/#website",
    "url": "https://aurevadental.com/",
    "name": "House of Dental",
    "alternateName": [
      "House of Dental",
      "House of Dental Studio",
      "House of Dental Hennur"
    ],
    "description": "Premium Dental Clinic & Smile Studio in Hennur, Bangalore",
    "inLanguage": "en-IN",
    "publisher": {
      "@id": "https://aurevadental.com/#dentist"
    }
  };
}

export function generateDentistSchema(config: any = {}, includeFullCatalog: boolean = false) {
  const socialLinks = config?.social_media?.map((s: any) => s.url) || [];
  const allProfiles = [
    "https://maps.app.goo.gl/dhU4UySs9WFkHAzYA",
    "https://www.google.com/maps?cid=10332859477033504351",
    "https://www.instagram.com/houseofdental/?hl=en",
    "",
    "https://www.practo.com/bangalore/clinic/aureva-dental-clinic-hennur",
    ...socialLinks
  ].filter((v, i, a) => typeof v === 'string' && v.length > 0 && a.indexOf(v) === i);

  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "DentalClinic", "LocalBusiness"],
    "@id": "https://aurevadental.com/#dentist",
    "name": "House of Dental",
    "legalName": "House of Dental",
    "alternateName": [
      "House of Dental",
      "House of Dental Hennur",
      "House of Dental Horamavu",
      "House of Dental Bengaluru"
    ],
    "url": "https://aurevadental.com/",
    "logo": "https://aurevadental.com/logo.png",
    "image": [
      "https://aurevadental.com/og-image.jpg",
      "https://aurevadental.com/logo.png"
    ],
    "description": "House of Dental is a modern dental clinic & smile studio at BMN complex, New Airport Rd, Gummanahalli, Bagaluru, Bengaluru. Painless root canal, dental implants, aligners & cosmetic dentistry. Call 09113563040.",
    "telephone": "09113563040",
    "email": "houseofdental32@gmail.com",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": [
      "Cash",
      "Credit Card",
      "Debit Card",
      "UPI",
      "Net Banking"
    ],
    "paymentMethod": [
      "https://schema.org/CreditCard",
      "https://schema.org/DebitCard",
      "https://schema.org/PaymentCard",
      "https://schema.org/BankTransfer"
    ],
    "isAccessibleForFree": false,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Floor, No. 11/4, SLV Nilaya, Horamavu Agara Road, Near Nayara Petrol Bunk, Hennur Bande",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "562149",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0381741,
      "longitude": 77.6416031
    },
    "hasMap": "https://maps.app.goo.gl/dhU4UySs9WFkHAzYA",
    "openingHours": [
      "Mo 16:00-21:00",
      "Tu-Su 09:30-21:00"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday"],
        "opens": "16:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:30",
        "closes": "21:00"
      }
    ],
    "knowsAbout": [
      "Rotary Endodontics",
      "Root Canal Treatment",
      "Dental Implants",
      "Clear Aligners",
      "Invisible Braces",
      "Pediatric Dentistry",
      "Laser Gum Therapy",
      "Aesthetic Veneers",
      "Digital Smile Design",
      "Teeth Whitening",
      "Oral Surgery",
      "Wisdom Tooth Removal",
      "Ceramic and Zirconia Crowns",
      "Preventive Dentistry"
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Hennur, Bengaluru",
        "postalCode": "562149"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Horamavu, Bengaluru",
        "postalCode": "562149"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Hennur Bande, Bengaluru",
        "postalCode": "562149"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kalyan Nagar, Bengaluru"
      },
      {
        "@type": "AdministrativeArea",
        "name": "HRBR Layout, Bengaluru"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kothanur, Bengaluru"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Babusapalya, Bengaluru"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kammanahalli, Bengaluru"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Banaswadi, Bengaluru"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Ramamurthy Nagar, Bengaluru"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Chelekere, Bengaluru"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Geddalahalli, Bengaluru"
      },
      {
        "@type": "AdministrativeArea",
        "name": "North Bengaluru"
      },
      {
        "@type": "City",
        "name": "Bengaluru"
      },
      {
        "@type": "GeoShape",
        "postalCode": "562149",
        "addressCountry": "IN"
      }
    ],
    "medicalSpecialty": [
      "Dentistry",
      "CosmeticDentistry",
      "Orthodontics",
      "Endodontics",
      "PediatricDentistry",
      "Prosthodontics",
      "OralSurgery"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Root Canal Treatment",
        "description": "Micro-precision cleaning and long-term tooth preservation using multi-sitting specialized protocols and digital imaging."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Clear Aligners and Invisible Braces",
        "description": "Discreet orthodontic smile alignment using advanced clear aligner technology."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dental Implants",
        "description": "Permanent tooth replacement with biocompatible titanium implants and lifelike crowns."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Digital Smile Design and Veneers",
        "description": "Aesthetic smile makeovers tailored to facial harmony using digital precision."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Teeth Whitening and Polishing",
        "description": "Advanced gentle in-office laser whitening and stain removal for radiant smiles."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Pediatric / Kids Dentistry",
        "description": "Gentle cavity prevention, fluoride applications, and pit sealants for children in a calm clinic."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Wisdom Tooth Removal & Oral Surgery",
        "description": "Painless extraction of impacted wisdom teeth using digital low-radiation RVG imaging and gentle surgical technique."
      }
    ],
    ...(includeFullCatalog ? {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "House of Dental Comprehensive Services & Treatments",
        "itemListElement": DENTAL_OFFER_CATALOG
      }
    } : {}),
    "employee": [
      {
        "@type": "Dentist",
        "name": "Dr. Shweta Singh, BDS",
        "jobTitle": "Lead Aesthetic Architect & Founder",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "The Oxford Dental College, Bangalore"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "Bachelor of Dental Surgery (BDS)"
          }
        ],
        "medicalSpecialty": [
          "CosmeticDentistry",
          "Orthodontics"
        ],
        "description": "Specialist in cosmetic smile design, clear aligners, and aesthetic restorative dentistry. Registered with Karnataka State Dental Council.",
        "worksFor": {
          "@id": "https://aurevadental.com/#dentist"
        }
      },
      {
        "@type": "Dentist",
        "name": "Dr. Agniss Mishra, BDS",
        "jobTitle": "Dental Surgeon",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "The Oxford Dental College, Bangalore"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "Bachelor of Dental Surgery (BDS)"
          }
        ],
        "medicalSpecialty": [
          "Dentistry"
        ],
        "description": "Dental Surgeon providing gentle preventive and restorative dental care at House of Dental.",
        "worksFor": {
          "@id": "https://aurevadental.com/#dentist"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": config.site_meta?.rating_value?.toString() || "5.0",
      "reviewCount": config.site_meta?.review_count?.toString() || "29",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": ((config.google_reviews as any[]) || []).slice(0, 5).map((r: any) => ({
      "@type": "Review",
      "itemReviewed": {
        "@type": "Dentist",
        "@id": "https://aurevadental.com/#dentist",
        "name": "House of Dental"
      },
      "author": {
        "@type": "Person",
        "name": r.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": (r.rating || 5).toString(),
        "bestRating": "5"
      },
      "reviewBody": r.text
    })),
    "sameAs": allProfiles
  };
}

export function generateFaqSchema(faqs: FaqItem[] = LOCAL_FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateTreatmentServiceSchema(params: {
  name: string;
  description: string;
  url: string;
  medicalSpecialty?: string;
  isSurgical?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": params.name,
    "description": params.description,
    "url": params.url,
    "procedureType": params.isSurgical
      ? "https://schema.org/SurgicalProcedure"
      : "https://schema.org/NoninvasiveProcedure",
    "provider": {
      "@type": "DentalClinic",
      "@id": "https://aurevadental.com/#dentist",
      "name": "House of Dental",
      "url": "https://aurevadental.com/",
      "telephone": "09113563040",
      "priceRange": "₹₹",
      "image": "https://aurevadental.com/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, BMN complex, New Airport Rd, Gummanahalli, Bagaluru",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "562149",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0381741,
        "longitude": 77.6416031
      }
    }
  };
}

export function generateBlogPostSchema(params: {
  headline: string;
  description: string;
  url: string;
  authorName: string;
  authorJobTitle?: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": params.headline,
    "description": params.description,
    "image": params.image || "https://aurevadental.com/og-image.jpg",
    "author": {
      "@type": "Person",
      "name": params.authorName,
      "jobTitle": params.authorJobTitle || "Clinical Director & Dental Surgeon"
    },
    "publisher": {
      "@type": "DentalClinic",
      "@id": "https://aurevadental.com/#dentist",
      "name": "House of Dental",
      "url": "https://aurevadental.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aurevadental.com/logo.png"
      }
    },
    "datePublished": params.datePublished,
    "dateModified": params.dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": params.url
    }
  };
}



