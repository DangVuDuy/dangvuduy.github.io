import Image from "next/image";
import { SectionLabel } from "../ui/SectionLabel";
import { AppData, AppFeature, AppFeatureVisual } from "../../lib/apps";

interface FeatureSectionProps {
  app: AppData;
}

export function FeatureSection({ app }: FeatureSectionProps) {
  const renderTimelineVisual = (visual: Extract<AppFeatureVisual, { kind: "timeline" }>) => {
    return (
      <div
        className="relative overflow-hidden rounded-[1.8rem] border p-6 sm:p-8"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(249,247,255,0.94) 100%)",
          boxShadow: `0 28px 60px ${app.accent}18`,
          borderColor: app.theme.surfaceBorder,
        }}
      >
        <div
          className="absolute right-6 top-4 h-32 w-32 rounded-full blur-3xl"
          style={{ backgroundColor: `${app.accent}16` }}
        />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-400">{visual.label}</p>
              <h4 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.03em] text-gray-950">
                {visual.title}
              </h4>
            </div>
            <div
              className="rounded-full px-3 py-1.5 text-xs font-medium"
              style={{
                backgroundColor: app.theme.surfaceStrong,
                color: app.accent,
              }}
            >
              {visual.badge}
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border bg-white/88 p-5 sm:p-6">
            <div className="rounded-[1.25rem] border border-gray-100 bg-[#171b2a] p-4 shadow-inner">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="mt-5 space-y-3">
                {visual.tracks.map((track, index) => (
                  <div key={index} className="rounded-[1rem] bg-white/5 p-3">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-white/70" />
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <div
                      className="h-10 rounded-[0.9rem]"
                      style={{
                        width: track.width,
                        backgroundImage: track.tone,
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex gap-2">
                  {visual.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/88"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="hidden text-xs font-medium text-white/55 sm:block">
                  Frame accurate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderGradingVisual = (visual: Extract<AppFeatureVisual, { kind: "grading" }>) => {
    return (
      <div
        className="relative overflow-hidden rounded-[1.8rem] border p-6 sm:p-8"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,247,244,0.94) 100%)",
          boxShadow: `0 28px 60px ${app.accent}18`,
          borderColor: app.theme.surfaceBorder,
        }}
      >
        <div
          className="absolute left-6 top-4 h-32 w-32 rounded-full blur-3xl"
          style={{ backgroundColor: `${app.accent}18` }}
        />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-400">{visual.label}</p>
              <h4 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.03em] text-gray-950">
                {visual.title}
              </h4>
            </div>
            <div
              className="rounded-full px-3 py-1.5 text-xs font-medium"
              style={{
                backgroundColor: app.theme.surfaceStrong,
                color: app.accent,
              }}
            >
              {visual.badge}
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border bg-white/88 p-5 sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[1.2rem] border border-gray-100 bg-white p-4">
                <div className="grid grid-cols-4 gap-3">
                  {visual.swatches.map((swatch) => (
                    <div
                      key={swatch}
                      className="aspect-square rounded-[1rem] shadow-sm"
                      style={{ background: swatch }}
                    />
                  ))}
                </div>
                <div className="mt-4 rounded-[1rem] bg-gradient-to-r from-slate-900 via-orange-400 to-fuchsia-500 p-[1px]">
                  <div className="rounded-[calc(1rem-1px)] bg-white/90 px-4 py-3 text-sm font-medium text-gray-700">
                    Cinematic presets and manual controls
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-[1.2rem] border border-gray-100 bg-white p-4">
                {visual.sliders.map((slider) => (
                  <div key={slider.label}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-gray-600">
                        {slider.label}
                      </span>
                      <span className="text-xs font-medium text-gray-400">
                        {slider.value}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${slider.value}%`,
                          backgroundImage: app.theme.accentGrad,
                        }}
                      />
                    </div>
                  </div>
                ))}

                <div className="rounded-[1rem] border border-dashed border-gray-200 px-4 py-3 text-sm text-gray-500">
                  Before / after preview stays in view while grading.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderEqualizerVisual = (visual: Extract<AppFeatureVisual, { kind: "equalizer" }>) => {
    return (
      <div
        className="relative overflow-hidden rounded-[1.8rem] border p-6 sm:p-8"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(247,250,245,0.92) 100%)",
          boxShadow: `0 28px 60px ${app.accent}18`,
          borderColor: app.theme.surfaceBorder,
        }}
      >
        <div
          className="absolute inset-x-10 top-0 h-32 rounded-full blur-3xl"
          style={{ backgroundColor: `${app.accent}1c` }}
        />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-400">
                {visual.label}
              </p>
              <h4 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.03em] text-gray-950">
                {visual.title}
              </h4>
            </div>
            <div
              className="rounded-full px-3 py-1.5 text-xs font-medium"
              style={{
                backgroundColor: app.theme.surfaceStrong,
                color: app.accent,
              }}
            >
              {visual.badge}
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border bg-white/88 p-5 sm:p-6">
            <div className="flex items-end justify-between gap-2 sm:gap-3">
              {visual.bands.map((height, index) => (
                <div key={index} className="flex flex-1 flex-col items-center gap-3">
                  <div className="relative flex h-40 items-end sm:h-48">
                    <div className="w-px rounded-full bg-gray-200" style={{ height: "100%" }} />
                    <div
                      className="absolute left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white shadow-sm"
                      style={{
                        bottom: `${height}%`,
                        backgroundColor: app.accent,
                      }}
                    />
                  </div>
                  <span className="text-[11px] font-medium text-gray-400">
                    {visual.bandLabels[index]}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {visual.chips.map((preset, index) => (
                <span
                  key={preset}
                  className="rounded-full px-3 py-2 text-xs font-medium"
                  style={{
                    backgroundColor:
                      index === 0 ? app.accent : "rgba(15,23,42,0.05)",
                    color: index === 0 ? "#ffffff" : "#4b5563",
                  }}
                >
                  {preset}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLibraryVisual = (visual: Extract<AppFeatureVisual, { kind: "library" }>) => {
    return (
      <div
        className="relative overflow-hidden rounded-[1.8rem] border p-6 sm:p-8"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(247,250,245,0.92) 100%)",
          boxShadow: `0 28px 60px ${app.accent}16`,
          borderColor: app.theme.surfaceBorder,
        }}
      >
        <div
          className="absolute left-[-8%] top-[-8%] h-40 w-40 rounded-full blur-3xl"
          style={{ backgroundColor: `${app.accent}16` }}
        />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-400">
                {visual.label}
              </p>
              <h4 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.03em] text-gray-950">
                {visual.title}
              </h4>
            </div>
            <div
              className="rounded-full px-3 py-1.5 text-xs font-medium"
              style={{
                backgroundColor: app.theme.surfaceStrong,
                color: app.accent,
              }}
            >
              {visual.badge}
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border bg-white/88 p-5 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-3">
              {visual.collections.map((playlist) => (
                <div
                  key={playlist.title}
                  className="rounded-[1.2rem] p-4 text-white shadow-sm"
                  style={{ backgroundImage: playlist.tone }}
                >
                  <p className="mt-14 text-lg font-semibold tracking-[-0.03em]">
                    {playlist.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {visual.items.map((track) => (
                <div
                  key={track.title}
                  className="flex items-center gap-4 rounded-[1.15rem] border border-gray-100 bg-white px-4 py-3"
                >
                  <div
                    className="h-11 w-11 rounded-[0.9rem]"
                    style={{ backgroundImage: app.theme.accentGrad }}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-950">
                      {track.title}
                    </p>
                    <p className="truncate text-xs text-gray-500">{track.meta}</p>
                  </div>
                  <span className="text-xs font-medium text-gray-400">
                    {track.length}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderFeatureVisual = (feature: AppFeature) => {
    if (feature.visual?.kind === "timeline") {
      return renderTimelineVisual(feature.visual);
    }

    if (feature.visual?.kind === "grading") {
      return renderGradingVisual(feature.visual);
    }

    if (feature.visual?.kind === "equalizer") {
      return renderEqualizerVisual(feature.visual);
    }

    if (feature.visual?.kind === "library") {
      return renderLibraryVisual(feature.visual);
    }

    if (feature.mockup) {
      return (
        <div
          className="relative overflow-hidden rounded-[1.8rem] border bg-white/82 shadow-card"
          style={{
            boxShadow: `0 0 40px ${app.accent}30`,
            borderColor: app.theme.surfaceBorder,
          }}
        >
          <Image
            src={feature.mockup}
            alt={`${app.name} - ${feature.headline}`}
            width={720}
            height={520}
            className="h-auto w-full"
          />
        </div>
      );
    }

    return (
      <div
        className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-[1.8rem] border p-8"
        style={{
          backgroundImage: app.theme.accentGrad,
          borderColor: app.theme.surfaceBorder,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),transparent_62%)]" />
        <div className="relative w-full max-w-sm rounded-[1.8rem] bg-white/92 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
          <h4 className="text-3xl font-semibold tracking-[-0.03em] text-gray-950">
            {feature.headline}
          </h4>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            {feature.description}
          </p>
          {feature.pills?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {feature.pills.map((pill) => (
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
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-2xl mb-16">
          <SectionLabel>Key Features</SectionLabel>
          <h2 className="mt-4 text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold text-gray-950 leading-[0.98] tracking-[-0.04em]">
            Powerful features, presented clearly.
          </h2>
          <p className="mt-4 max-w-lg text-body-md leading-relaxed text-gray-600">
            The core tools, shown with less noise.
          </p>
        </div>

        <div className="space-y-10">
          {app.features.map((feature, index) => {
            return (
              <div
                key={feature.headline}
                className="rounded-[2.2rem] p-6 md:p-8 lg:p-10"
                style={{
                  backgroundImage:
                    index % 2 === 0
                      ? `linear-gradient(135deg, rgba(255,255,255,0.96) 0%, ${app.theme.surfaceStrong} 100%)`
                      : `linear-gradient(135deg, ${app.theme.surfaceStrong} 0%, rgba(255,255,255,0.96) 100%)`,
                  border: `1px solid ${app.theme.surfaceBorder}`,
                }}
              >
                <div
                  className={`grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] ${
                    index % 2 === 1 ? "lg:[&>div:first-child]:order-last" : ""
                  }`}
                >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold"
                      style={{
                        background: app.theme.accentGrad,
                        color: "#ffffff",
                      }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-[clamp(1.55rem,2.4vw,2.35rem)] font-bold text-gray-950 tracking-[-0.03em]">
                    {feature.headline}
                  </h3>
                  <p className="max-w-md text-body-md leading-relaxed text-gray-600">
                    {feature.description}
                  </p>

                  {feature.pills && feature.pills.length > 0 ? (
                    <div className="flex flex-wrap gap-3 pt-1">
                      {feature.pills.map((pill) => (
                        <span
                          key={pill}
                          className="rounded-full border px-4 py-2 text-sm font-medium"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.72)",
                            color: app.accent,
                            borderColor: app.theme.surfaceBorder,
                          }}
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="relative">
                  <div
                    className="absolute inset-[-22px] rounded-[2rem] blur-3xl"
                    style={{ backgroundImage: app.theme.accentGrad, opacity: 0.55 }}
                  />
                  {renderFeatureVisual(feature)}
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
