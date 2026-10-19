<template>
  <div class="home">
    <a class="announce" :href="useBase(`${upcoming.year}`)">
      <span class="announce-tag">Coming soon</span>
      <span>ISYF {{ upcoming.year }}<span class="announce-long">, the {{ ordinal(upcoming.edition) }} International Science Youth Forum</span></span>
      <ArrowIcon />
    </a>
    <header class="hero">
      <img
        class="hero-photo"
        :src="useBase('images/clocktower-3.webp')"
        alt="The clocktower building of Hwa Chong Institution, Singapore"
      />
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="hero-text">
        <img class="hero-logo" :src="useBase('icon_light.webp')" alt="ISYF logo" />
        <div class="title-stack">
          <h1 class="hero-title">International Science Youth Forum</h1>
          <div class="hero-title hero-title-over" aria-hidden="true">
            International Science Youth Forum
          </div>
        </div>
        <ul class="hero-details">
          <li>
            <span class="material-icons-outlined" aria-hidden="true">history_edu</span>
            Since {{ firstYear }}
          </li>
          <li>
            <span class="material-icons-outlined" aria-hidden="true">location_on</span>
            Hwa Chong Institution (SG)
          </li>
        </ul>
        <div class="hero-actions">
          <a class="plaque" :href="useBase(`${upcoming.year}`)">
            ISYF {{ upcoming.year }} <ArrowIcon />
          </a>
          <a class="text-link" :href="useBase('history')">
            {{ editions.length }} editions since {{ firstYear }} <ArrowIcon />
          </a>
        </div>
      </div>
    </header>

    <ul class="stats">
      <li v-for="stat in stats" :key="stat.label">
        <span class="stat-number">{{ stat.number }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </li>
    </ul>

    <section class="ruled split">
      <div class="split-head">
        <h2>What is ISYF?</h2>
      </div>
      <div>
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
          Nobel laureates joining in conjunction with the Global Young Scientists
          Summit. Alongside research exchanges, poster presentations and cultural
          activities, delegates explore Singapore and build friendships that last
          well beyond the forum.
        </p>
        <ul class="goals">
          <li v-for="goal in goals" :key="goal.title">
            <h3>{{ goal.title }}</h3>
            <p>{{ goal.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="photos" aria-labelledby="photos-title">
      <div class="photos-head">
        <h2 id="photos-title">ISYF {{ homePhotos.edition }} in pictures</h2>
        <a class="text-link" :href="useBase(`${homePhotos.edition}/photos`)">
          More photos <ArrowIcon />
        </a>
      </div>
      <div class="reel" tabindex="0" aria-label="Photos from ISYF 2026, scrolling">
        <ul class="reel-track">
          <li v-for="(photo, i) in reelPhotos" :key="i" :aria-hidden="i >= homePhotos.photos.length">
            <img
              :src="useBase(`images/home/${photo.file}`)"
              :alt="i < homePhotos.photos.length ? photo.alt : ''"
              loading="lazy"
              height="440"
            />
          </li>
        </ul>
      </div>
    </section>

    <section class="board">
      <div class="board-head">
        <h2>Nobel laureates &amp; eminent scientists</h2>
        <p>
          From physics to physiology, ISYF has invited
          {{ nobelLaureates.length }} Nobel laureates,
          {{ countOf("fields") }} Fields medallists and many other eminent
          scientists to share their journeys with delegates.
        </p>
      </div>
      <div class="board-actions">
        <a class="plaque" :href="useBase('laureates')">
          See all {{ scientists.length }} Nobel laureates &amp; scientists <ArrowIcon />
        </a>
      </div>
      <details class="roll-toggle">
        <summary>Show Nobel laureates by the year they first joined</summary>
        <ol class="roll">
          <li v-for="group in laureatesByFirstYear" :key="group.year" class="roll-year">
            <span class="roll-numeral">{{ group.year }}</span>
            <ul>
              <li v-for="laureate in group.people" :key="laureate.name">
                <a :href="useBase(`laureates#${scientistId(laureate.name)}`)">
                  <span class="roll-name">{{ laureate.name }}</span>
                  <span class="roll-field">{{ field(laureate.honour) }}</span>
                </a>
              </li>
            </ul>
          </li>
        </ol>
      </details>
    </section>

    <section class="ruled">
      <div class="section-head">
        <h2>Themes through the years</h2>
        <p>
          Every edition is anchored by a theme that frames its lectures,
          dialogues and activities. The most recent:
        </p>
      </div>
      <ol class="themes">
        <li class="theme" v-for="edition in recentEditions" :key="edition.year">
          <a class="theme-year" :href="useBase(`history#y${edition.year}`)">{{ edition.year }}</a>
          <div>
            <span class="theme-name" :class="{ missing: !edition.theme }">
              {{ edition.theme ?? edition.note }}
            </span>
            <span class="meta">
              {{ ordinal(edition.edition) }} edition<template v-if="edition.online"> · held online</template>
            </span>
          </div>
        </li>
      </ol>
      <div class="section-actions">
        <a class="plaque" :href="useBase('history')">
          All {{ editions.length }} editions since {{ firstYear }} <ArrowIcon />
        </a>
        <a
          v-for="edition in archivedEditions"
          :key="edition.year"
          class="text-link"
          :href="useBase(`${edition.year}`)"
        >
          ISYF {{ edition.year }} website archive <ArrowIcon />
        </a>
      </div>
    </section>

    <section class="ruled">
      <div class="section-head">
        <h2>Organisers</h2>
      </div>
      <ul class="organisers">
        <li v-for="org in organisers" :key="org.name">
          <a class="org-logo" :href="org.href" target="_blank" rel="noopener">
            <img :src="useBase(`images/logos/${org.image}`)" :alt="org.name" />
          </a>
          <div>
            <h3>{{ org.name }}</h3>
            <span class="meta">{{ org.role }}</span>
            <p>{{ org.text }}</p>
          </div>
        </li>
      </ul>
      <h3 class="partners-title">With the support of</h3>
      <ul class="partners" :style="{ '--cols': Math.ceil(partners.length / 2) }">
        <li v-for="partner in partners" :key="partner.name">
          <a :href="partner.href" target="_blank" rel="noopener" :title="partner.name">
            <img
              :src="useBase(`images/logos/${partner.image}`)"
              :alt="partner.name"
              :style="partner.scale ? { scale: partner.scale } : null"
              loading="lazy"
            />
          </a>
        </li>
      </ul>
    </section>

    <section class="ruled split" id="contact">
      <div class="split-head">
        <h2>Contact us</h2>
      </div>
      <div>
        <p>
          For enquiries about ISYF, write to us or call the ISYF office at Hwa
          Chong Institution.
        </p>
        <dl class="contact">
          <dt>Email</dt>
          <dd><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></dd>
          <dt>Phone</dt>
          <dd><a :href="`tel:${contact.phone.replace(/\s/g, '')}`">{{ contact.phone }}</a></dd>
          <dt>Fax</dt>
          <dd>{{ contact.fax }}</dd>
          <dt>Address</dt>
          <dd>{{ contact.address }}</dd>
          <dt>Instagram</dt>
          <dd><a :href="socials.instagram.url" target="_blank" rel="noopener">{{ socials.instagram.handle }}</a></dd>
          <dt>YouTube</dt>
          <dd><a :href="socials.youtube.url" target="_blank" rel="noopener">{{ socials.youtube.handle }}</a></dd>
        </dl>
      </div>
    </section>
  </div>
</template>

<style>
/* The hero runs up under the fixed nav */
#page.heritage .content:has(.home) {
  margin-top: 3.5rem;
}
</style>

<style scoped>
/* ========== HERO ========== */
.hero {
  --pad: max(1.5rem, calc(50vw - var(--content-width) / 2));
  /* The title is the biggest thing on the page and runs well across the
     photo, turning white where it crosses */
  --title-size: clamp(52px, 6.6vw, 128px);
  --split: 46vw;

  position: relative;
  margin: -1rem calc(50% - 50vw) 0;
  min-height: min(calc(100svh - 3.5rem), 860px);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--ink);
  overflow: hidden;
}

.hero-photo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--split);
  width: calc(100vw - var(--split));
  height: 100%;
  object-fit: cover;
  object-position: 50% 40%;
}

.hero-shade {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--split);
  right: 0;
  background: linear-gradient(90deg, rgba(31, 26, 25, 0.55), rgba(31, 26, 25, 0) 40%);
}

.hero-text {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 3rem var(--pad) 4rem;
}

.hero-logo {
  width: 96px;
  height: 96px;
  margin: 0 0 0.5rem -0.75rem;
}

.title-stack {
  position: relative;
  /* Like the original, the title may run past the content column into the photo */
  margin-right: calc(2rem - var(--pad));
}

.hero-title {
  margin: 0 0 1.75rem;
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: var(--title-size);
  line-height: 1.02;
  letter-spacing: -0.02em;
  /* Both copies must break lines identically, so no balancing */
  text-wrap: wrap;
}

/* The same words over the photograph, clipped to it, in plaster white */
.hero-title-over {
  position: absolute;
  inset: 0;
  margin: 0;
  --fg: var(--plaster);
  clip-path: inset(-20% -50vw -20% calc(var(--split) - var(--pad)));
  text-shadow: 0 2px 18px rgba(31, 26, 25, 0.45);
  pointer-events: none;
}

/* "Since 2009 | Hwa Chong Institution (SG)" */
.hero-details {
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-flex;
  border: 1px solid var(--ink);
  border-radius: 2px;
}

.hero-details li {
  margin: 0;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  white-space: nowrap;
}

.hero-details li + li {
  border-left: 1px solid var(--ink);
}

.hero-details .material-icons-outlined {
  font-size: 20px;
  --fg: var(--crimson);
}

.hero-actions {
  max-width: calc(var(--split) - var(--pad) - 2rem);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.75rem;
  margin-top: 2rem;
}

@media screen and (max-width: 760px) {
  .hero {
    flex-direction: column;
    align-items: stretch;
    min-height: 0;
  }

  .hero-photo {
    position: static;
    width: 100%;
    height: 42svh;
    min-height: 260px;
  }

  .hero-text {
    padding-block: 1.5rem 2.5rem;
  }

  .hero-logo {
    width: 72px;
    height: 72px;
  }

  .hero-title {
    font-size: clamp(42px, 12vw, 64px);
    max-width: none;
  }

  .title-stack {
    margin-right: 0;
  }

  .hero-details {
    display: flex;
    flex-direction: column;
  }

  .hero-details li + li {
    border-left: none;
    border-top: 1px solid var(--ink);
  }

  .hero-title-over,
  .hero-shade {
    display: none;
  }

  .hero-actions {
    max-width: none;
  }

}

/* ========== STATS ========== */
.stats {
  list-style: none;
  padding: 0;
  margin: 3rem 0 3.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1rem;
}

.stats li {
  margin: 0;
  padding: 1rem 1rem 0.875rem;
  border: 1px solid var(--ink);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-number {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 44px;
  line-height: 1.1;
  font-variant-numeric: lining-nums;
  --fg: var(--crimson);
}

.stat-label {
  font-size: 14px;
  font-weight: 400;
}

/* On phones the boxes pair up; an odd last box spans the row */
@media screen and (max-width: 560px) {
  .stats {
    grid-template-columns: 1fr 1fr;
  }

  .stats li:last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }
}

/* ========== RULED SECTIONS ========== */
.split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  gap: 1rem 3rem;
}

.split-head .meta {
  margin-top: 0.25rem;
}

.section-head {
  margin-bottom: 2rem;
}

@media screen and (max-width: 760px) {
  .split {
    grid-template-columns: 1fr;
  }
}

/* ========== GOALS ========== */
.goals {
  list-style: none;
  padding: 0;
  margin: 2.5rem 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  gap: 2rem;
}

.goals li {
  margin: 0;
  padding-top: 1rem;
  border-top: 1px solid var(--rule);
}

.goals h3 {
  font-size: 20px;
}

.goals p {
  margin: 0;
  font-size: 15px;
  line-height: 1.55;
  --fg: var(--ink-soft);
}

/* ========== HONOUR BOARD ========== */
.board {
  margin-block: 0 0;
}

.board-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
  gap: 1rem 3rem;
  align-items: end;
}

.board-head h2 {
  margin: 0;
  font-size: clamp(36px, 4.4vw, 60px);
}

.board-head p {
  margin: 0;
  --fg: var(--ink-soft);
}

.board-actions,
.section-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.75rem;
  margin-top: 2rem;
}

/* "Show Nobel laureates by year" opens the full roll in place */
.roll-toggle {
  margin-top: 1.5rem;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}

.roll-toggle summary {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 52px;
  font-weight: 500;
  cursor: pointer;
  list-style: none;
}

.roll-toggle summary::-webkit-details-marker {
  display: none;
}

.roll-toggle summary::before {
  content: "+";
  display: inline-grid;
  place-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid var(--ink);
  border-radius: 2px;
  font-family: var(--font);
  line-height: 1;
}

.roll-toggle[open] summary::before {
  content: "−";
}

.roll-toggle summary:hover {
  --fg: var(--crimson-deep);
}

.roll {
  list-style: none;
  padding: 0;
  margin: 1rem 0 1.5rem;
  columns: 3 15rem;
  column-gap: 3rem;
  column-rule: 1px solid var(--rule);
}

.roll-year {
  break-inside: avoid;
  margin: 0 0 1.75rem;
}

.roll-numeral {
  display: block;
  margin-bottom: 0.375rem;
  font-family: var(--font-display);
  font-size: 28px;
  line-height: 1;
  --fg: var(--crimson);
}

.roll-year ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.roll-year li {
  margin: 0;
}

.roll-year a {
  display: block;
  padding-block: 0.3rem;
  text-decoration: none;
}

.roll-name {
  display: block;
  font-family: var(--font-serif);
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.35;
}

.roll-field {
  display: block;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 14px;
  --fg: var(--ink-mute);
}

.roll-year a:hover .roll-name {
  --fg: var(--crimson-deep);
}

@media screen and (max-width: 760px) {
  .board-head {
    grid-template-columns: 1fr;
  }
}

/* ========== THEMES ========== */
.themes {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 28rem), 1fr));
  column-gap: 3rem;
}

.theme {
  margin: 0;
  padding-block: 0.875rem;
  border-top: 1px solid var(--rule);
  display: grid;
  grid-template-columns: 4.5rem 1fr;
  gap: 1rem;
  align-items: baseline;
}

.theme-year {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-block: -0.6rem;
  font-family: var(--font-display);
  font-size: 26px;
  --fg: var(--crimson);
  text-decoration: none;
}

.theme-year:hover {
  text-decoration: underline;
}

.theme-name {
  display: block;
  margin-top: 0.125rem;
  font-family: var(--font-serif);
  font-size: 17px;
  line-height: 1.4;
}

.theme-name.missing {
  font-family: var(--font);
  font-size: 15px;
  --fg: var(--ink-mute);
}

/* ========== ANNOUNCEMENT BANNER ========== */
.announce {
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.25rem 0.875rem;
  margin: -1rem calc(50% - 50vw) 0;
  padding: 0.75rem 1.5rem;
  min-height: 48px;
  box-sizing: border-box;
  background-color: #21282c;
  --fg: var(--plaster);
  font-weight: 500;
  text-align: center;
  text-decoration: none;
}

#page.heritage .announce:hover {
  --fg: var(--plaster);
  color: var(--plaster);
}

.announce:hover .arrow {
  transform: translateX(4px);
}

.announce .arrow {
  transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1);
}

.announce-tag {
  padding: 0.125rem 0.5rem;
  border-radius: 2px;
  background-color: var(--crimson);
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

@media screen and (max-width: 560px) {
  .announce-long {
    display: none;
  }
}

/* The banner takes the top gap the hero used to fill */
.announce + .hero {
  margin-top: 0;
}

/* ========== PHOTO CAROUSEL ========== */
.photos {
  padding-block: 2.5rem 4rem;
  border-top: 1px solid var(--ink);
}

.photos-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 2rem;
  margin-bottom: 1.5rem;
}

.photos-head h2 {
  margin: 0;
}

.reel {
  margin-inline: calc(50% - 50vw);
  overflow: hidden;
}

.reel:focus-visible {
  outline-offset: -3px;
}

.reel-track {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.75rem;
  width: max-content;
  animation: reel 90s linear infinite;
}

.reel:hover .reel-track,
.reel:focus-within .reel-track {
  animation-play-state: paused;
}

.reel-track li {
  margin: 0;
}

.reel-track img {
  display: block;
  height: clamp(200px, 28vw, 340px);
  width: auto;
  border-radius: 2px;
}

/* The track holds the photos twice, so sliding by half loops seamlessly */
@keyframes reel {
  to {
    transform: translateX(calc(-50% - 0.375rem));
  }
}

@media (prefers-reduced-motion: reduce) {
  .reel {
    overflow-x: auto;
  }

  .reel-track {
    animation: none;
  }
}

/* ========== ORGANISERS ========== */
.organisers {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 26rem), 1fr));
  gap: 2rem 3rem;
}

.organisers li {
  margin: 0;
  display: grid;
  grid-template-columns: 9rem minmax(0, 1fr);
  gap: 1.25rem;
  align-items: start;
}

.org-logo {
  display: grid;
  place-items: center;
  aspect-ratio: 4 / 3;
  padding: 0.75rem;
  border: 1px solid var(--rule);
  border-radius: 2px;
  background-color: #ffffff;
}

.org-logo img {
  max-width: 100%;
  max-height: 100%;
}

.organisers h3 {
  margin: 0;
}

.organisers .meta {
  margin-top: 0.25rem;
}

.organisers p {
  margin: 0.5rem 0 0;
  font-size: 15px;
  line-height: 1.55;
  --fg: var(--ink-soft);
}

.partners-title {
  margin: 3rem 0 1rem;
  font-family: var(--font-serif);
  font-size: 15px;
  font-variant: small-caps;
  text-transform: lowercase;
  letter-spacing: 0.06em;
  --fg: var(--ink-mute);
}

.partners {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  /* Two even rows on wider screens: half the logos in each */
  grid-template-columns: repeat(var(--cols, 4), minmax(0, 1fr));
  border-top: 1px solid var(--rule);
  border-left: 1px solid var(--rule);
}

.partners li {
  margin: 0;
  border-right: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}

.partners a {
  display: grid;
  place-items: center;
  height: 7rem;
  padding: 1rem;
  box-sizing: border-box;
  transition: background-color 200ms;
}

.partners a:hover {
  background-color: #ffffff;
}

.partners img {
  display: block;
  width: auto;
  height: auto;
  max-width: min(100%, 11rem);
  max-height: 4.5rem;
  object-fit: contain;
}

@media screen and (max-width: 560px) {
  .organisers li {
    grid-template-columns: 6.5rem minmax(0, 1fr);
  }

  .partners {
    grid-template-columns: 1fr 1fr;
  }
}

/* ========== CONTACT ========== */
#contact {
  scroll-margin-top: 4rem;
}

.contact {
  display: grid;
  grid-template-columns: 7rem minmax(0, 1fr);
  margin: 1.5rem 0 0;
  border-top: 1px solid var(--rule);
}

.contact dt,
.contact dd {
  margin: 0;
  padding-block: 0.75rem;
  border-bottom: 1px solid var(--rule);
}

.contact dt {
  font-family: var(--font-serif);
  font-variant: small-caps;
  text-transform: lowercase;
  letter-spacing: 0.06em;
  --fg: var(--ink-mute);
}

.contact dd {
  overflow-wrap: anywhere;
}
</style>

<script setup>
import { useBase } from "~/composables/useBase";
import ArrowIcon from "~/components/icons/arrow.vue";
import { editions, upcoming, firstYear, ordinal } from "~/data/editions";
import { scientists, scientistId } from "~/data/scientists";
import {
  goals,
  homePhotos,
  organisers,
  partners,
  contact,
  socials,
} from "~/data/site";

const editionsNewestFirst = [...editions].reverse();
const archivedEditions = editionsNewestFirst.filter((e) => e.archive);
const recentEditions = editionsNewestFirst.slice(0, 4);

const nobelLaureates = scientists
  .filter((s) => s.category === "nobel")
  .sort((a, b) => a.years[0] - b.years[0]);
const countOf = (category) => scientists.filter((s) => s.category === category).length;

// Nobel laureates grouped under the year they first joined ISYF
const laureatesByFirstYear = Object.values(
  nobelLaureates.reduce((groups, person) => {
    const year = person.years[0];
    (groups[year] ??= { year, people: [] }).people.push(person);
    return groups;
  }, {})
);

const stats = [
  { number: firstYear, label: "The first forum" },
  { number: editions.length, label: "Editions held" },
  { number: scientists.length, label: "Nobel laureates, Fields medallists & eminent scientists invited" },
  { number: "120+", label: "Students & educators each year" },
];

// The carousel loops by showing the photos twice; the copy is hidden from
// screen readers
const reelPhotos = [...homePhotos.photos, ...homePhotos.photos];

// "Nobel Prize in Physics, 2003" -> "Physics, 2003"
const field = (honour) => honour.replace("Nobel Prize in ", "");
</script>
