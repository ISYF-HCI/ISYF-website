<template>
  <div>
    <h1>Programme</h1>
    <p class="lede">
      A short look at what ISYF {{ year }} has in store. The programme may
      still change, and we will update this page as details are confirmed.
    </p>

    <section class="glance" aria-labelledby="glance-title">
      <h2 id="glance-title" class="visually-hidden">The programme at a glance</h2>
      <ul class="legend" aria-hidden="true">
        <li v-for="(label, type) in kinds" :key="type"><span class="swatch" :class="type"></span>{{ label }}</li>
      </ul>
      <div class="glance-days">
        <div v-for="day in days" :key="day.title" class="glance-day">
          <h3>{{ day.title }}<span>{{ day.date.split(", ")[1].replace(" 2027", "") }}</span></h3>
          <ol>
            <li
              v-for="item in day.items"
              :key="item.time + item.name"
              class="block"
              :class="item.type"
              :style="{ '--m': minutes(item.time) }"
            >
              <span class="block-time">{{ item.time.split(" – ")[0] }}</span>
              <span class="block-name">{{ item.name }}</span>
            </li>
          </ol>
        </div>
      </div>
    </section>

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

    <section v-for="group in speakers" :key="group.title" class="ruled split" :id="group.id">
      <div class="split-head">
        <h2>{{ group.title }}</h2>
        <span class="meta">{{ group.note }}</span>
      </div>

      <ul class="speakers">
        <li v-for="person in group.people" :key="person.name">
          <img :src="useBase(`images/profiles/speakers/${person.image}`)" :alt="person.name" loading="lazy" />
          <div>
            <h3>{{ person.name }}</h3>
            <p class="honour">{{ person.honour }}</p>
            <p v-for="para in person.bio" :key="para">{{ para }}</p>
          </div>
        </li>
      </ul>
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

/* ========== AT A GLANCE ========== */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.glance {
  margin-bottom: 3rem;
}

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem;
  font-size: 14px;
  --fg: var(--ink-soft);
}

.legend li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
}

.swatch {
  width: 14px;
  height: 14px;
  border-radius: 2px;
}

.glance-days {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.glance-day h3 {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 0 0 0.75rem;
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 26px;
  letter-spacing: 0;
}

.glance-day h3 span {
  font-family: var(--font);
  font-size: 14px;
  --fg: var(--ink-mute);
}

.glance-day ol {
  display: flex;
  flex-direction: column;
  gap: 3px;
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Taller blocks are longer sessions */
.block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.125rem;
  min-height: max(2.75rem, calc(var(--m) * 0.045rem));
  margin: 0;
  padding: 0.375rem 0.75rem;
  border-radius: 2px;
  font-size: 14px;
  line-height: 1.3;
}

.block-time {
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  opacity: 0.8;
}

.block-name {
  font-weight: 500;
}

/* Colours by kind of session */
.ceremony { background-color: var(--crimson-deep); --fg: #ffffff; color: #ffffff; }
.learn { background-color: #6e1423; --fg: var(--plaster); color: var(--plaster); }
.fun { background-color: var(--gilt); --fg: var(--ink); color: var(--ink); }
.rest { background-color: var(--plaster-deep); --fg: var(--ink-soft); color: var(--ink-soft); }

@media screen and (max-width: 900px) {
  .glance-days {
    grid-template-columns: 1fr;
  }
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

/* ========== SPEAKERS ========== */
.speakers {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--ink);
}

.speakers li {
  display: grid;
  grid-template-columns: 10rem minmax(0, 1fr);
  gap: 1.5rem;
  align-items: start;
  margin: 0;
  padding-block: 1.5rem;
  border-bottom: 1px solid var(--rule);
}

.speakers img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: top;
  border-radius: 2px;
  background-color: var(--plaster-deep);
}

.speakers h3 {
  margin: 0;
  font-family: var(--font);
  font-weight: 600;
  font-size: 18px;
  line-height: 1.35;
  letter-spacing: 0;
}

.speakers .honour {
  margin: 0.25rem 0 0.75rem;
  font-size: 14px;
  font-weight: 500;
  --fg: var(--crimson-deep);
}

.speakers p {
  --fg: var(--ink-soft);
}

@media screen and (max-width: 560px) {
  .speakers li {
    grid-template-columns: 7rem minmax(0, 1fr);
    gap: 1rem;
  }
}

@media screen and (max-width: 560px) {
  .schedule li {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup>
import { useBase } from "~/composables/useBase";
import { upcoming } from "~/data/editions";

useHead({ title: `Programme · ISYF ${upcoming.year}` });

const year = upcoming.year;

// Speaker profiles, in the style of the ISYF 2026 Invited Speakers page
const speakers = [
  {
    id: "keynote",
    title: "Keynote",
    note: "Day 3",
    people: [
      {
        name: "Professor Pat Hanrahan",
        image: "pat-hanrahan.webp",
        honour: "ACM A.M. Turing Award, 2019",
        bio: [
          "Pat Hanrahan is the Canon Professor of Computer Science and Electrical Engineering at Stanford University. A pioneer of computer graphics, he was an early member of the team at Pixar and a principal architect of RenderMan, the software behind the images in many animated and live-action films. He later co-founded Tableau Software, which made it easier for people everywhere to explore and understand data.",
          "Professor Hanrahan shared the 2019 ACM A.M. Turing Award with Edwin Catmull for fundamental contributions to 3-D computer graphics. He has also received an Academy Award for Scientific and Technical Achievement, and is a member of the US National Academy of Sciences and the National Academy of Engineering.",
        ],
      },
    ],
  },
  {
    id: "masterclasses",
    title: "Masterclasses",
    note: "Day 2",
    people: [
      {
        name: "Sir Tim Hunt",
        image: "tim-hunt.webp",
        honour: "Nobel Prize in Physiology or Medicine, 2001",
        bio: [
          "Sir Tim Hunt is a biochemist who shared the 2001 Nobel Prize in Physiology or Medicine with Paul Nurse and Leland Hartwell for discovering key regulators of the cell cycle. In 1982, while studying sea urchin eggs, he found cyclin, a protein that rises and falls as cells divide, and which turned out to be central to how all our cells control their growth. Faults in this process lie at the heart of cancer.",
          "A Fellow of the Royal Society, he was knighted in 2006. Sir Tim has been a much-loved guest at ISYF since 2015, sharing his research, his curiosity and his advice for young scientists with generations of delegates.",
        ],
      },
      {
        name: "Professor Leslie Valiant",
        image: "leslie-valiant.png",
        honour: "ACM A.M. Turing Award, 2010",
        bio: [
          "Professor Leslie Valiant is T. Jefferson Coolidge Professor of Computer Science and Applied Mathematics at Harvard University, where he has taught since 1982. He was educated at King's College, Cambridge and Imperial College London, and received his PhD in computer science from Warwick University in 1974.",
          "His work spans theoretical computer science, particularly complexity theory, learning and parallel computation, with interests in computational neuroscience, evolution and artificial intelligence. He is the author of Circuits of the Mind and Probably Approximately Correct, and received the Nevanlinna Prize in 1986 and the Turing Award in 2010. He is a Fellow of the Royal Society and a member of the US National Academy of Sciences. Professor Valiant first joined ISYF as a Masterclass speaker in 2026.",
        ],
      },
      {
        name: "Professor Thomas Cech",
        image: "thomas-cech.webp",
        honour: "Nobel Prize in Chemistry, 1989",
        bio: [
          "Professor Thomas Cech is a biochemist at the University of Colorado Boulder. He shared the 1989 Nobel Prize in Chemistry with Sidney Altman for discovering that RNA can act as a catalyst, not only as a carrier of genetic information. This finding of RNA enzymes, or ribozymes, changed how scientists think about the chemistry of life and about how life may have begun.",
          "He served as President of the Howard Hughes Medical Institute from 2000 to 2009, and is a member of the US National Academy of Sciences. He is also the author of The Catalyst, a book on RNA and the quest to understand life's deepest secrets.",
        ],
      },
    ],
  },
];

const kinds = {
  ceremony: "Ceremonies and keynote",
  learn: "Learning with scientists",
  fun: "Team activities",
  rest: "Meals and breaks",
};

// Length of a session in minutes, from "0800 – 0830"
const minutes = (time) => {
  const [start, end] = time.split(" – ").map((t) => +t.slice(0, 2) * 60 + +t.slice(2));
  return end - start;
};

const days = [
  {
    title: "Day 1",
    date: "Tuesday, 5 January 2027",
    items: [
      { time: "0800 – 0830", name: "Registration and poster collection", type: "rest", desc: "Delegates register and collect their posters." },
      { time: "0830 – 0900", name: "Opening Ceremony", type: "ceremony", desc: "Opening address by the Co-Chairpersons, followed by a briefing on the schedule and safety." },
      { time: "0900 – 1000", name: "Icebreakers", type: "fun", desc: "Games such as Spice Potato, 50/50 and What's in the Box to meet your group." },
      { time: "1000 – 1030", name: "Preparation for Dialogues and Masterclasses", type: "rest" },
      { time: "1030 – 1200", name: "Dialogues and Masterclasses", type: "learn", desc: "Small-group sessions with local scientists." },
      { time: "1200 – 1300", name: "Lunch", type: "rest" },
      { time: "1300 – 1500", name: "STEM Lecture (Physical Science)", type: "learn", desc: "A demonstration lecture on nanoparticles by Prof Sow Chorng Haur, with a Kahoot quiz." },
      { time: "1500 – 1530", name: "Learning Journey briefing", type: "learn", desc: "A briefing for Day 2, with readings and guided questions to prepare." },
      { time: "1530 – 1800", name: "Amazing Race in HCI", type: "fun", desc: "A team race around the school, with a challenge at each station." },
    ],
  },
  {
    title: "Day 2",
    date: "Wednesday, 6 January 2027",
    items: [
      { time: "0800 – 1000", name: "STEM Workshops", type: "learn", desc: "A murder mystery workshop in the school laboratories, using DNA fingerprinting and forensic analysis." },
      { time: "1000 – 1030", name: "Preparation for Dialogues and Masterclasses", type: "rest" },
      { time: "1030 – 1200", name: "Dialogues and Masterclasses", type: "learn", desc: "Masterclasses with Tim Hunt, Leslie Valiant and Thomas Cech." },
      { time: "1200 – 1300", name: "Lunch", type: "rest" },
      { time: "1300 – 1645", name: "STEM in Action: Learning Journeys", type: "learn", desc: "Visits to workshops at NUS, Singapore Zoo and Bird Paradise behind the scenes, the Hyundai Motor Group Innovation Center Singapore and the Model Factory at SIMTech." },
      { time: "1700 – 1800", name: "Reflection", type: "learn", desc: "Groups reflect on their Learning Journey and prepare a short presentation." },
    ],
  },
  {
    title: "Day 3",
    date: "Thursday, 7 January 2027",
    items: [
      { time: "0800 – 0930", name: "Sharing on Learning Journeys", type: "learn", desc: "Delegates from each Learning Journey present to everyone else." },
      { time: "0930 – 1100", name: "Team Challenge", type: "fun", desc: "Teams compete in an egg drop and bridge building." },
      { time: "1100 – 1200", name: "Lunch", type: "rest", desc: "Penpals are revealed and have lunch together." },
      { time: "1200 – 1245", name: "Change into formal clothes", type: "rest", desc: "White shirt with blazer or school uniform." },
      { time: "1300 – 1500", name: "Keynote Lecture and Q&A", type: "ceremony", desc: "Keynote by Pat Hanrahan, followed by a Q&A with student moderators." },
      { time: "1500 – 1600", name: "Poster Exhibition", type: "learn", desc: "Delegates present their posters outside the College Auditorium." },
      { time: "1600 – 1930", name: "Closing Ceremony and Dinner", type: "ceremony", desc: "The Inspiring Spaces Challenge, closing speeches, prize giving and a buffet dinner at HortPark." },
    ],
  },
];
</script>
