import { SectionLabel } from "../ui/SectionLabel";
import { AppData } from "../../lib/apps";
import { ThemedShowcaseFrame } from "./ThemedShowcaseFrame";

interface ScreenshotGalleryProps {
  app: AppData;
}

export function ScreenshotGallery({ app }: ScreenshotGalleryProps) {
  const featuredShot =
    app.screenshots[0] ?? app.hero.showcase[0] ?? app.heroMockup ?? app.icon;
  const supportingShots = app.screenshots.slice(1, 5);
  const leftColumnShots = supportingShots.filter((_, index) => index % 2 === 0);
  const rightColumnShots = supportingShots.filter((_, index) => index % 2 === 1);
  const hasSupportingShots = supportingShots.length > 0;
  const useTwoColumnDesktop = supportingShots.length > 0 && supportingShots.length <= 2;

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundImage: app.theme.galleryBackground }}
    >
      <div
        className="absolute inset-x-0 top-0 h-48 opacity-80 blur-3xl"
        style={{ background: app.theme.accentGrad }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-2xl">
          <SectionLabel>Screenshots</SectionLabel>
          <h2 className="mt-3 sm:mt-4 text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(1.75rem,4vw,2.75rem)] lg:text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold text-white leading-[0.98] tracking-[-0.04em]">
            {app.gallery.title}
          </h2>
          <p className="mt-4 max-w-xl text-body-md leading-relaxed text-white/70">
            {app.gallery.description}
          </p>
        </div>

        <div
          className="mt-8 sm:mt-12 rounded-[2rem] sm:rounded-[2.6rem] border p-4 sm:p-5 md:p-7 lg:p-9"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            borderColor: app.theme.surfaceBorder,
            boxShadow: `0 36px 90px ${app.accent}16`,
          }}
        >
          <div
            className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.2rem] border p-3 sm:p-4 md:p-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
              borderColor: app.theme.surfaceBorder,
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-40 blur-3xl"
              style={{ background: app.theme.accentGrad, opacity: 0.22 }}
            />

            <div
              className={`relative hidden md:min-h-[680px] md:items-center md:gap-6 lg:min-h-[720px] lg:gap-8 ${
                !hasSupportingShots
                  ? "md:flex md:justify-center"
                  : useTwoColumnDesktop
                    ? "md:grid md:grid-cols-[0.72fr_1fr]"
                    : "md:grid md:grid-cols-[0.86fr_1fr_0.86fr]"
              }`}
            >
              {hasSupportingShots ? (
                <div className="grid gap-5 self-center">
                  {leftColumnShots.map((screenshot, index) => (
                    <ThemedShowcaseFrame
                      key={screenshot}
                      app={app}
                      src={screenshot}
                      alt={`${app.name} supporting screenshot left ${index + 1}`}
                      width={198}
                      height={420}
                      frameWidth={useTwoColumnDesktop ? "190px" : index === 0 ? "198px" : "174px"}
                      radiusClassName="rounded-[1.7rem]"
                      imageRadiusClassName="rounded-[1.2rem]"
                      className="mx-auto"
                    />
                  ))}
                </div>
              ) : null}

              <ThemedShowcaseFrame
                app={app}
                src={featuredShot}
                alt={`${app.name} featured screenshot`}
                width={300}
                height={640}
                frameWidth="300px"
                radiusClassName="rounded-[2.1rem]"
                imageRadiusClassName="rounded-[1.5rem]"
                className="relative z-10 mx-auto"
              />

              {!useTwoColumnDesktop && rightColumnShots.length > 0 ? (
                <div className="grid gap-5 self-center">
                  {rightColumnShots.map((screenshot, index) => (
                    <ThemedShowcaseFrame
                      key={screenshot}
                      app={app}
                      src={screenshot}
                      alt={`${app.name} supporting screenshot right ${index + 1}`}
                      width={198}
                      height={420}
                      frameWidth={index === 0 ? "198px" : "174px"}
                      radiusClassName="rounded-[1.7rem]"
                      imageRadiusClassName="rounded-[1.2rem]"
                      className="mx-auto"
                    />
                  ))}
                </div>
              ) : null}
            </div>

            <div className="relative mx-auto max-w-[340px] md:hidden">
              <ThemedShowcaseFrame
                app={app}
                src={featuredShot}
                alt={`${app.name} featured screenshot`}
                width={290}
                height={620}
                frameWidth="min(100%, 280px)"
                frameWidthMobile="min(100%, 246px)"
                radiusClassName="rounded-[1.75rem] sm:rounded-[2rem]"
                imageRadiusClassName="rounded-[1.25rem] sm:rounded-[1.45rem]"
                className="mx-auto"
              />

              {hasSupportingShots ? (
                <div className="mx-auto mt-4 grid max-w-[320px] grid-cols-2 gap-3">
                  {supportingShots.map((screenshot) => (
                    <ThemedShowcaseFrame
                      key={screenshot}
                      app={app}
                      src={screenshot}
                      alt={`${app.name} supporting screenshot`}
                      width={156}
                      height={330}
                      frameWidth="min(100%, 148px)"
                      radiusClassName="rounded-[1.1rem] sm:rounded-[1.35rem]"
                      imageRadiusClassName="rounded-[0.85rem] sm:rounded-[1rem]"
                      className="mx-auto"
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
