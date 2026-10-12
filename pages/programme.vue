<template>
  <Masthead>
    <h1>Programmes</h1>
  </Masthead>
  <h1>Programme Outline</h1>
  <p>
    Wondering what you'll be doing for 5 days? Here's a brief introduction to
    all the wonderful activities we have planned for you!
  </p>

  <main class="programme">
    <div class="timeline-wrapper">
      <Timeline />
    </div>
   
    <div class="condensed-timeline">
      <ul>
        <li class="event-day" v-for="(dayTitle, dayIndex) in days">
          <h2>
            {{ dayTitle }}
          </h2>
          <ul>
            <li class="event-details" v-for="event in events[dayIndex]" :class="{ highlight: event.highlight }">
              <div class="event-title">
                <span class="time">{{ event.time }}</span>
                <h3 class="name">{{ event.name }}</h3>
              </div>
              <img v-if="event.image" :src="event.image" :alt="'Image for ' + event.name" />
              <p v-if="event.description">{{ event.description }}</p>
              <div v-if="event.pdf" class="event-pdf">
                <a href="https://docs.google.com/spreadsheets/d/1ND2ED0Qa0661CBFmTPhW6W-WWlrx4PIJnvIWUirWd4g/edit?usp=sharing" target="_blank" class="pdf-link">
                  Open spreadsheet ↗
                </a>
                <iframe 
                  :src="event.pdf + '#zoom=200'"
                  type="application/pdf"
                  loading="lazy">
                </iframe>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </main>
</template>

<style>
.content {
  margin-top: 0rem !important;
}

</style>

<style scoped>
:global(.masthead::before) {
  color: var(--bg);
  background-image: url("/images/artwork_bg.webp");
  filter: brightness(40%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;

}

@media screen and (max-width: 800px) {
  :global(.masthead h1) {
    font-size: 64px;
  }
}

ul {
  list-style: none;
  padding-left: 0;
}

/* ========== OVERALL BOX STYLING ========== */
.programme {
  margin-bottom: 50vh;
  /* Prevent clash between last box and footer coloring */
  width: 100%;
  overflow: visible;
}

.timeline-wrapper {
  margin-block: 3rem;
  margin-inline: max(calc(-50vw + 1.5rem + 50%), -8rem);
}

/* ========== TIMELINE ========== */
.event-day h2 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 26px;
  width: fit-content;
  margin-block: 2rem 3rem;
}

.event-day h3 {
  font-weight: 600;
  font-style: normal;
  font-family: var(--font-display);
  margin-block: 0;
  line-height: 1.5rem;
}

/* DAY HEADER BACKGROUND */
.event-day h2::after {
  content: "";
  z-index: -10;
  position: absolute;
  right: -15vw;
  left: -100vw;
  top: -1rem;
  bottom: -0.75rem;

  border: 1px solid var(--gray-500);
  border-radius: 16px;
  background-color: var(--primary);
  color: var(--primary-900);
}

.event-day:nth-of-type(even) h2::after {
  background-color: hsla(var(--primary-200-hsla), 0.125);
}

.event-day:nth-of-type(odd) h2::after {
  background-color: hsla(var(--primary-200-hsla), 0.25);
}

@media screen and (min-width: 900px) {
  .event-day h2 {
    margin-block: 2rem;
  }

  .event-day h2::after {
    top: -1rem;
    bottom: -0.75rem;
  }
}

.event-day {
  margin: 0 calc(50% - 50vw);
  padding: 1rem calc(50vw - 50%);
  color: var(--fg);
  --cl: var(--primary);
  --fg-2: var(--gray-400);
  --bg-2: var(--gray-200);
  position: relative;
}

.event-day:nth-of-type(even) {
  --fg: var(--gray-100);
  --fg-2: var(--gray-400);
  --bg: var(--primary-900);
  --bg-2: var(--primary-800);
  --cl: var(--primary-400);
}

.event-day:nth-of-type(even)::after {
  content: "";
  z-index: -50;
  position: absolute;
  inset: 0;
  background-color: var(--primary-900);
}

.event-details {
  margin-block: 1rem 1rem;
}

.event-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 30;

  gap: 0.125rem;
  margin-block: 0.5rem 1rem;
}

.time {
  display: block;
  font-weight: 300;
  font-size: 16px;
  white-space: nowrap;
  font-family: var(--font);
  padding-right: 1rem;
  color: var(--gray-400);

  flex-shrink: 0;
}

.event-details p {
  font-size: 15px;
  margin-block: 0.375rem;
  color: var(--fg-2);
  line-height: 1.375em;
}

.highlight {
  background-color: var(--bg-2);
  border-radius: 8px;
  padding: 0.75rem 0.75rem;
  margin-left: -0.375rem;
}

.event-pdf {
  position: relative;
  width: 100%;
  margin-top: 1rem;
  border-radius: 8px;
}

.pdf-link {
  display: inline-block;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.pdf-link:hover {
  background-color: var(--primary-600);
  transform: translateY(-1px);
}

.event-pdf iframe {
  display: block;
  width: 100%;
  height: 60vh;
  border: 1px solid var(--gray-500);
  border-radius: 8px;
}

/* TIMELINE EFFECT */
.event-day {
  --tm-radius: 2rem;
  margin-left: calc(-100vw - 3.25rem + 5vw);
  padding-left: calc(100vw + var(--tm-radius) * 2 + 1px - 0.5rem);
  position: relative;
}

.event-day:first-of-type::before {
  top: 4rem;
}

.event-day:last-of-type::before {
  bottom: 5rem;
}

.event-day::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(100vw + var(--tm-radius));
  width: 2px;

  background-color: var(--cl);
}

.event-day h2,
.event-day .event-title {
  position: relative;
}

.event-day h2::before,
.event-day h3::before {
  content: "";
  position: absolute;
  display: block;
  border-radius: 50%;
}

.event-day h2::before {
  background-color: var(--cl);
  left: calc(-3rem - 1px + 0.5rem);
  top: calc(50% - 1rem);
  width: 2rem;
  height: 2rem;
}

.event-day h3 {
  position: relative;
}

.event-day h3::before {
  box-sizing: border-box;
  border: 1px solid var(--fg);
  background-color: var(--bg);
  left: -2.125rem;
  top: 0.125rem;
  width: 1.25rem;
  height: 1.25rem;
}

.highlight h3::before {
  left: -2.5rem;
}

@media screen and (min-width: 900px) {
  .event-day h2 {
    display: block;
    width: fit-content;
  }
}
</style>

<script setup>
import Timeline from "../components/timeline.vue";
import { onMounted } from "vue";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray(".event-details");

  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 10,
      duration: 0.5,
      stagger: 0.15,
      ease: "power2.inOut",
      scrollTrigger: section,
    });
  });
});

const days = [
  "Day 0 (4 Jan)",
  "Day 1 (5 Jan)",
  "Day 2 (6 Jan)",
  "Day 3 (7 Jan)",
  "Day 4 (8 Jan)",
  "Day 5 (9 Jan)",
];

// NOTE: breakfast was not included in event timeline for 2026.
const events = [
  [
    // Day 0
    {
      // image:"/images/artwork.webp",
      name: "Arrival of Delegates",
      description: "Welcome to Singapore!",
      highlight: true,
    },
    {
      name: "Lunch",
      time: "11 AM - 12 PM",
    },
    {
      name: "Dinner",
      time: "6PM - 7PM"
    },
    {
      name: "Safety Briefing",
      time: "7 PM - 7:45 PM",
    },
  ],
  [
    // Day 1
    {
      name: "Introduction of Delegates",
      time: "7:30 AM",
    },
    {
      name: "Programme Briefing @ LT3",
      time: "8 AM",
    },
    {
      name: "Team Bonding Activities and Cultural Exhibition ",
      time: "8:30 AM - 11 AM",
      highlight: true,
    },
    {
      name: "Lunch",
      time: "11 AM - 12 PM",
    },
    {
      name: "Singapore Discovery Trail",
      time: "12:30 PM - 5:30 PM",
      highlight: true,
      description:
        "From the phenomenal urban landscape to the lush nature in Singapore’s parks, adventure awaits! On the Singapore Discovery Trail, delegates will be able to explore key attractions in Singapore while completing challenges and tasks throughout their journey. The trail will also allow delegates to gain a deeper understanding of Singapore’s traditions and cultures while immersing in the wonders of this garden city.",
    },
    {
      name: "Dinner",
      time: "6 PM - 7 PM",
    },
    {
      name: "Programme Briefing",
      time: "7 PM - 7:45 PM",
    },
  ],
  [
    // Day 2
    {
      name: "Depart for NUS",
      time: "8:30 AM",
    },
    {
      name: "Professor Sow’s Lecture: Introduction to the Nanoworld @ National University Singapore",
      time: "9:30 AM - 11 AM",
      highlight: true,
      description: "Wonder what happens when you zoom in, in and in? Want to discover intriguing properties of matter at the nanoscale? Look no further! Delegates will delve into the nanoworld with the friendly and brilliant Professor Sow Chorng Haur from the National University of Singapore! Through demonstrations and interactive activities, delegates may look forward to exploring current and future applications of nanotechnology with this fun-filled lecture.",
    },
    {
      name: "Lunch at NUS",
      time: "11:30 AM - 12:30 PM"
    },
    {
      name: "Depart for Science Centre Singapore",
      time: "12:45 PM",
    },
    {
      name: "Workshops at Science Centre Singapore",
      highlight: true,
      time: "1:30 PM - 4:30 PM",
      description: "Ever wondered how everyday phenomena work? The Science Centre has the answers! Dive into interactive exhibitions and take part in an exclusive workshop where delegates get to perform their own experiment.",
    },
    {
      name: "Return to HCI",
      time: "5 PM",
    },
    {
      name: "Dinner",
      time: "6 PM - 7 PM",
    },
    {
      name: "Science Quest",
      time: "7:15 PM - 8:30 PM",
      highlight: true,
    },
  ],
  [
    // Day 3
    {
      name: "Preparation for Masterclasses",
      time: "8:30 AM - 9:30 AM",
    },
    {
      name: "Masterclasses I",
      time: "9:30 AM - 11 AM",
      highlight: true,
      description:
        "Ever wanted to interact with eminent scientists from around the world? Through our various Masterclasses,  Nobel Laureates and eminent scientists will share about their cutting-edge research, and their passion for science. After which, delegates will have the opportunity to pose questions to the scientists and learn more about the scientific world",
    },
    {
      name: "Lunch",
      time: "11:30 AM - 12:30 PM",
    },
    {
      name: "Singapore ArtScience Museum",
      time: "1:30 PM - 5 PM",
      highlight: true
    },
    {
      name: "Return to HCI",
      time: "5 PM",
    },
    {
      name: "Dinner",
      time: "6 PM - 7 PM",
    },
    {
      name: "Science Quest",
      time: "7:15 PM - 8:30 PM",
      highlight: true,
    }
  ],
  [
    // Day 4
    {
      name: "Preparation for Masterclasses",
      time: "8:30 AM",
    },
    {
      name: "Masterclasses II",
      time: "9:30 AM - 11 AM",
      highlight: true,
      description:
        "Ever wanted to interact with eminent scientists from around the world? Through our various Masterclasses,  Nobel Laureates and renowned professors will share about their cutting-edge research, and their passion for science. After which, delegates will have the opportunity to pose questions to the scientists and learn more about careers in science.",
    },
    {
      name: "Lunch",
      time: "11:30 PM - 12:30 PM",
    },
    {
      name: "Seated for Keynote Lecture",
      time: "1:45 PM",
    },
    {
      name: "ISYF Keynote Lecture",
      time: "2 PM - 3:30 PM",
      highlight: true,
      description:
        "Hear from the insights of Nobel Laureates during the Keynote Lecture, which will also be the flagship event of ISYF 2026. After which, take a tour around the Poster Exhibition, where student delegates will share their scientific research with eminent scientists, educators, and other fellow delegates! ",
    },
    {
      name: "Poster Exhibition",
      time: "3 PM - 4:30 PM",
      highlight: true,
      pdf: "/ISYF26_SciActs_PosterExhibition_ForPublication - All Posters - ISYF 2026.pdf"
    },
    {
      name: "Dinner Out",
      time: "5 PM - 9 PM",
    },
  ],
  [
    // Day 5
    {
      name: "Science Quest and Poster Presentation",
      time: "8:30 AM - 10 AM",
      highlight: true,
      description:
        "The collaborative science activity promises to tickle delegates’ thinking caps as they explore the art of geometry and principles of physics. This will culminate into a group presentation, where delegates will share their ideas with their peers. The thrill of discovery awaits! ",
    },
    {
      name: "Depart for Hotel",
      time: "10 AM - 11:15 AM",
    },
    {
      name: "Closing Lunch and Farewell",
      time: "12 PM - 3 PM",
      highlight: true,
      description:
        "During the Closing Lunch, delegates may look forward to exciting performances and activities under the grand ballroom lights. While it's sad to say goodbye, we hope that you'll bring along the lasting memories and newfound friendships made during ISYF 2026!",
    },
    {
      name: "Final Departure",
      time: "3 PM",
      description: "Thanks for coming for ISYF 2026!",
    },
  ],
];
</script>
