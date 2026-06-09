# Container-Sicherheitskonzept

Dieses Dokument beschreibt die Sicherheitsmaßnahmen für Entwicklung und
Produktion der Junkideas-Website. Es dient zugleich als Audit- und
Compliance-Nachweis.

## 1. Image-Sicherheit

### Vertrauenswürdiges Base-Image

Die Dockerfiles verwenden das offizielle `node:26-alpine`-Image. Alpine enthält
weniger Pakete als ein vollständiges Linux-Image und reduziert dadurch die
Angriffsfläche.

Die Image-Versionen werden wöchentlich durch Dependabot überwacht. Updates
werden als Pull Requests eingereicht und erst nach erfolgreichem Build und Scan
übernommen. Für besonders strenge Produktionsumgebungen sollte das Base-Image
zusätzlich auf einen geprüften SHA256-Digest festgelegt werden.

### Reproduzierbare Installation

Abhängigkeiten werden mit `npm ci` anhand der `package-lock.json` installiert.
Dadurch werden im Build exakt die dokumentierten Versionen verwendet.

### Multi-Stage-Build

Das Produktions-Dockerfile besteht aus drei Stufen:

1. `dependencies`: installiert alle für den Build benötigten Pakete.
2. `builder`: erstellt den Next.js-Standalone-Build.
3. `runner`: enthält ausschließlich den minimalen Server, statische Dateien und
   öffentliche Assets.

Compiler, Quellcode und Entwicklungswerkzeuge gelangen nicht in das finale
Image. Das verringert Image-Größe und Angriffsfläche.

### Automatisierte Scans

Der Workflow `.github/workflows/container-security.yml` führt aus:

- `npm audit` für bekannte Schwachstellen in Produktionsabhängigkeiten
- einen vollständigen Next.js-Build
- einen Docker-Build
- einen Trivy-Scan auf hohe und kritische Schwachstellen
- Upload der Ergebnisse in GitHub Code Scanning

Zusätzlich sollte regelmäßig geprüft werden, ob GitHub Actions auf unveränderbare
Commit-SHAs gepinnt werden können. Das reduziert Supply-Chain-Risiken durch
veränderte Action-Tags.

## 2. Laufzeitsicherheit

### Nicht-Root-Benutzer

Das Produktionsimage startet nach dem Build mit `USER node`. Compose erzwingt
zusätzlich UID und GID `1000:1000`. Eine kompromittierte Anwendung erhält damit
keine Root-Rechte im Container.

### Minimale Berechtigungen

Die Produktions- und Entwicklungskonfigurationen entfernen alle Linux-
Capabilities:

```yaml
cap_drop:
  - ALL
security_opt:
  - no-new-privileges:true
```

Die Website benötigt keine zusätzlichen Kernel-Berechtigungen.

### Schreibgeschütztes Dateisystem

In Produktion ist das Root-Dateisystem schreibgeschützt. Nur zwei begrenzte,
flüchtige RAM-Dateisysteme sind schreibbar:

- `/tmp` für temporäre Laufzeitdaten
- `/app/.next/cache` für Next.js-Bildoptimierung

Beide Mounts verwenden `noexec` und `nosuid`. Änderungen verschwinden beim
Neustart des Containers.

### Ressourcenbegrenzungen

Die Produktionskonfiguration begrenzt:

- Arbeitsspeicher auf 512 MB
- CPU auf 0,5 Kerne
- Prozesse auf 100

Dadurch kann ein fehlerhafter oder angegriffener Container den Host nicht
unbegrenzt belasten.

## 3. Audit, Logging und Compliance

### Logging

Die Anwendung schreibt Logs ausschließlich auf Standardausgabe und
Standardfehler. Docker sammelt diese Logs mit dem `json-file`-Treiber. Rotation
begrenzt die Logs auf drei Dateien mit jeweils maximal 10 MB.

Für eine größere Umgebung sollten die Logs an ein zentrales System wie Grafana
Loki, Elasticsearch oder das Logging des Cloud-Anbieters weitergeleitet werden.
Zugriffe auf Logs müssen rollenbasiert beschränkt werden.

### Regelmäßige Audits

| Intervall | Prüfung | Verantwortlich |
| --- | --- | --- |
| Bei jedem Push/PR | Build, `npm audit`, Image-Scan | GitHub Actions |
| Wöchentlich | Geplanter Security-Workflow, Dependabot | Repository-Team |
| Monatlich | Container-Konfiguration und offene Findings prüfen | Betrieb |
| Nach Sicherheitsvorfall | Logs sichern, Image neu bauen, Maßnahmen dokumentieren | Incident-Team |

### Umgang mit Findings

1. Finding nach Schwere und Erreichbarkeit bewerten.
2. Betroffene Abhängigkeit oder Base-Image aktualisieren.
3. Build und Scans erneut ausführen.
4. Ausnahme nur mit Begründung, Verantwortlichem und Ablaufdatum dokumentieren.
5. Produktionsimage neu bauen und austauschen; bestehende Images nicht
   nachträglich verändern.

### Audit-Nachweise

Als Nachweise dienen:

- Git-Historie und Pull-Request-Reviews
- GitHub-Actions-Protokolle
- Code-Scanning-Ergebnisse
- Dependabot-Pull-Requests
- dieses Sicherheitskonzept

## 4. Bekannte Grenzen

- Docker-Secrets sind aktuell nicht erforderlich, da die Website keine
  Zugangsdaten benötigt. Spätere Secrets dürfen nicht in Images, Compose-Dateien
  oder Git eingecheckt werden.
- Der Entwicklungscontainer ist wegen Quellcode-Mounts absichtlich
  beschreibbar. Er ist nicht für den Produktionsbetrieb geeignet.
- Vor einem öffentlichen Produktionsbetrieb müssen Hosting, Backups,
  TLS-Konfiguration, zentrale Logs und Alarmierung für die tatsächliche
  Zielumgebung geprüft werden.
