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
        <div className="nav-items">
          {links.map((link) => (
            <Link
              className={`nav-link ${activeSection === link.href.slice(2) ? "nav-link-active" : ""}`}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
