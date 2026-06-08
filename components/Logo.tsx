import Link from "next/link";

export default function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      aria-label="Junkideas home"
      className={`logo ${footer ? "logo-footer" : ""}`}
      href="/"
    >
      <span className="logo-word">junk</span>
      <span className="logo-bin" aria-hidden="true">
        <i className="film film-one" />
        <i className="film film-two" />
        <i className="film film-three" />
      </span>
      <span className="logo-word">ideas</span>
    </Link>
  );
}
