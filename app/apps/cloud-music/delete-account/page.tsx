import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getThemedApp } from "@/lib/app-theme";

export const metadata: Metadata = {
  title: "Cloud Music – Disconnect Accounts and Delete Data",
  description:
    "Instructions on how to disconnect your cloud storage accounts and manage data in Cloud Music.",
};

export default async function CloudMusicDeleteAccountPage() {
  const app = await getThemedApp("cloud-music");

  if (!app) {
    notFound();
  }

  return (
    <main className="flex-1 bg-white">
      {/* Hero section with same backdrop as /apps/cloud-music */}
      <section
        className="relative overflow-hidden pt-32 pb-20 border-b border-gray-100"
        style={{ backgroundImage: app.theme.heroBackdrop }}
      >
        <div
          className="absolute right-[-120px] top-[-80px] h-[520px] w-[520px] rounded-full blur-[120px] opacity-60"
          style={{ backgroundColor: app.accentLight }}
        />
        <div
          className="absolute left-[-100px] bottom-[-120px] h-[380px] w-[380px] rounded-full blur-[120px] opacity-70"
          style={{ backgroundColor: app.theme.surfaceStrong }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
          <div
            className="inline-flex items-center gap-2.5 rounded-full bg-white/80 px-3 py-1.5 backdrop-blur-sm text-sm font-medium"
            style={{
              border: `1px solid ${app.theme.surfaceBorder}`,
              color: app.accent,
            }}
          >
            <div className="h-5 w-5 overflow-hidden rounded-[0.45rem] shadow-sm">
              <Image
                src={app.icon}
                alt={`${app.name} icon`}
                width={20}
                height={20}
                className="w-full h-full object-cover"
              />
            </div>
            Cloud Music
          </div>
          <h1 className="mt-6 text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[0.98] tracking-[-0.05em] text-gray-950">
            Disconnect Accounts <br className="hidden sm:inline" /> & Delete Data
          </h1>
          <p className="mt-5 text-base leading-8 text-gray-700 sm:text-lg">
            Cloud Music does not create a separate Cloud Music account and does not store user files on our servers.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 bg-gray-50/50">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="space-y-12 rounded-[2.4rem] border border-gray-200/80 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.04)] sm:p-12">
            
            {/* Intro/Integration Info */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-gray-950">
                Cloud Integrations & OAuth
              </h2>
              <p className="text-base leading-8 text-gray-600">
                Cloud Music connects to cloud storage providers such as Google Drive, Dropbox, OneDrive, and Box using OAuth. Users may connect more than one cloud account to access their audio files.
              </p>
            </section>

            {/* How to disconnect */}
            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-gray-950">
                To disconnect a cloud account:
              </h2>
              <div className="grid gap-3.5">
                {[
                  "Open Cloud Music.",
                  "Go to Settings.",
                  "Open Connected Accounts.",
                  "Select the cloud account you want to remove.",
                  "Tap Disconnect or Log out.",
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm"
                      style={{ background: app.theme.accentGrad }}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-base leading-7 text-gray-700 font-medium">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Explain what happens */}
            <section className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/40 p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-gray-950">
                What happens when you disconnect?
              </h3>
              <p className="text-base leading-8 text-gray-600">
                Disconnecting a cloud account removes the locally stored sign-in token and account connection from your device. It does not delete files stored in your Google Drive, Dropbox, OneDrive, or Box account.
              </p>
            </section>

            {/* Deleting individual songs/files */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-gray-950">
                Managing and Deleting Files
              </h2>
              <p className="text-base leading-8 text-gray-600">
                If supported by the app, users can delete individual songs or files from within the app. Users can also manage or delete their cloud files directly in their cloud storage provider account.
              </p>
            </section>

            {/* Contact Support */}
            <section className="border-t border-gray-100 pt-10">
              <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-gray-950">
                Need Help?
              </h2>
              <div
                className="mt-5 rounded-2xl p-6 sm:p-8 border"
                style={{
                  borderColor: app.theme.surfaceBorder,
                  backgroundImage: app.theme.ctaBackground,
                }}
              >
                <p className="text-base leading-7 text-gray-700">
                  If you need help with account disconnection or data deletion, contact us at:
                </p>
                <a
                  href="mailto:support@cloudlab.one"
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-gray-950 px-5 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                >
                  support@cloudlab.one
                </a>
              </div>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}
