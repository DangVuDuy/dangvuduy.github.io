import { SectionLabel } from "../ui/SectionLabel";
import { AppData } from "../../lib/apps";

interface BenefitsSectionProps {
  app: AppData;
}

export function BenefitsSection({ app }: BenefitsSectionProps) {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      style={{ backgroundImage: app.theme.surface }}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-12">
          <div className="space-y-5 text-center lg:text-left lg:space-y-6">
            <SectionLabel>Why {app.name}</SectionLabel>
            <div>
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(1.75rem,4vw,2.75rem)] lg:text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold text-gray-950 leading-[0.98] tracking-[-0.04em]">
                Built for the moments people use it most.
              </h2>
              <p className="mt-4 max-w-md text-body-md leading-relaxed text-gray-600">
                Practical benefits you notice every day.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {app.benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-[1.5rem] sm:rounded-[1.9rem] p-5 sm:p-6 lg:p-8 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.84)",
                  border: `1px solid ${app.theme.surfaceBorder}`,
                  boxShadow: `0 18px 44px ${app.theme.accentGlow}`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl text-2xl sm:text-2xl md:text-3xl"
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

                <h3 className="mt-5 sm:mt-6 lg:mt-8 text-lg sm:text-xl lg:text-[1.55rem] font-semibold tracking-[-0.03em] text-gray-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-body-md leading-relaxed text-gray-600">
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
