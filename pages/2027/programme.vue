<template>
  <div>
    <h1>Programme</h1>
    <p class="lede">
      A short look at what ISYF {{ year }} has in store. The programme may
      still change, and we will update this page as details are confirmed.
    </p>

    <section v-for="day in days" :key="day.title" class="ruled split">
      <div class="split-head">
        <h2>{{ day.title }}</h2>
        <span class="meta">{{ day.date }}</span>
      </div>

      <ol class="schedule">
        <li v-for="item in day.items" :key="item.time + item.name">
          <span class="time">{{ item.time }}</span>
          <div>
            <h3>{{ item.name }}</h3>
            <p v-if="item.desc">{{ item.desc }}</p>
          </div>
        </li>
      </ol>
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

.split-head .meta {
  margin-top: 0.25rem;
}

@media screen and (max-width: 760px) {
  .split {
    grid-template-columns: 1fr;
  }
}

/* ========== SCHEDULE (ledger rows) ========== */
.schedule {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--ink);
}

.schedule li {
  display: grid;
  grid-template-columns: 8.5rem minmax(0, 1fr);
  gap: 0.25rem 1.5rem;
  margin: 0;
  padding-block: 1rem;
  border-bottom: 1px solid var(--rule);
}

.time {
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  --fg: var(--crimson-deep);
}

.schedule h3 {
  margin: 0;
  font-family: var(--font);
  font-weight: 600;
  font-size: 17px;
  line-height: 1.4;
  letter-spacing: 0;
}

.schedule p {
  margin: 0.25rem 0 0;
  --fg: var(--ink-soft);
}

@media screen and (max-width: 560px) {
  .schedule li {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup>
import { upcoming } from "~/data/editions";

useHead({ title: `Programme · ISYF ${upcoming.year}` });

const year = upcoming.year;

const days = [
  {
    title: "Day 1",
    date: "Tuesday, 5 January 2027",
    items: [
      { time: "0800 – 0830", name: "Registration and poster collection", desc: "Delegates register and collect their posters." },
      { time: "0830 – 0900", name: "Opening Ceremony", desc: "Opening address by the Co-Chairpersons, followed by a briefing on the schedule and safety." },
      { time: "0900 – 1000", name: "Icebreakers", desc: "Games such as Speed Dating, Spice Potato, 50/50 and What's in the Box to meet your group." },
      { time: "1000 – 1030", name: "Preparation for Dialogues and Masterclasses" },
      { time: "1030 – 1200", name: "Dialogues and Masterclasses", desc: "Small-group sessions with local scientists." },
      { time: "1200 – 1300", name: "Lunch" },
      { time: "1300 – 1500", name: "STEM Lecture (Physical Science)", desc: "A demonstration lecture on nanoparticles by Prof Sow Chorng Haur, with a Kahoot quiz." },
      { time: "1500 – 1530", name: "Learning Journey briefing", desc: "A briefing for Day 2, with readings and guided questions to prepare." },
      { time: "1530 – 1800", name: "Amazing Race in HCI", desc: "A team race around the school, with a challenge at each station." },
    ],
  },
  {
    title: "Day 2",
    date: "Wednesday, 6 January 2027",
    items: [
      { time: "0800 – 1000", name: "STEM Workshops", desc: "A murder mystery workshop in the school laboratories, using DNA fingerprinting and forensic analysis." },
      { time: "1000 – 1030", name: "Preparation for Dialogues and Masterclasses" },
      { time: "1030 – 1200", name: "Dialogues and Masterclasses", desc: "Masterclasses with Tim Hunt, Leslie Valiant and Thomas Cech." },
      { time: "1200 – 1300", name: "Lunch" },
      { time: "1300 – 1645", name: "STEM in Action: Learning Journeys", desc: "Visits to workshops at NUS, Singapore Zoo and Bird Paradise behind the scenes, the Hyundai Motor Group Innovation Center Singapore and the Model Factory at SIMTech." },
      { time: "1700 – 1800", name: "Reflection", desc: "Groups reflect on their Learning Journey and prepare a short presentation." },
    ],
  },
  {
    title: "Day 3",
    date: "Thursday, 7 January 2027",
    items: [
      { time: "0800 – 0930", name: "Sharing on Learning Journeys", desc: "Delegates from each Learning Journey present to everyone else." },
      { time: "0930 – 1100", name: "Team Challenge", desc: "Teams compete in an egg drop and bridge building." },
      { time: "1100 – 1200", name: "Lunch", desc: "Penpals are revealed and have lunch together." },
      { time: "1200 – 1245", name: "Change into formal clothes", desc: "White shirt with blazer or school uniform." },
      { time: "1300 – 1500", name: "Keynote Lecture and Q&A", desc: "Keynote by Pat Hanrahan, followed by a Q&A with student moderators." },
      { time: "1500 – 1600", name: "Poster Exhibition", desc: "Delegates present their posters outside the College Auditorium." },
      { time: "1600 – 1930", name: "Closing Ceremony and Dinner", desc: "The Inspiring Spaces Challenge, closing speeches, prize giving and a buffet dinner. Venue to be confirmed." },
    ],
  },
];
</script>
