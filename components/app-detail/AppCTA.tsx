import Link from "next/link";
import { AppData } from "../../lib/apps";
import { hasAppPrivacyPolicy } from "../../lib/privacy";
import { hasAppTermsPolicy } from "../../lib/terms";
import { SectionLabel } from "../ui/SectionLabel";
import { StoreButtonGroup } from "../ui/StoreButtonGroup";

interface AppCTAProps {
  app: AppData;
}

export function AppCTA({ app }: AppCTAProps) {
  const showPrivacyLink = hasAppPrivacyPolicy(app.id);
  const showTermsLink = hasAppTermsPolicy(app.id);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div
          className="overflow-hidden rounded-[2.4rem] px-8 py-16 md:px-12"
          style={{
            backgroundImage: app.theme.ctaBackground,
            border: `1px solid ${app.theme.surfaceBorder}`,
            boxShadow: `0 28px 90px ${app.theme.accentGlow}`,
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
            <div className="space-y-5 text-left">
              <SectionLabel>Ready to start?</SectionLabel>
              <h2 className="text-[clamp(2.1rem,3.8vw,3.1rem)] font-bold text-gray-950 leading-[0.98] tracking-[-0.04em]">
                Get {app.name} today
              </h2>
              <p className="max-w-md text-body-md leading-relaxed text-gray-600">
                Download {app.name} and start using it right away.
              </p>
            </div>

            <div
              className="rounded-[1.75rem] bg-white/82 p-6 text-left backdrop-blur-sm md:p-7"
              style={{ border: `1px solid ${app.theme.surfaceBorder}` }}
            >
              <p className="text-2xl font-semibold tracking-[-0.03em] text-gray-950">
                {app.tagline}
              </p>
              <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
                Choose your preferred store and get into the app in a few taps.
              </p>
              <div className="pt-6">
                <StoreButtonGroup
                  stores={app.stores}
                  trackingContext={`${app.id}:final-cta`}
                  primaryLabel="Get the app"
                />
              </div>
              {showPrivacyLink || showTermsLink ? (
                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                  {showPrivacyLink ? (
                    <Link
                      href={`/privacy/${app.id}`}
                      className="font-medium text-gray-950 transition-colors hover:text-gray-700"
                    >
                      Privacy policy →
                    </Link>
                  ) : null}
                  {showTermsLink ? (
                    <Link
                      href={`/terms/${app.id}`}
                      className="font-medium text-gray-950 transition-colors hover:text-gray-700"
                    >
                      Terms of service →
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
