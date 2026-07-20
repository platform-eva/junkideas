import Image from "next/image";
import Link from "next/link";

export default function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      aria-label="Junkideas home"
      className={`logo ${footer ? "logo-footer" : ""}`}
      href="/"
    >
      <Image
        alt=""
        aria-hidden="true"
        className="logo-image"
        height={563}
        priority
        src="/images/junkideas-logo-gold-transparent.png"
        width={1268}
      />
    </Link>
  );
}
