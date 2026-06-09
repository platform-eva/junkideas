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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 48);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

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
    <>
      <header className={`top-nav ${scrolled || menuOpen ? "top-nav-scrolled" : ""}`}>
        <nav className="top-nav-inner" aria-label="Feste Hauptnavigation">
          <Logo />
          <div className="top-nav-links">
            {links.map((link) => (
              <Link
                className={`top-nav-link ${activeSection === link.href.slice(2) ? "top-nav-link-active" : ""}`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
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
        </nav>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu-links">
          {links.map((link, index) => (
            <Link
              className={activeSection === link.href.slice(2) ? "mobile-menu-link-active" : ""}
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <aside className="hero-nav-panel" aria-label="Hero navigation">
        <div className="hero-nav-links">
          {links.map((link, index) => (
            <Link
              className={`hero-nav-link ${activeSection === link.href.slice(2) ? "hero-nav-link-active" : ""}`}
              href={link.href}
              key={link.href}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hero-nav-meta">
          <div aria-label="Social Media">
            <a href="https://www.instagram.com/pianoman.lapelicula/" rel="noreferrer" target="_blank">Instagram</a>
            <a href="#contact">E-Mail</a>
          </div>
          <p>DE / EN</p>
        </div>
      </aside>
    </>
  );
}
