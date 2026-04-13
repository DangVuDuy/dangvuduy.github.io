// lib/apps.ts — single source of truth for all app data

export type AppSummary = {
  id: string;
  name: string;
  tagline: string;
  featuredOnHome?: boolean;
  categories: string[];
  icon: string;
  accent: string;
  accentLight: string;
  themeColor: string;
  themeColorLight: string;
  themeGlow: string;
  themeGrad: string;
  rating: { score: number; count: number };
  appStoreUrl: string;
  href: string;
};

export type AppFeature = {
  headline: string;
  description: string;
  mockup?: string;
  pills?: string[];
  visual?: AppFeatureVisual;
};

export type AppFeatureVisual =
  | {
      kind: "equalizer";
      label: string;
      title: string;
      badge: string;
      bands: number[];
      bandLabels: Array<number | string>;
      chips: string[];
    }
  | {
      kind: "library";
      label: string;
      title: string;
      badge: string;
      collections: Array<{ title: string; tone: string }>;
      items: Array<{ title: string; meta: string; length: string }>;
    }
  | {
      kind: "timeline";
      label: string;
      title: string;
      badge: string;
      tracks: Array<{
        width: string;
        tone: string;
      }>;
      chips: string[];
    }
  | {
      kind: "grading";
      label: string;
      title: string;
      badge: string;
      swatches: string[];
      sliders: Array<{
        label: string;
        value: number;
      }>;
    };

export type AppBenefit = {
  icon: string;
  title: string;
  description: string;
};

export type AppTheme = {
  accent:      string;
  accentLight: string;
  accentGlow:  string;
  accentGrad:  string;
  support: string;
  surface: string;
  surfaceStrong: string;
  surfaceBorder: string;
  heroBackdrop: string;
  galleryBackground: string;
  ctaBackground: string;
};

export type AppStoreLink = {
  id: string;
  name: string;
  url: string;
  availabilityLabel: string;
  actionLabel: string;
  scoreLabel: string;
  countLabel: string;
  countCaption: string;
};

export type AppHeroContent = {
  platformLabel: string;
  showcase: string[];
  showcaseEyebrow: string;
  showcaseTitle: string;
  floatingLabel: string;
  floatingItems: string[];
  contextLabel: string;
  contextValue: string;
};

export type AppGalleryContent = {
  title: string;
  description: string;
  cardEyebrow: string;
  cardTitle: string;
  cardDescription: string;
  swipeHint: string;
  stories: Array<{
    title: string;
    description: string;
  }>;
};

export type AppPricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  ctaLabel: string;
};

export type AppTestimonial = {
  quote: string;
  author: string;
  role: string;
};

export type AppData = AppSummary & {
  heroHeadline: string;
  heroSub: string;
  heroMockup: string;
  stores: AppStoreLink[];
  hero: AppHeroContent;
  benefits: AppBenefit[];
  features: AppFeature[];
  screenshots: string[];
  gallery: AppGalleryContent;
  pricing: AppPricingPlan[];
  testimonials: AppTestimonial[];
  theme: AppTheme;
};

// Cloud Music data
const cloudMusicSummary: AppSummary = {
  id: "cloud-music",
  name: "Cloud Music",
  tagline: "Your music. Offline. Forever.",
  featuredOnHome: true,
  categories: ["Music", "Offline"],
  icon: "/apps/cloud-music/icon.png",
  accent: "#7B6EE8",
  accentLight: "#EAE8FF",
  themeColor: "#7B6EE8",
  themeColorLight: "rgba(123,110,232,0.12)",
  themeGlow: "rgba(123,110,232,0.18)",
  themeGrad: "linear-gradient(135deg, #7B6EE8, #9F94F0)",
  rating: { score: 4.8, count: 12847 },
  appStoreUrl: "https://apps.apple.com/app/cloud-music-player-offline/id1389203210",
  href: "/apps/cloud-music",
};

const cloudMusicData: AppData = {
  ...cloudMusicSummary,
  heroHeadline: "Cloud Music\nMusic. Offline. Forever.",
  heroSub:
    "Download your music. Listen anytime, anywhere. No ads, no limits, completely offline.",
  heroMockup: "/apps/cloud-music/mockup-hero-1.png",
  stores: [
    {
      id: "app-store",
      name: "App Store",
      url: "https://apps.apple.com/app/cloud-music-player-offline/id1389203210",
      availabilityLabel: "Available on mobile",
      actionLabel: "Get the app",
      scoreLabel: "Store rating",
      countLabel: "User ratings",
      countCaption: "Trusted by listeners",
    },
  ],
  hero: {
    platformLabel: "Available on mobile",
    showcase: [
      "/apps/cloud-music/mockup-hero-1.png",
      "/apps/cloud-music/mockup-hero-2.png",
      "/apps/cloud-music/mockup-hero-3.png",
    ],
    showcaseEyebrow: "Featured Screens",
    showcaseTitle: "Explore the interface in action",
    floatingLabel: "Highlights",
    floatingItems: ["FLAC", "ALAC", "Offline"],
    contextLabel: "Designed for",
    contextValue: "Offline listening",
  },
  benefits: [
    {
      icon: "📴",
      title: "Completely offline",
      description:
        "Download once, listen forever. No internet needed, no data used, no ads.",
    },
    {
      icon: "🎧",
      title: "High quality",
      description:
        "FLAC, ALAC, WAV, MP3 support. Experience music the way it was meant to sound.",
    },
    {
      icon: "♾️",
      title: "No limits",
      description:
        "Download as many songs as you want. No download limits, no time restrictions.",
    },
  ],
  features: [
    {
      headline: "Precision equalizer",
      description:
        "Fine-tune your sound with a clean multi-band equalizer. Boost bass, soften highs, and switch presets to match your headphones, speakers, or listening mood.",
      mockup: "/apps/cloud-music/mockup-features.png",
      pills: ["Bass boost", "Presets", "Custom EQ"],
      visual: {
        kind: "equalizer",
        label: "Sound Control",
        title: "Tune every band with clarity.",
        badge: "EQ On",
        bands: [28, 40, 52, 60, 56, 48, 42, 50],
        bandLabels: [32, 64, 125, 250, 500, "1K", "4K", "8K"],
        chips: ["Flat", "Club", "Bass boost", "Treble", "Voice"],
      },
    },
    {
      headline: "Unlimited library",
      description:
        "Store thousands of songs directly on your device. Search, organize by artist, album, genre — fast and simple.",
      mockup: "/apps/cloud-music/screenshots/ss-3.png",
      visual: {
        kind: "library",
        label: "Music Library",
        title: "Keep albums, playlists, and songs organized.",
        badge: "Offline Ready",
        collections: [
          { title: "Focus Mix", tone: "linear-gradient(135deg, #c4f000, #5dcf3e)" },
          { title: "Soul Off", tone: "linear-gradient(135deg, #ff91c4, #7c5cff)" },
          { title: "Sunset Beat", tone: "linear-gradient(135deg, #ffd04f, #78c030)" },
        ],
        items: [
          { title: "Dreamer", meta: "DJ Max", length: "3:45" },
          { title: "Classic Beat", meta: "Soul Off", length: "4:12" },
          { title: "Morning Drive", meta: "Ling", length: "3:18" },
        ],
      },
    },
    {
      headline: "Studio quality",
      description:
        "Full lossless format support: FLAC, ALAC, WAV. Adjust bitrate, equalizer for the ultimate listening experience.",
      pills: ["FLAC", "MP3", "WAV", "ALAC"],
    },
  ],
  screenshots: [
    "/apps/cloud-music/screenshots/ss-1.png",
    "/apps/cloud-music/screenshots/ss-2.png",
    "/apps/cloud-music/screenshots/ss-3.png",
    "/apps/cloud-music/screenshots/ss-4.png",
    "/apps/cloud-music/screenshots/ss-5.png",
  ],
  gallery: {
    title: "See the interface in action.",
    description:
      "From import to playback, these screens show the main Cloud Music flow.",
    cardEyebrow: "Inside the App",
    cardTitle: "Cloud Music",
    cardDescription:
      "Browse the screens that define the listening workflow, from getting music in to playing it offline every day.",
    swipeHint: "Swipe on smaller screens to browse more screenshots",
    stories: [
      {
        title: "Import your music in a few taps",
        description:
          "Bring tracks in from cloud services, files, or your device library.",
      },
      {
        title: "Play offline with a focused now-playing view",
        description:
          "Control playback from a clean screen built for offline listening.",
      },
      {
        title: "Browse playlists and songs without clutter",
        description:
          "Keep albums, playlists, and downloaded tracks easy to scan.",
      },
    ],
  },
  pricing: [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "Get started with offline playback and core library tools.",
      features: [
        "Import from cloud storage",
        "Offline listening",
        "Playlist management",
        "Core equalizer presets",
      ],
      ctaLabel: "Start free",
    },
    {
      name: "Premium",
      price: "$1.49",
      period: "per month",
      description: "Includes a 7-day free trial, then renews monthly unless cancelled.",
      features: [
        "Enjoy unlimited access",
        "No ads",
        "High quality audio",
        "Support lossless audio (FLAC)",
        "Cancel anytime",
      ],
      featured: true,
      ctaLabel: "Start subscription",
    },
  ],
  testimonials: [
    {
      quote:
        "Exactly what I needed for offline music. Importing tracks and organizing playlists is simple.",
      author: "Offline listeners",
      role: "Fast setup",
    },
    {
      quote:
        "The app stays focused on playback instead of trying to be a streaming service clone.",
      author: "Daily playback",
      role: "Focused experience",
    },
    {
      quote:
        "Good format support and a clear library layout made it easy to move my music offline.",
      author: "Lossless users",
      role: "Format support",
    },
    {
      quote:
        "The equalizer and offline workflow feel much more polished than most simple music players.",
      author: "Playlist builders",
      role: "Playback control",
    },
  ],
  theme: {
    accent:      '#7B6EE8',
    accentLight: 'rgba(123,110,232,0.12)',
    accentGlow:  'rgba(123,110,232,0.20)',
    accentGrad:  'linear-gradient(135deg, #7B6EE8, #9F94F0)',
    support: '#9F94F0',
    surface: 'linear-gradient(180deg, rgba(123,110,232,0.08) 0%, #ffffff 78%)',
    surfaceStrong: 'rgba(123,110,232,0.12)',
    surfaceBorder: 'rgba(123,110,232,0.18)',
    heroBackdrop:
      'radial-gradient(circle at 18% 22%, rgba(159,148,240,0.32) 0%, transparent 42%), radial-gradient(circle at 82% 10%, rgba(123,110,232,0.22) 0%, transparent 36%), linear-gradient(180deg, rgba(123,110,232,0.08) 0%, #ffffff 78%)',
    galleryBackground:
      'linear-gradient(180deg, #17132b 0%, #0f0b1f 100%)',
    ctaBackground:
      'linear-gradient(135deg, rgba(123,110,232,0.12) 0%, rgba(159,148,240,0.2) 100%)',
  },
};

// VideoXpert data
const videoxpertSummary: AppSummary = {
  id: "videoxpert",
  name: "VideoXpert",
  tagline: "Edit video. Like a pro.",
  featuredOnHome: false,
  categories: ["Video", "Creator"],
  icon: "/apps/videoxpert/icon.png",
  accent: "#E8855A",
  accentLight: "#FFE8DF",
  themeColor: "#E8855A",
  themeColorLight: "rgba(232,133,90,0.12)",
  themeGlow: "rgba(232,133,90,0.18)",
  themeGrad: "linear-gradient(135deg, #E8855A, #F0A07A)",
  rating: { score: 4.7, count: 8934 },
  appStoreUrl: "https://apps.apple.com/app/videoxpert/id1565898859",
  href: "/apps/videoxpert",
};

const videoxpertData: AppData = {
  ...videoxpertSummary,
  heroHeadline: "VideoXpert\nEdit video. Like a pro.",
  heroSub:
    "Professional video editing in your pocket: multi-layer timeline, keyframe animation, color grading — everything you need.",
  heroMockup: "/apps/videoxpert/mockup-hero-1.png",
  stores: [
    {
      id: "app-store",
      name: "App Store",
      url: "https://apps.apple.com/app/videoxpert/id1565898859",
      availabilityLabel: "Available on mobile",
      actionLabel: "Get the app",
      scoreLabel: "Store rating",
      countLabel: "User ratings",
      countCaption: "Trusted by creators",
    },
  ],
  hero: {
    platformLabel: "Available on mobile",
    showcase: [
      "/apps/videoxpert/mockup-hero-1.png",
      "/apps/videoxpert/mockup-hero-2.png",
      "/apps/videoxpert/mockup-hero-3.png",
    ],
    showcaseEyebrow: "Featured Screens",
    showcaseTitle: "Preview the editing workflow",
    floatingLabel: "Highlights",
    floatingItems: ["Keyframe", "4K 60fps", "H.265"],
    contextLabel: "Designed for",
    contextValue: "Mobile editing",
  },
  benefits: [
    {
      icon: "🎬",
      title: "Multi-layer timeline",
      description:
        "Stack video, photos, text, effects on multiple layers. Drag-and-drop timeline as intuitive as desktop.",
    },
    {
      icon: "🎨",
      title: "Color grading",
      description:
        "Curves, HSL, LUTs — complete color tools to give your videos a cinematic look.",
    },
    {
      icon: "✨",
      title: "Effects & transitions",
      description:
        "Hundreds of built-in effects: blur, glitch, zoom, shake... Smooth transitions between scenes.",
    },
  ],
  features: [
    {
      headline: "Intuitive timeline",
      description:
        "Trim, copy, move clips with your fingers. Zoom timeline frame by frame. Unlimited undo/redo.",
      mockup: "/apps/videoxpert/mockup-timeline.png",
      pills: ["Multi-layer", "Keyframe", "Snapping"],
      visual: {
        kind: "timeline",
        label: "Timeline",
        title: "Arrange clips with clear, touch-first controls.",
        badge: "Multi-layer",
        tracks: [
          { width: "68%", tone: "linear-gradient(135deg, #8b5cf6, #6366f1)" },
          { width: "54%", tone: "linear-gradient(135deg, #f97316, #fb7185)" },
          { width: "78%", tone: "linear-gradient(135deg, #22c55e, #14b8a6)" },
        ],
        chips: ["Cut", "Split", "Keyframe", "Snapping"],
      },
    },
    {
      headline: "Pro color grading",
      description:
        "Use Curves, HSL Panel, LUTs to grade your video. Cinematic color presets included. Instant before/after comparison.",
      mockup: "/apps/videoxpert/mockup-color.png",
      visual: {
        kind: "grading",
        label: "Color",
        title: "Shape contrast, warmth, and mood with precision.",
        badge: "Real-time",
        swatches: ["#f59e0b", "#fb7185", "#8b5cf6", "#38bdf8"],
        sliders: [
          { label: "Exposure", value: 62 },
          { label: "Contrast", value: 74 },
          { label: "Saturation", value: 58 },
        ],
      },
    },
    {
      headline: "Export in high quality",
      description:
        "Export up to 4K 60fps. Choose codec H.264/H.265, adjust bitrate. Optimized for social platforms.",
      pills: ["4K 60fps", "H.264", "H.265"],
    },
  ],
  screenshots: [
    "/apps/videoxpert/screenshots/ss-1.png",
    "/apps/videoxpert/screenshots/ss-2.png",
    "/apps/videoxpert/screenshots/ss-3.png",
    "/apps/videoxpert/screenshots/ss-4.png",
    "/apps/videoxpert/screenshots/ss-5.png",
  ],
  gallery: {
    title: "See the interface in action.",
    description:
      "These screens show the main VideoXpert editing flow on mobile.",
    cardEyebrow: "Inside the App",
    cardTitle: "VideoXpert",
    cardDescription:
      "Browse the main editing views that shape the workflow, from arranging clips to finishing the final export.",
    swipeHint: "Swipe on smaller screens to browse more screenshots",
    stories: [
      {
        title: "Edit with a timeline that stays approachable",
        description:
          "Trim, arrange, and layer clips with precise controls on mobile.",
      },
      {
        title: "Adjust color and tone with confidence",
        description:
          "Fine-tune color and mood with dedicated grading controls.",
      },
      {
        title: "Move from rough cut to polished export",
        description:
          "Move from rough cut to final export with less friction.",
      },
    ],
  },
  pricing: [
    {
      name: "Trial",
      price: "$0",
      period: "for 7 days",
      description: "Start with the verified free trial period before the yearly plan begins.",
      features: [
        "Enjoy unlimited access",
        "Crop and resize at the best possible resolution",
        "Convert video to audio in multiple formats",
        "No ads during the trial period",
      ],
      ctaLabel: "Start trial",
    },
    {
      name: "Premium",
      price: "$24.99",
      period: "per year",
      description: "Renews automatically after the verified 7-day free trial unless cancelled.",
      features: [
        "Unlimited access",
        "Crop and resize with the best possible resolution",
        "Convert video to audio in multiple formats",
        "No ads",
        "Full tool access",
      ],
      featured: true,
      ctaLabel: "Get premium",
    },
  ],
  testimonials: [
    {
      quote:
        "Cropping and compressing clips on mobile is faster than I expected, especially for quick social exports.",
      author: "Short-form creators",
      role: "Quick exports",
    },
    {
      quote:
        "The interface is straightforward enough for quick fixes, but still gives me useful control over output.",
      author: "Content editors",
      role: "Practical control",
    },
    {
      quote:
        "Creating GIFs and converting clips in one place makes this feel much more practical than a single-purpose tool.",
      author: "Community teams",
      role: "Utility workflow",
    },
    {
      quote:
        "Useful utility app when I need mobile edits without opening a heavier desktop workflow.",
      author: "Mobile editors",
      role: "Lightweight editing",
    },
  ],
  theme: {
    accent:      '#E8855A',
    accentLight: 'rgba(232,133,90,0.12)',
    accentGlow:  'rgba(232,133,90,0.20)',
    accentGrad:  'linear-gradient(135deg, #E8855A, #F0A07A)',
    support: '#F0A07A',
    surface: 'linear-gradient(180deg, rgba(232,133,90,0.08) 0%, #ffffff 78%)',
    surfaceStrong: 'rgba(232,133,90,0.12)',
    surfaceBorder: 'rgba(232,133,90,0.2)',
    heroBackdrop:
      'radial-gradient(circle at 18% 22%, rgba(240,160,122,0.34) 0%, transparent 42%), radial-gradient(circle at 82% 10%, rgba(232,133,90,0.22) 0%, transparent 36%), linear-gradient(180deg, rgba(232,133,90,0.08) 0%, #ffffff 78%)',
    galleryBackground:
      'linear-gradient(180deg, #311810 0%, #180c08 100%)',
    ctaBackground:
      'linear-gradient(135deg, rgba(232,133,90,0.14) 0%, rgba(240,160,122,0.22) 100%)',
  },
};

// Exports
export const appSummaries: AppSummary[] = [cloudMusicSummary, videoxpertSummary];
export const appCatalog: AppData[] = [cloudMusicData, videoxpertData];

export const appDataMap: Record<string, AppData> = {
  "cloud-music": cloudMusicData,
  videoxpert: videoxpertData,
};
