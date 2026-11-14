<template>
  <div>
    <Masthead :background="useBase('images/aboutbg2.webp')" :dim="0.55">
      <h1>About ISYF {{ upcoming.year }}</h1>
      <p class="masthead-lede">About the event theme and goals!</p>
    </Masthead>

    <div>
      <section class="board split">
        <div class="split-head">
          <h2>This year's theme</h2>
          <span class="meta">{{ ordinal(upcoming.edition) }} edition · {{ upcoming.year }}</span>
        </div>
        <div>
          <p class="theme">“{{ upcoming.theme }}”</p>
          <p>
            Scientific discovery thrives on the exchange of ideas, the
            challenging of perspectives, and the connections forged across
            disciplines, cultures and generations. Inspiring Discovery,
            Connecting Humanity celebrates how science brings people together to
            question established ideas, respond to emerging challenges, and
            imagine new possibilities. Through conversations with distinguished
            scientists and exchanges with peers from local schools, students will
            explore how critical, adaptive and inventive thinking can challenge
            assumptions, embrace new perspectives, and transform possibilities
            into meaningful discoveries. These experiences will inspire students
            to see science not only as a pursuit of knowledge, but also as a
            powerful force for connecting people and addressing challenges that
            transcend borders.
          </p>
          <p>
            They will be empowered to become the next generation of scientists
            who bridge ideas, cultures and communities, using discovery to bring
            humanity closer together.
          </p>
        </div>
      </section>

      <section class="ruled split">
        <div class="split-head">
          <h2>Our goals</h2>
        </div>
        <ol class="goals">
          <li v-for="goal in goals" :key="goal.title">
            <h3>{{ goal.title }}</h3>
            <p>{{ goal.full }}</p>
          </li>
        </ol>
      </section>
    </div>
  </div>
</template>

<style scoped>
.masthead-lede {
  max-width: 34ch;
  margin: 0 auto;
  font-family: var(--font-serif);
  font-size: clamp(19px, 2vw, 24px);
  line-height: 1.45;
  --fg: var(--plaster);
}

/* ========== SPLIT SECTIONS ========== */
.split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  gap: 1rem 3rem;
}

.split-head .meta {
  margin-top: 0.25rem;
}

@media screen and (max-width: 760px) {
  .split {
    grid-template-columns: 1fr;
  }
}

/* The theme, set in the serif that holds the record */
.theme {
  font-family: var(--font-serif);
  font-size: clamp(22px, 2.4vw, 28px);
  line-height: 1.3;
  margin-bottom: 1.5rem;
}

/* ========== GOALS ========== */
.goals {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--ink);
}

.goals li {
  margin: 0;
  padding-block: 1.25rem 0.25rem;
  border-bottom: 1px solid var(--rule);
}

.goals h3 {
  /* Small headings sit in the body face, bold, so they don't clash with
     the Lexend text beneath them */
  font-family: var(--font);
  font-weight: 600;
  font-size: 18px;
  line-height: 1.35;
  letter-spacing: 0;
}

.goals p {
  --fg: var(--ink-soft);
}
</style>

<script setup>
import { useBase } from "~/composables/useBase";
import { upcoming, ordinal } from "~/data/editions";
import { goals } from "~/data/site";

definePageMeta({
  layout: "masthead",
});

useHead({ title: `About · ISYF ${upcoming.year}` });
</script>
