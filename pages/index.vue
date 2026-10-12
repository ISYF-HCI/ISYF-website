<template>
  <div>
    <div class="banner" :class="{ normal: bannerNormal }">
      <div class="info">
        <img class="logo" :src="useBase('icon_light.webp')" alt="ISYF Logo" />
        <div class="title-wrapper">
          <h1 class="title">International Science Youth Forum 2026</h1>
          <div class="title2-wrapper">
            <h1 class="title title2" aria-hidden>
              International Science Youth Forum 2026
            </h1>
          </div>
        </div>

        <div class="detail-list">
          <div class="detail">
            <span class="material-icons-outlined small-icon">
              calendar_month </span>5-9 January 2026
          </div>
          <div class="seperator"></div>
          <div class="detail">
            <span class="material-icons-outlined small-icon">
              location_on
            </span>
            Hwa Chong Institution (SG)
          </div>
        </div>
      </div>
      <div class="background"></div>
    </div>

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
            <a class="btn" :href="useBase('programme')">
              <span class="icon material-icons-outlined">event_note</span>
              What's the rest of the programme?
              <span class="icon material-icons-outlined">chevron_right</span>
            </a>
            <a class="btn" :href="useBase('profiles/speakers')">
              <span class="icon material-icons-outlined">person</span>
              Who will be speaking at ISYF?
              <span class="icon material-icons-outlined">chevron_right</span>
            </a>
            <a class="btn" :href="useBase('faq')">
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
        <ul class="supporters">
          <a href="https://www.hci.edu.sg" target="_blank">
            <img :src="useBase('images/logos/hc_logo.png')" alt="Hwa Chong Institution" />
          </a>
          <a href="https://www.moe.gov.sg" target="_blank">
            <img :src="useBase('images/logos/moe_logo.png')" alt="Ministry of Education" />
          </a>
          <a href="https://www.nrf.gov.sg" target="_blank">
            <img :src="useBase('images/logos/nrf_logo.png')" alt="National Research Foundation" style="scale: 1.15" />
          </a>
          <a href="https://gyss.nrf.gov.sg" target="_blank">
            <img :src="useBase('images/logos/gyss_logo.png')" alt="Global Young Scientists Summit" />
          </a>
        </ul>
        <ul class="supporters">
          <a href="https://www.ntu.edu.sg/ias" target="_blank">
            <img :src="useBase('images/logos/ntuias_logo.png')" alt="NTU" />
          </a>
          <a href="https://nus.edu.sg" target="_blank">
            <img :src="useBase('images/logos/nus_logo.png')" alt="NUS" />
          </a>
          <a href="https://sutd.edu.sg" target="_blank">
            <img :src="useBase('images/logos/sutd_logo.png')" alt="SUTD" />
          </a>
          <a href="https://www.singaporetech.edu.sg/" target="_blank">
            <img :src="useBase('images/logos/sit_logo.png')" alt="SIT" />
          </a>
        </ul>
        <ul class="supporters">
          <a href="https://a-star.edu.sg" target="_blank">
            <img :src="useBase('images/logos/astar_logo.png')" alt="ASTAR Research" />
          </a>
          <a href="https://www.science.edu.sg" target="_blank">
            <img :src="useBase('images/logos/scs_logo.png')" alt="Science Centre Singapore" />
          </a>
          
        </ul>
        
        
        
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

.banner {
  display: block;
  margin-inline: calc(50% - 50vw);
  margin-bottom: 4rem;
  height: calc(95vh - 3.5rem);
  height: calc(98svh - 3.5rem);

  --fg: var(--gray-950);

  --info-width: 30rem;
  /*--info-width: clamp(
    30rem,
    60vw - 240px,
    30rem
  ); /* (1300, 30rem), (1600, 40rem) */
  --bg-info-width: 80vw;
  --info-padding: 3rem;
  --info-padding: clamp(1.5rem,
      0.0675vw - 20.25px,
      3rem);
  /* (700, 1.5rem), (1100, 3rem) */

  --deco-size: 180px;

  --trn-time: 1s;
  --trn-func: cubic-bezier(0.75, 0, 0.175, 1);

  display: grid;
  transition: grid-template-columns var(--trn-time) var(--trn-func);
  grid-template-columns: calc(var(--bg-info-width) + 2 * var(--info-padding)) 1fr;
  border-bottom: 5px solid var(--primary);
  border-top: 1px solid var(--fg);
}

@media screen and (max-width: 39rem) {
  .banner {
    --info-width: calc(100vw - 2 * var(--info-padding));
    --bg-info-width: 60vw;
  }
}

.banner.normal {
  --bg-info-width: var(--info-width);
}

.background {
  background-image: url("/images/clocktower-6.webp");
  filter: brightness(0.7);
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

@media screen and (max-width: 39rem) {
  .banner {
    position: relative;
    --deco-size: 140px;
    --fg: var(--bg);
    filter: drop-shadow(2px 2px 7px hsla(var(--gray-900-hsla), 0.25));
  }

  .background {
    position: absolute;
    inset: 0;
    z-index: -1;
    filter: brightness(0.5);
  }

  .banner .title {
    margin-block: 0.5rem 1rem;
  }

  .banner .detail-list {
    --fg: var(--gray-950);
    --bg: var(--gray-100);
    background-color: var(--bg);
    filter: drop-shadow(2px 2px 10px hsla(var(--gray-900-hsla), 0.25));
    margin-block: 0.75rem;
    --neg-margin: 0.5rem;
    margin-inline: calc(-1 * var(--neg-margin));
    width: calc(var(--info-width) + 1 * var(--neg-margin));
  }
}

@media screen and (max-height: 850px) and (max-width: 39rem) {
  .banner .info.info {
    justify-content: flex-end;
    padding-bottom: 2rem;
  }
}

.banner .info {
  padding: var(--info-padding);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 13%;
}

.banner .logo {
  height: var(--deco-size);
  width: var(--deco-size);
  margin: -0.5rem -1rem;
}

.title-wrapper {
  position: relative;
  margin-right: calc(100% - 100vw + 2rem);
}

.title {
  padding-right: 2rem;
  font-size: 42px;
  font-size: clamp(42px,
      calc(9vw - 14px),
      96px);
  /* 42px, (700, 52px), (900, 72px), (1200, 96px) */
  max-width: 90rem;
  margin-block: 1rem;
}

.title2 {
  color: var(--gray-100);
  margin-left: calc((var(--bg-info-width) + var(--info-padding)) * -1);
  transition: margin-left var(--trn-time) var(--trn-func);
  filter: drop-shadow(2px 2px 7px hsla(var(--gray-900-hsla), 0.25));
}

.title2-wrapper {
  position: absolute;
  top: 0;
  overflow: hidden;
  left: calc(var(--bg-info-width) + var(--info-padding));
  transition: left var(--trn-time) var(--trn-func);
}

.detail-list {
  width: var(--info-width);
  display: inline-flex;
  justify-content: space-evenly;
  border: 1px solid var(--fg);
  border-radius: 4px;
}

.detail-list .detail {
  font-weight: 500;
  padding: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.detail-list .seperator {
  width: 1px;
  background-color: var(--fg);
}

@media screen and (max-width: 39rem) {
  .detail-list {
    flex-direction: column;
    border: none;
  }

  .detail-list .detail {
    gap: 0.5rem;
  }

  .detail-list .seperator {
    width: 100%;
    height: 1px;
  }
}

.small-icon {
  color: var(--primary);
  font-size: 20px;
}

/*
/* ========== banner ========== 
.banner {
  --fg: var(--gray-100);
  overflow: hidden;

  padding: 5rem 1rem 1rem;
  gap: 1rem;

  justify-content: center;
}
.banner * {
  margin: 0;
  border: 1px dotted red;
}

@media screen and (min-width: 900px) {
  .banner {
    display: grid;
    grid-template-columns: 1fr 3fr 0.25fr;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;

    padding: 1rem 3rem;
    text-align: left;
  }
  .banner .logo {
    margin-inline: auto;
  }
}

.banner::before {
  background-image: url("/images/clocktower.jpg");
  filter: brightness(55%) blur(2px) saturate(1.2);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}

.banner .logo {
  height: min(20vh, 50vw);
  width: min(20vh, 50vw);
  filter: opacity(0.875);
  background-color: var(--bg);
  border-radius: 50%;
  backdrop-filter: blur(5px);
  padding: clamp(0.75rem, 1.5vh, 1.5rem);
}

.banner .info {
  display: flex;
  flex-direction: column;
  gap: 3vh;
}

.banner .title {
  font-size: 48px;
  line-height: 1.125em;
}

.banner .detail-list {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media screen and (max-width: 900px) {
  .banner .detail-list {
    margin-inline: auto;
  }
}

.banner .detail {
  display: block;
  padding-block: 0.5rem 0.25rem;

  font-weight: 600;
  font-size: 22px;
  text-transform: uppercase;
}

@media screen and (min-width: 900px) {
  .banner .detail-list {
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
  }
  .banner .detail {
    padding-inline: 0.5rem;
    width: fit-content;
  }
  .banner .detail + .detail {
    border-top: none;
  }
}

.banner .detail,
.scroll-prompt {
  text-shadow: 0 0 20px var(--gray-900);
}

.scroll-prompt {
  font-size: 22px;
  font-weight: bold;
  display: flex;
  margin-inline: auto;
  align-items: center;
  gap: 0.5rem;
}
@media screen and (min-width: 900px) {
  .scroll-prompt {
    margin-inline: 0;
  }
}
@keyframes arrow-bob {
  0% {
    transform: translateY(-5px);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0.825;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translateY(5px);
    opacity: 0;
  }
}
.arrow-down {
  animation-name: arrow-bob;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}*/

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

/* ========== SUPPORTING ORGANISATIONS ========== */
.supporters {
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 16rem));
  justify-content: center;
  justify-items: center;

  padding: 15px 0px;
  border-radius: 8px;
  overflow: hidden;

  border: 1px solid var(--gray-200);
}

.supporters>* {
  display: grid;
  place-items: center;
  width: 9rem;
  padding-inline: 3rem;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.supporters>*::before {
  content: "open_in_new";
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  font-family: "Material Icons Outlined";
  color: var(--bg);
  background-color: var(--primary);
  padding: 0.25rem;
  border-radius: 4px;

  transform: translateX(3rem);
  transition: 200ms transform;
}

.supporters>*::after {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  transform: translateY(101%);
  transition: 200ms transform;

  background-color: var(--primary-100);
}

.supporters>.null::after {
  content: none;
}

.supporters>*:hover::before {
  transform: translateX(0);
}

.supporters>*:active::before {
  transform: scale(1.2);
}

.supporters>*:hover::after {
  transform: translateY(0);
}

.supporters>*:active::after {
  background-color: var(--primary-200);
}

.supporters span {
  text-align: center;
  font-style: italic;
  font-size: 14px;
  opacity: 0.75;
}

.supporters img {
  width: 100%;
}
</style>

<script setup>
import { useBase } from '~/composables/useBase';

/*await navigateTo('/profiles/speakers', { replace: true })*/
import { onMounted } from "vue";
import banner from "../components/masthead.vue";
import Button from "../components/button/button.vue";
import PrimaryHighlight from "../components/primaryHighlight.vue";
import Letter from "../components/letter.vue";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { ref } from "vue";

const bannerNormal = ref(false);

onMounted(() => {
  setTimeout(() => {
    window.banner = false;
  }, 1);

  bannerNormal.value = true;

  /*gsap.from('.banner .logo', {
    opacity: 0,
    y: -100,
    duration: 0.75,
    delay: 0,
    ease: 'power2.inOut',
  });

  gsap.from('.banner .info > *', {
    opacity: 0,
    y: 15,
    duration: 0.5,
    ease: 'power2.inOut',
    stagger: 0.15,
    delay: 0.5,
  });*/
});

definePageMeta({});
</script>
