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
  const hasSupportingShowcases = supportingShowcases.length > 0;
  const leadingSupport = supportingShowcases[0];
  const trailingSupport = supportingShowcases[1];

  return (
    <section
      className="relative overflow-hidden pt-32 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
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
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-9">
            <div
              className="inline-flex items-center gap-3 rounded-full bg-white/80 px-3 py-2 sm:px-4 backdrop-blur-sm"
              style={{
                border: `1px solid ${app.theme.surfaceBorder}`,
                boxShadow: `0 10px 30px ${app.theme.accentGlow}`,
              }}
            >
              <div className="h-9 w-9 overflow-hidden rounded-[1rem] shadow-sm sm:h-10 sm:w-10 sm:rounded-2xl">
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
              className="max-w-[720px] text-[clamp(2rem,7vw,3rem)] sm:text-[clamp(2.4rem,4.8vw,4rem)] lg:text-[clamp(2.9rem,5.6vw,4.9rem)] font-bold text-gray-950 leading-[0.96] tracking-[-0.05em]"
              dangerouslySetInnerHTML={{ __html: app.heroHeadline.replace(/\n/g, "<br/>") }}
            />

            <p className="max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:text-body-xl">
              {app.heroSub}
            </p>

            <div className="flex flex-col gap-4 sm:items-start sm:gap-5">
              <div
                className="grid w-full grid-cols-2 gap-2 rounded-[1.45rem] p-2.5 backdrop-blur-xl sm:w-fit sm:gap-3 sm:rounded-[1.75rem] sm:p-3"
                style={{
                  border: `1px solid ${app.theme.surfaceBorder}`,
                  backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.24) 0%, ${app.theme.surfaceStrong} 100%)`,
                  boxShadow: `0 20px 52px ${app.theme.accentGlow}`,
                }}
              >
                <div
                  className="rounded-[1.05rem] px-4 py-3.5 text-center sm:min-w-[156px] sm:px-4 sm:py-4"
                  style={{
                    border: `1px solid ${app.accent}22`,
                    backgroundImage: `linear-gradient(135deg, ${app.accentLight} 0%, rgba(255,255,255,0.88) 68%)`,
                    boxShadow: `0 14px 30px ${app.theme.accentGlow}, inset 0 1px 0 rgba(255,255,255,0.62)`,
                  }}
                >
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: app.accent }}
                  >
                    {primaryStore?.scoreLabel ?? "Store rating"}
                  </p>
                  <div className="mt-2.5 flex items-end justify-center gap-2">
                    <span className="text-[1.9rem] sm:text-3xl lg:text-4xl font-semibold tracking-[-0.04em] text-gray-950">
                      {app.rating.score}
                    </span>
                    <span className="pb-1.5 text-base text-yellow-500 sm:pb-2 sm:text-lg">★</span>
                  </div>
                </div>

                <div
                  className="rounded-[1.05rem] px-4 py-3.5 text-center sm:min-w-[168px] sm:px-4 sm:py-4"
                  style={{
                    border: `1px solid ${app.accent}18`,
                    backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.96) 0%, ${app.theme.surfaceStrong} 100%)`,
                    boxShadow: `0 14px 28px ${app.theme.accentGlow}, inset 0 1px 0 rgba(255,255,255,0.62)`,
                  }}
                >
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: `${app.accent}cc` }}
                  >
                    {primaryStore?.countLabel ?? "User ratings"}
                  </p>
                  <p className="mt-2.5 text-[1.7rem] sm:text-2xl font-semibold tracking-[-0.03em] text-gray-950">
                    {app.rating.count.toLocaleString()}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-600 sm:text-sm">
                    {primaryStore?.countCaption ?? `Current ${primaryStore?.name ?? "store"} audience signal`}
                  </p>
                </div>
              </div>

              <StoreButtonGroup
                stores={app.stores}
                trackingContext={`${app.id}:hero`}
                primaryLabel={primaryStore?.actionLabel}
                stackOnMobile
                fullWidthOnMobile
                className="w-full sm:w-auto"
                buttonClassName="min-h-[58px] justify-between rounded-[1.25rem] border border-white/18 bg-[linear-gradient(135deg,rgba(17,24,39,0.96)_0%,rgba(27,34,57,0.92)_100%)] px-5 py-4 text-[0.95rem] shadow-[0_18px_44px_rgba(15,23,42,0.22)] backdrop-blur-md hover:bg-[linear-gradient(135deg,rgba(17,24,39,0.98)_0%,rgba(34,42,69,0.96)_100%)] hover:shadow-[0_22px_54px_rgba(15,23,42,0.26)] sm:min-h-0 sm:justify-center sm:rounded-full sm:px-4 sm:py-2.5 sm:text-sm sm:shadow-button sm:hover:shadow-button-hover"
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
              className="relative rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-5 md:p-7"
              style={{
                backgroundColor: "rgba(255,255,255,0.62)",
                border: `1px solid ${app.theme.surfaceBorder}`,
                boxShadow: `0 28px 100px ${app.theme.accentGlow}`,
              }}
            >
              <div className="mb-5 flex flex-col items-start gap-3 sm:mb-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
                <div>
                  <p className="text-lg font-semibold text-gray-950 sm:text-xl">
                    {app.hero.showcaseTitle}
                  </p>
                </div>
                <div
                  className="rounded-full px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm"
                  style={{
                    backgroundColor: app.theme.surfaceStrong,
                    color: app.accent,
                  }}
                >
                  {app.name}
                </div>
              </div>

              <div className="rounded-[1.25rem] sm:rounded-[1.6rem] bg-[rgba(255,255,255,0.7)] p-3 sm:p-6">
                <div className="sm:hidden">
                  <ThemedShowcaseFrame
                    app={app}
                    src={primaryShowcase}
                    alt={`${app.name} primary showcase`}
                    width={286}
                    height={600}
                    frameWidth="min(100%, 286px)"
                    frameWidthMobile="min(100%, 248px)"
                    radiusClassName="rounded-[1.8rem]"
                    imageRadiusClassName="rounded-[1.25rem]"
                    className="relative mx-auto"
                  />

                  {hasSupportingShowcases ? (
                    <div
                      className={`mx-auto mt-4 grid gap-3 ${
                        supportingShowcases.length === 1 ? "max-w-[156px] grid-cols-1" : "max-w-[320px] grid-cols-2"
                      }`}
                    >
                      {supportingShowcases.map((showcase, index) => (
                        <ThemedShowcaseFrame
                          key={showcase}
                          app={app}
                          src={showcase}
                          alt={`${app.name} supporting showcase ${index + 1}`}
                          width={164}
                          height={344}
                          frameWidth={
                            supportingShowcases.length === 1
                              ? "min(100%, 156px)"
                              : "min(100%, 148px)"
                          }
                          radiusClassName="rounded-[1.35rem]"
                          imageRadiusClassName="rounded-[0.95rem]"
                          className="mx-auto"
                        />
                      ))}
                    </div>
                  ) : null}
                </div>

                <div
                  className={`hidden sm:grid sm:min-h-[420px] lg:min-h-[480px] items-end justify-center gap-4 lg:gap-6 ${
                    supportingShowcases.length === 0
                      ? "sm:grid-cols-1"
                      : supportingShowcases.length === 1
                        ? "sm:grid-cols-[0.72fr_1fr]"
                        : "sm:grid-cols-[0.62fr_1fr_0.62fr]"
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
                  className="mt-4 flex flex-col items-start gap-3 rounded-[1.15rem] bg-white/78 px-4 py-3 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:rounded-[1.25rem]"
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
