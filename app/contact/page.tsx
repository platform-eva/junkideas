import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Junkideas.",
};

export default function ContactPage() {
  return (
    <main className="page-shell flex min-h-[calc(100svh-5rem)] items-center py-20 sm:py-28">
      <section className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(4.5rem,12vw,10rem)] leading-[0.82] tracking-[-0.07em]">
            LET&apos;S MAKE
            <span className="block text-coral">SOMETHING.</span>
          </h1>
        </div>
        <div className="border-l border-ink/20 pl-6 sm:pl-10">
          <p className="text-xl leading-relaxed">
            Interested in a collaboration, screening or conversation about a
            project?
          </p>
          <p className="mt-6 leading-relaxed text-ink/60">
            Contact details will be added shortly. In the meantime, follow the
            current film project Pianoman on Instagram.
          </p>
          <a
            className="button-dark mt-10 inline-flex"
            href="https://www.instagram.com/pianoman.lapelicula/"
            rel="noreferrer"
            target="_blank"
          >
            Open Instagram ↗
          </a>
        </div>
      </section>
    </main>
  );
}
