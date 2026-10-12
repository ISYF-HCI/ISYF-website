<template>
  <div>
    <HeroBanner
      title="International Science Youth Forum"
      :details="[
        { icon: 'history_edu', text: `Since ${firstYear}` },
        { icon: 'location_on', text: 'Hwa Chong Institution (SG)' },
      ]"
      background="images/clocktower-3.webp"
    />

    <section class="upcoming">
      <div class="upcoming-text">
        <span class="badge">Coming soon</span>
        <h2>ISYF {{ upcoming.year }}</h2>
        <p>
          The {{ ordinal(upcoming.edition) }} International Science Youth Forum
          is on its way. Dates, theme, programme and speakers will be announced
          here soon.
        </p>
        <a class="upcoming-btn" :href="useBase(`${upcoming.year}`)">
          Find out more
          <span class="material-icons-outlined">arrow_forward</span>
        </a>
      </div>
      <div class="upcoming-ordinal" aria-hidden="true">{{ ordinal(upcoming.edition) }}</div>
    </section>

    <section>
      <span class="eyebrow">{{ firstYear }} – {{ upcoming.year }}</span>
      <h2>{{ yearsOfIsyf }} years of curiosity</h2>
      <p>
        Since the first forum in {{ firstYear }}, ISYF has brought young
        scientists and educators from across the globe to Singapore to share
        their passion for science, and to learn from the people who have
        shaped it. ISYF {{ upcoming.year }} marks the forum's
        {{ ordinal(upcoming.edition) }} edition.
      </p>
      <ul class="stats">
        <li v-for="stat in stats" :key="stat.label">
          <span class="stat-number">{{ stat.number }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </li>
      </ul>
    </section>

    <section>
      <h2>What is ISYF?</h2>
      <p>
        The International Science Youth Forum (ISYF) @ Singapore is a science
        enrichment programme for students from all over the world. First
        organised in {{ firstYear }} by students of Hwa Chong Institution, it is
        hosted by the Institution's Students' Science Research Club (SSRC) and
        co-organised by the Ministry of Education, Singapore.
      </p>
      <p>
        Each forum brings delegates face to face with Nobel laureates and
        eminent scientists through lectures, Masterclasses and dialogues, with
        laureates joining in conjunction with the Global Young Scientists
        Summit. Alongside research exchanges, poster presentations and cultural
        activities, delegates explore Singapore and build friendships that last
        well beyond the forum.
      </p>
    </section>

    <Goals />

    <section>
      <h2>Themes through the years</h2>
      <p>
        Every edition is anchored by a theme that frames its lectures,
        dialogues and activities.
      </p>
      <ol class="themes">
        <li class="theme upcoming-theme">
          <a class="theme-year" :href="useBase(`${upcoming.year}`)">{{ upcoming.year }}</a>
          <div>
            <span class="theme-edition">{{ ordinal(upcoming.edition) }} edition</span>
            <span class="theme-name">To be announced</span>
          </div>
        </li>
        <li class="theme" v-for="edition in editionsNewestFirst" :key="edition.year">
          <a class="theme-year" :href="useBase(`history#y${edition.year}`)">{{ edition.year }}</a>
          <div>
            <span class="theme-edition">
              {{ ordinal(edition.edition) }} edition<template v-if="edition.online"> · Online</template>
            </span>
            <span class="theme-name" :class="{ missing: !edition.theme }">
              {{ edition.theme ?? edition.note }}
            </span>
          </div>
        </li>
      </ol>
      <a class="more-link" :href="useBase('history')">
        Explore every edition
        <span class="material-icons-outlined">arrow_forward</span>
      </a>
    </section>

    <section>
      <h2>Nobel laureates at ISYF</h2>
      <p>
        From physics to physiology, ISYF has invited {{ nobelLaureates.length }}
        Nobel laureates to share their journeys with delegates, alongside Fields
        medallists, Turing Award winners and many other eminent scientists.
      </p>
      <ul class="chips laureate-chips">
        <li v-for="laureate in nobelLaureates" :key="laureate.name">
          <a :href="useBase(`laureates#${scientistId(laureate.name)}`)">
            {{ laureate.name }}
            <span class="chip-detail">{{ laureate.honour.replace("Nobel Prize in ", "") }}</span>
          </a>
        </li>
      </ul>
      <a class="more-link" :href="useBase('laureates')">
        Meet all {{ scientists.length }} laureates and scientists
        <span class="material-icons-outlined">arrow_forward</span>
      </a>
    </section>

    <section>
      <h2>From the archive</h2>
      <article class="archive-card" v-for="edition in archivedEditions" :key="edition.year">
        <div>
          <span class="badge muted">{{ ordinal(edition.edition) }} edition</span>
          <h3>ISYF {{ edition.year }}</h3>
          <p class="archive-meta">{{ edition.dates }}</p>
          <p class="archive-theme">“{{ edition.theme }}”</p>
        </div>
        <ul class="chips">
          <li v-for="link in archives[edition.year].highlights" :key="link.href">
            <a :href="useBase(link.href)">{{ link.label }}</a>
          </li>
        </ul>
      </article>
      <p class="archive-note">
        Themes and speakers from every earlier edition are recorded in our
        <a :href="useBase('history')">history of ISYF</a>.
      </p>
    </section>

    <section>
      <h2>Who are the organisers?</h2>
      <p>
        ISYF is hosted and organised by Hwa Chong Institution’s very own
        Students' Science Research Club (SSRC), with the support of the Ministry
        of Education (MOE) and partners.
      </p>
      <Supporters />
    </section>
  </div>
</template>

<style>
.content {
  margin-top: 3.5rem !important;
}
</style>

<style scoped>
@import url("~/assets/css/common.css");

/* ========== UPCOMING EDITION ========== */
.upcoming {
  position: relative;
  overflow: hidden;
  margin-inline: -0.75rem;
  padding: 1.5rem 1.5rem 2rem;
  border-radius: 8px;

  --fg: var(--gray-100);
  --bg: var(--primary-900);
  background-color: var(--bg);
}

.upcoming h2 {
  font-size: 48px;
  line-height: 1.1em;
  margin-block: 1rem 0;
}

.upcoming p {
  max-width: 34rem;
}

.upcoming-text {
  position: relative;
  z-index: 1;
}

.upcoming-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;

  --fg: var(--gray-950);
  background-color: var(--gold);
  font-weight: 600;
  text-decoration: none;
  transition: background-color 200ms, gap 200ms;
}

.upcoming-btn:hover {
  background-color: var(--yellow);
  gap: 0.75rem;
}

.upcoming-ordinal {
  position: absolute;
  right: -0.5rem;
  bottom: -3.5rem;

  font-family: var(--font-display);
  font-weight: 800;
  font-size: 220px;
  line-height: 1;
  --fg: transparent;
  -webkit-text-stroke: 2px hsla(var(--primary-200-hsla), 0.35);
  user-select: none;
}

@media screen and (max-width: 700px) {
  .upcoming-ordinal {
    font-size: 140px;
    bottom: -2rem;
  }
}

/* ========== STATS ========== */
.stats {
  list-style: none;
  padding: 0;
  margin: 2rem -0.75rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1rem;
}

.stats li {
  margin: 0;
  padding: 1rem 1rem 0.875rem;
  border: 1px solid var(--fg);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-number {
  --fg: var(--primary);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 44px;
  line-height: 1.1;
}

.stat-label {
  font-size: 14px;
  font-weight: 400;
}

/* ========== THEMES ========== */
.themes {
  list-style: none;
  padding: 0;
  margin: 2rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
  column-gap: 2.5rem;
}

.theme {
  margin: 0;
  padding-block: 0.75rem;
  border-top: 1px solid var(--gray-200);

  display: grid;
  grid-template-columns: 4.5rem 1fr;
  gap: 1rem;
  align-items: baseline;
}

.theme-year {
  --fg: var(--primary);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
}

.theme-year:hover {
  text-decoration: underline;
}

.theme-edition {
  display: block;
  --fg: var(--gray-500);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.theme-name {
  display: block;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.4;
}

.theme-name.missing {
  font-family: var(--font);
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  --fg: var(--gray-500);
}

.upcoming-theme .theme-name {
  --fg: var(--gray-500);
}

/* ========== LAUREATES ========== */
.laureate-chips {
  margin-block: 1.5rem 2rem;
}

.chip-detail {
  --fg: var(--gray-500);
  font-size: 12px;
  margin-left: 0.25rem;
}

/* ========== ARCHIVE ========== */
.archive-card {
  margin: 1.5rem -0.75rem 0;
  padding: 1.25rem 1.5rem 1.5rem;
  border: 1px solid var(--fg);
  border-radius: 8px;
  background-color: #f6eee3;
}

.archive-card h3 {
  font-size: 32px;
  font-style: normal;
  margin-block: 0.75rem 0;
}

.archive-meta {
  margin-block: 0.25rem 0.5rem;
  font-weight: 400;
}

.archive-theme {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 20px;
  margin-block: 0 1.25rem;
}

.archive-card .chips a {
  background-color: var(--bg);
  font-size: 14px;
  padding: 0.25rem 0.75rem;
}

.archive-note {
  font-size: 15px;
}
</style>

<script setup>
import { useBase } from "~/composables/useBase";
import HeroBanner from "~/components/heroBanner.vue";
import Supporters from "~/components/supporters.vue";
import Goals from "~/components/goals.vue";
import { editions, upcoming, firstYear, ordinal } from "~/data/editions";
import { scientists, scientistId } from "~/data/scientists";
import { archives } from "~/data/site";

const yearsOfIsyf = upcoming.year - firstYear + 1;
const editionsNewestFirst = [...editions].reverse();
const archivedEditions = editionsNewestFirst.filter((e) => e.archive);

const nobelLaureates = scientists
  .filter((s) => s.category === "nobel")
  .sort((a, b) => a.years[0] - b.years[0]);

const stats = [
  { number: firstYear, label: "The first forum" },
  { number: editions.length, label: "Editions held" },
  { number: nobelLaureates.length, label: "Nobel laureates invited" },
  { number: scientists.length, label: "Laureates & eminent scientists" },
  { number: "120+", label: "Students & educators each year" },
];
</script>
