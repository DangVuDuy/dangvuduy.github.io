// lib/about.ts — studio / developer information shown on /about

export const aboutIntro = {
  eyebrow: "Independent Mobile App Development Studio",
  title: "About CloudLab",
  summary:
    "CloudLab is an independent mobile app development brand based in Vietnam, operated by Dang Duy, an independent Apple Developer.",
};

export const aboutParagraphs: string[] = [
  "Our journey began in 2020 with the release of Cloud Music - Player Offline on the Apple App Store.",
  "Our applications were previously presented under the D6mobile brand. In 2026, we introduced CloudLab as our new brand identity to bring our mobile applications together under one name.",
  "Our portfolio includes Cloud Music and VideoXpert, focusing on music, video, and creative mobile experiences.",
  "We are also exploring AI technologies, including Claude by Anthropic, to enhance our development workflows and build useful new features for our applications.",
];

export type DeveloperInfoItem = {
  label: string;
  value: string;
  href?: string;
};

export const developerInfo: DeveloperInfoItem[] = [
  { label: "Developer", value: "Dang Duy" },
  { label: "Apple Developer Account", value: "Dang Duy (Individual)" },
  { label: "Current Brand", value: "CloudLab" },
  { label: "Former Brand", value: "D6mobile" },
  { label: "Brand Introduced", value: "2026" },
  { label: "Development History", value: "Since 2020" },
  { label: "Business Structure", value: "Independent, unincorporated development activity" },
  { label: "Location", value: "Vietnam" },
  { label: "Website", value: "https://cloudlab.one", href: "https://cloudlab.one" },
  { label: "Contact", value: "support@cloudlab.one", href: "mailto:support@cloudlab.one" },
];
