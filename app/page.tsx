import { HomeHero } from "../components/home/HomeHero";
import { AppGrid } from "../components/home/AppGrid";
import { AboutSection } from "../components/home/AboutSection";
import { appCatalog } from "../lib/apps";

export default function Home() {
  const totalRatings = appCatalog.reduce((sum, app) => sum + app.rating.count, 0);
  const weightedRating =
    totalRatings > 0
      ? appCatalog.reduce((sum, app) => sum + app.rating.score * app.rating.count, 0) /
        totalRatings
      : 0;

  return (
    <div className="bg-white">
      <HomeHero
        apps={appCatalog}
      />

      <section id="apps" className="bg-white pb-20">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mb-8 max-w-3xl">
            <div className="text-label mb-4 text-gray-500">All Apps</div>
            <h2 className="text-[clamp(2rem,4vw,3.1rem)] font-semibold tracking-[-0.04em] text-gray-950 leading-[0.98]">
              Explore the current lineup.
            </h2>
            <p className="mt-4 max-w-2xl text-body-lg leading-relaxed text-gray-600">
              Use the filters to switch categories, compare the apps quickly,
              and open the detail page that fits what you need.
            </p>
          </div>

          <AppGrid apps={appCatalog} />
        </div>
      </section>

      <AboutSection
        apps={appCatalog}
        totalRatings={totalRatings}
        averageRating={weightedRating}
      />
    </div>
  );
}
