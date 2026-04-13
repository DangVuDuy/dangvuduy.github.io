import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { appTermsEntries } from "../../lib/terms";

export const metadata: Metadata = {
  title: "Terms of Service — CloudLab",
  description:
    "CloudLab terms for the website and links to app-specific terms of service.",
};

export default function TermsPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="border-b border-gray-100 bg-[linear-gradient(180deg,#f8f9f5_0%,#ffffff_100%)] py-24">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600">
            CloudLab
          </div>
          <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-gray-950">
            Terms of Service
          </h1>
          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            This page covers the CloudLab website and links to app-specific
            terms where product behavior and supported integrations differ.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-8 px-6 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              title="Website terms"
              items={[
                "The CloudLab website is provided for product information, app discovery, and support access.",
                "Links to app stores and third-party services are subject to those services’ own terms and policies.",
                "We may update website content, product information, and support resources over time.",
              ]}
            />
            <InfoCard
              title="App-specific terms"
              items={[
                "Each app can have different service rules based on the features it provides and the third-party services it integrates with.",
                "Use the app-specific terms pages below to review how a product may be used and what responsibilities apply to the user.",
                "Contact support@cloudlab.one if you need clarification about a specific app’s terms.",
              ]}
            />
          </div>

          <div className="rounded-[2rem] border border-gray-200/80 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-10">
            <div className="max-w-2xl">
              <div className="text-sm font-medium uppercase tracking-[0.16em] text-gray-500">
                App terms
              </div>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-gray-950">
                Review terms by product.
              </h2>
              <p className="mt-4 text-base leading-8 text-gray-600">
                Product-specific terms are kept separate so each app can define
                its own supported behavior, permissions, and third-party service
                relationships.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {appTermsEntries.map((entry) => (
                <Link
                  key={entry.id}
                  href={entry.href}
                  className="group rounded-[1.6rem] border border-gray-200 bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)] transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-gray-500">App terms</div>
                      <h3 className="mt-2 text-[1.6rem] font-semibold tracking-[-0.04em] text-gray-950">
                        {entry.name}
                      </h3>
                    </div>
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-[1rem]"
                      style={{ backgroundColor: entry.accentLight }}
                    >
                      <Image
                        src={entry.icon}
                        alt={`${entry.name} icon`}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-[0.9rem] object-cover"
                      />
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-medium text-gray-700">
                    {entry.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {entry.summary}
                  </p>

                  <div className="mt-6 text-sm font-medium text-gray-950 transition-transform group-hover:translate-x-0.5">
                    Open terms →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-[1.6rem] border border-gray-200 bg-[#fafbfd] p-6">
      <h2 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-gray-950">
        {title}
      </h2>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[linear-gradient(135deg,#9be13b,#8c67ff)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
