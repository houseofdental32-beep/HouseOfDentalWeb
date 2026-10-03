/**
 * 190-Service Dental Catalog for House of Dental
 * Structured under 10 Google Business Profile categories for Schema.org OfferCatalog JSON-LD.
 */

export interface ServiceOffer {
  "@type": "Offer";
  itemOffered: {
    "@type": "Service";
    name: string;
    description: string;
  };
}

export interface ServiceCategoryCatalog {
  "@type": "OfferCatalog";
  name: string;
  itemListElement: ServiceOffer[];
}

export const DENTAL_OFFER_CATALOG: ServiceCategoryCatalog[] = [
  // 1. Dental clinic (Preventive & General Dentistry) - 19 Services
  {
    "@type": "OfferCatalog",
    name: "Dental clinic (Preventive & General Dentistry)",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Comprehensive Oral Examination",
          description: "Thorough clinical inspection of teeth, periodontium, occlusion, and oral mucosa."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Routine Dental Check-up",
          description: "Periodic dental review and maintenance evaluation to detect early oral health issues."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital RVG Low-Radiation X-rays",
          description: "High-resolution digital intraoral radiography with 80% reduced radiation exposure."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Intraoral Camera Digital Screening",
          description: "High-definition photographic imaging for patient education and visual diagnosis."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ultrasonic Scaling & Polishing",
          description: "Complete removal of plaque, calculus, and surface extrinsic stains using gentle ultrasonic tips."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep Dental Prophylaxis",
          description: "Professional mechanical tooth cleaning, stain removal, and polishing for clean oral hygiene."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Preventive Fluoride Varnish Application",
          description: "Topical application of concentrated fluoride to strengthen enamel and arrest demineralization."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enamel Remineralization Therapy",
          description: "Specialized calcium and phosphate mineral paste treatments to reverse early micro-cavities."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dental Pit and Fissure Sealants",
          description: "Thin protective resin coatings bonded into anatomical grooves of molars to stop food impaction."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Oral Cancer Screening & Soft Tissue Exam",
          description: "Systematic examination of tongue, palate, and mucosal tissues for early lesion detection."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bad Breath (Halitosis) Treatment",
          description: "Diagnostic investigation and targeted bacterial reduction for chronic halitosis."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Salivary Diagnostic Assessment",
          description: "Hydration, pH, and flow rate analysis to evaluate natural cavity defense mechanisms."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personalized Oral Hygiene Instructions",
          description: "Tailored guidance on brushing technique, interdental flossing, and therapeutic rinses."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dietary & Nutritional Dental Counseling",
          description: "Analysis of dietary sugars and acid consumption to prevent recurrent decay."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diagnostic Study Models & Alginate Impressions",
          description: "Accurate plaster study casts to analyze bite relationships and dental arches."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Teeth Grinding (Bruxism) Screening",
          description: "Clinical detection of occlusal attrition, cracked enamel, and masticatory muscle stress."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Night Guards & Occlusal Splints",
          description: "Precision-molded protective acrylic mouth appliances to prevent nighttime tooth wear."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Athletic Sports Mouthguards",
          description: "Custom-fit laminated oral protectors designed to safeguard teeth during sporting activities."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Second Opinion Diagnostic Consultation",
          description: "Objective clinical review of past treatment recommendations and radiographs."
        }
      }
    ]
  },

  // 2. Cosmetic dentist - 19 Services
  {
    "@type": "OfferCatalog",
    name: "Cosmetic dentist",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "In-Office Laser Teeth Whitening",
          description: "High-intensity light-activated dental bleaching for immediate smile shade enhancement."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Take-Home Whitening Trays",
          description: "Precision-fit vacuum trays and prescription carbamide peroxide bleaching gels."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Express Bride & Groom Smile Radiance",
          description: "Rapid dual-phase ultrasonic polishing and gentle whitening for wedding preparation."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Smile Design (DSD)",
          description: "3D facial aesthetic analysis and computerized simulation of ideal smile proportions."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Porcelain & Ceramic Veneers",
          description: "Ultra-thin hand-layered ceramic facings bonded to front teeth to correct shape and shade."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Composite Resin Dental Veneers",
          description: "Minimally invasive direct resin veneers sculpted chair-side to mask discoloration."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aesthetic Composite Bonding",
          description: "Seamless tooth-colored micro-hybrid resin repairs for chipped, cracked, or uneven enamel."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diastema (Gap) Closure",
          description: "Conservative aesthetic closure of front tooth spacing without damaging natural tooth structure."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enamel Contouring & Odontoplasty",
          description: "Micro-shaping and smoothing of minor incisal irregularities, chips, and overlapping edges."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gingival Laser Depigmentation",
          description: "Painless cosmetic laser vaporization of dark melanin pigmentation on gum tissues."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gum Contouring & Aesthetic Gingivectomy",
          description: "Gentle reshaping of asymmetrical or excessive gum margins for balanced gingival architecture."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gummy Smile Correction",
          description: "Multidisciplinary aesthetic correction of excessive gingival display when smiling."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Zirconia Aesthetic Crowns",
          description: "Metal-free monolithic zirconia crowns with natural translucency for front teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-max High-Strength Lithium Disilicate Crowns",
          description: "Premium all-ceramic restorations delivering superior life-like optical aesthetics."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Mouth Aesthetic Rehabilitation",
          description: "Comprehensive restoration combining veneers, crowns, and occlusal re-alignment."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tooth Jewel & Diamond Placement",
          description: "Safe, non-invasive bonding of aesthetic crystals and dental gems to enamel."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Internal Bleaching for Non-Vital Teeth",
          description: "Internal intracoronal oxidation to lighten teeth discolored following trauma or endodontics."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diagnostic Wax-Up Smile Mock-up",
          description: "Realistic aesthetic wax preview allowing patients to test and approve simulated smile shapes."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aesthetic Black Triangle Closure",
          description: "Bioclear composite method to restore receded interdental papilla and eliminate dark spaces."
        }
      }
    ]
  },

  // 3. Dentist (Restorative Care) - 19 Services
  {
    "@type": "OfferCatalog",
    name: "Dentist (Restorative Care)",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tooth-Colored Composite Fillings",
          description: "Direct aesthetic resin restorations placed seamlessly to restore decayed tooth structure."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Posterior Composite Restorations",
          description: "High-durability micro-hybrid composite fillings engineered for molar chewing forces."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ceramic Inlays",
          description: "Precision laboratory-milled indirect ceramic restorations replacing missing internal tooth cusps."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ceramic Onlays",
          description: "Durable partial crowns preserving healthy remaining natural tooth walls while covering damaged cusps."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Indirect Composite Overlays",
          description: "Conservative bonded overlays designed to reinforce structurally compromised teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Temporary Protective Fillings",
          description: "Sedative intermediate zinc oxide eugenol restorations used during active treatments."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Amalgam Filling Removal & Safe Replacement",
          description: "Controlled replacement of aged silver mercury amalgam fillings with biomimetic composites."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Core Build-up Restorations",
          description: "High-strength composite core reconstructions to support future crown placement."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fiber-Reinforced Resin Posts",
          description: "Non-metallic biocompatible quartz fiber posts anchored inside root canals for core retention."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cast Metal Post and Core",
          description: "Laboratory-fabricated cast alloy posts for extensively broken-down premolars and canines."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tooth Sensitivity Treatment & Desensitization",
          description: "Application of bioactive varnishes and laser therapy to seal exposed dentinal tubules."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cervical Abrasion & Abfraction Restoration",
          description: "Micro-mechanical restoration of non-carious gumline notches caused by tooth wear."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cracked Tooth Assessment & Stabilization",
          description: "Specialized transillumination and diagnostic bite tests to protect cracked teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Direct Pulp Capping",
          description: "Therapeutic calcium silicate application to protect exposed vital pulp under deep cavities."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Indirect Pulp Capping",
          description: "Biocompatible mineral barrier placement preserving pulpal health beneath deep active decay."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Glass Ionomer Restorative Fillings",
          description: "Fluoride-releasing biocompatible cements for root caries and subgingival margins."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Margin Elevation for Subgingival Cavities",
          description: "Deep margin acquisition technique enabling predictable bonded restorations."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Occlusal Wear Reconstruction",
          description: "Restoring lost vertical chewing dimension resulting from chronic acid erosion or grinding."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Post-Core Re-treatment & Repair",
          description: "Conservative removal and re-cementation of loosened restorative core foundations."
        }
      }
    ]
  },

  // 4. Orthodontist - 19 Services
  {
    "@type": "OfferCatalog",
    name: "Orthodontist",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Clear Aligners Consultation & 3D Scanning",
          description: "Digital optical intraoral impression and orthodontic treatment simulation."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Comprehensive Clear Aligner Treatment",
          description: "Series of custom transparent removable polyurethane aligners to correct malocclusion."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mild Crowding Single-Arch Clear Aligners",
          description: "Short-term alignment trays targeting anterior cosmetic irregularities."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Traditional Metal Braces",
          description: "Time-tested stainless steel orthodontic brackets and nickel-titanium archwires for precise tooth control."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ceramic Tooth-Colored Aesthetic Braces",
          description: "Discreet clear monocrystalline ceramic brackets blending with natural tooth enamel."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Self-Ligating Friction-Free Braces",
          description: "Advanced low-friction brackets facilitating faster hygiene and gentler movement forces."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lingual (Incognito) Hidden Braces",
          description: "Custom brackets bonded to the lingual inner surfaces of teeth for invisible correction."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interceptive Phase 1 Orthodontics",
          description: "Early developmental jaw guidance and bite modification for growing children aged 7 to 11."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Maxillary Palatal Expander",
          description: "Orthodontic appliance gently widening narrow upper dental arches to resolve posterior crossbites."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Space Maintainers for Early Tooth Loss",
          description: "Fixed passive stainless steel appliances preserving arch length for unerupted adult teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Orthodontic Retainers (Hawley Removable)",
          description: "Durable acrylic and metal labial wire retainers maintaining long-term tooth alignment."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Essix Clear Vacuum-Formed Retainers",
          description: "Invisible thin plastic retainers worn at night to stabilize finished orthodontic results."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fixed Bonded Lingual Retainer Wires",
          description: "Discreet braided wire bonded behind lower front teeth for permanent relapse prevention."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Habit-Breaking Appliances",
          description: "Custom dental appliances designed to eliminate thumb-sucking, tongue-thrusting, and mouth-breathing."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Orthodontic TADs (Mini-Implant Anchorage)",
          description: "Temporary anchorage devices enabling complex movements without unwanted reciprocal forces."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Crossbite Correction",
          description: "Specialized mechanical arch alignment correcting inverted upper and lower tooth relationships."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Open Bite & Deep Overbite Correction",
          description: "Vertical orthodontic mechanics establishing proper anterior incisal overlap."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Orthodontic Tooth Uprighting & Space Regaining",
          description: "Repositioning tipped molars prior to dental bridge or implant placement."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Surgical Orthodontics Pre-Planning",
          description: "Combined orthodontic alignment coordinated with orthognathic jaw correction surgery."
        }
      }
    ]
  },

  // 5. Endodontist - 19 Services
  {
    "@type": "OfferCatalog",
    name: "Endodontist",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Single-Sitting Rotary Root Canal Treatment",
          description: "Painless root canal disinfection and obturation completed in a single comfortable visit."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Multi-Sitting Root Canal for Infected Teeth",
          description: "Multi-visit protocol using antibacterial calcium hydroxide dressings for acute infections."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Anterior Root Canal Treatment",
          description: "Precision cleaning, shaping, and sealing of incisor and canine root canals."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Premolar Root Canal Treatment",
          description: "Specialized endodontic therapy handling dual-canal configurations in bicuspids."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Molar Root Canal Treatment",
          description: "Complex microscopic navigation and 3D filling of multi-rooted, curved posterior molars."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Re-Root Canal Treatment (Re-RCT)",
          description: "Disassembly of failed old root canal fillings, ultrasonic canal revision, and re-obturation."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Broken Instrument Retrieval from Canal",
          description: "Micro-ultrasonic bypass or retrieval of separated endodontic instruments."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Calcified Root Canal Management",
          description: "Microscopic negotiation of severely narrowed or sclerosed root canals using specialized burs."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Apex Locator Working Length Measurement",
          description: "High-precision electronic measurement ensuring filling strictly within apical constrictions."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Warm Gutta-Percha 3D Obturation",
          description: "Thermoplasticized injectable gutta-percha technique sealing lateral canals and apical deltas."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MTA Root Perforation Repair",
          description: "Biocompatible Mineral Trioxide Aggregate barrier placement sealing iatrogenic or resorptive defects."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vital Pulp Therapy & Pulpotomy",
          description: "Partial coronal pulp removal preserving radicular vitality in traumatized young permanent teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Apexification for Open Immature Roots",
          description: "Creation of an artificial apical mineral barrier using MTA in non-vital immature teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Regenerative Endodontic Procedures",
          description: "Biological revascularization protocols stimulating dentin wall thickening in young roots."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Apicoectomy & Endodontic Microsurgery",
          description: "Surgical resection of the infected root tip followed by micro-ultrasonic retro-filling."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Root Resorption Management",
          description: "Therapeutic treatment of internal and external invasive cervical root resorption."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Pulpectomy for Acute Pulpitis",
          description: "Immediate same-day removal of inflamed nerve tissue for rapid, absolute pain relief."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hemisection & Root Amputation",
          description: "Surgical division or removal of an untreatable diseased root while saving remaining healthy roots."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Endodontic Crown Removal for Retreatment",
          description: "Safe ultrasonic removal of old crowns to gain direct access to infected canal systems."
        }
      }
    ]
  },

  // 6. Periodontist - 19 Services
  {
    "@type": "OfferCatalog",
    name: "Periodontist",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Comprehensive Periodontal Pocket Examination",
          description: "Detailed six-point probing depth, gingival recession, and clinical attachment level charting."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gingivitis Treatment & Therapeutic Cleaning",
          description: "Gentle ultrasonic debridement resolving bleeding, swollen, and inflamed gum tissue."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep Scaling and Root Planing (SRP)",
          description: "Specialized subgingival cleaning smoothing contaminated root cementum under local anesthesia."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ultrasonic Subgingival Irrigation",
          description: "Therapeutic antimicrobial chlorhexidine irrigation flushing deep subgingival pockets."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local Drug Delivery (Antimicrobial Placement)",
          description: "Placement of sustained-release antibiotic microspheres directly inside periodontal pockets."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Periodontal Flap Surgery",
          description: "Open flap debridement granting direct surgical visibility to debride infected alveolar bone defects."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bone Grafting for Periodontal Defects",
          description: "Placement of bioactive osseous grafts to stimulate bone regeneration around loose teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Guided Tissue Regeneration (GTR)",
          description: "Placement of resorbable collagen barrier membranes promoting new periodontal ligament formation."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Connective Tissue Graft for Gum Recession",
          description: "Autologous tissue grafting to cover exposed tooth roots, reduce sensitivity, and stop recession."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Gingival Grafting",
          description: "Surgical grafting reinforcing a band of tough keratinized gingiva around susceptible teeth or implants."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Crown Lengthening Surgery (Functional & Aesthetic)",
          description: "Surgical apical repositioning of gingival and bone margins to expose sound tooth structure."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Frenectomy (Labial & Lingual)",
          description: "Gentle scalpel or diode laser release of restrictive frenum causing diastema or tongue tie."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Perio-Splinting for Mobile Teeth",
          description: "Composite and fiberglass mesh bonding immobilizing periodontally loose teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gingival Depigmentation for Dark Gums",
          description: "Aesthetic micro-abrasion or diode laser treatment removing excess melanin from attached gingiva."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Peri-Implantitis Treatment",
          description: "Specialized titanium-safe decontamination and debridement of infected tissues around dental implants."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Peri-Implant Mucositis Management",
          description: "Non-surgical cleansing and antimicrobial flushing to arrest inflammation around implant necks."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gum Pocket Reduction Surgery",
          description: "Resective osseous and gingival recontouring eliminating hard-to-clean deep periodontal crevices."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Supportive Periodontal Maintenance (SPM)",
          description: "Rigorous 3-to-4-month recall cleaning protocol preventing relapse in treated gum disease."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Occlusal Adjustment for Secondary Trauma",
          description: "Selective minor tooth reshaping relieving excessive biting forces on periodontally reduced teeth."
        }
      }
    ]
  },

  // 7. Oral and maxillofacial surgeon - 19 Services
  {
    "@type": "OfferCatalog",
    name: "Oral and maxillofacial surgeon",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Routine Simple Tooth Extraction",
          description: "Atraumatic removal of non-restorable, severely broken, or periodontally compromised teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Surgical Tooth Extraction",
          description: "Complex extraction of roots fractured beneath the bone margin requiring mucoperiosteal flap elevation."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Impacted Wisdom Tooth Surgery",
          description: "Precise surgical odontectomy removing painful, impacted lower and upper third molars."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Soft Tissue Impacted Molar Removal",
          description: "Gentle excision of overlying operculum and extraction of partially erupted wisdom teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dental Root Fragment Retrieval",
          description: "Delicate surgical recovery of retained root tips from alveolar sockets or maxillary sinus floors."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Single Dental Implant Placement",
          description: "Surgical installation of a biocompatible titanium fixture into the jawbone to replace a single missing tooth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Multiple Dental Implants",
          description: "Strategically positioned dental implant fixtures supporting multi-unit bridges in edentulous regions."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Immediate Load Same-Day Implants",
          description: "Extracting an unsavable tooth and placing an implant fixture with a temporary crown in one visit."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Mouth All-on-4 / All-on-6 Implant Surgery",
          description: "Complete upper or lower arch restoration anchored on four or six angled implants."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sinus Lift Surgery (Direct Lateral Window)",
          description: "Elevation of the maxillary sinus membrane and bone graft placement to gain vertical implant height."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sinus Lift Surgery (Indirect Crestal Osteotome)",
          description: "Minimally invasive internal sinus floor elevation performed through the implant osteotomy."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Alveolar Bone Ridge Augmentation",
          description: "Hard tissue augmentation expanding deficient jawbone width before implant installation."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Socket Preservation & Ridge Grafting",
          description: "Biocompatible bone graft and collagen plug placement immediately after extraction to stop bone loss."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Biopsy of Oral Soft Tissue Lesions",
          description: "Incisional or excisional diagnostic biopsy of suspicious oral ulcers, lumps, or mucosal patches."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Operculectomy for Pericoronitis",
          description: "Excision of inflamed mucosal flap covering partially erupted wisdom teeth to eliminate infection."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Incision & Drainage of Dental Abscess",
          description: "Urgent surgical release and evacuation of localized facial or submandibular pus accumulations."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Alveoloplasty & Ridge Smoothing",
          description: "Surgical recontouring and smoothing of irregular alveolar bone edges prior to denture fabrication."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enucleation of Odontogenic Cysts",
          description: "Complete surgical excision and curettage of jaw cysts followed by primary closure and bone grafting."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Treatment of Dry Socket (Alveolar Osteitis)",
          description: "Soothing medicated dressing placement and socket irrigation providing immediate pain relief."
        }
      }
    ]
  },

  // 8. Prosthodontist - 19 Services
  {
    "@type": "OfferCatalog",
    name: "Prosthodontist",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Complete Removable Dentures (Upper & Lower)",
          description: "Custom-crafted acrylic full dentures restoring speech, mastication, and facial profile."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "High-Impact BPS Aesthetic Dentures",
          description: "Precision injection-molded Biofunctional Prosthetic System dentures offering superior suction."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Partial Removable Acrylic Dentures",
          description: "Economical tooth replacement appliance utilizing discreet wire clasps on remaining teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cast Partial Dentures (Cobalt-Chromium)",
          description: "Ultra-thin, rigid alloy frameworks providing comfortable, tissue-friendly partial tooth replacement."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Flexible Valplast Dentures",
          description: "Unbreakable, lightweight thermoplastic nylon partial dentures with gum-colored invisible clasps."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fixed Ceramic & Porcelain-Fused-to-Metal (PFM) Bridges",
          description: "Strong multi-unit restorations bridging the gap left by one or more missing teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "All-Ceramic Zirconia Dental Bridges",
          description: "Biocompatible metal-free multi-unit bridges delivering optimal chewing strength and aesthetics."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Implant-Supported Fixed Bridges",
          description: "Rigid multi-unit prosthesis screwed or cemented onto dental implants without grinding natural teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Implant-Supported Overdentures (Locator System)",
          description: "Removable full dentures securely snapping onto implant locators for stability."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Mouth Occlusal Rehabilitation",
          description: "Comprehensive multidisciplinary restorative reconstruction restoring worn, collapsed dental bites."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Metal Gold & Semi-Precious Crowns",
          description: "Highly durable, wear-resistant crowns ideal for patients with heavy nighttime clenching."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Maryland Resin-Bonded Bridges",
          description: "Conservative wing-retained bridges replacing missing front teeth with zero or minimal tooth grinding."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Immediate Dentures Fabricated Prior to Extraction",
          description: "Transitional dentures inserted immediately after surgical extraction so patients never leave toothless."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Denture Relining & Re-basing",
          description: "Resurfacing the tissue side of loose dentures with fresh acrylic to adapt to natural jawbone resorption."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Denture Repair & Tooth Addition",
          description: "Rapid laboratory repair of fractured acrylic bases and addition of newly extracted teeth to existing dentures."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Maxillofacial Extraoral & Obturator Prostheses",
          description: "Specialized prostheses closing palatal clefts or surgical resections to restore speech."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Precision Attachment Retained Partial Dentures",
          description: "Modern interlocking male-female friction attachments eliminating visible metal clasps."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cantilever Fixed Dental Bridges",
          description: "Fixed bridge anchored on one side, utilized selectively when adjacent teeth are sound and pristine."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Implant Abutment Milling",
          description: "Digitally CAD/CAM milled titanium and zirconia abutments matching individual natural emergence profiles."
        }
      }
    ]
  },

  // 9. Paediatric Dentist - 19 Services
  {
    "@type": "OfferCatalog",
    name: "Paediatric Dentist",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "First Dental Visit & Infant Oral Health Check",
          description: "Fun, fear-free early oral assessment for toddlers aged 1 to 3 evaluating eruption and tongue mobility."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Routine Pediatric Dental Examination",
          description: "Gentle, engaging review of developing primary and mixed dentition in growing children."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Child-Friendly Gentle Teeth Cleaning & Polish",
          description: "Delicate prophylaxis removing plaque and sweet food film with soft rubber cups and mild pastes."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Topical Fluoride Gel & Varnish for Children",
          description: "Enamel-hardening mineral treatment defending baby and permanent teeth from sugar acids."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pediatric Pit & Fissure Sealants",
          description: "Protective resin sealants applied to newly erupted primary molars and 6-year permanent molars."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Stainless Steel Crowns for Primary Molars",
          description: "Durable preformed silver crowns safeguarding extensively decayed or post-pulpotomy baby molars."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Zirconia Aesthetic Pediatric White Crowns",
          description: "Natural tooth-colored ceramic crowns for decayed front baby teeth and primary molars."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pulpotomy (Baby Tooth Nerve Treatment)",
          description: "Gentle removal of coronal nerve tissue in deep cavities, followed by mineral dressing to preserve the tooth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pulpectomy for Primary Teeth",
          description: "Complete root canal filling of infected baby teeth with resorbable paste to maintain arch space."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gentle Pediatric Tooth Extractions",
          description: "Compassionate, anxiety-free extraction of unsavable, badly infected, or over-retained baby teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fixed Band & Loop Space Maintainer",
          description: "Fixed appliance holding space for adult premolars after premature loss of primary molars."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Distal Shoe Space Maintainer",
          description: "Subgingival appliance guiding unerupted permanent first molars into correct arch position."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pediatric Habit-Breaking Thumb Sucking Appliance",
          description: "Fixed palate appliance gently dissuading prolonged digit sucking and tongue thrusting."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Management of Pediatric Dental Trauma",
          description: "Immediate clinical care for chipped, loosened, or completely knocked-out baby and adult teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Management of Early Childhood Caries (ECC)",
          description: "Holistic clinical and behavioral strategy arresting rampant bottle or nursing decay."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nitrous Oxide Happy Gas Sedation",
          description: "Safe, mild inhalation conscious sedation melting away fear and anxiety during pediatric procedures."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pediatric Composite Restorations",
          description: "Tooth-colored fillings matching natural shades for cavities in children's teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Orthodontic Growth Monitoring & Expansion",
          description: "Early assessment of jaw growth, palate width, and airway health to intercept future crowding."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Silver Diamine Fluoride (SDF) Therapy",
          description: "Non-invasive brush-on liquid medicine immediately arresting active decay without drilling."
        }
      }
    ]
  },

  // 10. Emergency dental service - 19 Services
  {
    "@type": "OfferCatalog",
    name: "Emergency dental service",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Acute Toothache Emergency Relief",
          description: "Urgent same-day diagnostic workup, pulp extirpation, and targeted analgesia for severe dental pain."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Dental Abscess Management",
          description: "Prompt incision, drainage, and systemic antibiotic therapy resolving dangerous facial infections."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Treatment for Avulsed (Knocked-Out) Tooth",
          description: "Urgent replantation, biological handling, and flexible splinting of traumatically knocked-out teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fractured & Chipped Tooth Restoration",
          description: "Emergency bonding or temporary crowning protecting exposed dental pulp from cold air and bacteria."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lost Dental Filling Emergency Replacement",
          description: "Rapid replacement of dislodged fillings restoring chewing function and protecting sensitive dentin."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Recementation of Dislodged Crowns & Bridges",
          description: "Immediate ultrasonic cleaning and permanent re-cementation of loosened crowns and bridges."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Relief of Broken Dentures & Sharp Clasps",
          description: "Same-day emergency repair or smoothening of broken acrylic appliances cutting oral tissues."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Management of Acute Gum Infections & Pericoronitis",
          description: "Subgingival antiseptic debridement and medication relieving severe wisdom tooth gum swelling."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Treatment for Cracked Tooth Syndrome",
          description: "Diagnostic tooth-sleuth testing and placement of stabilizing bands to stop sharp chewing pain."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Suture Removal & Post-Surgical Emergency Care",
          description: "Immediate care for unexpected post-operative bleeding, wound dehiscence, or loose sutures."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Management of Post-Extraction Bleeding",
          description: "Haemostatic sponge placement, pressure packing, and suturing to control persistent socket bleeding."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Soft Tissue Laceration & Oral Trauma Repair",
          description: "Meticulous cleaning, debridement, and fine suturing of torn lips, cheeks, or tongue tissues."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Relief for Broken Orthodontic Wires",
          description: "Clipping sharp protruding wires and rebonding loose brackets irritating oral mucosa."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Immediate Pain Relief for Pulpitis",
          description: "Urgent sedative endodontic dressing placement soothing hyperemic, throbbing dental nerves."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Management of Loose Teeth from Facial Trauma",
          description: "Gentle clinical repositioning and semi-rigid composite wire splinting of subluxated teeth."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Treatment of Acute Necrotizing Ulcerative Gingivitis",
          description: "Urgent mechanical debridement and antiseptic therapy for severe painful ulcerative gums."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Dislodged Implant Restoration",
          description: "Secure tightening and reseating of loosened implant abutment screws and healing caps."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency TMJ Lock Jaw / Dislocation Reduction",
          description: "Gentle manual reduction and stabilization of acutely dislocated temporomandibular jaw joints."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Urgent Prescription of Dental Analgesics & Antibiotics",
          description: "Immediate clinical evaluation and targeted pharmacy prescriptions for acute dental distress."
        }
      }
    ]
  }
];

export const TOTAL_SERVICES_COUNT = DENTAL_OFFER_CATALOG.reduce(
  (total, cat) => total + cat.itemListElement.length,
  0
);
