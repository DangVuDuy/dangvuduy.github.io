import { appCatalog, appDataMap } from "./apps";

export type TermsSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: TermsLink[];
};

export type TermsLink = {
  label: string;
  href: string;
};

export type AppTermsPolicy = {
  id: string;
  title: string;
  summary: string;
  intro: string;
  lastUpdated?: string;
  sections: TermsSection[];
};

export const appTermsPolicies: Record<string, AppTermsPolicy> = {
  "cloud-music": {
    id: "cloud-music",
    title: "Cloud Music Terms of Service",
    summary:
      "Terms covering access to user-selected cloud audio files, third-party storage integrations, subscriptions, and user responsibilities.",
    intro:
      "By using the Cloud Music application, you agree to these Terms of Service. If you do not agree with these terms, please do not use the application.",
    lastUpdated: "October 26, 2026",
    sections: [
      {
        title: "Service Description",
        paragraphs: [
          "Cloud Music is a mobile application that allows users to browse and play audio files stored in their own cloud storage accounts, including Google Drive, Dropbox, Box, OneDrive, and pCloud. Some features and services may vary by platform.",
        ],
      },
      {
        title: "User Data and Permissions",
        paragraphs: [
          "Cloud Music only reads from your cloud storage, and only when you initiate an action in the app. It lists your folders and files and downloads the files you choose to import for offline playback.",
        ],
        bullets: [
          "Google Drive, Dropbox, and OneDrive are accessed with read-only permissions.",
          "Box requires read/write authorization to download files, and pCloud does not offer read-only authorization. For these providers, Cloud Music only lists and downloads files you choose.",
          "No files are uploaded, modified, deleted, or synchronized.",
          "No background access to cloud storage is performed.",
          "Your audio files are never stored on our servers. To keep you signed in to Box, your Box credentials are stored on our backend, as described in our Privacy Policy.",
        ],
      },
      {
        title: "User Responsibilities",
        paragraphs: [
          "Users are responsible for ensuring they have the legal rights to access and play the audio files stored in their cloud storage accounts.",
        ],
      },
      {
        title: "Third-Party Services",
        paragraphs: [
          "Cloud Music integrates with third-party services such as Google Drive, Dropbox, Box, OneDrive, pCloud, Google AdMob, and Firebase. Use of those services is subject to their respective terms and policies.",
        ],
      },
      {
        title: "Subscriptions (Cloud Music Premium)",
        bullets: [
          "Premium is an auto-renewing monthly subscription (product com.duydv.cloudmusicpro) that removes ads and unlocks lossless playback (FLAC/WAV) and the equalizer.",
          "A free trial may be offered; if so, the subscription starts automatically when the trial ends unless cancelled at least 24 hours before the trial ends.",
          "Payment is charged to your Google Play or Apple ID account. The subscription renews automatically unless cancelled at least 24 hours before the end of the current period.",
          "You can manage or cancel your subscription in Google Play (Play Store → Payments & subscriptions) or in your Apple ID settings (Settings → Apple ID → Subscriptions). Uninstalling the app does not cancel your subscription.",
          "Refunds are handled by Google Play or Apple under their respective refund policies.",
        ],
      },
      {
        title: "Privacy",
        paragraphs: [
          "Your use of Cloud Music is also governed by our Privacy Policy, which explains how the app accesses, uses, and protects your data.",
        ],
        links: [
          {
            label: "Cloud Music Privacy Policy",
            href: "/privacy/cloud-music",
          },
        ],
      },
      {
        title: "Disclaimer",
        paragraphs: [
          'The application is provided on an "as is" and "as available" basis without warranties of any kind. We do not guarantee uninterrupted or error-free service.',
        ],
      },
      {
        title: "Changes to These Terms",
        paragraphs: [
          "We may update these Terms of Service from time to time. Continued use of the application indicates acceptance of the updated terms.",
        ],
      },
    ],
  },
  videoxpert: {
    id: "videoxpert",
    title: "VideoXpert Terms of Service",
    summary:
      "Terms covering media access, editing, export, saving, sharing, and the use of integrated third-party services in VideoXpert.",
    intro:
      "By using the VideoXpert application, you agree to these Terms of Service. If you do not agree with these terms, please do not use the application.",
    sections: [
      {
        title: "Service Description",
        paragraphs: [
          "VideoXpert is a mobile application that allows users to import, edit, convert, export, and share video and related media files on their own devices.",
        ],
      },
      {
        title: "User Data and Permissions",
        paragraphs: [
          "VideoXpert may request access to the device photo library, camera, notifications, and other system features only to support user-initiated app functionality.",
        ],
        bullets: [
          "Photo Library access may be used to import source media and save exported videos",
          "Camera access may be used for features that capture or use camera-based media input",
          "Notification permission may be requested for app messaging or notification features",
          "No media is exported, saved, shared, or uploaded without a user action",
        ],
      },
      {
        title: "Local Processing and Exports",
        paragraphs: [
          "Media selected for editing is processed on the user’s device. Exported files are saved locally unless the user explicitly chooses to share them or send them to a third-party destination.",
        ],
      },
      {
        title: "Third-Party Services",
        paragraphs: [
          "VideoXpert integrates with third-party services such as Firebase and Google Mobile Ads. Use of those services is subject to their respective terms and policies.",
        ],
      },
      {
        title: "User Responsibilities",
        paragraphs: [
          "Users are responsible for ensuring they have the legal rights to access, edit, export, save, and share the media they use with VideoXpert.",
        ],
      },
      {
        title: "Disclaimer",
        paragraphs: [
          'The application is provided on an "as is" and "as available" basis without warranties of any kind. We do not guarantee uninterrupted, error-free, or lossless service in every editing or export scenario.',
        ],
      },
      {
        title: "Changes to These Terms",
        paragraphs: [
          "We may update these Terms of Service from time to time. Continued use of the application indicates acceptance of the updated terms.",
        ],
      },
    ],
  },
};

export const appTermsEntries = appCatalog
  .map((app) => {
    const policy = appTermsPolicies[app.id];

    if (!policy) {
      return null;
    }

    return {
      id: app.id,
      name: app.name,
      tagline: app.tagline,
      icon: app.icon,
      href: `/terms/${app.id}`,
      accentLight: app.accentLight,
      summary: policy.summary,
    };
  })
  .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

export function getAppTermsPolicy(id: string) {
  return appTermsPolicies[id];
}

export function getAppTermsApp(id: string) {
  return appDataMap[id];
}

export function hasAppTermsPolicy(id: string) {
  return Boolean(appTermsPolicies[id]);
}
