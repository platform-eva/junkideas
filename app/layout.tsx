import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Junkideas · Film, Music & Theatre",
    template: "%s · Junkideas",
  },
  description:
    "Independent film, original music and theatre projects by Bärbel Junk.",
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
      </body>
    </html>
  );
}
