import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — CloudLab",
};

export default function FAQPage() {
  return (
    <main className="flex-1">
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-display-lg font-bold text-gray-900">FAQ</h1>
          <p className="text-body-lg text-gray-600 mt-4">
            This page is coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
