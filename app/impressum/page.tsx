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
          Walter-Friedrich-Str. 55
          <br />
          13125 Berlin
          <br />
          Heidenburgstr. 44
          <br />
          66879 Oberstaufenbach
          <br />
          Deutschland
        </p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>E-Mail: <a href="mailto:mail@junkideas.de">mail@junkideas.de</a></p>
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
      <section>
        <h2>Bildnachweise</h2>
        <p>
          Fotos und Bildmaterial auf dieser Website: Alice Michelle Coronel
          Almaraz und Thomas Hartmann, soweit nicht anders angegeben.
        </p>
      </section>
    </LegalPage>
  );
}
