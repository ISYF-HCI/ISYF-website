<template>
  <div>
    <HeroBanner
      title="International Science Youth Forum 2026"
      :details="[
        { icon: 'calendar_month', text: '5-9 January 2026' },
        { icon: 'location_on', text: 'Hwa Chong Institution (SG)' },
      ]"
    />

    <!--
    !!!! THIS IS A DISABLED SECTION !!!!
    Read 'README.md#Document Update'

    <div class="documents">
      <h2 class="docs-title">Event Documents</h2> 
      <subtitle class="docs-subtitle">[FOR DELEGATES]</subtitle>
      <span class="docs-prompt">Click here to find all the in-event documents!</span>
      <Button href="/documents" icon="description">Documents</Button>
    </div>
    -->

    <div>
      <section class="letter1">
        <!-- <Letter>         -->

        <img :src="useBase('images/profiles/organising-team/co-chairpersons-2026.webp')" alt="Jolin Lim En Qi and Kan Wei Sen"
          class="cochairs-photo" />
        <p class="sign">Dear Student Delegates and Educators,</p>

        <p>Welcome to the 18th International Science Youth Forum (ISYF) @ Hwa Chong Institution, held from 5 to 9 January 2026!</p>

        <p>ISYF provides a platform for student delegates from around the world to share their passion for Science, Technology, and Research whilst building long-lasting friendships. Over the week, our Organising Committee has curated an exciting line-up of activities brimming with scientific discovery, from inspiring lectures and research exchanges to hands-on experiments and thought-provoking discussions, all alongside moments of sightseeing, fun, and collaboration with new friends from around the world.</p>

        <p>The theme for this year’s ISYF is: “Curiosity Unlocked: How Questions Drive Discovery in the Age of AI.” Scientific discovery has always been rooted in curiosity and the innate drive to ask why and how, inspiring humanity to question the unknown and expand the frontiers of understanding. Why does the universe continue to expand? How do intricate patterns in nature arise from the simplest of rules? Can machines ever replicate the depth of human thought and emotion?</p>

        <p>In an era defined by artificial intelligence and rapid technological transformation, this timeless spirit of inquiry remains our greatest compass. As intelligent systems reshape the way we explore and interpret the world, it is curiosity that steers us toward innovation with purpose and progress with conscience. Through ISYF 2026, we aim to nurture a generation of young scientists who value questions as much as answers, and who recognise that true discovery arises not from certainty, but from the courage to wonder.</p>

        <p>The Organising Committee of ISYF 2026 looks forward to meeting you and we hope that you will have a fruitful time at ISYF 2026!</p>

        <p class="sign">Warmest regards,<br>
        Jolin Lim En Qi and Kan Wei Sen<br>
        Co-Chairpersons<br>
        ISYF 2026 Student Organising Committee</p>

        <!-- </Letter> -->
      </section>

      <section>
        <div>
          <h2>What will you get to do?</h2>
          <p>
            Prepare to embark on an electrifying journey at ISYF, a spectacular
            convergence of science, culture, and boundless discovery! Traverse
            the dynamic Singapore Discovery Trail, an expedition weaving through
            urban marvels and verdant oases. Engage with Professor Sow Chorng Haur 
            for an exhilarating dive into the Nanoworld, unlocking mind-bending
            nano-scale wonders and futuristic applications.
          </p>
          <p>
            Dive into an intellectual frenzy at Masterclasses, a Keynote Lecture, Poster
            Exhibitions, an escape room and infographic design. ISYF beckons—an
            adventure pulsating with connection, discovery, and exhilaration!
          </p>

          <div class="button-row">
            <a class="btn" :href="useBase('2026/programme')">
              <span class="icon material-icons-outlined">event_note</span>
              What's the rest of the programme?
              <span class="icon material-icons-outlined">chevron_right</span>
            </a>
            <a class="btn" :href="useBase('2026/profiles/speakers')">
              <span class="icon material-icons-outlined">person</span>
              Who will be speaking at ISYF?
              <span class="icon material-icons-outlined">chevron_right</span>
            </a>
            <a class="btn" :href="useBase('2026/faq')">
              <span class="icon material-icons-outlined">question_mark</span>
              I have a question!
              <span class="icon material-icons-outlined">chevron_right</span>
            </a>
          </div>
        </div>
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
  </div>
</template>

<style>
.content {
  margin-top: 3.5rem !important;
}
</style>

<style scoped>
@import url("~/assets/css/cards.css");

.cochairs-photo {
  width: 100%;
  margin: 1rem 0;
  border-radius: 4px;
  float: right;
  border: 1px solid black;
}

@media screen and (min-width: 900px) {
  .cochairs-photo {
    width: max(20vw, 30rem);
    margin: 1rem;
    margin-top: 4.5rem;
    margin-bottom: 0;
  }
}

.letter1 {
  border-radius: 8px;
  border: 1px solid var(--fg);
  margin: 4rem -1rem 4rem;
  padding: 1rem 1.5rem 0.125rem;
  font-weight: 400;
  font-family: var(--font-display);
  background-color: #f6eee3;
}

@media screen and (min-width:900px) {
  .letter1 {
    padding: 1rem 3rem 0.125rem 1.5rem;
  }
}

/* ========== CONTENT ========== */
.sign {
  font-style: italic;
}

.people {
  margin-inline: calc(50% - 50vw);
  padding-inline: calc(50vw - 50%);
  background-color: var(--primary-50);
}

/* ========== DOCUMENTS SHORTCUT ========== */
:deep(.documents a) {
  --fg: var(--primary);
  --bg: var(--gray-100);
  --bg-hover: var(--gray-300);
}

.documents {
  margin-block: 5rem 7rem;
  --fg: var(--gray-100);
  --bg: var(--primary);
  background-color: var(--bg);
  padding: 0.125rem 1.5rem 0.75rem;
  border-radius: 8px;
}

.docs-title {
  line-height: 0.95em;
  margin-block: 2rem 0.25rem;
}

.docs-subtitle {
  display: block;
  font-family: var(--font-display);
  font-size: 18px;
  margin-bottom: 0.75rem;
}

.docs-prompt {
  display: block;
  margin-block: 1rem;
}

/* ========== BUTTON ROW ========== */
.button-row {
  width: 100%;
  --fg: var(--primary);
  margin-block: 3.5rem;
}

.button-row .btn {
  margin-block: -1px;
  padding-block: 0.5rem;
  padding-inline: 0.25rem;
  border-block: 1px solid var(--gray-300);

  text-decoration: none;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.375rem;
}
</style>

<script setup>
import { useBase } from '~/composables/useBase';
import HeroBanner from "~/components/heroBanner.vue";
import Supporters from "~/components/supporters.vue";

definePageMeta({});
</script>
