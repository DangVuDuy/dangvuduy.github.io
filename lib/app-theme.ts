import "server-only";

import path from "path";
import { cache } from "react";
import sharp from "sharp";

import { appDataMap, type AppData, type AppTheme } from "./apps";

type RGB = {
  r: number;
  g: number;
  b: number;
};

type Candidate = {
  rgb: RGB;
  weight: number;
  saturation: number;
  lightness: number;
};

type ThemedAppData = AppData & {
  accent: string;
  accentLight: string;
  themeColor: string;
  themeColorLight: string;
  themeGlow: string;
  themeGrad: string;
  theme: AppTheme;
};

const SAMPLE_SIZE = 56;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const quantize = (value: number) => Math.round(value / 24) * 24;

const toHex = ({ r, g, b }: RGB) =>
  `#${[r, g, b]
    .map((value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, "0"))
    .join("")}`;

const toRgba = ({ r, g, b }: RGB, alpha: number) =>
  `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${alpha})`;

const mix = (a: RGB, b: RGB, amount: number): RGB => {
  const ratio = clamp(amount, 0, 1);

  return {
    r: a.r + (b.r - a.r) * ratio,
    g: a.g + (b.g - a.g) * ratio,
    b: a.b + (b.b - a.b) * ratio,
  };
};

const rgbToHsl = ({ r, g, b }: RGB) => {
  const nr = r / 255;
  const ng = g / 255;
  const nb = b / 255;
  const max = Math.max(nr, ng, nb);
  const min = Math.min(nr, ng, nb);
  const lightness = (max + min) / 2;

  if (max === min) {
    return { hue: 0, saturation: 0, lightness };
  }

  const delta = max - min;
  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  let hue = 0;

  switch (max) {
    case nr:
      hue = (ng - nb) / delta + (ng < nb ? 6 : 0);
      break;
    case ng:
      hue = (nb - nr) / delta + 2;
      break;
    default:
      hue = (nr - ng) / delta + 4;
      break;
  }

  hue /= 6;

  return { hue, saturation, lightness };
};

const colorDistance = (a: RGB, b: RGB) =>
  Math.sqrt(
    (a.r - b.r) ** 2 +
      (a.g - b.g) ** 2 +
      (a.b - b.b) ** 2
  );

const toAbsoluteImagePath = (imagePath: string) =>
  path.join(process.cwd(), "public", imagePath.replace(/^\//, ""));

const collectCandidates = async (
  imagePath: string,
  sourceWeight: number
): Promise<Candidate[]> => {
  const { data } = await sharp(toAbsoluteImagePath(imagePath))
    .resize(SAMPLE_SIZE, SAMPLE_SIZE, {
      fit: "cover",
      position: "attention",
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const buckets = new Map<string, Candidate>();

  for (let index = 0; index < data.length; index += 4) {
    const alpha = data[index + 3] / 255;

    if (alpha < 0.65) {
      continue;
    }

    const rgb = {
      r: data[index],
      g: data[index + 1],
      b: data[index + 2],
    };
    const { saturation, lightness } = rgbToHsl(rgb);

    if (lightness < 0.06 || lightness > 0.96) {
      continue;
    }

    if (saturation < 0.05 && (lightness < 0.18 || lightness > 0.82)) {
      continue;
    }

    const bucketRgb = {
      r: quantize(rgb.r),
      g: quantize(rgb.g),
      b: quantize(rgb.b),
    };
    const bucketKey = `${bucketRgb.r}-${bucketRgb.g}-${bucketRgb.b}`;
    const weight =
      sourceWeight *
      alpha *
      (0.35 + saturation * 1.4) *
      (lightness > 0.16 && lightness < 0.82 ? 1.1 : 0.7);
    const existing = buckets.get(bucketKey);

    if (existing) {
      existing.weight += weight;
      continue;
    }

    buckets.set(bucketKey, {
      rgb: bucketRgb,
      weight,
      saturation,
      lightness,
    });
  }

  return [...buckets.values()].sort((left, right) => right.weight - left.weight);
};

const pickPrimary = (candidates: Candidate[], fallback: RGB) =>
  candidates.find((candidate) => candidate.saturation > 0.18)?.rgb ??
  candidates[0]?.rgb ??
  fallback;

const pickSupport = (candidates: Candidate[], accent: RGB) =>
  candidates.find(
    (candidate) =>
      candidate.saturation > 0.12 &&
      colorDistance(candidate.rgb, accent) > 70
  )?.rgb ?? mix(accent, { r: 255, g: 255, b: 255 }, 0.24);

const pickDark = (candidates: Candidate[], accent: RGB) =>
  candidates.find(
    (candidate) =>
      candidate.lightness < 0.42 && candidate.saturation > 0.08
  )?.rgb ?? mix(accent, { r: 0, g: 0, b: 0 }, 0.72);

const deriveThemeFromImages = async (app: AppData): Promise<AppTheme> => {
  const [iconCandidates, screenshotCandidates] = await Promise.all([
    collectCandidates(app.icon, 1.8),
    Promise.all(app.screenshots.slice(0, 4).map((imagePath) => collectCandidates(imagePath, 1.35)))
      .then((candidateGroups) => candidateGroups.flat())
      .then((candidates) => candidates.sort((left, right) => right.weight - left.weight)),
  ]);
  const fallbackAccent = hexToRgb(app.theme.accent);
  const iconAccent = pickPrimary(iconCandidates, fallbackAccent);
  const screenshotAccent = pickPrimary(screenshotCandidates, iconAccent);
  let accent = mix(iconAccent, screenshotAccent, 0.68);
  let support = pickSupport(screenshotCandidates, accent);
  let dark = pickDark(screenshotCandidates, accent);

  if (app.id === "cloud-music") {
    accent = mix(accent, support, 0.55);
    support = mix(support, dark, 0.22);
    dark = mix(dark, { r: 18, g: 42, b: 8 }, 0.22);
  }

  const glow = mix(accent, support, app.id === "cloud-music" ? 0.48 : 0.35);
  const galleryTop = mix(dark, accent, app.id === "cloud-music" ? 0.1 : 0.16);
  const galleryBottom = mix(dark, { r: 0, g: 0, b: 0 }, app.id === "cloud-music" ? 0.18 : 0.24);

  const finalAccent = toHex(accent);
  const finalSupport = toHex(support);

  return {
    accent: finalAccent,
    accentLight: toRgba(accent, 0.14),
    accentGlow: toRgba(glow, 0.24),
    accentGrad: `linear-gradient(135deg, ${finalAccent} 0%, ${finalSupport} 100%)`,
    support: finalSupport,
    surface: `linear-gradient(180deg, ${toRgba(accent, 0.08)} 0%, #ffffff 78%)`,
    surfaceStrong: toRgba(support, 0.12),
    surfaceBorder: toRgba(glow, 0.22),
    heroBackdrop: `radial-gradient(circle at 18% 22%, ${toRgba(
      support,
      0.34
    )} 0%, transparent 42%), radial-gradient(circle at 82% 10%, ${toRgba(
      accent,
      0.22
    )} 0%, transparent 36%), linear-gradient(180deg, ${toRgba(
      accent,
      0.08
    )} 0%, #ffffff 78%)`,
    galleryBackground: `linear-gradient(180deg, ${toHex(galleryTop)} 0%, ${toHex(
      galleryBottom
    )} 100%)`,
    ctaBackground: `linear-gradient(135deg, ${toRgba(
      accent,
      0.14
    )} 0%, ${toRgba(support, 0.24)} 100%)`,
  };
};

const hexToRgb = (value: string): RGB => {
  const normalized = value.replace("#", "");
  const [r, g, b] =
    normalized.length === 3
      ? normalized.split("").map((part) => Number.parseInt(part.repeat(2), 16))
      : [0, 2, 4].map((start) => Number.parseInt(normalized.slice(start, start + 2), 16));

  return { r, g, b };
};

export const getThemedApp = cache(async (id: string): Promise<ThemedAppData | null> => {
  const app = appDataMap[id];

  if (!app) {
    return null;
  }

  const theme = await deriveThemeFromImages(app);

  return {
    ...app,
    accent: theme.accent,
    accentLight: theme.accentLight,
    themeColor: theme.accent,
    themeColorLight: theme.surfaceStrong,
    themeGlow: theme.accentGlow,
    themeGrad: theme.accentGrad,
    theme,
  };
});
