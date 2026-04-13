import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AppCTA } from "@/components/app-detail/AppCTA";
import { AppHero } from "@/components/app-detail/AppHero";
import { BenefitsSection } from "@/components/app-detail/BenefitsSection";
import { FeatureSection } from "@/components/app-detail/FeatureSection";
import { PricingSection } from "@/components/app-detail/PricingSection";
import { ScreenshotGallery } from "@/components/app-detail/ScreenshotGallery";
import { TestimonialsSection } from "@/components/app-detail/TestimonialsSection";
import { appSummaries } from "@/lib/apps";
import { getThemedApp } from "@/lib/app-theme";
import { getAbsoluteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return appSummaries.map((app) => ({ id: app.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const app = await getThemedApp(id);

  if (!app) {
    return {
      title: "App not found",
    };
  }

  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.heroSub,
    alternates: {
      canonical: app.href,
    },
    openGraph: {
      title: `${app.name} — ${app.tagline}`,
      description: app.heroSub,
      url: getAbsoluteUrl(app.href),
      type: "website",
      images: [
        {
          url: getAbsoluteUrl(app.hero.showcase[0] ?? app.heroMockup ?? app.icon),
          alt: `${app.name} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${app.name} — ${app.tagline}`,
      description: app.heroSub,
      images: [getAbsoluteUrl(app.hero.showcase[0] ?? app.heroMockup ?? app.icon)],
    },
  };
}

export default async function AppDetailPage({ params }: Props) {
  const { id } = await params;
  const app = await getThemedApp(id);

  if (!app) {
    notFound();
  }

  return (
    <article>
      <AppHero app={app} />
      <BenefitsSection app={app} />
      <FeatureSection app={app} />
      <ScreenshotGallery app={app} />
      <PricingSection app={app} />
      <TestimonialsSection app={app} />
      <AppCTA app={app} />
    </article>
  );
}
