// lib/faq.ts — FAQ content, grouped by topic

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  id: string;
  title: string;
  appId?: string;
  items: FaqItem[];
};

export const faqGroups: FaqGroup[] = [
  {
    id: "general",
    title: "General",
    items: [
      {
        question: "What is CloudLab?",
        answer:
          "CloudLab is an independent studio building focused mobile apps. Our current products are Cloud Music, an offline music player for your own files, and VideoXpert, a mobile video editor.",
      },
      {
        question: "Do I need a CloudLab account?",
        answer:
          "No. Neither app requires a CloudLab account, and you can browse this website without signing up.",
      },
      {
        question: "Which platforms are supported?",
        answer:
          "Cloud Music is available on the App Store (iPhone and iPad) and Google Play (Android). VideoXpert is available on the App Store.",
      },
      {
        question: "How do I contact support?",
        answer:
          "Email support@cloudlab.one. Include the app name, your device model, and the OS version so we can help faster.",
      },
    ],
  },
  {
    id: "cloud-music",
    title: "Cloud Music",
    appId: "cloud-music",
    items: [
      {
        question: "Where can I import music from?",
        answer:
          "You can import audio from connected cloud storage such as Google Drive, Dropbox, OneDrive, and Box, as well as files already on your device. Available providers can vary by platform.",
      },
      {
        question: "Can I listen without an internet connection?",
        answer:
          "Yes. Download songs, albums, playlists, or whole folders to your device and play them in offline mode. No internet or mobile data is needed once files are downloaded.",
      },
      {
        question: "Which audio formats are supported?",
        answer:
          "Cloud Music plays common formats including MP3, WAV, and M4A (AAC). Lossless playback such as FLAC (and ALAC on iOS) is available with Premium.",
      },
      {
        question: "Does Cloud Music change or delete files in my cloud storage?",
        answer:
          "No. Cloud Music only reads the files you choose to import. It does not upload, modify, or delete files in your cloud account.",
      },
      {
        question: "How do I disconnect a cloud account?",
        answer:
          "Open Settings → Connected Accounts, choose the account, and tap Disconnect. This removes the sign-in token from your device without touching the files in your cloud storage.",
      },
      {
        question: "What does Premium include?",
        answer:
          "Premium removes ads and unlocks lossless audio and unlimited access. On iOS it costs $1.49 per month after a 7-day free trial. Prices can vary by region and platform, and the store shows the final price before you confirm.",
      },
      {
        question: "Which player features are included?",
        answer:
          "Repeat and shuffle modes, a sleep timer, a multi-band equalizer with presets, background playback, and lock-screen and headphone controls.",
      },
    ],
  },
  {
    id: "videoxpert",
    title: "VideoXpert",
    appId: "videoxpert",
    items: [
      {
        question: "What can I do with VideoXpert?",
        answer:
          "Edit on a multi-layer timeline, crop and resize, grade color, convert video to audio, and export in high quality, all on your iPhone or iPad.",
      },
      {
        question: "Which export options are available?",
        answer:
          "You can export up to 4K at 60fps and choose between H.264 and H.265, with adjustable bitrate for social platforms.",
      },
      {
        question: "Are my videos uploaded anywhere?",
        answer:
          "No. Media you select is processed on your device. Files only leave the device when you choose to share or upload them through another service.",
      },
      {
        question: "How much does Premium cost?",
        answer:
          "VideoXpert offers a 7-day free trial, then Premium renews at $24.99 per year unless cancelled. Premium removes ads and unlocks full tool access.",
      },
    ],
  },
  {
    id: "billing",
    title: "Subscriptions & billing",
    items: [
      {
        question: "How do I cancel a subscription?",
        answer:
          "On iOS, open Settings → your name → Subscriptions. On Android, open Google Play → profile → Payments & subscriptions → Subscriptions. Cancel at least 24 hours before renewal to avoid the next charge.",
      },
      {
        question: "How do I restore a purchase on a new device?",
        answer:
          "Sign in with the same Apple ID or Google account you used to purchase, then use the restore option on the app’s Premium screen. Your subscription is tied to that store account, not to the device.",
      },
      {
        question: "How do I request a refund?",
        answer:
          "Payments are handled by Apple and Google, so refunds are requested through them: reportaproblem.apple.com for the App Store, or your Google Play order history for Android.",
      },
    ],
  },
];
