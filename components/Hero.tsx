import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <Image
        alt="Bärbel Junk in a wide landscape"
        className="hero-image"
        fill
        priority
        sizes="100vw"
        src="/images/baerbel-junk-portrait.png"
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Bärbel Junk · Music & Film Artist</p>
          <h1
            aria-label="Aus Schnapsideen werden Geschichten."
            className="hero-story"
          >
            <span className="hero-line">Aus Schnapsideen</span>
            <span className="hero-line">werden</span>
            <span className="hero-line hero-accent">Geschichten.</span>
          </h1>
          <div className="hero-rule" />
          <p className="hero-intro">
            Filme, Musik und Theater über Begegnungen, Erinnerungen und
            Abenteuer zwischen Deutschland und Bolivien.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link className="story-link" href="#projects">
              <span aria-hidden="true">▶</span> Aktuelle Projekte ansehen
            </Link>
          </div>
        </div>
      </div>
      <Link className="scroll-cue" href="#projects">
        Scrollen <span aria-hidden="true">↓</span>
      </Link>
    </section>
  );
}
