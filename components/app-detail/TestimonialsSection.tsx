import { AppData } from "../../lib/apps";

interface TestimonialsSectionProps {
  app: AppData;
}

export function TestimonialsSection({ app }: TestimonialsSectionProps) {
  const starCount = Math.max(4, Math.round(app.rating.score));

  return (
    <section
      className="py-24"
      style={{ backgroundImage: app.theme.surface }}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label text-gray-500">User Signals</p>
          <h2 className="mt-4 text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold text-gray-950 leading-[0.98] tracking-[-0.04em]">
            Why people keep using {app.name}.
          </h2>
          <p className="mt-4 text-body-md leading-relaxed text-gray-600">
            The strongest value signals users tend to notice after the first few sessions.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {app.testimonials.map((testimonial) => (
            <div
              key={`${testimonial.author}-${testimonial.quote}`}
              className="rounded-[1.75rem] bg-white/82 p-6"
              style={{
                border: `1px solid ${app.theme.surfaceBorder}`,
                boxShadow: `0 18px 44px ${app.theme.accentGlow}`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ backgroundImage: app.theme.accentGrad }}
                >
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-950">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`text-sm ${index < starCount ? "text-amber-400" : "text-gray-200"}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
