"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const links = [
  { href: "/#projects", label: "Projekte" },
  { href: "/#collaborations", label: "Kollaborationen" },
  { href: "/#live", label: "Live" },
  { href: "/#about", label: "Über mich" },
  { href: "/#contact", label: "Kontakt" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["projects", "collaborations", "live", "about", "contact"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-nav">
      <nav className="main-nav" aria-label="Main navigation">
        <Logo />
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          className={`menu-toggle ${menuOpen ? "menu-toggle-open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
        </button>
        <div className={`nav-items ${menuOpen ? "nav-items-open" : ""}`}>
          <div className="nav-panel-links">
            {links.map((link, index) => (
              <Link
                className={`nav-link ${activeSection === link.href.slice(2) ? "nav-link-active" : ""}`}
                href={link.href}
                key={link.href}
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-number">{String(index + 1).padStart(2, "0")}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
          <div className="nav-panel-meta">
            <div className="nav-socials" aria-label="Social Media">
              <a href="https://www.instagram.com/pianoman.lapelicula/" rel="noreferrer" target="_blank">Instagram</a>
              <a href="#contact">E-Mail</a>
            </div>
            <p>DE / EN</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
