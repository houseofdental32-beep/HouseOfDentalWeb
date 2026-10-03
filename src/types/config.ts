export interface SiteMeta {
  title: string;
  description: string;
  whatsapp_number: string;
  whatsapp_default_message: string;
  google_site_verification?: string;
  bing_site_verification?: string;
  google_analytics_id?: string;
  google_ads_id?: string;
  google_tag_manager_id?: string;
  google_maps_url?: string;
  rating_value?: number;
  review_count?: number;
  local_areas_served?: string[];
}

export interface HeroSection {
  headline: string;
  sub_headline: string;
  cta_text: string;
  video_url: string;
}

export interface ServiceItem {
  name: string;
  price: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface HolisticServicesSection {
  title: string;
  subtitle: string;
  categories: ServiceCategory[];
}

export interface SpecializedExpertiseSection {
  title: string;
  subtitle: string;
  categories: ServiceCategory[];
}

export interface MembershipPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
}

export interface MembershipSection {
  title: string;
  subtitle: string;
  plans: MembershipPlan[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  image_url: string;
  philosophy: string;
}

export interface DoctorsSection {
  title: string;
  subtitle: string;
  team: TeamMember[];
}

export interface Location {
  id: string;
  name: string;
  address: string;
  google_maps_url: string;
  phone: string;
  hours: string;
  latitude?: number | string;
  longitude?: number | string;
  email?: string;
  parking?: string;
}

export interface LocationsSection {
  title: string;
  subtitle: string;
  locations_list: Location[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface GoogleReview {
  name: string;
  role: string;
  rating: number;
  text: string;
  date?: string;
  treatment?: string;
  verified?: boolean;
  avatar_url?: string;
  google_maps_url?: string;
}

export interface SocialProof {
  title: string;
  subtitle: string;
  google_rating?: number;
  review_count?: number;
  badge_text?: string;
  google_maps_url?: string;
  testimonials?: Testimonial[];
  reviews?: GoogleReview[];
}

export interface ThemeColors {
  bg_primary: string;
  bg_secondary: string;
  border_color: string;
  text_primary: string;
  accent_moss: string;
  accent_earth: string;
}

export interface ThemeConfig {
  light: ThemeColors;
  dark: ThemeColors;
}

export interface AppConfig {
  site_meta: SiteMeta;
  theme_colors: ThemeConfig;
  hero_section: HeroSection;
  holistic_services: HolisticServicesSection;
  specialized_expertise: SpecializedExpertiseSection;
  membership_section: MembershipSection;
  doctors_section: DoctorsSection;
  locations_section: LocationsSection;
  social_proof: SocialProof;
  google_reviews?: GoogleReview[];
  show_stats_section?: boolean;
  [key: string]: any;
}
