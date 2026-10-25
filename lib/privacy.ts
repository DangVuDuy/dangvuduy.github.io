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
  links?: PrivacyLink[];
};

export type PrivacyLink = {
  label: string;
  href: string;
};

export type AppPrivacyPolicy = {
  id: string;
  title: string;
  summary: string;
  intro: string;
  heroDescription?: string;
  lastUpdated?: string;
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
      "Cloud import policy for Google Drive, Dropbox, Box, OneDrive, and pCloud, with local offline playback on the user’s device.",
    intro:
      "Cloud Music respects your privacy. This Privacy Policy explains how the application accesses, uses, and protects your data when you use the Cloud Music application. Cloud Music lets you connect Google Drive, Dropbox, Box, OneDrive, and pCloud to import your own audio files for offline playback. Some features and services may vary by platform.",
    heroDescription:
      "How Cloud Music accesses, uses, and protects cloud audio files selected by the user for offline playback.",
    lastUpdated: "October 26, 2026",
    sections: [
      {
        title: "Data Access",
        paragraphs: [
          "Cloud Music only reads from your cloud storage, and only when explicitly initiated by the user within the app. For every provider, the app only lists your folders and files, downloads the files you choose to import, and reads basic account information (your email address and display name) so it can show which account is connected.",
          "Files you choose to import are downloaded directly from the cloud provider to your device. Cloud Music never uploads, modifies, deletes, or syncs files in your cloud storage, and performs no background or automatic synchronization.",
        ],
        cards: [
          {
            title: "Google Drive",
            bullets: [
              "Read-only access (Google Drive read-only permission)",
              "Used only to browse folders and download the files you choose to import",
              "No upload, modify, delete, or sync operations",
            ],
          },
          {
            title: "Dropbox",
            bullets: [
              "Read-only access to account info, file metadata, and file content",
              "Used only to browse folders and download the files you choose to import",
              "No upload, modify, delete, or sync operations",
            ],
          },
          {
            title: "Box",
            bullets: [
              "Box requires read/write authorization to download files",
              "Cloud Music only lists and downloads files you choose and never modifies, uploads, or deletes files",
              "Folder listings and download links are retrieved through our backend using your stored Box credentials (see Credentials)",
            ],
          },
          {
            title: "OneDrive",
            bullets: [
              "Read-only access (Files.Read and User.Read permissions)",
              "Used only to browse folders and download the files you choose to import",
              "No upload, modify, delete, or sync operations",
            ],
          },
          {
            title: "pCloud",
            bullets: [
              "pCloud does not offer read-only authorization, so the access token technically grants full account access",
              "Cloud Music only lists and downloads files you choose and never modifies, uploads, or deletes files",
              "No background or automatic synchronization is performed",
            ],
          },
        ],
      },
      {
        title: "Credentials",
        bullets: [
          "Google Drive: sign-in and access tokens are handled by Google’s sign-in services on your device. Cloud Music keeps only your account email and display name locally and does not send your credentials to CloudLab servers.",
          "Dropbox, OneDrive, and pCloud: access tokens are kept in secure storage on your device and are not sent to CloudLab servers.",
          "Box: sign-in is completed through our backend. To keep you signed in, your Box credentials are stored on our backend, linked to an anonymous app identifier rather than your name.",
          "When you sign out of Box in the app, we request deletion of the stored Box credentials from our backend. You can also revoke Cloud Music’s access at any time from your Box account settings (Account Settings → Apps).",
        ],
      },
      {
        title: "Data Usage and Storage",
        bullets: [
          "Your audio files are never stored on our servers. The only cloud-related data we store on our backend is the Box sign-in credentials described above",
          "Imported audio files are processed and stored locally on the user’s device for offline playback",
          "If you enable clipboard detection, the app checks your clipboard on-device for a media link to pre-fill the URL field. Clipboard content is never stored or transmitted",
          "We do not sell or rent your personal data, and we do not share it with third parties except the service providers described in this policy",
        ],
      },
      {
        title: "Purchases",
        bullets: [
          "Subscriptions are processed by Google Play or the Apple App Store; we do not receive your payment card details.",
          "We receive purchase status to unlock Premium.",
        ],
      },
      {
        title: "Advertising and Analytics",
        paragraphs: [
          "Cloud Music uses the following Google services to show ads, understand app usage, and keep the app reliable. These services may collect device identifiers (such as the advertising ID), usage data, and diagnostic data in accordance with Google’s policies.",
        ],
        bullets: [
          "Google AdMob: displays ads in the app. AdMob may use the advertising ID and usage data to deliver and measure ads, including personalized ads where permitted.",
          "Consent: where required (for example in the EEA, UK, and Switzerland), the app asks for your consent through Google’s User Messaging Platform before personalized ads are shown.",
          "Firebase Analytics: collects app usage statistics to help us improve the app.",
          "Firebase Crashlytics (on Android): collects crash reports and device and app information to help us fix bugs.",
          "Firebase Remote Config: delivers app configuration settings.",
          "Firebase Cloud Messaging: we use Firebase Cloud Messaging to deliver notifications; Google assigns a device token for this purpose.",
          "Firebase Authentication and Cloud Functions: used only for Box sign-in, through an anonymous identifier.",
        ],
        links: [
          {
            label: "Google Privacy Policy",
            href: "https://policies.google.com/privacy",
          },
          {
            label: "How Google uses information from sites or apps that use its services",
            href: "https://policies.google.com/technologies/partner-sites",
          },
        ],
      },
      {
        title: "Your Choices and Data Deletion",
        bullets: [
          "Sign out of any provider from the Cloud tab in the app. This removes that provider’s credentials from your device and, for Box, requests deletion of your stored credentials from our backend.",
          "Revoke Cloud Music’s access at any time from your account settings on the provider’s website (Google, Dropbox, Box, Microsoft, or pCloud).",
          "Uninstalling the app deletes all locally stored data, including imported audio files and stored credentials.",
          "To request deletion of any data associated with you, contact us at support@cloudlab.one.",
        ],
      },
      {
        title: "Data Protection and Security",
        paragraphs: [
          "We take the protection of user data seriously and implement appropriate technical and organizational measures to safeguard sensitive information.",
        ],
        bullets: [
          "All data transmitted between the application and third-party services (such as Google Drive, Dropbox, Box, OneDrive, and pCloud) is encrypted in transit using HTTPS (TLS).",
          "Authentication credentials and access tokens are stored securely, on your device or, for Box, on our secured backend, and are never sold or shared for advertising.",
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
