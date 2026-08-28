export interface Testimonial {
  id: number;
  name: string;
  location: string;
  vehicle: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export interface FuelRate {
  city: string;
  petrol: number;
  diesel: number;
  change: "up" | "down" | "stable";
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  size?: "large" | "normal";
}
