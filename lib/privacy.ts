import { appDataMap, appCatalog } from "./apps";

export type PrivacyCard = {
  title: string;
  bullets: string[];
};

export type PrivacySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: PrivacyCard[];
};

export type AppPrivacyPolicy = {
  id: string;
  title: string;
  summary: string;
  intro: string;
  heroDescription?: string;
  sections: PrivacySection[];
};

const sharedSecurityBullets = [
  "All data transmitted between the application and third-party services is encrypted in transit using HTTPS (TLS).",
  "Authentication credentials and access tokens are stored securely on the user’s device and are not shared with third parties.",
  "Access to user data occurs only when the user explicitly initiates an action within the app.",
  "Data access is limited to the minimum necessary to provide the app’s core functionality.",
  "Access to internal systems and source code is restricted to authorized personnel only.",
];

export const appPrivacyPolicies: Record<string, AppPrivacyPolicy> = {
  "cloud-music": {
    id: "cloud-music",
    title: "Cloud Music Privacy Policy",
    summary:
      "Read-only cloud import policy for Google Drive and Dropbox, with local offline playback on the user’s device.",
    intro:
      "Cloud Music respects your privacy. This Privacy Policy explains how the application accesses, uses, and protects your data when you use the Cloud Music application.",
    heroDescription:
      "How Cloud Music accesses, uses, and protects cloud audio files selected by the user for offline playback.",
    sections: [
      {
        title: "Data Access",
        paragraphs: [
          "Cloud Music accesses cloud storage data strictly in read-only mode and only when explicitly initiated by the user within the app.",
        ],
        cards: [
          {
            title: "Google Drive",
            bullets: [
              "Read-only access to files explicitly selected by the user",
              "No upload, modify, delete, or sync operations",
              "Access is limited to the minimum necessary to provide offline audio playback",
            ],
          },
          {
            title: "Dropbox",
            bullets: [
              "Read-only access to files explicitly selected by the user",
              "No upload, modify, delete, or sync operations",
              "No background or automatic synchronization is performed",
            ],
          },
        ],
      },
      {
        title: "Data Usage and Storage",
        bullets: [
          "No Google Drive or Dropbox data is stored on our servers",
          "Imported audio files are processed and stored locally on the user’s device for offline playback",
          "We do not sell, rent, or share user data with third parties",
        ],
      },
      {
        title: "Data Protection and Security",
        paragraphs: [
          "We take the protection of user data seriously and implement appropriate technical and organizational measures to safeguard sensitive information.",
        ],
        bullets: [
          "All data transmitted between the application and third-party services (such as Google Drive and Dropbox) is encrypted in transit using HTTPS (TLS).",
          "Authentication credentials and access tokens are stored securely on the user’s device and are not shared with third parties.",
          "Access to cloud storage data occurs only when the user explicitly initiates an action within the app.",
          "Data access is limited to the minimum necessary to provide the app’s core functionality.",
          "Access to internal systems and source code is restricted to authorized personnel only.",
          "These measures are designed to protect user data against unauthorized access, alteration, disclosure, or destruction.",
        ],
      },
    ],
  },
  videoxpert: {
    id: "videoxpert",
    title: "VideoXpert Privacy Policy",
    summary:
      "Media selected for editing is handled on the device, with permissions, exports, notifications, analytics, and advertising features described here.",
    intro:
      "VideoXpert is designed for mobile video editing workflows. This Privacy Policy explains how the application accesses, uses, and protects data when you use VideoXpert.",
    heroDescription:
      "How VideoXpert handles media access, export, notifications, and advertising-related services during mobile editing workflows.",
    sections: [
      {
        title: "Data Access",
        paragraphs: [
          "VideoXpert accesses videos, photos, camera input, audio, and exported files when the user explicitly selects media, records content, saves output, or initiates an export or share action within the app.",
        ],
        bullets: [
          "Access is limited to the files and media explicitly selected by the user",
          "Photo Library access may be requested to import media and save exported videos to the user’s library",
          "Camera access may be requested for app features that capture or use camera-based media input",
          "Third-party destinations used during export or sharing are triggered only by the user",
        ],
      },
      {
        title: "Data Usage and Storage",
        bullets: [
          "Media selected for editing is processed locally on the user’s device",
          "Project outputs and exported files are stored locally unless the user chooses to share or upload them through a third-party service",
          "We do not sell, rent, or share user data with third parties",
        ],
      },
      {
        title: "Notifications, Analytics, and Advertising",
        bullets: [
          "VideoXpert uses Firebase services, including Firebase Messaging, to support push notification features",
          "The app may request permission for notifications and related messaging features",
          "VideoXpert uses Google Mobile Ads and may display banner, interstitial, and app open ads",
          "On supported versions of iOS, the app may request App Tracking Transparency authorization before loading advertising services",
        ],
      },
      {
        title: "Data Protection and Security",
        paragraphs: [
          "We take the protection of user data seriously and apply technical and organizational safeguards appropriate to the app’s editing workflow.",
        ],
        bullets: [
          ...sharedSecurityBullets,
          "When users choose to share content to third-party services, those services operate under their own privacy policies.",
        ],
      },
      {
        title: "Third-Party Services",
        paragraphs: [
          "VideoXpert integrates with third-party services such as Firebase and Google Mobile Ads. Use of those services is subject to their respective terms and privacy policies.",
        ],
      },
    ],
  },
};

export const appPrivacyEntries = appCatalog
  .map((app) => {
    const policy = appPrivacyPolicies[app.id];

    if (!policy) {
      return null;
    }

    return {
      id: app.id,
      name: app.name,
      tagline: app.tagline,
      icon: app.icon,
      href: `/privacy/${app.id}`,
      accentLight: app.accentLight,
      summary: policy.summary,
    };
  })
  .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

export function getAppPrivacyPolicy(id: string) {
  return appPrivacyPolicies[id];
}

export function getAppPrivacyApp(id: string) {
  return appDataMap[id];
}

export function hasAppPrivacyPolicy(id: string) {
  return Boolean(appPrivacyPolicies[id]);
}
