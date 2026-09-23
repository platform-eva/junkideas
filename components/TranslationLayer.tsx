"use client";

import { useEffect } from "react";

const translations: Record<string, string> = {
  "Projekte": "Projects",
  "Kollaborationen": "Collaborations",
  "Live": "Live",
  "Über mich": "About",
  "Kontakt": "Contact",
  "Impressum": "Legal Notice",
  "Datenschutz": "Privacy",
  "E-Mail": "Email",
  "DE / EN": "DE / EN",
  "Bärbel Junk · Music & Film Artist": "Bärbel Junk · Music & Film Artist",
  "Aus Schnapsideen": "From sudden ideas",
  "werden": "become",
  "Geschichten.": "stories.",
  "Filme, Musik und Theater über Begegnungen, Erinnerungen und Abenteuer zwischen Deutschland und Bolivien.": "Films, music and theatre about encounters, memories and adventures between Germany and Bolivia.",
  "Aktuelle Projekte ansehen": "View current projects",
  "Scrollen": "Scroll",
  "Eigene Projekte": "Original Projects",
  "Filme zwischen Erinnerung, Musik und Begegnung.": "Films between memory, music and encounter.",
  "Kollaborationen ↓": "Collaborations ↓",
  "Film im Fokus": "Featured Film",
  "Bolivien & Deutschland · 2023": "Bolivia & Germany · 2023",
  "Ein interkultureller experimenteller Kurzfilm, entstanden aus Begegnungen, Bewegung und Musik zwischen Bolivien und Deutschland.": "An intercultural experimental short film shaped by encounters, movement and music between Bolivia and Germany.",
  "YouTube Video": "YouTube Video",
  "ansehen": "watch",
  "Beim Laden des Videos werden Daten an YouTube übertragen. Weitere Informationen stehen in der Datenschutzerklärung.": "Loading the video transfers data to YouTube. More information is available in the privacy policy.",
  "YouTube-Video laden": "Load YouTube video",
  "Auszeichnungen": "Awards",
  "Pressebeitrag lesen ↗": "Read press feature ↗",
  "Deutschland & Bolivien · 2026": "Germany & Bolivia · 2026",
  "Ein experimentelles autobiografisches Dokumentarfilmprojekt über Erinnerung, Herkunft und die Geschichten, die ein Kleid in sich trägt.": "An experimental autobiographical documentary project about memory, origin and the stories carried by a dress.",
  "YouTube Teaser": "YouTube Teaser",
  "Der Teaser ist auf YouTube abrufbar. Beim Öffnen werden Daten an YouTube übertragen.": "The teaser is available on YouTube. Opening it transfers data to YouTube.",
  "Teaser bei YouTube öffnen ↗": "Open teaser on YouTube ↗",
  "Status": "Status",
  "Der Film befindet sich aktuell in Entwicklung. Weitere Einblicke, Beteiligte und Termine werden hier ergänzt.": "The film is currently in development. Further insights, contributors and dates will be added here.",
  "Gemeinsam entwickeln": "Developing Together",
  "Film, Musik und Bühne entstehen im Austausch. Jede Zusammenarbeit öffnet einen anderen Blick auf die Idee.": "Film, music and stage work grow through exchange. Every collaboration opens a new view of the idea.",
  "Auf Instagram folgen": "Follow on Instagram",
  "Ein Spielfilm in Entwicklung. Koproduktion und Musik: Bärbel Junk.": "A feature film in development. Co-production and music: Bärbel Junk.",
  "Bolivien, 2026": "Bolivia, 2026",
  "In Entwicklung": "In Development",
  "Musiktheater": "Music Theatre",
  "Ein Kindermusiktheater der Künstlergruppe Die Glorreichen Fünf.": "A children's music theatre piece by the artist group Die Glorreichen Fünf.",
  "Stück entdecken": "Discover the piece",
  "Die Glorreichen Fünf": "Die Glorreichen Fünf",
  "Szenisch-musikalische Lesung": "Staged Musical Reading",
  "Eine szenisch-musikalische Lesung zum Kinderbuch von Tabea Michel.": "A staged musical reading based on the children's book by Tabea Michel.",
  "Buch entdecken": "Discover the book",
  "Nach dem Kinderbuch von Tabea Michel": "Based on the children's book by Tabea Michel",
  "Live-Termine": "Live Dates",
  "Screenings · Musik · Theater": "Screenings · Music · Theatre",
  "Neue Termine sind in Planung.": "New dates are being planned.",
  "Aktuell gibt es keine öffentlichen Termine. Neue Screenings, Konzerte und Aufführungen werden hier veröffentlicht.": "There are currently no public dates. New screenings, concerts and performances will be published here.",
  "Ausgewählte Rückblicke": "Selected Past Events",
  "Screenings · Konzerte · Aufführungen": "Screenings · Concerts · Performances",
  "Screening": "Screening",
  "Experimenteller Kurzfilm · Bolivien & Deutschland": "Experimental short film · Bolivia & Germany",
  "Lesung & Musik": "Reading & Music",
  "Beim Frisör": "At the Hairdresser",
  "Musik. Film. Begegnungen.": "Music. Film. Encounters.",
  "Idee · Regie · Produktion · Musik": "Idea · Direction · Production · Music",
  "Ihre Projekte wachsen aus persönlichen Fragen und interkulturellen Begegnungen. Sie entwickelt Ideen, führt Regie, produziert und komponiert.": "Her projects grow from personal questions and intercultural encounters. She develops ideas, directs, produces and composes.",
  "Junkideas ist der Raum für eigene Projekte und Kollaborationen: für experimentelle Filme, Musik und szenisches Erzählen.": "Junkideas is the space for original projects and collaborations: for experimental films, music and scenic storytelling.",
  "Was mich antreibt": "What Drives Me",
  "Mich interessieren die leisen Momente, in denen Menschen, Erinnerungen und Orte plötzlich miteinander sprechen.": "I am interested in the quiet moments when people, memories and places suddenly begin to speak to each other.",
  "Film und Musik sind für mich Wege, diesen Begegnungen eine Form zu geben und sie mit anderen zu teilen.": "For me, film and music are ways of giving these encounters a form and sharing them with others.",
  "Eine persönliche Handschrift": "A Personal Signature",
  "Erinnerung beginnt dort, wo Musik, Bilder und Begegnungen einander eine Geschichte erzählen.": "Memory begins where music, images and encounters tell each other a story.",
  "Kontakt aufnehmen": "Get in touch",
  "Letzte Szene · Neue Idee": "Final Scene · New Idea",
  "Lass uns": "Let's",
  "etwas machen.": "make something.",
  "Vielleicht beginnt das nächste Projekt mit einem Gespräch, einer Melodie oder einer ungewöhnlichen Frage.": "Maybe the next project begins with a conversation, a melody or an unusual question.",
  "Instagram öffnen ↗": "Open Instagram ↗",
  "Rechtliches": "Legal",
  "Angaben gemäß § 5 DDG": "Information according to § 5 DDG",
  "Redaktionell verantwortlich": "Editorial Responsibility",
  "Bärbel Junk, Anschrift wie oben": "Bärbel Junk, address as above",
  "Urheberrecht": "Copyright",
  "Die durch die Seitenbetreiberin erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Eine Nutzung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen Zustimmung der jeweiligen Rechteinhaberin oder des jeweiligen Rechteinhabers.": "The content and works created by the site operator are subject to German copyright law. Third-party contributions are marked as such. Any use beyond the limits of copyright law requires prior consent from the respective rights holder.",
  "Datenschutzerklärung": "Privacy Policy",
  "1. Verantwortliche Stelle": "1. Controller",
  "2. Bereitstellung und Hosting": "2. Provision and Hosting",
  "3. Cookies, Analyse und Kontaktformulare": "3. Cookies, Analytics and Contact Forms",
  "4. Externe Links": "4. External Links",
  "5. YouTube-Videos": "5. YouTube Videos",
  "6. Rechte betroffener Personen": "6. Rights of Data Subjects",
  "7. Stand und Änderungen": "7. Version and Updates",

  "Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter technisch erforderliche Verbindungsdaten, insbesondere IP-Adresse, Zeitpunkt, aufgerufene Datei, Referrer-URL, Browsertyp und Betriebssystem. Die Verarbeitung erfolgt zur sicheren Bereitstellung der Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.": "When this website is accessed, the hosting provider processes technically required connection data, in particular IP address, time of access, requested file, referrer URL, browser type and operating system. This processing is carried out to provide the website securely on the basis of Art. 6(1)(f) GDPR.",
  "Die Website wird voraussichtlich über Vercel Inc. bereitgestellt. Dabei kann eine Verarbeitung von Daten in den USA stattfinden. Vor Veröffentlichung müssen der tatsächliche Hosting-Anbieter und die verwendeten Datenschutzvereinbarungen geprüft werden.": "The website is expected to be hosted via Vercel Inc. This may involve processing data in the USA. Before publication, the actual hosting provider and the applicable data protection agreements should be checked.",
  "Diese Website verwendet derzeit keine Analyse- oder Marketingdienste, setzt keine nicht erforderlichen Cookies und enthält kein Kontaktformular. Ein Cookie-Banner ist nach dem aktuellen technischen Stand deshalb nicht erforderlich.": "This website currently does not use analytics or marketing services, does not set non-essential cookies and does not include a contact form. Based on the current technical setup, a cookie banner is therefore not required.",
  "Die Website verlinkt auf externe Angebote, insbesondere YouTube, Instagram und Projektseiten Dritter. Beim Anklicken gelten die Datenschutzbestimmungen des jeweiligen Anbieters. Inhalte dieser Dienste werden erst nach ausdrücklicher Zustimmung geladen oder extern geöffnet.": "The website links to external services, in particular YouTube, Instagram and third-party project pages. When these links are clicked, the privacy policies of the respective providers apply. Content from these services is loaded only after explicit consent or opened externally.",
  "Auf dieser Website können Videos des Anbieters YouTube geladen werden. Eingebettete Videos werden erst nach ausdrücklicher Zustimmung geladen. Beim Laden eines Videos oder Anklicken eines YouTube-Links wird eine Verbindung zu YouTube hergestellt; dabei können insbesondere IP-Adresse und technische Nutzungsdaten übertragen werden. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.": "Videos from YouTube can be loaded on this website. Embedded videos are loaded only after explicit consent. When a video is loaded or a YouTube link is clicked, a connection to YouTube is established; in particular, IP address and technical usage data may be transmitted. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.",
  "Betroffene Personen haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Zudem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.": "Data subjects have the right, within the limits of the legal requirements, to access, rectification, erasure, restriction of processing, data portability and objection. They also have the right to lodge a complaint with a data protection supervisory authority.",
  "Stand: Juni 2026. Diese Datenschutzerklärung muss angepasst werden, wenn weitere Dienste, eingebettete Medien, Formulare, Analysewerkzeuge oder Cookies eingesetzt werden.": "Version: June 2026. This privacy policy must be updated if additional services, embedded media, forms, analytics tools or cookies are used.",
  "Diese Vorlage ersetzt keine individuelle Rechtsberatung. Der tatsächliche Hosting-Anbieter und neue externe Dienste müssen vor Veröffentlichung geprüft und ergänzt werden.": "This template does not replace individual legal advice. The actual hosting provider and any new external services should be checked and added before publication.",
};

const originalText = new WeakMap<Text, string>();

function normalize(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function walkTextNodes(root: ParentNode) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return normalize(node.textContent ?? "") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes: Text[] = [];
  let node = walker.nextNode();
  while (node) {
    nodes.push(node as Text);
    node = walker.nextNode();
  }
  return nodes;
}

function applyLanguage(language: "de" | "en") {
  document.documentElement.dataset.lang = language;

  for (const node of walkTextNodes(document.body)) {
    if (!originalText.has(node)) {
      originalText.set(node, node.textContent ?? "");
    }

    const original = originalText.get(node) ?? "";
    if (language === "de") {
      node.textContent = original;
      continue;
    }

    const trimmed = normalize(original);
    const translated = translations[trimmed];
    if (translated) {
      node.textContent = original.replace(trimmed, translated);
    }
  }
}

export default function TranslationLayer() {
  useEffect(() => {
    const saved = window.localStorage.getItem("junkideas-language") === "en" ? "en" : "de";
    applyLanguage(saved);

    const handleLanguageChange = (event: Event) => {
      const language = (event as CustomEvent<"de" | "en">).detail;
      applyLanguage(language);
    };

    window.addEventListener("junkideas-language-change", handleLanguageChange);
    return () => window.removeEventListener("junkideas-language-change", handleLanguageChange);
  }, []);

  return null;
}
