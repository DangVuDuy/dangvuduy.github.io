import Image from "next/image";
import Link from "next/link";
import { AppData } from "../../lib/apps";

interface AppCardProps {
  app: AppData;
  layout?: "rail" | "grid";
}

export function AppCard({ app, layout = "rail" }: AppCardProps) {
  const poster = app.hero.showcase[0] ?? app.heroMockup ?? app.screenshots[0];
  const isGrid = layout === "grid";
  const titleClassName = getTitleClassName(app.name);
  const cardHeightClass = isGrid ? "h-[374px]" : "h-[374px]";

  return (
    <div
      className={
        isGrid
          ? "w-full"
          : "w-[250px] shrink-0 px-1 py-2"
      }
    >
      <Link
        href={app.href}
        className={`group relative block origin-bottom transform-gpu rounded-[1.8rem] transition-all duration-300 hover:z-10 hover:-translate-y-1.5 hover:scale-[1.015] ${
          isGrid ? "h-full" : ""
        }`}
      >
        <div className="h-full overflow-hidden rounded-[1.8rem] border border-gray-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)]">
            <div
              className={`relative overflow-hidden rounded-[1.8rem] ${cardHeightClass}`}
              style={{
                backgroundImage: `linear-gradient(135deg, ${app.accentLight} 0%, rgba(255,255,255,0.94) 74%)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-70"
                style={{ backgroundImage: app.theme.heroBackdrop }}
              />

              <div className="pointer-events-none absolute inset-x-3 bottom-2 z-20 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-[1.25rem] border border-white/70 bg-white/40 shadow-[0_14px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/78 to-white/48" />
                  <div className="relative px-4 pb-5 pt-3 text-center text-sm text-gray-700">
                    {app.tagline}
                  </div>
                </div>
              </div>

              <div className="relative grid h-full grid-rows-[auto_minmax(0,1fr)_auto] p-5">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <div className="min-w-0">
                    <div className="text-xs font-medium uppercase tracking-[0.16em] text-gray-500">
                      {app.categories[0]}
                    </div>
                    <h3
                      className={`mt-2 overflow-hidden text-ellipsis whitespace-nowrap font-semibold leading-none tracking-[-0.04em] text-gray-950 ${titleClassName}`}
                    >
                      {app.name}
                    </h3>
                  </div>

                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0 rounded-[0.85rem] object-cover"
                  />
                </div>

                <div className="flex min-h-0 items-center justify-center">
                  <div
                    className={`overflow-hidden rounded-[1.4rem] border border-white/80 bg-white/66 p-2 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ${
                      isGrid ? "h-[212px] w-[45%] min-w-[152px] max-w-[188px]" : "h-[212px] w-[152px]"
                    }`}
                  >
                    <div className="h-full overflow-hidden rounded-[1rem]">
                      <Image
                        src={poster}
                        alt={`${app.name} preview`}
                        width={320}
                        height={680}
                        quality={100}
                        sizes={isGrid ? "(min-width: 768px) 188px, 152px" : "152px"}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between gap-3 border-t border-white/60 pt-2.5 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500">★</span>
                    <span className="font-medium text-gray-900">{app.rating.score.toFixed(1)}</span>
                  </div>
                  <span className="font-medium text-gray-900">View details</span>
                </div>
              </div>
            </div>
        </div>
      </Link>
    </div>
  );
}

function getTitleClassName(name: string) {
  if (name.length <= 9) {
    return "text-[1.45rem]";
  }

  if (name.length <= 12) {
    return "text-[1.24rem]";
  }

  return "text-[1.08rem]";
}
