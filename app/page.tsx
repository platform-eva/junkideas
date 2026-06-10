import Link from "next/link";
import Image from "next/image";
import DetailMoodImage from "@/components/DetailMoodImage";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import VimeoEmbed from "@/components/VimeoEmbed";

const featuredProjects = [
  {
    title: "The Secret of the Charango",
    category: "Experimental Short Film",
    year: "Bolivia & Germany, 2023",
    description:
      "An intercultural film shaped by movement, original music and encounters across two countries.",
    href: "#charango",
    accent: "sun" as const,
    label: "Film & Details",
    imageSrc: "/images/charango-poster.webp",
    imageAlt: "Poster des Films The Secret of the Charango",
  },
  {
    title: "My mother's dress",
    category: "Autobiographical Documentary",
    year: "Germany & Bolivia, 2026",
    description:
      "An experimental documentary project about memory, inheritance and the stories carried by a dress.",
    href: "#mothers-dress",
    accent: "rose" as const,
    label: "Teaser & Details",
    status: "Work in progress",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="projects-home page-shell py-20 sm:py-28" id="projects">
        <div className="projects-heading flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Eigene Projekte</p>
            <h2 className="section-title max-w-3xl">
              Filme zwischen Erinnerung, Musik und Begegnung.
            </h2>
          </div>
          <Link className="text-link shrink-0" href="#collaborations">
            Kollaborationen <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <p className="projects-index" aria-hidden="true">Selected works · 01—02</p>
        <div className="featured-project-grid grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="charango-detail page-shell pb-20 sm:pb-28" id="charango">
        <DetailMoodImage
          imageAlt="Poster des Films The Secret of the Charango"
          imageSrc="/images/charango-poster.webp"
        />
        <div className="mb-10 grid gap-8 border-t border-ink/20 pt-12 lg:grid-cols-[0.45fr_1.55fr]">
          <div>
            <p className="eyebrow">Film im Fokus</p>
            <p className="mt-4 text-sm text-ink/45">Bolivien & Deutschland · 2023</p>
          </div>
          <div>
            <h2 className="section-title max-w-5xl">The Secret of the Charango</h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">
              Ein interkultureller experimenteller Kurzfilm, entstanden aus
              Begegnungen, Bewegung und Musik zwischen Bolivien und Deutschland.
            </p>
          </div>
        </div>

        <VimeoEmbed title="The Secret of the Charango" videoId="835266930" />

        <div className="charango-info mt-12 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow mb-6">Credits</p>
            <dl className="credits-list">
              <div><dt>Idea, Direction & Production</dt><dd>Bärbel Junk</dd></div>
              <div><dt>Cinematography</dt><dd>Felipe Quiroga Álvarez Daza</dd></div>
              <div><dt>Choreography & Dance Performance</dt><dd>Marie Haußdörfer</dd></div>
              <div><dt>Original Music</dt><dd>Bernardo Rosado Ramos</dd></div>
              <div><dt>Production Bolivia</dt><dd>Paola Jhanitsa Cáceres</dd></div>
              <div><dt>Costume Design</dt><dd>Isabel Jurado Chávez</dd></div>
              <div><dt>Production Assistant Bolivia & Driver</dt><dd>Eulogio Huaqui Ticona</dd></div>
              <div><dt>Production Assistant Germany</dt><dd>Florian Federl</dd></div>
              <div><dt>Post Production / Color Correction</dt><dd>Luís Tapia Heredia ICG (Alborcine)</dd></div>
              <div><dt>Music Recording</dt><dd>Daniel Prieto</dd></div>
              <div><dt>Music Mastering</dt><dd>Omar Corrales Cerff (Gatoverde Studio)</dd></div>
              <div><dt>Still Photography Bolivia</dt><dd>Daniel Quiroga Miranda, Alice Michelle Coronel Almaraz</dd></div>
              <div><dt>Still Photography Germany</dt><dd>Jan-Peter Schulz</dd></div>
              <div><dt>Poster Design</dt><dd>Maria Callejas Guimaraes</dd></div>
              <div><dt>Special Appearance</dt><dd>Heidrun Haußdörfer</dd></div>
            </dl>
          </div>
          <div>
            <div className="detail-panel">
              <p className="eyebrow">Auszeichnungen</p>
              <ul className="awards-list">
                <li>Best Experimental Short · Liverpool Indie Awards 2024</li>
                <li>Official Selection · Budapest Movie Awards 2023</li>
                <li>Official Selection · Prague Music Video Awards 2023</li>
              </ul>
              <a
                className="text-link mt-8"
                href="https://online.anyflip.com/pxdko/xcfa/mobile/index.html"
                rel="noreferrer"
                target="_blank"
              >
                Pressebeitrag lesen ↗
              </a>
            </div>
            <blockquote className="gratitude-note">
              With gratitude for all the lovely people in Bolivia and Germany,
              friends, supporters and crowd-funders all over the world, our
              cherished hosts and my beloved family, without whom this project
              never would have been possible.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="film-detail page-shell pb-20 sm:pb-28" id="mothers-dress">
        <DetailMoodImage />
        <div className="mb-10 grid gap-8 border-t border-ink/20 pt-12 lg:grid-cols-[0.45fr_1.55fr]">
          <div>
            <p className="eyebrow">Work in Progress</p>
            <p className="mt-4 text-sm text-ink/45">Deutschland & Bolivien · 2026</p>
          </div>
          <div>
            <h2 className="section-title max-w-5xl">My mother&apos;s dress</h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">
              Ein experimentelles autobiografisches Dokumentarfilmprojekt über
              Erinnerung, Herkunft und die Geschichten, die ein Kleid in sich
              trägt.
            </p>
          </div>
        </div>
        <VimeoEmbed
          embedEnabled={false}
          externalUrl="https://vimeo.com/1122993615"
          title="My mother's dress · Teaser"
          videoId="1122993615"
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow mb-6">Credits</p>
            <dl className="credits-list">
              <div><dt>Idea, Direction & Music</dt><dd>Bärbel Junk</dd></div>
              <div><dt>Cinematography</dt><dd>Felipe Quiroga Alvarez Daza</dd></div>
            </dl>
          </div>
          <div className="detail-panel">
            <p className="eyebrow">Status</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/60">
              Der Film befindet sich aktuell in Entwicklung. Weitere Einblicke,
              Beteiligte und Termine werden hier ergänzt.
            </p>
          </div>
        </div>
      </section>

      <section className="all-projects-section page-shell pb-20 sm:pb-28" id="collaborations">
        <div className="collaborations-heading">
          <div>
            <p className="eyebrow">Gemeinsam entwickeln</p>
            <h2 className="font-display text-4xl tracking-[-0.04em]">Kollaborationen</h2>
          </div>
          <p>
            Film, Musik und Bühne entstehen im Austausch. Jede Zusammenarbeit
            öffnet einen anderen Blick auf die Idee.
          </p>
        </div>
        <div className="collaborations-grid grid gap-6 lg:grid-cols-3">
          <ProjectCard
            accent="blue"
            category="Film"
            description="Ein Spielfilm in Entwicklung. Koproduktion und Musik: Bärbel Junk."
            href="https://www.instagram.com/pianoman.lapelicula/"
            label="Auf Instagram folgen"
            status="In Entwicklung"
            title="Pianoman by Felipe Quiroga"
            year="Bolivien, 2026"
          />
          <ProjectCard
            accent="green"
            category="Musiktheater"
            description="Ein Kindermusiktheater der Künstlergruppe Die Glorreichen Fünf."
            href="http://www.henrike-baumgart.de/?q=content/von-uempfen-struempfen-und-keinhoernern"
            imageAlt="Illustration zum Musiktheater Von Ümpfen, Strümpfen und (K)Einhörnern"
            imageSrc="/images/Keinhörner.jpg"
            label="Stück entdecken"
            title="Von Ümpfen, Strümpfen und (K)Einhörnern"
            year="Die Glorreichen Fünf"
          />
          <ProjectCard
            accent="sun"
            category="Szenisch-musikalische Lesung"
            description="Eine szenisch-musikalische Lesung zum Kinderbuch von Tabea Michel."
            href="https://verlag-andreaschroeder.com/shop/ols/products/beim-friseur"
            imageAlt="Buchcover Beim Friseur von Tabea Michel und Josephine Raab"
            imageSrc="/images/beim Friseur.png"
            label="Buch entdecken"
            title="Beim Frisör"
            year="Nach dem Kinderbuch von Tabea Michel"
          />
        </div>
      </section>

      <section className="live-section page-shell py-20 sm:py-28" id="live">
        <div className="live-panel grid gap-10 border-y border-ink/20 py-12 lg:grid-cols-[0.45fr_1.55fr]">
          <div>
            <p className="eyebrow">Live-Termine</p>
            <p className="mt-4 text-sm text-ink/45">Screenings · Musik · Theater</p>
          </div>
          <div>
            <h2 className="section-title max-w-4xl">
              Neue Termine sind in Planung.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/60">
              Aktuell gibt es keine öffentlichen Termine. Neue Screenings,
              Konzerte und Aufführungen werden hier veröffentlicht.
            </p>
          </div>
        </div>
        <div className="live-archive">
          <div className="live-archive-heading">
            <p className="eyebrow">Ausgewählte Rückblicke</p>
            <p>Screenings · Konzerte · Aufführungen</p>
          </div>
          <div className="live-archive-list">
            <article>
              <span>Screening</span>
              <h3>The Secret of the Charango</h3>
              <p>Experimenteller Kurzfilm · Bolivien & Deutschland</p>
            </article>
            <article>
              <span>Musiktheater</span>
              <h3>Von Ümpfen, Strümpfen und (K)Einhörnern</h3>
              <p>Die Glorreichen Fünf</p>
            </article>
            <article>
              <span>Lesung & Musik</span>
              <h3>Beim Frisör</h3>
              <p>Szenisch-musikalische Lesung</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-home page-shell py-20 sm:py-28" id="about">
        <div className="grid gap-8 border-b border-ink/20 pb-12 lg:grid-cols-[0.45fr_1.55fr]">
          <p className="eyebrow">Über mich</p>
          <div>
  <h2 className="about-heading">
    Bärbel Junk
  </h2>
  <p className="about-subheading">
    Musik. Film. Begegnungen.
  </p>
</div>
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
              Junkideas ist der Raum für eigene Projekte und Kollaborationen:
              für experimentelle Filme, Musik und szenisches Erzählen.
            </p>
          </div>
        </div>
        <div className="about-drive">
          <p className="eyebrow">Was mich antreibt</p>
          <div>
            <p>
              Mich interessieren die leisen Momente, in denen Menschen,
              Erinnerungen und Orte plötzlich miteinander sprechen.
            </p>
            <p>
              Film und Musik sind für mich Wege, diesen Begegnungen eine Form
              zu geben und sie mit anderen zu teilen.
            </p>
          </div>
        </div>
      </section>

      <section className="feature-statement signature-statement border-y border-ink/15">
        <div className="page-shell py-20 sm:py-28">
          <p className="signature-kicker">Eine persönliche Handschrift</p>
          <blockquote>
            Erinnerung beginnt dort, wo Musik, Bilder und Begegnungen
            einander eine Geschichte erzählen.
          </blockquote>
          <div className="signature-meta">
            <p>
              Junkideas is where curiosity becomes cinema, music and theatre.
            </p>
            <Link className="button-dark" href="#contact">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-home page-shell py-20 sm:py-28" id="contact">
        <p className="contact-endmark" aria-hidden="true">Letzte Szene · Neue Idee</p>
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
              Vielleicht beginnt das nächste Projekt mit einem Gespräch, einer
              Melodie oder einer ungewöhnlichen Frage.
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
