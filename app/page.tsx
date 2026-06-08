import Link from "next/link";
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

      <section className="projects-home page-shell py-20 sm:py-28">
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title max-w-3xl">
              Films, music and stories that refuse to stay in one box.
            </h2>
          </div>
          <Link className="text-link shrink-0" href="/projects">
            All projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
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
            <Link className="button-dark" href="/about">
              About Bärbel
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
