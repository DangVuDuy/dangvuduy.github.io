import Link from "next/link";

interface HomeCTAProps {
  appCount: number;
}

export function HomeCTA({ appCount }: HomeCTAProps) {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="overflow-hidden rounded-[2.6rem] border border-gray-200/80 bg-[linear-gradient(135deg,rgba(244,250,225,0.9)_0%,rgba(255,255,255,0.96)_42%,rgba(239,233,255,0.94)_100%)] px-8 py-16 text-center shadow-[0_28px_80px_rgba(15,23,42,0.08)] md:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="text-label text-gray-500">Need help choosing?</div>
            <h2 className="mt-4 text-[clamp(2.4rem,4.6vw,4rem)] font-semibold tracking-[-0.05em] text-gray-950 leading-[0.96]">
              Start with the app that matches what you need right now.
            </h2>
            <p className="mt-5 text-body-lg leading-relaxed text-gray-600">
              Browse the current lineup, open the product detail page that fits,
              and reach support quickly if you are deciding between apps.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={{ pathname: "/", hash: "apps" }}
                className="inline-flex items-center justify-center rounded-full bg-gray-950 px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_rgba(15,23,42,0.16)] transition-transform hover:-translate-y-0.5"
              >
                Browse {appCount} apps
              </Link>
              <a
                href="mailto:support@cloudlab.one"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-950"
              >
                Contact support
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              {appCount} apps are live now, with room to add more products later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
