import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <LegalPage eyebrow="Rechtliches" title="Impressum">
      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Bärbel Junk
          <br />
          <strong>[VOLLSTÄNDIGE STRASSE UND HAUSNUMMER EINTRAGEN]</strong>
          <br />
          <strong>[PLZ UND ORT EINTRAGEN]</strong>
          <br />
          Deutschland
        </p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>E-Mail: <strong>[E-MAIL-ADRESSE EINTRAGEN]</strong></p>
      </section>
      <section>
        <h2>Redaktionell verantwortlich</h2>
        <p>Bärbel Junk, Anschrift wie oben</p>
      </section>
      <section>
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiberin erstellten Inhalte und Werke
          unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als
          solche gekennzeichnet. Eine Nutzung außerhalb der Grenzen des
          Urheberrechts bedarf der vorherigen Zustimmung der jeweiligen
          Rechteinhaberin oder des jeweiligen Rechteinhabers.
        </p>
      </section>
      <aside className="legal-warning">
        Vor Veröffentlichung müssen die markierten Platzhalter durch eine
        ladungsfähige Anschrift und eine erreichbare E-Mail-Adresse ersetzt
        werden.
      </aside>
    </LegalPage>
  );
}
