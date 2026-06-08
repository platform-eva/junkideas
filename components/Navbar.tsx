import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  { href: "/about", label: "Über uns" },
  { href: "/projects", label: "Projekte" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  return (
    <header className="site-nav">
      <nav className="main-nav" aria-label="Main navigation">
        <Logo />
        <div className="nav-items">
          {links.map((link) => (
            <Link className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <p className="nav-quote">Aus Schnapsideen werden Geschichten.</p>
        <p className="nav-credit">Film · Musik · Theater</p>
      </nav>
    </header>
  );
}
