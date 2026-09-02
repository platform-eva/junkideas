"use client";

import { useEffect, useState } from "react";

type Language = "de" | "en";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("de");

  useEffect(() => {
    const saved = window.localStorage.getItem("junkideas-language");
    const nextLanguage = saved === "en" ? "en" : "de";
    setLanguage(nextLanguage);
    document.documentElement.dataset.lang = nextLanguage;
  }, []);

  function chooseLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    document.documentElement.dataset.lang = nextLanguage;
    window.localStorage.setItem("junkideas-language", nextLanguage);
    window.dispatchEvent(new CustomEvent("junkideas-language-change", { detail: nextLanguage }));
  }

  return (
    <div className="language-toggle" aria-label="Sprache auswählen">
      <button
        aria-pressed={language === "de"}
        className={language === "de" ? "language-toggle-active" : ""}
        onClick={() => chooseLanguage("de")}
        type="button"
      >
        DE
      </button>
      <span aria-hidden="true">/</span>
      <button
        aria-pressed={language === "en"}
        className={language === "en" ? "language-toggle-active" : ""}
        onClick={() => chooseLanguage("en")}
        type="button"
      >
        EN
      </button>
    </div>
  );
}
