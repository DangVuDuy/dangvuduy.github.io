import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { siteUrl } from "../lib/site";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CloudLab — Premium Mobile Apps",
  description:
    "CloudLab creates beautiful, powerful mobile apps. Experience Cloud Music for offline listening and VideoXpert for professional video editing.",
  openGraph: {
    title: "CloudLab — Premium Mobile Apps",
    description:
      "CloudLab creates focused mobile apps for offline listening, editing, and practical creative workflows.",
    url: siteUrl,
    siteName: "CloudLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudLab — Premium Mobile Apps",
    description:
      "CloudLab creates focused mobile apps for offline listening, editing, and practical creative workflows.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} h-full bg-white antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
