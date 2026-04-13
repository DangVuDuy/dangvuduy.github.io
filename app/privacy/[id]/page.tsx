import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  appPrivacyEntries,
  getAppPrivacyApp,
  getAppPrivacyPolicy,
} from "../../../lib/privacy";

export async function generateStaticParams() {
  return appPrivacyEntries.map((entry) => ({ id: entry.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const app = getAppPrivacyApp(id);
  const policy = getAppPrivacyPolicy(id);

  if (!app || !policy) {
    return {
      title: "Privacy Policy — CloudLab",
    };
  }

  return {
    title: `${app.name} Privacy Policy — CloudLab`,
    description: policy.summary,
  };
}

export default async function AppPrivacyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const app = getAppPrivacyApp(id);
  const policy = getAppPrivacyPolicy(id);

  if (!app || !policy) {
    notFound();
  }

  return (
    <main className="flex-1 bg-white">
      <section className="border-b border-gray-100 bg-[linear-gradient(180deg,#f8f9f5_0%,#ffffff_100%)] py-24">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600">
            App privacy
          </div>
          <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-gray-950">
            {app.name}
          </h1>
          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            {policy.heroDescription ?? policy.summary}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="space-y-12 rounded-[2rem] border border-gray-200/80 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-10">
            <section>
              <h2 className="text-[1.7rem] font-semibold tracking-[-0.04em] text-gray-950">
                Overview
              </h2>
              <div className="mt-5 text-base leading-8 text-gray-600">
                <p>{policy.intro}</p>
              </div>
            </section>

            {policy.sections.map((section) => (
              <PolicySection
                key={section.title}
                title={section.title}
                paragraphs={section.paragraphs}
                bullets={section.bullets}
                cards={section.cards}
              />
            ))}

            <section>
              <h2 className="text-[1.7rem] font-semibold tracking-[-0.04em] text-gray-950">
                Contact
              </h2>
              <div className="mt-5 rounded-[1.5rem] border border-gray-200 bg-[#fafbfd] p-6">
                <p className="text-base leading-8 text-gray-600">
                  If you have any questions about this Privacy Policy or data
                  protection practices, please contact us at:
                </p>
                <a
                  href="mailto:support@cloudlab.one"
                  className="mt-4 inline-flex rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-950 transition-colors hover:border-gray-300"
                >
                  Email: support@cloudlab.one
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

function PolicySection({
  title,
  paragraphs,
  bullets,
  cards,
}: {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: Array<{ title: string; bullets: string[] }>;
}) {
  return (
    <section>
      <h2 className="text-[1.7rem] font-semibold tracking-[-0.04em] text-gray-950">
        {title}
      </h2>

      {paragraphs?.length ? (
        <div className="mt-5 space-y-4 text-base leading-8 text-gray-600">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {cards?.length ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.5rem] border border-gray-200 bg-[#fafbfd] p-6"
            >
              <h3 className="text-lg font-semibold text-gray-950">{card.title}</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-gray-600">
                {card.bullets.map((bullet) => (
                  <PolicyBullet key={bullet} text={bullet} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      {bullets?.length ? (
        <ul className="mt-6 space-y-4 text-base leading-8 text-gray-600">
          {bullets.map((bullet) => (
            <PolicyBullet key={bullet} text={bullet} />
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function PolicyBullet({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[linear-gradient(135deg,#9be13b,#8c67ff)]" />
      <span>{text}</span>
    </li>
  );
}
