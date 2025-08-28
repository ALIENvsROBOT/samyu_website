import { SiteConfig } from "@/types";

/**
 * Site configuration
 * This file contains all the site-wide settings and configuration
 */
export const siteConfig: SiteConfig = {
  name: "Samyuktha",
  description: "Professional portfolio website showcasing creative work",
  url: "https://thesamyuktha.com",
  ogImage: "/og-image.jpg",
  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  contact: {
    email: "hello@example.com",
    phone: "+1 (555) 123-4567",
    location: "City, Country",
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://instagram.com/yourusername",
        icon: "instagram",
        label: "Follow on Instagram",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/yourusername",
        icon: "twitter",
        label: "Follow on Twitter",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: "linkedin",
        label: "Connect on LinkedIn",
      },
    ],
  },
};

/**
 * Animation configuration
 */
export const animationConfig = {
  // Default animation durations
  duration: {
    fast: 0.2,
    normal: 0.5,
    slow: 0.8,
  },

  // Default easing functions
  easing: {
    smooth: [0.25, 0.46, 0.45, 0.94],
    bounce: [0.68, -0.55, 0.265, 1.55],
    ease: "easeInOut",
  },

  // Viewport settings for scroll animations
  viewport: {
    once: true,
    amount: 0.3,
  },
};

/**
 * Image optimization settings
 */
export const imageConfig = {
  // Default image quality
  quality: 85,

  // Default image sizes for responsive images
  sizes: {
    hero: "100vw",
    portfolio: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    thumbnail: "(max-width: 768px) 50vw, 25vw",
  },

  // Supported image formats (in order of preference)
  formats: ["webp", "avif", "jpg", "png"],
};

/**
 * Performance configuration
 */
export const performanceConfig = {
  // Lazy loading threshold
  lazyThreshold: 200,

  // Image loading priority
  loadingPriority: {
    hero: "eager",
    aboveFold: "eager",
    belowFold: "lazy",
  },
};

/**
 * SEO configuration
 */
export const seoConfig = {
  // Default meta tags
  defaultTitle: siteConfig.name,
  defaultDescription: siteConfig.description,
  defaultImage: siteConfig.ogImage,

  // Social media meta tags
  twitter: {
    card: "summary_large_image" as const,
    site: "@yourusername",
    creator: "@yourusername",
  },

  // Open Graph
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: siteConfig.name,
  },
};

/**
 * Development configuration
 */
export const devConfig = {
  // Enable/disable features in development
  enableConsoleLogs: process.env.NODE_ENV === "development",
  enableAnimations: true,
  enableScrollAnimations: true,
};
