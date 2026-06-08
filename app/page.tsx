import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

const featuredProjects = [
  {
    title: "The Secret of the Charango",
    category: "Experimental Short Film",
    year: "Bolivia & Germany, 2023",
    description:
      "An intercultural film shaped by movement, original music and encounters across two countries.",
    href: "https://vimeo.com/835266930?fl=ip&fe=ec",
    accent: "sun" as const,
    label: "Watch film",
  },
  {
    title: "My mother's dress",
    category: "Autobiographical Documentary",
    year: "Germany & Bolivia, 2026",
    description:
      "An experimental documentary project about memory, inheritance and the stories carried by a dress.",
    href: "https://vimeo.com/manage/videos/1122993615",
    accent: "rose" as const,
    label: "Watch teaser",
    status: "Work in progress",
  },
  {
    title: "Von Ümpfen, Strümpfen und (K)Einhörnern",
    category: "Music Theatre",
    year: "Die Glorreichen Fünf",
    description:
      "A playful music theatre production full of strange creatures, sounds and unexpected turns.",
    href: "http://www.henrike-baumgart.de/?q=content/von-uempfen-struempfen-und-keinhoernern",
    accent: "blue" as const,
    label: "Discover piece",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="projects-home page-shell py-20 sm:py-28" id="projects">
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title max-w-3xl">
              Films, music and stories that refuse to stay in one box.
            </h2>
          </div>
          <Link className="text-link shrink-0" href="#all-projects">
            Alle Projekte <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="all-projects-section page-shell pb-20 sm:pb-28" id="all-projects">
        <div className="mb-8 flex items-center gap-5">
          <h2 className="font-display text-4xl tracking-[-0.04em]">Weitere Projekte</h2>
          <div className="h-px flex-1 bg-ink/20" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            accent="blue"
            category="Film"
            description="Ein Filmprojekt in Entwicklung, mit Koproduktion und Musik von Bärbel Junk."
            href="https://www.instagram.com/pianoman.lapelicula/"
            label="Auf Instagram folgen"
            status="In Entwicklung"
            title="Pianoman by Felipe Quiroga"
            year="Bolivien, 2026"
          />
          <ProjectCard
            accent="sun"
            category="Szenisch-musikalische Lesung"
            description="Eine musikalische Lesung, die die spielerische Welt des Kinderbuchs auf die Bühne bringt."
            href="https://verlag-andreaschroeder.com/shop/ols/products/beim-friseur"
            label="Buch entdecken"
            title="Beim Frisör"
            year="Nach dem Kinderbuch von Tabea Michel"
          />
        </div>
      </section>

      <section className="about-home page-shell py-20 sm:py-28" id="about">
        <div className="grid gap-8 border-b border-ink/20 pb-12 lg:grid-cols-[0.45fr_1.55fr]">
          <p className="eyebrow">Über uns</p>
          <h2 className="section-title max-w-5xl">
            Bärbel Junk arbeitet zwischen Film, Musik und Theater.
          </h2>
        </div>
        <div className="about-portrait mt-12">
          <Image
            alt="Bärbel Junk in einer weiten Landschaft"
            className="object-cover"
            fill
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
            <p>Idee · Regie · Produktion · Musik</p>
          </div>
          <div className="grid gap-8 text-lg leading-relaxed text-ink/75 sm:grid-cols-2">
            <p>
              Ihre Projekte wachsen aus persönlichen Fragen und interkulturellen
              Begegnungen. Sie entwickelt Ideen, führt Regie, produziert und
              komponiert.
            </p>
            <p>
              Junkideas ist der Raum für diese kollaborative Praxis: für
              experimentelle Filme, eigene Musik und szenisches Erzählen.
            </p>
          </div>
        </div>
      </section>

      <section className="feature-statement border-y border-ink/15">
        <div className="page-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <p className="max-w-4xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-[-0.06em] sm:text-7xl">
            Junkideas is where curiosity becomes cinema, music and theatre.
          </p>
          <div className="max-w-md">
            <p className="mb-8 text-lg leading-relaxed text-ink/60">
              Created by Bärbel Junk in collaboration with artists across
              disciplines, languages and borders.
            </p>
            <Link className="button-dark" href="#contact">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-home page-shell py-20 sm:py-28" id="contact">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h2 className="mt-6 max-w-5xl font-display text-[clamp(4.5rem,12vw,10rem)] font-semibold uppercase leading-[0.82] tracking-[-0.07em]">
              Lass uns
              <span className="block text-coral">etwas machen.</span>
            </h2>
          </div>
          <div className="border-l border-ink/20 pl-6 sm:pl-10">
            <p className="text-xl leading-relaxed">
              Interesse an einer Zusammenarbeit, Vorführung oder einem Gespräch
              über ein Projekt?
            </p>
            <a
              className="button-dark mt-10 inline-flex"
              href="https://www.instagram.com/pianoman.lapelicula/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram öffnen ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
