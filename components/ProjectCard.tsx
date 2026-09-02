import Image from "next/image";

type ProjectCardProps = {
  title: string;
  titleEn?: string;
  category: string;
  categoryEn?: string;
  year: string;
  yearEn?: string;
  description: string;
  descriptionEn?: string;
  href: string;
  accent: "sun" | "rose" | "blue" | "green";
  label: string;
  labelEn?: string;
  status?: string;
  statusEn?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const accentClasses = {
  sun: "bg-sun",
  rose: "bg-coral",
  blue: "bg-sky",
  green: "bg-mint",
};

function TextPair({ de, en }: { de: string; en?: string }) {
  if (!en || en === de) {
    return de;
  }

  return (
    <>
      <span className="lang-de">{de}</span>
      <span className="lang-en">{en}</span>
    </>
  );
}

export default function ProjectCard({
  title,
  titleEn,
  category,
  categoryEn,
  year,
  yearEn,
  description,
  descriptionEn,
  href,
  accent,
  label,
  labelEn,
  status,
  statusEn,
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
        {status && (
          <span className="status-tag">
            <TextPair de={status} en={statusEn} />
          </span>
        )}
        <div className="project-poster-copy">
          <p><TextPair de={category} en={categoryEn} /></p>
          <h3><TextPair de={title} en={titleEn} /></h3>
          <span><TextPair de={year} en={yearEn} /></span>
        </div>
      </div>
      <div className="project-card-body flex flex-1 flex-col pt-6">
        <p className="mt-5 flex-1 leading-relaxed text-ink/70">
          <TextPair de={description} en={descriptionEn} />
        </p>
        <a
          className="text-link mt-7"
          href={href}
          rel={isInternal ? undefined : "noreferrer"}
          target={isInternal ? undefined : "_blank"}
        >
          <TextPair de={label} en={labelEn} /> <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
