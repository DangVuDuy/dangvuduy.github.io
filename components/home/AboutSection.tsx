import Image from "next/image";
import Link from "next/link";
import { AppData } from "../../lib/apps";

interface AboutSectionProps {
  apps: AppData[];
  totalRatings: number;
  averageRating: number;
}

export function AboutSection({
  apps,
  totalRatings,
  averageRating,
}: AboutSectionProps) {
  const categories = Array.from(new Set(apps.flatMap((app) => app.categories)));
  const storeListings = apps.flatMap((app) => app.stores);
  const stores = Array.from(
    new Map(
      storeListings.map((store) => [store.id, store])
    ).values()
  );

  return (
    <section className="border-t border-gray-100 bg-[#fbfbfd] py-16">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div className="rounded-[1.9rem] border border-gray-200/80 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
            <div className="text-sm text-gray-500">CloudLab lineup</div>
            <h2 className="mt-3 max-w-xl text-[clamp(1.9rem,3.2vw,2.55rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-gray-950">
              Focused apps, each with a dedicated product page.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600">
              Browse the current lineup, jump into screenshots and pricing, and
              go straight to the store when you are ready.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {apps.map((app) => (
                <Link
                  key={app.id}
                  href={app.href}
                  className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-[#fafafd] px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-950"
                >
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-[0.7rem] object-cover"
                  />
                  {app.name}
                </Link>
              ))}
            </div>
          </div>

          <StatCard
            label="Categories"
            title={`${categories.length} core categories`}
            description={categories.join(" · ")}
            chips={categories}
          />

          <StatCard
            label="Available now"
            title={`${storeListings.length} live listing${storeListings.length > 1 ? "s" : ""}`}
            description={`Currently published across ${stores.map((store) => store.name).join(" · ")}.`}
            chips={apps.map((app) => `${app.name} on ${app.stores[0]?.name ?? "Store"}`)}
          />

          <StatCard
            label="Social proof"
            title={`${averageRating.toFixed(1)} average rating`}
            description={`${totalRatings.toLocaleString()} ratings across the current lineup`}
            accent="★ Trusted by real store ratings"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  title,
  description,
  chips,
  accent,
}: {
  label: string;
  title: string;
  description: string;
  chips?: string[];
  accent?: string;
}) {
  return (
    <div className="rounded-[1.9rem] border border-gray-200/80 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-4 text-[1.7rem] font-semibold leading-[1.02] tracking-[-0.04em] text-gray-950">
        {title}
      </div>
      <p className="mt-4 text-sm leading-7 text-gray-600">{description}</p>

      {chips?.length ? (
        <div className="mt-5 flex flex-wrap gap-2.5">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-gray-200 bg-[#fafafd] px-3 py-2 text-xs font-medium text-gray-700"
            >
              {chip}
            </span>
          ))}
        </div>
      ) : null}

      {accent ? (
        <div className="mt-5 text-sm font-medium text-gray-900">{accent}</div>
      ) : null}
    </div>
  );
}
