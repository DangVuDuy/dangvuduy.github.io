import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { appDataMap } from "../../lib/apps";
import { faqGroups } from "../../lib/faq";

export const metadata: Metadata = {
  title: "FAQ — CloudLab",
  description:
    "Answers to common questions about Cloud Music, VideoXpert, subscriptions, and support.",
};

export default function FAQPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="border-b border-gray-100 bg-[linear-gradient(180deg,#f8f9f5_0%,#ffffff_100%)] py-24">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600">
            Help Center
          </div>
          <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-gray-950">
            Frequently asked questions
          </h1>
          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Quick answers about our apps, subscriptions, and your data.
          </p>

          <nav aria-label="FAQ topics" className="mt-8 flex flex-wrap justify-center gap-2.5">
            {faqGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-950"
              >
                {group.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-14 px-6 sm:px-8">
          {faqGroups.map((group) => {
            const app = group.appId ? appDataMap[group.appId] : undefined;

            return (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <div className="flex items-center gap-3">
                  {app ? (
                    <Image
                      src={app.icon}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-[0.7rem] object-cover"
                    />
                  ) : null}
                  <h2 className="text-[1.75rem] font-semibold tracking-[-0.04em] text-gray-950">
                    {group.title}
                  </h2>
                  {app ? (
                    <Link
                      href={app.href}
                      className="ml-auto text-sm font-medium transition-transform hover:translate-x-0.5"
                      style={{ color: app.accent }}
                    >
                      View app →
                    </Link>
                  ) : null}
                </div>

                <div className="mt-6 divide-y divide-gray-200 rounded-[1.6rem] border border-gray-200 bg-white shadow-[0_14px_36px_rgba(15,23,42,0.04)]">
                  {group.items.map((item) => (
                    <details key={item.question} className="group px-6 py-5">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-medium text-gray-950 [&::-webkit-details-marker]:hidden">
                        <span>{item.question}</span>
                        <span
                          aria-hidden="true"
                          className="mt-0.5 text-xl leading-none text-gray-400 transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-gray-600">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="rounded-[1.6rem] border border-gray-200 bg-[#fafbfd] p-8 text-center">
            <h2 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-gray-950">
              Still need help?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Send us a message and we’ll get back to you. You can also review our{" "}
              <Link href="/privacy" className="font-medium text-gray-950 underline underline-offset-4">
                privacy policies
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="font-medium text-gray-950 underline underline-offset-4">
                terms
              </Link>
              .
            </p>
            <a
              href="mailto:support@cloudlab.one"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-gray-950 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              support@cloudlab.one
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
