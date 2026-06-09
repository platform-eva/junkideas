# Junkideas

Portfolio-Website für Bärbel Junk, umgesetzt mit Next.js, TypeScript, Tailwind
CSS und dem App Router.

## Lokale Entwicklung ohne Docker

```bash
npm ci
npm run dev
```

Die Website ist danach unter <http://localhost:3000> erreichbar.

## Entwicklung mit Docker

```bash
docker compose -f compose.dev.yaml up --build
```

Der Quellcode wird eingebunden und Next.js lädt Änderungen automatisch neu.
Abhängigkeiten und der Next.js-Cache liegen in separaten Docker-Volumes.

## Gehärteter Produktionsbetrieb

```bash
docker compose up --build -d
docker compose ps
docker compose logs -f website
docker compose down
```

Die Produktionskonfiguration verwendet:

- einen minimalen Next.js-Standalone-Build
- einen nicht privilegierten Benutzer
- ein schreibgeschütztes Dateisystem
- entfernte Linux-Capabilities
- `no-new-privileges`
- CPU-, RAM- und Prozesslimits
- flüchtige, begrenzte RAM-Dateisysteme für `/tmp` und den Next.js-Bildcache
- begrenzte Docker-Logs und einen Healthcheck

## Sicherheitsprüfungen

```bash
npm audit --omit=dev --audit-level=high
docker build -t junkideas:local .
trivy image --severity HIGH,CRITICAL --ignore-unfixed junkideas:local
```

GitHub Actions führt diese Prüfungen bei Pushes, Pull Requests und wöchentlich
automatisch aus. Details stehen in [SECURITY.md](SECURITY.md).
