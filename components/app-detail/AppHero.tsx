import Image from "next/image";
import { AppData } from "../../lib/apps";
import { StoreButtonGroup } from "../ui/StoreButtonGroup";
import { ThemedShowcaseFrame } from "./ThemedShowcaseFrame";

interface AppHeroProps {
  app: AppData;
}

export function AppHero({ app }: AppHeroProps) {
  const primaryStore = app.stores[0];
  const showcaseScreens = app.hero.showcase.filter(Boolean);
  const fallbackShowcase = app.heroMockup || app.screenshots[0] || app.icon;
  const primaryShowcase = showcaseScreens[0] ?? fallbackShowcase;
  const supportingShowcases = showcaseScreens.slice(1, 3);
  const leadingSupport = supportingShowcases[0];
  const trailingSupport = supportingShowcases[1];

  return (
    <section
      className="relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24"
      style={{ backgroundImage: app.theme.heroBackdrop }}
    >
      <div
        className="absolute right-[-120px] top-[-80px] h-[520px] w-[520px] rounded-full blur-[120px] opacity-60"
        style={{ backgroundColor: app.accentLight }}
      />
      <div
        className="absolute left-[-100px] bottom-[-120px] h-[380px] w-[380px] rounded-full blur-[120px] opacity-70"
        style={{ backgroundColor: app.theme.surfaceStrong }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid gap-14 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div className="space-y-9">
            <div
              className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 backdrop-blur-sm"
              style={{
                border: `1px solid ${app.theme.surfaceBorder}`,
                boxShadow: `0 10px 30px ${app.theme.accentGlow}`,
              }}
            >
              <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={app.icon}
                  alt={`${app.name} icon`}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-tight text-left">
                <p className="text-xs font-medium text-gray-500">
                  {primaryStore?.availabilityLabel ?? app.hero.platformLabel}
                </p>
                <p className="text-sm font-medium text-gray-900">{app.name}</p>
              </div>
            </div>

            <h1
              className="max-w-[720px] text-[clamp(2.9rem,5.6vw,4.9rem)] font-bold text-gray-950 leading-[0.96] tracking-[-0.05em]"
              dangerouslySetInnerHTML={{ __html: app.heroHeadline.replace(/\n/g, "<br/>") }}
            />

            <p className="max-w-xl text-body-xl text-gray-600 leading-relaxed">
              {app.heroSub}
            </p>

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div
                className="grid gap-4 rounded-[1.75rem] bg-white/80 p-5 backdrop-blur-sm sm:grid-cols-2"
                style={{
                  border: `1px solid ${app.theme.surfaceBorder}`,
                  boxShadow: `0 18px 48px ${app.theme.accentGlow}`,
                }}
              >
                <div>
                  <p className="text-sm font-medium text-gray-400">
                    {primaryStore?.scoreLabel ?? "Store rating"}
                  </p>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-4xl font-semibold tracking-[-0.04em] text-gray-950">
                      {app.rating.score}
                    </span>
                    <span className="pb-2 text-lg text-yellow-500">★</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">
                    {primaryStore?.countLabel ?? "User ratings"}
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-gray-950">
                    {app.rating.count.toLocaleString()}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {primaryStore?.countCaption ?? `Current ${primaryStore?.name ?? "store"} audience signal`}
                  </p>
                </div>
              </div>

              <StoreButtonGroup
                stores={app.stores}
                trackingContext={`${app.id}:hero`}
                primaryLabel={primaryStore?.actionLabel}
              />
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute left-8 top-12 h-40 w-40 rounded-full blur-3xl"
              style={{ backgroundColor: app.theme.accentGlow }}
            />
            <div
              className="absolute right-6 bottom-16 h-48 w-48 rounded-full blur-3xl"
              style={{ background: app.theme.accentGrad, opacity: 0.7 }}
            />

            <div
              className="relative rounded-[2rem] p-5 md:p-7"
              style={{
                backgroundColor: "rgba(255,255,255,0.62)",
                border: `1px solid ${app.theme.surfaceBorder}`,
                boxShadow: `0 28px 100px ${app.theme.accentGlow}`,
              }}
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xl font-semibold text-gray-950">
                    {app.hero.showcaseTitle}
                  </p>
                </div>
                <div
                  className="rounded-full px-4 py-2 text-sm font-medium"
                  style={{
                    backgroundColor: app.theme.surfaceStrong,
                    color: app.accent,
                  }}
                >
                  {app.name}
                </div>
              </div>

              <div className="rounded-[1.6rem] bg-[rgba(255,255,255,0.7)] p-6">
                <div
                  className={`grid min-h-[480px] items-end justify-center gap-4 lg:gap-6 ${
                    supportingShowcases.length === 0
                      ? "grid-cols-1"
                      : supportingShowcases.length === 1
                        ? "grid-cols-[0.72fr_1fr]"
                        : "grid-cols-[0.62fr_1fr_0.62fr]"
                  }`}
                >
                  {leadingSupport ? (
                    <ThemedShowcaseFrame
                      app={app}
                      src={leadingSupport}
                      alt={`${app.name} secondary showcase`}
                      width={164}
                      height={344}
                      frameWidth={supportingShowcases.length === 1 ? "170px" : "150px"}
                      radiusClassName="rounded-[1.7rem]"
                      imageRadiusClassName="rounded-[1.15rem]"
                      className="self-end justify-self-center"
                    />
                  ) : null}

                  <ThemedShowcaseFrame
                    app={app}
                    src={primaryShowcase}
                    alt={`${app.name} primary showcase`}
                    width={286}
                    height={600}
                    frameWidth="286px"
                    radiusClassName="rounded-[2rem]"
                    imageRadiusClassName="rounded-[1.4rem]"
                    className="relative self-end justify-self-center"
                  />

                  {trailingSupport ? (
                    <ThemedShowcaseFrame
                      app={app}
                      src={trailingSupport}
                      alt={`${app.name} tertiary showcase`}
                      width={150}
                      height={314}
                      frameWidth="150px"
                      radiusClassName="rounded-[1.7rem]"
                      imageRadiusClassName="rounded-[1.15rem]"
                      className="self-end justify-self-center"
                    />
                  ) : null}
                </div>

                <div
                  className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-[1.25rem] bg-white/78 px-4 py-3"
                  style={{
                    border: `1px solid ${app.theme.surfaceBorder}`,
                  }}
                >
                  <div className="flex flex-wrap gap-2">
                    {app.hero.floatingItems.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full px-3 py-1.5 text-xs font-medium"
                        style={{
                          backgroundColor: app.theme.surfaceStrong,
                          color: app.accent,
                        }}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {app.hero.contextValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
