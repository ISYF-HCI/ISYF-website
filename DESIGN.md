---
name: ISYF @ Singapore
description: Hwa Chong heritage, the look of the ISYF-wide pages, taken from the clocktower building, its couplet panels and honour boards.
colors:
  plaster: "#f6f5f1"
  ink: "#1f1a19"
  ink-soft: "#4d4542"
  ink-mute: "#6b625e"
  rule: "#d6d0c6"
  crimson: "#8e1b1d"
  crimson-deep: "#6f1416"
  crimson-wash: "#f3e6e3"
  gilt: "#e6c878"
  gilt-soft: "#f1e0b0"
typography:
  display:
    fontFamily: "Libre Caslon Display, Libre Caslon Text, Georgia, serif"
    fontSize: "clamp(44px, 6vw, 76px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Libre Caslon Display, Libre Caslon Text, Georgia, serif"
    fontSize: "clamp(30px, 3.4vw, 44px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Libre Caslon Display, Libre Caslon Text, Georgia, serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.25
  serif-text:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.4
  engraved-name:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0.08em"
  lede:
    fontFamily: "Lexend, Helvetica Neue, Arial, sans-serif"
    fontSize: "19px"
    fontWeight: 350
    lineHeight: 1.6
  body:
    fontFamily: "Lexend, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 350
    lineHeight: 1.65
  label:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "15px"
    fontWeight: 400
    letterSpacing: "0.06em"
    fontFeature: "smcp"
rounded:
  corner: "2px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "2rem"
  lg: "3rem"
  section-top: "2.5rem"
  section-bottom: "4rem"
  content-width: "1100px"
components:
  plaque:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.plaster}"
    rounded: "{rounded.corner}"
    padding: "0 1.375rem"
    height: "48px"
  plaque-hover:
    backgroundColor: "{colors.crimson-deep}"
    textColor: "{colors.plaster}"
  text-link:
    textColor: "{colors.crimson}"
    height: "44px"
  honour-board:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.plaster}"
    padding: "clamp(3rem, 7vw, 6rem)"
  year-chip-current:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.plaster}"
    rounded: "{rounded.corner}"
    height: "32px"
  select:
    backgroundColor: "{colors.plaster}"
    textColor: "{colors.ink}"
    rounded: "{rounded.corner}"
    height: "40px"
  footer:
    backgroundColor: "{colors.crimson-deep}"
    textColor: "{colors.plaster}"
---

# Design System: ISYF @ Singapore

## Overview

**Creative North Star: "The Clocktower Honour Board"**

The ISYF-wide pages (home, history, laureates, the upcoming-edition page) borrow their materials from Hwa Chong Institution's clocktower building: cool plaster-white walls, crimson couplet panels lettered in gilt, and the school's honour boards where names are engraved year by year. The proof ISYF offers is lineage, so the system is built to set records: editions, years, themes and laureate names, ruled and ordered like a ledger rather than dressed up like a summit landing page.

Density is editorial and calm. Plaster carries most of every page; ink hairlines divide it into ruled sections with a heading column; crimson arrives either as small, deliberate marks (years, links, the one primary plaque) or as a whole field (the honour board). Gilt appears only on crimson. Corners are nearly square, nothing floats on shadows, and motion is limited to one settling moment on the honour board and small arrow nudges.

**Scope.** This world applies only where `layouts/template.vue` sets `#page.heritage`, which is every page that is not an archived edition. Archived edition sites (currently `/2026`) carry `#page.archived` and deliberately keep their original look from `assets/css/index.css` (Fraunces / Lexend, blue primary). Do not restyle them, and do not move heritage rules out of the `#page.heritage` scope: shared components (nav, footer, masthead, supporters) must render unchanged in archives. Heritage achieves its look by re-pointing the shared tokens (`--fg`, `--bg`, `--primary-*`, `--gray-*`, `--gold`) inside that scope.

**Yearly handover.** A new student committee takes over each year and edits only `data/` (`editions.js`, `scientists.js`, `site.js`). Every pattern here must accept any count of editions, laureates or years without hand tuning: lists flow into auto-fill grids and CSS columns, counts are computed from data, and no layout depends on a specific entry.

**Key Characteristics:**
- Cool plaster ground, lacquer-ink text, crimson as the single accent
- Gilt only ever on crimson
- Hairline rules (1px) and double gilt frames instead of cards and shadows
- Libre Caslon Display for headings and years; Libre Caslon Text for themes, names and small-caps labels; Lexend for running text
- 2px corners everywhere; no pills
- Data-driven lists that grow with each edition

## Colors

A restrained plaster-and-ink ground with one heritage crimson that either marks a detail or owns a whole field, and a gilt that lives only on that crimson.

### Primary
- **Couplet Crimson** (crimson): the accent. Edition years, text links, the primary plaque, the selected filter underline, the history timeline's lozenges, selection highlight and focus ring. As a field it fills the honour board.
- **Lacquer Crimson** (crimson-deep): the hover state of the plaque and the mobile menu panel. The footer stays the archive's dark grey (#21282c) by request. Also the text colour of a current year chip on gilt.
- **Crimson Wash** (crimson-wash): the only tint. Marks a targeted row (`:target` laureate) or a highlighted coming-soon section on plaster.

### Secondary
- **Honour Gilt** (gilt): lettering and frames on crimson only: board frame and dividers, year numerals on the board, hover colour of links on crimson,
- **Pale Gilt** (gilt-soft): secondary text on crimson (board intro, laureate fields in italic, counts).

### Neutral
- **Clocktower Plaster** (plaster): page ground and nav, text on crimson and on photography. Cool, not cream.
- **Lacquer Ink** (ink): body text, headings, and the 1px rule that opens every section, the nav underline and the timeline spine.
- **Soft Ink** (ink-soft): ledes and secondary paragraphs.
- **Muted Ink** (ink-mute): small-caps meta lines, "to be announced" placeholders, source notes.
- **Hairline Stone** (rule): the quiet 1px rules between rows inside a section.

### Named Rules
**The Gilt-on-Crimson Rule.** Gilt never sits on plaster. It appears on crimson fields, and over darkened photography, and nowhere else.

**The Mark-or-Field Rule.** Crimson is either a small mark (a year, a link, one plaque per view) or an entire full-bleed field. No crimson tints as card backgrounds, no crimson side stripes.

## Typography

**Display Font:** Libre Caslon Display (with Libre Caslon Text, Georgia)
**Serif Text Font:** Libre Caslon Text (with Georgia), regular and italic
**Body Font:** Lexend (with Helvetica Neue, Arial), weight 350 at rest, 500 for actions

**Character:** A high-contrast engraved Caslon for headings and numerals, set against a soft, open Lexend for reading. The serif carries the record (years, themes, names); the sans carries explanation.

### Hierarchy
- **Display** (400, clamp(44px, 6vw, 76px), 1.02): page h1. The home hero goes larger (clamp(56px, 8.2vw, 136px), 0.98, -0.02em) and the 2027 masthead larger still (clamp(64px, 11vw, 150px)).
- **Headline** (400, clamp(30px, 3.4vw, 44px), 1.1): section h2, balanced wrap. The honour board heading steps up to clamp(36px, 4.4vw, 60px).
- **Title** (400, 22px, 1.25): h3 for rows and sub-items (20px in the goals grid, 32px for archive entries).
- **Record numerals** (Caslon Display, 26-44px, lining numerals, crimson on plaster or gilt on crimson): edition years in the themes list, the timeline and the board.
- **Serif text** (Libre Caslon Text 17-26px): edition themes, quoted in curly quotes on history.
- **Engraved name** (Libre Caslon Text 14-15px, uppercase, 0.08em): laureate names on crimson only, with the field beneath in italic Pale Gilt.
- **Lede** (Lexend 350, 19px, 1.6, Soft Ink): the opening paragraph of a page (17px on mobile).
- **Body** (Lexend 350, 16px, 1.65, max 68ch).
- **Label** (Libre Caslon Text 15px, small caps via lowercase + `font-variant: small-caps`, 0.06em, Muted Ink): edition numbers and meta lines placed beside or after the thing they describe Footer group labels use the same treatment in plaster.

### Named Rules
**The Engraved Names Rule.** Uppercase tracked serif is reserved for names on the honour board (and the nav's tracked Lexend items). Do not set headings or running text in caps.

**The Serif Holds the Record Rule.** Years, themes and names are set in Caslon; explanatory prose is Lexend. Do not swap them.

## Layout

A single centred column (content width 1100px, 1.5rem page margin) of ruled sections. Each section opens with a 1px ink rule and pads 2.5rem above, 4rem below. Wide sections use a split: heading column at 1fr, content at 2fr, 3rem gap, collapsing to one column at 760px.

Full-bleed moments break the column with `margin-inline: calc(50% - 50vw)` and pad back to the content edge with `max(1.5rem, calc(50vw - 1100px / 2))`: the home hero, the honour board, the 2027 masthead and the footer.

Lists are ledgers: rows separated by Hairline Stone, with a year or name column and a content column (themes: 4.5rem year column in `auto-fill minmax(28rem)` columns; laureates: three-column name / honour / years grid; history: 7rem right-aligned year beside a 1px ink spine). The honour board flows year groups through CSS columns (`columns: 3 15rem`, 3rem gap, gilt column rule) so any number of years fits without hand layout.

Breakpoints observed: 560px, 640px, 700px, 760px and 1100px (desktop nav). Tap targets are at least 44px (plaque 48px).

## Elevation & Depth

Flat. Depth comes from tonal fields (plaster against crimson against lacquer crimson), from hairline rules and from double frames, not from shadows. Three functional exceptions exist in the build: a soft drop under the desktop nav dropdown, a text-shadow that keeps the hero title legible where it crosses the photograph, and a blurred translucent ink nav over photography.

### Shadow Vocabulary
- **Dropdown drop** (`box-shadow: 0 12px 24px -12px rgba(31, 26, 25, 0.35)`): desktop nav submenu only.
- **Photo legibility** (`text-shadow: 0 2px 18px rgba(31, 26, 25, 0.45)`): plaster text over photography only.

### Named Rules
**The Frame-Not-Shadow Rule.** To set something apart, frame it (1px border plus 1px outline offset 4-6px) or put it on a field. Never lift it on a shadow.

## Shapes

Nearly square. Every corner that exists is 2px: plaque, select, current-year chip, focus ring, logo tiles, nav dropdown. Structure is drawn with lines: 1px ink rules opening sections, 1px stone rules between rows, a 1px vertical spine on the history timeline marked by small 9px diamond lozenges (filled crimson, or plaster with a crimson outline for the targeted and upcoming entries, whose spine turns dashed). The double frame (border plus offset outline) is the heritage silhouette: gilt on the board, crimson on the coming-soon notice.

## Components

### Buttons
- **Plaque (primary):** a crimson plaque, 2px corners, 48px tall, 0 1.375rem padding, Lexend 500 in plaster, followed by the arrow. Hover deepens to Lacquer Crimson over 200ms (cubic-bezier(0.16, 1, 0.3, 1)) and nudges the arrow 4px right. One per view.
- **Text link (secondary):** crimson Lexend 500 with a 1px underline and the arrow, 44px tall. On the board it turns gilt.
- **Arrow:** a single drawn 20x20 SVG stroke (1.5px, square caps) at 1.125em, inheriting text colour. It is the only action glyph.

### Chips
- **Year links (laureates):** Caslon Display 18px numerals in crimson (gilt on the board), no box. The year matching the active filter becomes a filled 2px-corner chip: crimson with plaster text, or gilt with lacquer-crimson text on the board.

### Inputs / Fields
- **Select:** plaster ground, 1px ink border, 2px corners, 40px tall, Lexend 15px, drawn chevron.
- **Filter buttons:** bare text in a ruled, sticky bar (ink rule above, stone rule below). Selected state is crimson text, weight 500 and a 2px crimson underline; counts follow in small Muted Ink.
- **Focus:** 2px crimson outline, 3px offset, everywhere.

### Navigation
Plaster bar with a 1px ink underline; Caslon Display wordmark at 26px; Lexend 500 items at 14px, 0.08em tracking. Over photography it becomes translucent ink (rgba(31,26,25,0.35)) with 12px blur and plaster items whose hover is gilt. On plaster, hover and open items turn crimson. The mobile menu is a Lacquer Crimson panel with gilt active links.

### Honour Board (signature)
A full-bleed crimson field holding a double gilt frame. Inside: a heading and pale-gilt intro split above a gilt rule, then Nobel laureates grouped under the year they first joined, flowed through columns. Year numerals are gilt Caslon Display (28px); names are engraved caps in plaster with the field in italic Pale Gilt. On first scroll into view, year groups settle in once (opacity and 10px rise, 900ms, 60ms stagger per year); reduced motion and no-JS show them immediately. The laureates page reuses the same board for its Nobel group as a ledger.

### Ledger Rows
The default list: rows ruled by Hairline Stone under an ink top rule, a numeral or name column in Caslon, content in serif text or Lexend, an optional small-caps meta line. Used for themes, laureates, coming-soon sections and the "while you wait" links (ink-ruled columns whose title and arrow turn crimson on hover).

### Link Row
A ruled strip of plain links between two stone rules, items divided by 1px stone verticals, 44px tall. Used for an archived edition's pages and for socials.

### Footer
Lacquer Crimson field opened by a 6px double gilt rule; plaster text, gilt small-caps group labels, gilt link hover, logo tiles with 2px corners.

## Do's and Don'ts

### Do:
- **Do** scope every heritage rule under `#page.heritage` and re-point shared tokens there; leave `assets/css/index.css` and the `/2026` archive untouched.
- **Do** open each section with a 1px ink rule and separate rows with 1px Hairline Stone.
- **Do** set years, themes and names in Caslon, crimson numerals on plaster and gilt numerals on crimson.
- **Do** use a full crimson field with a double gilt frame when something must stand apart.
- **Do** drive every list and count from `data/` and lay lists out with auto-fill grids or CSS columns so the next committee never hand-tunes layout.
- **Do** keep corners at 2px and tap targets at 44px or more.

### Don't:
- **Don't** put gilt on plaster.
- **Don't** use pills, badges, stat boxes, chip clouds, side-stripe cards or shadowed cards.
- **Don't** place a small-caps label above a heading as a kicker; meta lines sit beside or after what they describe.
- **Don't** use icon glyphs or emoji as decoration; the drawn arrow and the social marks are the only icons.
- **Don't** restyle archived edition sites or let heritage styles leak outside `#page.heritage`.
- **Don't** add statistics, testimonials or counts that are not in `data/`.
