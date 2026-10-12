<template>
  <div>
    <span class="eyebrow">Editions & Themes</span>
    <h1>{{ yearsOfIsyf }} Years of ISYF</h1>
    <p>
      From the first forum in {{ firstYear }} to the
      {{ ordinal(upcoming.edition) }} edition in {{ upcoming.year }}, every ISYF
      has gathered young scientists around a theme, and around the laureates
      and scientists who came to share their journeys. Here is how the story
      has unfolded.
    </p>

    <ul class="chips year-jump" aria-label="Jump to year">
      <li v-for="year in allYears" :key="year">
        <a :href="`#y${year}`">{{ year }}</a>
      </li>
    </ul>

    <div>
      <ol class="timeline">
        <li v-for="edition in editions" :key="edition.year" :id="`y${edition.year}`" class="entry">
          <div class="entry-year">{{ edition.year }}</div>
          <div class="entry-body">
            <span class="entry-edition">
              {{ ordinal(edition.edition) }} edition
              <span v-if="edition.online" class="badge muted">Online</span>
              <span v-if="edition.archive" class="badge muted">Archived website</span>
            </span>
            <h2 v-if="edition.theme" class="entry-theme">“{{ edition.theme }}”</h2>
            <p v-else class="entry-theme missing">Theme not on record</p>
            <p v-if="edition.dates || edition.note" class="entry-note">
              <template v-if="edition.dates">{{ edition.dates }}. </template>{{ edition.note }}
            </p>

            <div v-if="guests(edition.year).length" class="guests">
              <span class="guests-label">Invited laureates & scientists</span>
              <ul class="chips">
                <li v-for="guest in guests(edition.year)" :key="guest.name">
                  <a
                    :href="useBase(`laureates#${scientistId(guest.name)}`)"
                    :class="guest.category"
                    :title="guest.honour"
                  >{{ guest.name }}</a>
                </li>
              </ul>
            </div>

            <ul v-if="edition.archive" class="chips archive-links">
              <li v-for="link in archives[edition.year].highlights" :key="link.href">
                <a :href="useBase(link.href)">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </li>

        <li :id="`y${upcoming.year}`" class="entry upcoming">
          <div class="entry-year">{{ upcoming.year }}</div>
          <div class="entry-body">
            <span class="entry-edition">
              {{ ordinal(upcoming.edition) }} edition
              <span class="badge">Coming soon</span>
            </span>
            <p class="entry-theme missing">Theme to be announced</p>
            <a class="more-link" :href="useBase(`${upcoming.year}`)">
              Follow ISYF {{ upcoming.year }}
              <span class="material-icons-outlined">arrow_forward</span>
            </a>
          </div>
        </li>
      </ol>

      <p class="legend">
        <span class="legend-dot nobel"></span> Nobel laureate
        <span class="legend-dot fields"></span> Fields medallist
        <span class="legend-dot prize"></span> Other major prize
      </p>
      <p class="source-note">
        Compiled from the published records of past editions. Spotted something
        missing? Let us know at
        <a :href="`mailto:${socials.email}`">{{ socials.email }}</a>.
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url("~/assets/css/common.css");

h1 {
  margin-top: 1rem;
}

.year-jump {
  margin-block: 2rem 1rem;
}

/* ========== TIMELINE ========== */
.timeline {
  list-style: none;
  padding: 0;
  margin: 3rem 0;
}

.entry {
  scroll-margin-top: 5rem;
  margin: 0;

  display: grid;
  grid-template-columns: 6rem 1fr;
  gap: 1.5rem;
}

.entry-year {
  --fg: var(--primary);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  padding-top: 0.25rem;
  text-align: right;
}

.entry-body {
  position: relative;
  padding: 0 0 2.5rem 1.75rem;
  border-left: 2px solid var(--primary-200);
}

.entry:last-child .entry-body {
  border-left-style: dashed;
}

/* Timeline marker */
.entry-body::before {
  content: "";
  position: absolute;
  top: 0.375rem;
  left: calc(-0.5rem - 1px);
  width: 1rem;
  height: 1rem;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid var(--primary);
  background-color: var(--bg);
}

.entry:target .entry-body::before,
.entry.upcoming .entry-body::before {
  background-color: var(--gold);
  border-color: var(--gold);
}

.entry-edition {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  --fg: var(--gray-500);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.entry-theme {
  font-size: 26px;
  font-style: italic;
  font-weight: 600;
  line-height: 1.3;
  margin-block: 0.5rem 0.75rem;
}

.entry-theme.missing {
  font-family: var(--font);
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  --fg: var(--gray-500);
}

.entry-note {
  margin-block: 0 1rem;
}

.guests {
  margin-block: 1rem;
}

.guests-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 13px;
  font-weight: 500;
}

.archive-links {
  margin-top: 1rem;
}

.archive-links a {
  font-size: 14px;
  --fg: var(--primary);
  border-color: var(--primary);
}

@media screen and (max-width: 600px) {
  .entry {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .entry-year {
    text-align: left;
    padding-left: 1.75rem;
  }

  .entry-body {
    margin-left: 0.5rem;
  }
}

/* ========== CATEGORY MARKERS ========== */
.chips a.nobel::before,
.chips a.fields::before,
.chips a.prize::before,
.legend-dot {
  content: "";
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.375rem;
  border-radius: 50%;
  vertical-align: 0.05em;
}

.nobel::before,
.legend-dot.nobel {
  background-color: var(--gold);
}

.fields::before,
.legend-dot.fields {
  background-color: var(--purple);
}

.prize::before,
.legend-dot.prize {
  background-color: hsla(var(--blue-hsla), 0.8);
}

.legend {
  font-size: 14px;
}

.legend-dot:not(:first-child) {
  margin-left: 1rem;
}

.source-note {
  font-size: 14px;
  --fg: var(--gray-500);
}

.source-note a {
  --fg: var(--gray-500);
}
</style>

<script setup>
import { useBase } from "~/composables/useBase";
import { editions, upcoming, firstYear, ordinal } from "~/data/editions";
import { categories, scientistsInYear, scientistId } from "~/data/scientists";
import { archives, socials } from "~/data/site";

useHead({ title: "Editions & Themes · ISYF" });

const yearsOfIsyf = upcoming.year - firstYear + 1;
const allYears = [...editions.map((e) => e.year), upcoming.year];

const categoryOrder = categories.map((c) => c.id);
function guests(year) {
  return scientistsInYear(year).sort(
    (a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
  );
}
</script>
