import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { aboutIntro, aboutParagraphs, developerInfo } from "../../lib/about";
import { appCatalog } from "../../lib/apps";

export const metadata: Metadata = {
  title: "About — CloudLab",
  description: aboutIntro.summary,
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="border-b border-gray-100 bg-[linear-gradient(180deg,#f8f9f5_0%,#ffffff_100%)] py-24">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600">
            {aboutIntro.eyebrow}
          </div>
          <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-gray-950">
            {aboutIntro.title}
          </h1>
          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            {aboutIntro.summary}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-5">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-gray-600">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 pt-3">
              {appCatalog.map((app) => (
                <Link
                  key={app.id}
                  href={app.href}
                  className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-[#fafafd] px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-950"
                >
                  <Image
                    src={app.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-[0.7rem] object-cover"
                  />
                  {app.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-gray-200 bg-[#fafbfd] p-6 sm:p-8">
            <h2 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-gray-950">
              Developer Information
            </h2>
            <dl className="mt-5 divide-y divide-gray-200">
              {developerInfo.map((item) => (
                <div key={item.label} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-6">
                  <dt className="text-sm text-gray-500">{item.label}</dt>
                  <dd className="text-sm font-medium text-gray-950 sm:text-right">
                    {item.href ? (
                      <a href={item.href} className="underline underline-offset-4 hover:text-gray-700">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
