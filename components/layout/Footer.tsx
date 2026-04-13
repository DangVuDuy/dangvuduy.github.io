import Link from "next/link";
import { appSummaries } from "../../lib/apps";

const appsHref = { pathname: "/", hash: "apps" };

const productLinks = appSummaries.map((app) => ({
  href: app.href,
  label: app.name,
  tagline: app.tagline,
}));

const supportLinks = [
  {
    href: "/faq",
    label: "Help & FAQ",
    meta: "Common setup and troubleshooting answers",
    external: false,
  },
];

const resourceLinks = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0d1020] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0)_100%)]" />
      <div className="pointer-events-none absolute left-[-12rem] top-[-12rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(133,211,53,0.18)_0%,transparent_68%)]" />
      <div className="pointer-events-none absolute right-[-14rem] top-8 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(140,103,255,0.16)_0%,transparent_72%)]" />

      <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-20 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)_minmax(0,0.75fr)_minmax(0,0.9fr)]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78">
              <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#9be13b,#8c67ff)]" />
              Help
            </div>

            <h2 className="mt-6 text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-white">
              Need help with an app?
            </h2>

            <p className="mt-5 max-w-lg text-[1rem] leading-7 text-white/64">
              Get support, report bugs, and find answers for setup, billing, and
              store-related issues without leaving the product page.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:support@cloudlab.one"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-950 transition-transform hover:-translate-y-0.5"
              >
                support@cloudlab.one
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/48">
              Get help
            </h3>
            <div className="mt-5 space-y-4">
              {supportLinks.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group block rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 transition-colors hover:border-white/14 hover:bg-white/[0.05]"
                  >
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="mt-1 text-sm leading-6 text-white/54 transition-colors group-hover:text-white/68">
                      {item.meta}
                    </div>
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group block rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 transition-colors hover:border-white/14 hover:bg-white/[0.05]"
                  >
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="mt-1 text-sm leading-6 text-white/54 transition-colors group-hover:text-white/68">
                      {item.meta}
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/48">
              Featured apps
            </h3>
            <div className="mt-5 space-y-4">
              {productLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group block rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 transition-colors hover:border-white/14 hover:bg-white/[0.05]"
                >
                  <div className="text-sm font-medium text-white">{item.label}</div>
                  <div className="mt-1 text-sm leading-6 text-white/54 transition-colors group-hover:text-white/68">
                    {item.tagline}
                  </div>
                  <div className="mt-4 text-sm font-medium text-white/72 transition-colors group-hover:text-white">
                    View details
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href={appsHref}
                className="text-sm font-medium text-white/72 transition-colors hover:text-white"
              >
                View all apps
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/48">
              Resources
            </h3>
            <ul className="mt-5 space-y-3">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/62 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} CloudLab. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:support@cloudlab.one"
              className="transition-colors hover:text-white/70"
            >
              Support
            </a>
            <Link href="/privacy" className="transition-colors hover:text-white/70">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
