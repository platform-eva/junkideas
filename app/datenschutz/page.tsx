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
          Walter-Friedrich-Str. 55, 13125 Berlin
          <br />
          Heidenburgstr. 44, 66879 Oberstaufenbach
          <br />
          E-Mail: <a href="mailto:baerbel.junk@gmx.de">baerbel.junk@gmx.de</a>
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
          Die Website verlinkt auf externe Angebote, insbesondere YouTube,
          Instagram und Projektseiten Dritter. Beim Anklicken gelten die
          Datenschutzbestimmungen des jeweiligen Anbieters. Inhalte dieser
          Dienste werden erst nach ausdrücklicher Zustimmung geladen oder
          extern geöffnet.
        </p>
      </section>
      <section>
        <h2>5. YouTube-Videos</h2>
        <p>
          Auf dieser Website können Videos des Anbieters YouTube geladen werden.
          Eingebettete Videos werden erst nach ausdrücklicher Zustimmung
          geladen. Beim Laden eines Videos oder Anklicken eines YouTube-Links
          wird eine Verbindung zu YouTube hergestellt; dabei können insbesondere
          IP-Adresse und technische Nutzungsdaten übertragen werden. Anbieter
          ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
          Irland.
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
        Diese Vorlage ersetzt keine individuelle Rechtsberatung. Der tatsächliche Hosting-Anbieter und neue externe Dienste müssen vor
        Veröffentlichung geprüft und ergänzt werden.
      </aside>
    </LegalPage>
  );
}
