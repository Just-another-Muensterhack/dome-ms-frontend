# dome.ms Design

Stand: 25.09.2026 · Grundlage: Logo aus `design/Logo/`, Farben von Sophia, Pitch-Präsentation und das Team-Feedback aus zwei Hedy-Runden.
Gilt für Präsentation, Dashboard, Website und alles, was nach außen geht.

---

## 1. Haltung

dome.ms ist ein Netz, das den Menschen in Münster gehört. Das Design soll sich deshalb nach Verein und Nachbarschaft anfühlen und nicht nach Tech-Startup oder Abo-Angebot.

- **Ruhig und klar:** Dunkelgrün trägt, Hellgrün setzt Akzente. Es gibt keine Neonflächen.
- **Bild vor Text:** Pro Ansicht nur eine Kernaussage, dazu höchstens zwei bis drei kurze Punkte.
- **Eigenständig:** Das Motiv ist die Kuppel aus dem Logo. Generische Pillen, Karten-Raster und KI-Labels lassen wir weg.

---

## 2. Farben

### Markenfarben

| Name             | Hex       | Rolle                                                                  |
| ---------------- | --------- | ---------------------------------------------------------------------- |
| Dunkelgrün       | `#143F33` | Hauptfarbe: Text auf hellem Grund, dunkle Flächen, Buttons             |
| Hellgrün         | `#CFE937` | Akzent: Punkte, Markierungen, Text und Icons **auf Dunkelgrün**        |
| Dunkelgrün Hover | `#002C21` | Hover und Pressed für dunkelgrüne Buttons (aus `web/style/colors.css`) |

### Light Mode

| Token        | Hex                      | Einsatz                                               |
| ------------ | ------------------------ | ----------------------------------------------------- |
| `background` | `#F3F0E6`                | Seitenhintergrund (warmes Papier, kein reines Weiß)   |
| `surface`    | `#E7E3D5`                | Flächen, Bögen, Kreise                                |
| `foreground` | `#143F33`                | Text, Linien, Icons                                   |
| `muted`      | `#5E6F68`                | Nebentext, Quellen, Legenden                          |
| `line`       | `rgba(20, 63, 51, 0.16)` | Trennlinien, Tabellenzeilen                           |
| `accent`     | `#CFE937`                | nur als Punkt oder Unterstreichung, nie als Textfarbe |

### Dark Mode

| Token        | Hex                         | Einsatz                                 |
| ------------ | --------------------------- | --------------------------------------- |
| `background` | `#143F33`                   | Seitenhintergrund                       |
| `surface`    | `#1E5244`                   | Flächen, Karten, Bögen                  |
| `foreground` | `#FFFFFF`                   | Text                                    |
| `muted`      | `#C7D8D0`                   | Nebentext                               |
| `line`       | `rgba(255, 255, 255, 0.20)` | Trennlinien                             |
| `accent`     | `#CFE937`                   | Hervorhebungen, aktive Zustände, Zahlen |

### Kontrast (geprüft nach WCAG)

| Kombination                       | Kontrast    | Urteil                                |
| --------------------------------- | ----------- | ------------------------------------- |
| Dunkelgrün auf Papier `#F3F0E6`   | ca. 10 : 1  | gut                                   |
| Weiß auf Dunkelgrün               | ca. 11 : 1  | gut                                   |
| Hellgrün auf Dunkelgrün           | ca. 8 : 1   | gut                                   |
| Muted `#5E6F68` auf Papier        | ca. 4,7 : 1 | reicht für Fließtext (AA)             |
| **Hellgrün auf Papier oder Weiß** | ca. 1,2 bis 1,4 : 1 | **nie für Text oder Icons verwenden** |

### Fremdfarben nur in Mockups

Browserfenster, WhatsApp oder Vereinsseiten in Mockups dürfen ihre echten Farben tragen, zum Beispiel WhatsApp-Grün oder das Blau einer Vereinsseite. Sie sollen echt wirken. Für dome.ms selbst sind diese Farben tabu.

---

## 3. Schrift

| Rolle               | Schrift | Gewicht | Größe Präsentation (1600 × 900) | Größe Dashboard |
| ------------------- | ------- | ------- | ------------------------------- | --------------- |
| Überschrift         | Figtree | 800     | 64 bis 76 px                    | 28 bis 32 px    |
| Zwischenüberschrift | Figtree | 700     | 28 bis 38 px                    | 18 bis 20 px    |
| Fließtext           | Figtree | 500     | 21 bis 34 px                    | 15 bis 16 px    |
| Nebentext, Quellen  | Figtree | 500     | 18 bis 20 px                    | 13 px           |

- Einbindung: Google Fonts, `Figtree:wght@400;500;600;700;800`. Für DSGVO im Produkt besser selbst hosten, so wie es `web/public/fonts/` heute schon mit Inter macht.
- Überschriften: `letter-spacing: -0.015em`, `line-height: 1.05`, `text-wrap: balance`.
- Keine Code- oder Monospace-Schrift für Inhalte. Das Feedback war eindeutig.
- **Offener Punkt:** Das Frontend nutzt aktuell Inter und Space Grotesk. Entweder übernimmt das Dashboard Figtree, oder die Präsentation wechselt auf Inter. Das sollten wir einmal entscheiden.

---

## 4. Logo

| Datei                                  | Einsatz                                       |
| -------------------------------------- | --------------------------------------------- |
| `design/Logo/domems_logo.svg`          | auf hellem Grund (Papier, Weiß)               |
| `design/Logo/domems_logo_darkmode.svg` | auf Dunkelgrün (weiße Form, hellgrüne Punkte) |

- Das Logo besteht aus Kuppel, Skyline von Münster, Sonne und Wortmarke. Wir verändern es nicht, wir färben es nicht um und schneiden nichts ab.
- Schutzraum: rundum mindestens die Höhe der Sonne (des hellgrünen Kreises).
- Mindestgröße: 32 px Breite. Darunter nur die Kuppel als Favicon.
- Hinweis für Web-Einbindung: Die SVGs aus Affinity enthalten eine `<!DOCTYPE>`-Zeile. Manche Plattformen lehnen das ab, deshalb Zeile 1 und 2 vor dem Einbinden entfernen. Bereinigt reicht es, die `<?xml …?>`- und die `<!DOCTYPE …>`-Zeile zu löschen, der Rest der Datei bleibt unverändert.

---

## 5. Formen und Motive

### Die Kuppel (Hauptmotiv)

Die Bogenform aus dem Logo ist unser Erkennungszeichen. Wir nutzen sie für hervorgehobene Flächen, zum Beispiel Schritte, Karten mit Handlungsaufforderung oder die eigene Spalte im Vergleich.

```css
border-radius: 200px 200px 22px 22px; /* groß, oben voll rund */
border-radius: 120px 120px 20px 20px; /* schmale Spalten */
```

### Der Punkt

Der hellgrüne Punkt aus dem Logo (Sonne und Punkt in „dome.ms“) ist unser Aufzählungszeichen und Statussignal.

```css
.dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #cfe937;
  box-shadow: 0 0 0 3px #143f33;
}
```

### Die Markierung

Nur für das wichtigste Wort oder den wichtigsten Satz einer Ansicht, höchstens einmal pro Seite.

```css
.mark {
  background: linear-gradient(
    transparent 62%,
    #cfe937 62%,
    #cfe937 92%,
    transparent 92%
  );
}
```

### Ecken

- Flächen und Karten: `border-radius: 14px` bis `22px`
- Buttons: `border-radius: 12px`
- **Keine** vollrunden Pillen (`999px`) für Labels oder Buttons. Das Team empfand sie als generisch.

---

## 6. Komponenten fürs Dashboard

| Komponente                      | Light                                                  | Dark                                  |
| ------------------------------- | ------------------------------------------------------ | ------------------------------------- |
| Primär-Button                   | Grund `#143F33`, Text `#CFE937`, Hover `#002C21`       | Grund `#CFE937`, Text `#143F33`       |
| Sekundär-Button                 | Rahmen 2 px `#143F33`, Text `#143F33`, transparent     | Rahmen 2 px `#FFFFFF`, Text `#FFFFFF` |
| Karte                           | Grund `#E7E3D5`, kein Schatten, Radius 16 px           | Grund `#1E5244`, Radius 16 px         |
| Tabelle                         | Zeilenlinie `line`, Kopf in 700, Zahlen `tabular-nums` | gleich, Linie hell                    |
| Status „geschützt / aktiv“      | Punkt Hellgrün mit dunkelgrünem Ring                   | Punkt Hellgrün                        |
| Status „Angriff erkannt“        | gestrichelter Rahmen `#143F33`, 12/9 px                | gestrichelter Rahmen `#FFFFFF`        |
| Bewertung ja / teilweise / nein | Kreis voll · halb · leer, 3 px Rahmen                  | gleich, in Hellgrün                   |

### Diagramme

- Hauptreihe: Dunkelgrün `#143F33` (Light) oder Hellgrün `#CFE937` (Dark)
- Zweite Reihe: `#5E6F68` (Light) oder `#C7D8D0` (Dark)
- Geblockte Anfragen oder Angriffe: gestrichelt statt in einer Warnfarbe, damit wir bei zwei Markenfarben bleiben
- Gitterlinien in `line`, Achsentext in `muted`

---

## 7. Umsetzung im Frontend (Tailwind v4)

Passt zur bestehenden Struktur in `web/style/colors.css`:

```css
@theme {
  --color-primary: #143f33;
  --color-on-primary: #cfe937;
  --color-primary-hover: #002c21;

  --color-background: #f3f0e6;
  --color-surface: #e7e3d5;
  --color-foreground: #143f33;
  --color-muted: #5e6f68;
  --color-line: rgb(20 63 51 / 0.16);
  --color-accent: #cfe937;

  --radius-card: 16px;
  --radius-button: 12px;
  --radius-arch: 200px 200px 22px 22px;

  --font-sans: "Figtree", system-ui, sans-serif;
}

@layer base {
  @variant dark {
    --color-primary: #cfe937;
    --color-on-primary: #143f33;
    --color-primary-hover: #e1f36b;

    --color-background: #143f33;
    --color-surface: #1e5244;
    --color-foreground: #ffffff;
    --color-muted: #c7d8d0;
    --color-line: rgb(255 255 255 / 0.2);
    --color-accent: #cfe937;
  }
}
```

`#E1F36B` als Hover für den hellgrünen Button im Dark Mode ist ein Vorschlag von mir und noch nicht mit dem Team abgestimmt.

---

## 8. Sprache und Inhalt

- **Gemeinschaftlich und aus Münster:** „wir“, „unser Netz“, „Partner aus Münster“. Wir schreiben nicht „unsere Kunden“ und nicht „Abo“.
- **Mitglied statt Kunde, Beitrag statt Preis.**
- **Kernaussage als Überschrift**, kein Themenetikett. Also „Petra ist Kassenwartin. Seit Freitag ist sie auch die IT-Abteilung.“ statt „Das Problem“.
- **Höchstens zwei bis drei Punkte pro Ansicht**, bei Präsentationen nacheinander einblenden.
- **Keine Gedankenstriche** (weder Halbgeviert- noch Geviertstrich). Stattdessen Komma, Punkt oder Doppelpunkt.
- **Zahlen nur mit Quelle** und in den Formulierungen aus dem Faktencheck (`context/pitch-uebergabe.md`).

---

## 9. Was wir nicht machen

Aus dem Team-Feedback vom 25.09.2026:

| Nicht                                                                       | Stattdessen                                         |
| --------------------------------------------------------------------------- | --------------------------------------------------- |
| Kleine Labels oben links wie „Was es heute gibt“                            | Die Überschrift trägt die Aussage                   |
| Vollrunde Pillen als Labels oder Buttons                                    | Kuppelform, Punkt oder schlichte Überschrift        |
| Weiße Kästen auf farbigem Grund                                             | Flächen in `surface`                                |
| Große Flächen in Hellgrün                                                   | Hellgrün nur als Akzent                             |
| Drei gleiche Karten nebeneinander (wirkt wie ein Tarifvergleich)            | Vergleichsraster oder Bildfolge                     |
| Pixel-Optik und eckige Rahmen                                               | Weiche Formen aus dem Logo                          |
| Code-Schrift                                                                | Figtree                                             |
| Lange Textblöcke                                                            | Ein Satz plus Bild                                  |
| Animationen, die nur in manchen Browsern laufen (etwa animierte SVG-Radien) | Einblenden über Deckkraft, das funktioniert überall |
