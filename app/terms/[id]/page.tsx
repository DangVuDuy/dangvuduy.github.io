import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  appTermsEntries,
  getAppTermsApp,
  getAppTermsPolicy,
} from "../../../lib/terms";

export async function generateStaticParams() {
  return appTermsEntries.map((entry) => ({ id: entry.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const app = getAppTermsApp(id);
  const policy = getAppTermsPolicy(id);

  if (!app || !policy) {
    return {
      title: "Terms of Service — CloudLab",
    };
  }

  return {
    title: `${app.name} Terms of Service — CloudLab`,
    description: policy.summary,
  };
}

export default async function AppTermsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const app = getAppTermsApp(id);
  const policy = getAppTermsPolicy(id);

  if (!app || !policy) {
    notFound();
  }

  return (
    <main className="flex-1 bg-white">
      <section className="border-b border-gray-100 bg-[linear-gradient(180deg,#f8f9f5_0%,#ffffff_100%)] py-24">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600">
            App terms
          </div>
          <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-gray-950">
            {app.name}
          </h1>
          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            {policy.intro}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="space-y-12 rounded-[2rem] border border-gray-200/80 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-10">
            {policy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-[1.7rem] font-semibold tracking-[-0.04em] text-gray-950">
                  {section.title}
                </h2>

                {section.paragraphs?.length ? (
                  <div className="mt-5 space-y-4 text-base leading-8 text-gray-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}

                {section.bullets?.length ? (
                  <ul className="mt-6 space-y-4 text-base leading-8 text-gray-600">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[linear-gradient(135deg,#9be13b,#8c67ff)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
