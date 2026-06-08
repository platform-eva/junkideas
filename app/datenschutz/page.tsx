import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <LegalPage eyebrow="Rechtliches" title="Datenschutzerklärung">
      <section>
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          Bärbel Junk
          <br />
          <strong>[VOLLSTÄNDIGE ANSCHRIFT EINTRAGEN]</strong>
          <br />
          E-Mail: <strong>[E-MAIL-ADRESSE EINTRAGEN]</strong>
        </p>
      </section>
      <section>
        <h2>2. Bereitstellung und Hosting</h2>
        <p>
          Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter technisch
          erforderliche Verbindungsdaten, insbesondere IP-Adresse, Zeitpunkt,
          aufgerufene Datei, Referrer-URL, Browsertyp und Betriebssystem. Die
          Verarbeitung erfolgt zur sicheren Bereitstellung der Website auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p>
          Die Website wird voraussichtlich über Vercel Inc. bereitgestellt.
          Dabei kann eine Verarbeitung von Daten in den USA stattfinden. Vor
          Veröffentlichung müssen der tatsächliche Hosting-Anbieter und die
          verwendeten Datenschutzvereinbarungen geprüft werden.
        </p>
      </section>
      <section>
        <h2>3. Cookies, Analyse und Kontaktformulare</h2>
        <p>
          Diese Website verwendet derzeit keine Analyse- oder Marketingdienste,
          setzt keine nicht erforderlichen Cookies und enthält kein
          Kontaktformular. Ein Cookie-Banner ist nach dem aktuellen technischen
          Stand deshalb nicht erforderlich.
        </p>
      </section>
      <section>
        <h2>4. Externe Links</h2>
        <p>
          Die Website verlinkt auf externe Angebote, insbesondere Vimeo,
          Instagram und Projektseiten Dritter. Beim Anklicken gelten die
          Datenschutzbestimmungen des jeweiligen Anbieters. Inhalte dieser
          Dienste werden derzeit nicht auf dieser Website eingebettet.
        </p>
      </section>
      <section>
        <h2>5. Vimeo-Video</h2>
        <p>
          Auf dieser Website kann ein Video des Anbieters Vimeo geladen werden.
          Eingebettete Videos werden erst nach ausdrücklicher Zustimmung
          geladen. Weitere Teaser sind lediglich extern verlinkt. Beim Laden
          eines Videos oder Anklicken eines Vimeo-Links wird eine Verbindung zu
          Vimeo hergestellt; dabei können insbesondere IP-Adresse und
          technische Nutzungsdaten übertragen werden. Anbieter ist Vimeo.com,
          Inc., 330 West 34th Street, New York, New York 10001, USA.
        </p>
      </section>
      <section>
        <h2>6. Rechte betroffener Personen</h2>
        <p>
          Betroffene Personen haben im Rahmen der gesetzlichen Voraussetzungen
          das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
          Verarbeitung, Datenübertragbarkeit und Widerspruch. Zudem besteht ein
          Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
        </p>
      </section>
      <section>
        <h2>7. Stand und Änderungen</h2>
        <p>
          Stand: Juni 2026. Diese Datenschutzerklärung muss angepasst werden,
          wenn weitere Dienste, eingebettete Medien, Formulare,
          Analysewerkzeuge oder Cookies eingesetzt werden.
        </p>
      </section>
      <aside className="legal-warning">
        Diese Vorlage ersetzt keine individuelle Rechtsberatung. Anschrift,
        E-Mail-Adresse und tatsächlicher Hosting-Anbieter müssen vor
        Veröffentlichung geprüft und ergänzt werden.
      </aside>
    </LegalPage>
  );
}
