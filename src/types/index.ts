/**
 * Common types for the portfolio website
 */

export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
  priority?: boolean;
}

export interface PortfolioImage extends ImageData {
  id: string;
  category: string;
  title?: string;
  description?: string;
  date?: string;
  location?: string;
  tags?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
  socialLinks: SocialLink[];
}

export interface AboutSection {
  title: string;
  content: string;
  images?: PortfolioImage[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: PortfolioImage[];
  category: string;
  tags: string[];
  featured: boolean;
  date: string;
  client?: string;
  url?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  image?: string;
  rating: number; // 1-5
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
  popular?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  navigation: NavigationItem[];
  contact: ContactInfo;
}

/**
 * Animation and interaction types
 */
export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
  whileInView?: object;
  viewport?: object;
}

export interface ScrollTrigger {
  trigger: string;
  start: string;
  end: string;
  scrub: boolean | number;
}

/**
 * Form types
 */
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterForm {
  email: string;
}

/**
 * API Response types
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * SEO and metadata types
 */
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

/**
 * Theme and UI types
 */
export type Theme = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
