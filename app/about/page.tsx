import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About Bärbel Junk and the creative practice behind Junkideas.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-shell py-20 sm:py-28">
        <div className="grid gap-8 border-b border-ink/20 pb-12 lg:grid-cols-[0.45fr_1.55fr]">
          <p className="eyebrow">Über uns</p>
          <h1 className="section-title max-w-5xl">
            Bärbel Junk arbeitet zwischen Film, Musik und Theater.
          </h1>
        </div>
        <div className="about-portrait mt-12">
          <Image
            alt="Bärbel Junk outdoors with a film camera"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 88rem"
            src="/images/baerbel-junk-portrait.png"
          />
          <div className="about-portrait-label">
            <span>01 / Portrait</span>
            <p>Bärbel Junk</p>
          </div>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="about-monogram">
            <span>BJ</span>
            <p>Idea · Direction · Production · Music</p>
          </div>
          <div>
          <div className="mt-10 grid gap-8 text-lg leading-relaxed text-ink/75 sm:grid-cols-2">
            <p>
              Her projects grow from personal questions and intercultural
              encounters. She develops ideas, directs, produces and composes,
              bringing together artists from different disciplines.
            </p>
            <p>
              Junkideas is the space for this collaborative practice: a place
              for experimental films, original music and scenic storytelling
              that stays open to surprise.
            </p>
          </div>
          <div className="mt-14 flex flex-wrap gap-3">
            {["Idea", "Direction", "Production", "Music", "Collaboration"].map(
              (item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ),
            )}
          </div>
          <Link className="button-dark mt-14 inline-flex" href="/projects">
            See the work
          </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
