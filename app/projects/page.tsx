import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Film and music theatre projects by Junkideas.",
};

const films = [
  {
    title: "The Secret of the Charango",
    category: "Intercultural Experimental Short Film",
    year: "Bolivia & Germany, 2023",
    description:
      "Idea, direction and production by Bärbel Junk. With cinematography by Felipe Quiroga Álvarez Daza, choreography and dance by Marie Haußdörfer, and original music by Bernardo Rosado Ramos.",
    href: "https://vimeo.com/835266930?fl=ip&fe=ec",
    accent: "sun" as const,
    label: "Watch film",
  },
  {
    title: "My mother's dress",
    category: "Experimental Autobiographical Documentary",
    year: "Germany & Bolivia, 2026",
    description:
      "A documentary project in progress. Idea, direction and music by Bärbel Junk, with cinematography by Felipe Quiroga Alvarez Daza.",
    href: "https://vimeo.com/manage/videos/1122993615",
    accent: "rose" as const,
    label: "Watch teaser",
    status: "Work in progress",
  },
  {
    title: "Pianoman by Felipe Quiroga",
    category: "Film",
    year: "Bolivia, 2026",
    description:
      "A film project in progress with coproduction and music by Bärbel Junk.",
    href: "https://www.instagram.com/pianoman.lapelicula/",
    accent: "blue" as const,
    label: "Follow on Instagram",
    status: "Work in progress",
  },
];

const theatre = [
  {
    title: "Von Ümpfen, Strümpfen und (K)Einhörnern",
    category: "Music Theatre",
    year: "Die Glorreichen Fünf",
    description:
      "A children's music theatre production by the artist collective Die Glorreichen Fünf.",
    href: "http://www.henrike-baumgart.de/?q=content/von-uempfen-struempfen-und-keinhoernern",
    accent: "green" as const,
    label: "Discover piece",
  },
  {
    title: "Beim Frisör",
    category: "Scenic Musical Reading",
    year: "Based on the children's book by Tabea Michel",
    description:
      "A scenic musical reading that brings the playful world of the book to the stage.",
    href: "https://verlag-andreaschroeder.com/shop/ols/products/beim-friseur",
    accent: "sun" as const,
    label: "Discover book",
  },
];

export default function ProjectsPage() {
  return (
    <main className="page-shell py-20 sm:py-28">
      <div className="max-w-5xl">
        <p className="eyebrow">Projekte</p>
        <h1 className="section-title mt-5">
          Geschichten aus Bewegung, Klang und gemeinsamer Fantasie.
        </h1>
      </div>

      <section className="mt-20">
        <div className="mb-8 flex items-center gap-5">
          <h2 className="font-display text-4xl tracking-[-0.04em]">Film</h2>
          <div className="h-px flex-1 bg-ink/20" />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {films.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-wider">
          <a className="pill" href="https://online.anyflip.com/pxdko/xcfa/mobile/index.html" rel="noreferrer" target="_blank">
            Press: Charango ↗
          </a>
          <span className="pill">Best Experimental Short · Liverpool Indie Awards 2024</span>
          <span className="pill">Official Selection · Budapest Movie Awards 2023</span>
          <span className="pill">Official Selection · Prague Music Video Awards 2023</span>
        </div>
      </section>

      <section className="mt-24">
        <div className="mb-8 flex items-center gap-5">
          <h2 className="font-display text-4xl tracking-[-0.04em]">Musiktheater</h2>
          <div className="h-px flex-1 bg-ink/20" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {theatre.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
