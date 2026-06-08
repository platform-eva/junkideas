import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell grid gap-10 py-12 sm:grid-cols-2 sm:items-end">
        <div>
          <Logo footer />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/55">
            Independent film, original music and theatre by Bärbel Junk.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold uppercase tracking-wider sm:justify-end">
          <Link href="/#projects">Projekte</Link>
          <Link href="/#about">Über uns</Link>
          <a href="https://www.instagram.com/pianoman.lapelicula/" rel="noreferrer" target="_blank">
            Instagram
          </a>
        </div>
      </div>
      <div className="page-shell border-t border-ink/15 py-4 text-xs uppercase tracking-widest text-ink/45">
        © {new Date().getFullYear()} Junkideas
      </div>
    </footer>
  );
}
