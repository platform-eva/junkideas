import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TranslationLayer from "@/components/TranslationLayer";
import "./globals.css";

const siteUrl = "https://junkideas.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Junkideas · Bärbel Junk · Film, Musik & Performance",
    template: "%s · Junkideas",
  },
  description:
    "Junkideas ist das Portfolio von Bärbel Junk: Film, Musik, Performance und audiovisuelle Projekte zwischen Deutschland und Bolivien.",
  applicationName: "Junkideas",
  authors: [{ name: "Bärbel Junk" }],
  creator: "Bärbel Junk",
  publisher: "Junkideas",
  keywords: [
    "Bärbel Junk",
    "Junkideas",
    "The Secret of the Charango",
    "Das Kleid meiner Mutter",
    "Pianoman",
    "Film",
    "Musik",
    "Performance",
    "Bolivien",
  ],
  alternates: {
    canonical: "/",
    languages: {
      de: "/",
      en: "/?lang=en",
    },
  },
  openGraph: {
    title: "Junkideas · Bärbel Junk",
    description:
      "Film, Musik, Performance und audiovisuelle Projekte zwischen Deutschland und Bolivien.",
    url: siteUrl,
    siteName: "Junkideas",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/baerbel-junk-portrait.png",
        width: 1200,
        height: 800,
        alt: "Bärbel Junk in einer weiten Landschaft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junkideas · Bärbel Junk",
    description:
      "Film, Musik, Performance und audiovisuelle Projekte zwischen Deutschland und Bolivien.",
    images: ["/images/baerbel-junk-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <div className="site-content">{children}</div>
        <Footer />
        <TranslationLayer />
      </body>
    </html>
  );
}
