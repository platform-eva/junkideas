"use client";

import { useId, useState } from "react";

type CreditsDisclosureProps = {
  children: React.ReactNode;
};

export default function CreditsDisclosure({ children }: CreditsDisclosureProps) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className={`credits-disclosure ${open ? "credits-disclosure-open" : ""}`}>
      <p className="eyebrow mb-6">Credits</p>
      <button
        aria-controls={contentId}
        aria-expanded={open}
        className="credits-disclosure-toggle"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        {open ? "Credits schließen ↑" : "Credits anzeigen ↓"}
      </button>
      <div className="credits-disclosure-content" id={contentId}>
        {children}
      </div>
    </div>
  );
}
