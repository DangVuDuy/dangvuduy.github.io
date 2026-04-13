import Image from "next/image";
import Link from "next/link";
import { AppData } from "../../lib/apps";
import { AppStoreButton } from "../ui/AppStoreButton";

interface HomeHeroProps {
  apps: AppData[];
}

export function HomeHero({ apps }: HomeHeroProps) {
  const featuredApp = apps.find((app) => app.featuredOnHome) ?? apps[0];

  if (!featuredApp) {
    return null;
  }

  const heroScreens = [
    featuredApp.hero.showcase[0] ?? featuredApp.heroMockup,
    featuredApp.hero.showcase[1] ?? featuredApp.screenshots[0] ?? featuredApp.heroMockup,
    featuredApp.hero.showcase[2] ?? featuredApp.screenshots[1] ?? featuredApp.heroMockup,
  ];
  const primaryStore = featuredApp.stores[0];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f7f3_0%,#fbfbfd_48%,#ffffff_100%)] pt-24 pb-12 lg:pt-28 lg:pb-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_14%,rgba(201,237,111,0.22),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(123,110,232,0.14),transparent_22%)]" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(360px,0.56fr)] lg:items-center">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white/88 px-4 py-2 text-sm text-gray-600 shadow-[0_14px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#b7e43b,#8c67ff)]" />
              Hot product
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-gray-500">
                Now spotlighting
              </p>
              <h1 className="max-w-[680px] text-[clamp(3rem,5.4vw,5.1rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-gray-950">
                {featuredApp.heroHeadline.replace(/\n/g, " ")}
              </h1>
              <p className="max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                {featuredApp.heroSub}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {featuredApp.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {category}
                </span>
              ))}
              <span className="rounded-full border border-[#d8ebb4] bg-[#f7fbe7] px-4 py-2 text-sm font-medium text-[#5e7a13]">
                {featuredApp.rating.score.toFixed(1)} ★ rated
              </span>
            </div>

            <div className="flex flex-wrap gap-3.5">
              <Link
                href={featuredApp.href}
                className="inline-flex items-center justify-center rounded-full bg-gray-950 px-6 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(15,23,42,0.14)] transition-transform hover:-translate-y-0.5"
              >
                View {featuredApp.name}
              </Link>
              {primaryStore ? (
                <AppStoreButton
                  url={primaryStore.url}
                  label={primaryStore.actionLabel}
                  storeId={primaryStore.id}
                  trackingContext={`home-hero:${featuredApp.id}`}
                  trackingLabel={`home-hero:${featuredApp.id}:${primaryStore.id}`}
                  className="border border-gray-200 bg-white px-6 py-3 !text-gray-700 shadow-none hover:border-gray-300 hover:bg-white hover:!text-gray-950"
                />
              ) : null}
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute inset-x-14 top-10 h-36 rounded-full blur-3xl"
              style={{ backgroundColor: featuredApp.theme.accentGlow }}
            />
            <Link
              href={featuredApp.href}
              className="group relative block overflow-hidden rounded-[2.4rem] border border-white/70 bg-white/76 p-5 shadow-[0_28px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-gray-500">
                    Featured app
                  </div>
                  <div className="mt-2 text-[1.9rem] font-semibold tracking-[-0.04em] text-gray-950">
                    {featuredApp.name}
                  </div>
                </div>
                <Image
                  src={featuredApp.icon}
                  alt={`${featuredApp.name} icon`}
                  width={54}
                  height={54}
                  className="h-[54px] w-[54px] rounded-[1rem] object-cover"
                />
              </div>

              <div className="relative mt-6 h-[320px]">
                <div className="absolute left-4 bottom-8 w-[108px] -rotate-[12deg]">
                  <ScreenCard image={heroScreens[1]} title={`${featuredApp.name} side`} />
                </div>
                <div className="absolute left-1/2 bottom-0 w-[168px] -translate-x-1/2">
                  <ScreenCard image={heroScreens[0]} title={`${featuredApp.name} main`} featured />
                </div>
                <div className="absolute right-4 bottom-10 w-[102px] rotate-[12deg]">
                  <ScreenCard image={heroScreens[2]} title={`${featuredApp.name} equalizer`} />
                </div>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-gray-200/80 bg-white/84 px-5 py-4 transition-colors group-hover:border-gray-300">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm text-gray-600">
                    {featuredApp.tagline}
                  </div>
                  <div
                    className="text-sm font-medium transition-transform group-hover:translate-x-0.5"
                    style={{ color: featuredApp.accent }}
                  >
                    View details →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenCard({
  image,
  title,
  featured = false,
}: {
  image: string;
  title: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.45rem] border border-white/80 bg-white/72 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ${
        featured ? "p-2.5" : "p-2"
      }`.trim()}
    >
      <div className="overflow-hidden rounded-[1rem]">
        <Image
          src={image}
          alt={title}
          width={320}
          height={680}
          className="h-auto w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
