type ProjectCardProps = {
  title: string;
  category: string;
  year: string;
  description: string;
  href: string;
  accent: "sun" | "rose" | "blue" | "green";
  label: string;
  status?: string;
};

const accentClasses = {
  sun: "bg-sun",
  rose: "bg-coral",
  blue: "bg-sky",
  green: "bg-mint",
};

export default function ProjectCard({
  title,
  category,
  year,
  description,
  href,
  accent,
  label,
  status,
}: ProjectCardProps) {
  const isInternal = href.startsWith("#") || href.startsWith("/");

  return (
    <article className="project-card group flex h-full flex-col overflow-hidden">
      <div className={`project-visual ${accentClasses[accent]}`}>
        <span className="project-number" aria-hidden="true">
          {title.charAt(0)}
        </span>
        {status && <span className="status-tag">{status}</span>}
      </div>
      <div className="flex flex-1 flex-col pt-6">
        <p className="eyebrow mb-4">{category}</p>
        <h3 className="font-display text-3xl leading-none tracking-[-0.04em]">
          {title}
        </h3>
        <p className="mt-2 text-sm font-semibold text-ink/55">{year}</p>
        <p className="mt-5 flex-1 leading-relaxed text-ink/70">{description}</p>
        <a
          className="text-link mt-7"
          href={href}
          rel={isInternal ? undefined : "noreferrer"}
          target={isInternal ? undefined : "_blank"}
        >
          {label} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
