import { AppData } from "../../lib/apps";
import { StoreButtonGroup } from "../ui/StoreButtonGroup";

interface PricingSectionProps {
  app: AppData;
}

export function PricingSection({ app }: PricingSectionProps) {
  const gridClassName =
    app.pricing.length === 2 ? "lg:grid-cols-2 lg:max-w-4xl lg:mx-auto" : "lg:grid-cols-3";

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label text-gray-500">Purchase</p>
          <h2 className="mt-3 sm:mt-4 text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(1.75rem,4vw,2.75rem)] lg:text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold text-gray-950 leading-[0.98] tracking-[-0.04em]">
            Pick the plan that matches how you use {app.name}.
          </h2>
          <p className="mt-4 text-body-md leading-relaxed text-gray-600">
            Clear entry pricing, clear upgrade path, and a cleaner explanation of what you unlock.
          </p>
        </div>

        <div className={`mt-8 sm:mt-12 grid gap-4 sm:gap-6 ${gridClassName}`}>
          {app.pricing.map((plan) => (
            <div
              key={plan.name}
              className="rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-7"
              style={{
                backgroundImage: plan.featured
                  ? app.theme.accentGrad
                  : "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.96) 100%)",
                border: `1px solid ${plan.featured ? "transparent" : app.theme.surfaceBorder}`,
                boxShadow: plan.featured
                  ? `0 28px 80px ${app.theme.accentGlow}`
                  : `0 18px 44px ${app.theme.accentGlow}`,
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: plan.featured ? "#ffffff" : app.accent,
                  }}
                />
                <p className={`text-sm font-medium ${plan.featured ? "text-white/82" : "text-gray-500"}`}>
                  {plan.name}
                </p>
              </div>

              <div className="mt-5">
                <div className="flex items-end gap-2">
                  <span className={`text-3xl sm:text-4xl font-bold tracking-[-0.04em] ${plan.featured ? "text-white" : "text-gray-950"}`}>
                    {plan.price}
                  </span>
                  {plan.period ? (
                    <span className={`pb-1 text-sm ${plan.featured ? "text-white/75" : "text-gray-500"}`}>
                      {plan.period}
                    </span>
                  ) : null}
                </div>
                <p className={`mt-4 text-sm leading-6 ${plan.featured ? "text-white/82" : "text-gray-600"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className={`mt-1 h-1.5 w-1.5 rounded-full ${plan.featured ? "bg-white" : "bg-gray-900"}`} />
                    <span className={`text-sm ${plan.featured ? "text-white/88" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <StoreButtonGroup
                  stores={app.stores}
                  trackingContext={`${app.id}:pricing:${plan.name.toLowerCase()}`}
                  primaryLabel={plan.ctaLabel}
                  useStoreNamesWhenMultiple={app.stores.length > 1}
                  stackOnMobile
                  fullWidthOnMobile
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
