<template>
  <div>
    <Masthead :background="useBase('images/night-clocktower.webp')" :dim="0.55">
      <span class="badge">Coming soon</span>
      <h1>ISYF {{ upcoming.year }}</h1>
      <h3>
        The {{ ordinal(upcoming.edition) }} International Science Youth Forum,
        marking {{ yearsOfIsyf }} years of ISYF.
      </h3>
    </Masthead>

    <div>
      <section v-if="requested" class="notice">
        <span class="material-icons-outlined notice-icon">schedule</span>
        <div>
          <h2>{{ requested.label }} for ISYF {{ upcoming.year }} is coming soon</h2>
          <p>
            This page will go live once details for ISYF {{ upcoming.year }} are
            confirmed.
            <template v-if="requested.archived">
              In the meantime, look back at ISYF {{ previous.year }}'s
              <a :href="useBase(requested.archived.href)">{{ requested.archived.label }}</a> page.
            </template>
          </p>
        </div>
      </section>

      <section>
        <h2>The next chapter</h2>
        <p>
          Since {{ firstYear }}, ISYF has brought young scientists from around the
          world to Singapore to meet Nobel laureates and eminent scientists, share
          their research and make friends across cultures. Planning for the
          {{ ordinal(upcoming.edition) }} edition is under way, and the theme,
          dates, programme and speakers will be announced here.
        </p>

        <ul class="sections">
          <li
            v-for="section in upcomingSections"
            :key="section.slug"
            :class="{ highlighted: requested?.slug === section.slug }"
          >
            <span class="material-icons-outlined section-icon">{{ section.icon }}</span>
            <div class="section-text">
              <h3>{{ section.label }}</h3>
              <span class="badge muted">Coming soon</span>
            </div>
            <a class="more-link" :href="useBase(section.archived)">
              ISYF {{ previous.year }}
              <span class="material-icons-outlined">history</span>
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>While you wait</h2>
        <div class="explore">
          <a class="explore-card" :href="useBase('history')">
            <span class="material-icons-outlined">history_edu</span>
            <h3>{{ yearsOfIsyf }} years of themes</h3>
            <p>Every edition since {{ firstYear }}, from its theme to its guests.</p>
          </a>
          <a class="explore-card" :href="useBase('laureates')">
            <span class="material-icons-outlined">workspace_premium</span>
            <h3>Laureates & scientists</h3>
            <p>The Nobel laureates and eminent scientists ISYF has welcomed.</p>
          </a>
          <a class="explore-card" :href="useBase(previous.archive)">
            <span class="material-icons-outlined">inventory_2</span>
            <h3>ISYF {{ previous.year }} archive</h3>
            <p>Revisit the programme, speakers and photos of the {{ ordinal(previous.edition) }} edition.</p>
          </a>
        </div>
      </section>

      <section>
        <h2>Stay updated</h2>
        <p>
          Announcements will be shared here and on our socials. For enquiries,
          write to us at <a :href="`mailto:${socials.email}`">{{ socials.email }}</a>.
        </p>
        <div class="socials">
          <a :href="socials.instagram.url" target="_blank">
            <InstagramIcon /> {{ socials.instagram.handle }}
          </a>
          <a :href="socials.youtube.url" target="_blank">
            <YoutubeIcon /> {{ socials.youtube.handle }}
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
@import url("~/assets/css/common.css");

.masthead .badge {
  font-size: 14px;
}

.masthead h3 {
  font-weight: 500;
}

/* ========== NOTICE (redirected from an unpublished page) ========== */
.notice {
  display: flex;
  gap: 1rem;
  margin-inline: -0.75rem;
  padding: 0.5rem 1.25rem 0;
  border: 1px solid var(--primary);
  border-radius: 8px;
  background-color: var(--primary-50);
}

.notice-icon {
  --fg: var(--primary);
  font-size: 32px;
  margin-top: 1.25rem;
}

.notice h2 {
  font-size: 26px;
  margin-block: 1rem 0;
}

.notice a {
  --fg: var(--primary);
  font-weight: 500;
}

/* ========== SECTIONS ========== */
.sections {
  list-style: none;
  padding: 0;
  margin: 2rem -0.75rem 0;
  border: 1px solid var(--fg);
  border-radius: 8px;
  overflow: hidden;
}

.sections li {
  margin: 0;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sections li + li {
  border-top: 1px solid var(--gray-200);
}

.sections li.highlighted {
  background-color: var(--primary-50);
}

.section-icon {
  --fg: var(--primary);
}

.section-text {
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem 0.75rem;
}

.section-text h3 {
  font-style: normal;
  margin: 0;
}

.sections .more-link {
  font-size: 14px;
  white-space: nowrap;
}

.sections .more-link .material-icons-outlined {
  font-size: 18px;
}

/* ========== EXPLORE ========== */
.explore {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1rem;
  margin: 2rem -0.75rem 0;
}

.explore-card {
  display: block;
  padding: 1.25rem 1.25rem 0.25rem;
  border: 1px solid var(--fg);
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 200ms, box-shadow 200ms;
}

.explore-card:hover {
  background-color: var(--primary-50);
  box-shadow: 0px 0px 20px 2px #272f4022;
}

.explore-card .material-icons-outlined {
  --fg: var(--primary);
  font-size: 32px;
}

.explore-card h3 {
  font-style: normal;
  margin-block: 0.5rem 0;
}

.explore-card p {
  margin-block: 0.5rem 1rem;
  font-size: 15px;
  line-height: 1.5;
}

/* ========== SOCIALS ========== */
.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.socials a {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem 1rem;
  border: 1px solid var(--fg);
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 200ms;
}

.socials a:hover {
  background-color: var(--primary-50);
}

.socials :deep(svg) {
  height: 18px;
  width: 18px;
  fill: var(--fg);
}
</style>

<script setup>
import { computed } from "vue";
import { useBase } from "~/composables/useBase";
import { editions, upcoming, firstYear, ordinal } from "~/data/editions";
import { upcomingSections, archivePages, socials } from "~/data/site";
import InstagramIcon from "~/components/icons/instagram.vue";
import YoutubeIcon from "~/components/icons/youtube.vue";

useHead({ title: `ISYF ${upcoming.year} · Coming Soon` });

const route = useRoute();
const yearsOfIsyf = upcoming.year - firstYear + 1;
const previous = editions[editions.length - 1];

// Unpublished pages redirect here with ?from=<page>. Point visitors to the
// same page on the previous edition's site, or the section's closest match.
const requested = computed(() => {
  const from = String(route.query.from ?? "");
  const section = upcomingSections.find(
    (s) => from === s.slug || from.startsWith(s.slug + "/")
  );
  if (!section) return null;
  const pages = archivePages(previous.year);
  const archived =
    pages.find((p) => p.href === `${previous.year}/${from}`) ??
    pages.find((p) => p.href === section.archived);
  return { slug: section.slug, label: section.label, archived };
});
</script>
