import Link from "next/link";

export default function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="legal-page">
      <div className="page-shell">
        <Link className="text-link mb-14" href="/">
          ← Zurück zur Website
        </Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="section-title mt-5 max-w-5xl">{title}</h1>
        <div className="legal-content">{children}</div>
      </div>
    </main>
  );
}
