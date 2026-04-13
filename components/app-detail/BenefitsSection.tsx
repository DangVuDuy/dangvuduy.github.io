import { SectionLabel } from "../ui/SectionLabel";
import { AppData } from "../../lib/apps";

interface BenefitsSectionProps {
  app: AppData;
}

export function BenefitsSection({ app }: BenefitsSectionProps) {
  return (
    <section
      className="py-24"
      style={{ backgroundImage: app.theme.surface }}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-6">
            <SectionLabel>Why {app.name}</SectionLabel>
            <div>
              <h2 className="text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold text-gray-950 leading-[0.98] tracking-[-0.04em]">
                Built for the moments people use it most.
              </h2>
              <p className="mt-4 max-w-md text-body-md leading-relaxed text-gray-600">
                Practical benefits you notice every day.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {app.benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-[1.9rem] p-8 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.84)",
                  border: `1px solid ${app.theme.surfaceBorder}`,
                  boxShadow: `0 18px 44px ${app.theme.accentGlow}`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
                    style={{
                      background: app.theme.accentGrad,
                      boxShadow: `0 18px 36px ${app.theme.accentGlow}`,
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-[1.55rem] font-semibold tracking-[-0.03em] text-gray-950">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-body-md leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
