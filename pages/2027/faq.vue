<template>
  <div>
    <h1>FAQ</h1>
    <p class="lede">
      We know you're bound to have many questions about ISYF, so we compiled a
      list of the most important questions about your experience!
    </p>

    <section v-for="(section, s) in questions" :key="section.title" class="ruled split">
      <div class="split-head">
        <h2>{{ section.title }}</h2>
        <button type="button" class="expand-all" @click="toggleSection(s)">
          {{ allOpen(s) ? "Collapse all" : "Expand all" }}
        </button>
      </div>

      <div class="questions">
        <details
          v-for="(item, q) in section.items"
          :key="item.q"
          :open="open[s][q]"
          @toggle="open[s][q] = $event.target.open"
        >
          <summary>
            <h3>{{ item.q }}</h3>
            <span class="sign" aria-hidden="true"></span>
          </summary>
          <p v-html="item.a"></p>
        </details>
      </div>
    </section>
  </div>
</template>

<style scoped>
h1 {
  margin-top: 1.5rem;
}

.lede {
  margin-bottom: 2.5rem;
}

/* ========== SPLIT SECTIONS ========== */
.split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  gap: 1rem 3rem;
}

@media screen and (max-width: 760px) {
  .split {
    grid-template-columns: 1fr;
  }
}

.expand-all {
  min-height: 44px;
  padding: 0;
  font: inherit;
  font-weight: 500;
  color: var(--crimson-deep);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

/* ========== QUESTIONS (ledger rows) ========== */
.questions {
  border-top: 1px solid var(--ink);
}

details {
  border-bottom: 1px solid var(--rule);
}

summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 44px;
  padding-block: 0.875rem;
  cursor: pointer;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

summary h3 {
  margin: 0;
  font-family: var(--font);
  font-weight: 600;
  font-size: 17px;
  line-height: 1.4;
  letter-spacing: 0;
}

summary:hover h3 {
  --fg: var(--crimson-deep);
  color: var(--crimson-deep);
}

/* A drawn +/− square, as on the home page's honour board toggle */
.sign {
  position: relative;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border: 1px solid var(--ink);
  border-radius: 2px;
}

.sign::before,
.sign::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 1.5px;
  background-color: var(--ink);
  transform: translate(-50%, -50%);
}

.sign::after {
  transform: translate(-50%, -50%) rotate(90deg);
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
}

details[open] .sign::after {
  transform: translate(-50%, -50%) rotate(0deg);
}

details p {
  margin: 0 0 1.25rem;
  --fg: var(--ink-soft);
}
</style>

<script setup>
import { ref } from "vue";
import { useBase } from "~/composables/useBase";
import { upcoming, ordinal } from "~/data/editions";
import { contact, socials } from "~/data/site";

useHead({ title: `FAQ · ISYF ${upcoming.year}` });

const year = upcoming.year;
const link = (href, text) =>
  href.startsWith("http")
    ? `<a href="${href}" target="_blank" rel="noopener">${text}</a>`
    : `<a href="${href}">${text}</a>`;
const mail = (email) => link(`mailto:${email}`, email);

// ISYF 2027 is for delegates from local schools only, with no overnight stay.
// Answers may contain HTML (links).
const questions = [
  {
    title: "Programme",
    items: [
      {
        q: "Who are we?",
        a: `The ISYF student organizing committee is made up of friendly, fun and caring facilitators from the Students' Science Research Club and other selected students from Hwa Chong Institution, Singapore. We are guided by a team of dedicated teachers from Hwa Chong Institution and we're excited to have you here for the ${ordinal(upcoming.edition)} iteration of ISYF!`,
      },
      {
        q: `What is the theme of ISYF ${year}?`,
        a: `The theme for ISYF ${year} is “${upcoming.theme}”. It celebrates how science brings people together to question established ideas, respond to emerging challenges and imagine new possibilities. Read more about the theme and our goals on the ${link(useBase(`${year}/about`), "About page")}.`,
      },
      {
        q: "Will I get to meet Nobel laureates and eminent scientists?",
        a: `Yes! Conversations with distinguished scientists are at the heart of ISYF. Through lectures, Masterclasses and dialogue sessions, Nobel laureates and eminent scientists will share their research and life journeys, and you will have the chance to pose your own questions to them. The speakers for ISYF ${year} will be announced on our Profiles page.`,
      },
    ],
  },
  {
    title: "Contact",
    items: [
      {
        q: "Who can I contact if I have more questions?",
        a: `For general enquiries, email us at ${mail(contact.email)}. You can also reach the student organising committee at ${mail(socials.email)}, or follow us on Instagram at ${link(socials.instagram.url, socials.instagram.handle)} for the latest updates.`,
      },
    ],
  },
];

// Which questions are open, per section
const open = ref(questions.map((section) => section.items.map(() => false)));

const allOpen = (s) => open.value[s].every(Boolean);

function toggleSection(s) {
  const next = !allOpen(s);
  open.value[s] = open.value[s].map(() => next);
}
</script>
