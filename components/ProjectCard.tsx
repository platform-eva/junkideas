import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  year: string;
  description: string;
  href: string;
  accent: "sun" | "rose" | "blue" | "green";
  label: string;
  status?: string;
  imageSrc?: string;
  imageAlt?: string;
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
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  const isInternal = href.startsWith("#") || href.startsWith("/");

  return (
    <article className="project-card group flex h-full flex-col overflow-hidden">
      <div className={`project-visual ${accentClasses[accent]} ${imageSrc ? "project-visual-image" : ""}`}>
        {imageSrc ? (
          <Image
            alt={imageAlt ?? ""}
            className="project-image"
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
            src={imageSrc}
          />
        ) : (
          <span className="project-number" aria-hidden="true">
            {title.charAt(0)}
          </span>
        )}
        {status && <span className="status-tag">{status}</span>}
        <div className="project-poster-copy">
          <p>{category}</p>
          <h3>{title}</h3>
          <span>{year}</span>
        </div>
      </div>
      <div className="project-card-body flex flex-1 flex-col pt-6">
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
