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
        a: `The ISYF student organizing committee is made up of 42 friendly, fun and caring facilitators from the Students' Science Research Club and other selected students from Hwa Chong Institution, Singapore. We are guided by a team of dedicated teachers from Hwa Chong Institution and we're excited to have you here for the ${ordinal(upcoming.edition)} iteration of ISYF!`,
      },
      {
        q: `What is the theme of ISYF ${year}?`,
        a: `The theme for ISYF ${year} is “${upcoming.theme}”. It celebrates how science brings people together to question established ideas, respond to emerging challenges and imagine new possibilities. Read more about the theme and our goals on the ${link(useBase(`${year}/about`), "About page")}.`,
      },
      {
        q: "What can I look forward to?",
        a: "As your facilitators, we have planned an exciting array of activities, including lectures, Masterclasses and science quests. In fact, what you will see in the Programme Overview is just a slight preview of what you can experience here. It is our greatest hope that you'll not just take away valuable scientific insights from the forum, but also long-lasting friendships with fellow science enthusiasts from schools across Singapore.",
      },
      {
        q: "What is a typical day like?",
        a: "We believe the 5 days of ISYF will be an exciting and enriching experience for you. In a typical day, you can expect engaging dialogue sessions or lessons with eminent scientists in our lectures and Masterclasses, collaborative science activities with delegates from other schools, and opportunities to visit Singapore's own industries and universities for further insight into the research culture in Singapore. Get ready for an unforgettable journey of learning and discovery!",
      },
      {
        q: "Will I get to meet Nobel laureates and eminent scientists?",
        a: `Yes! Conversations with distinguished scientists are at the heart of ISYF. Through lectures, Masterclasses and dialogue sessions, Nobel laureates and eminent scientists will share their research and life journeys, and you will have the chance to pose your own questions to them. The speakers for ISYF ${year} will be announced on our Profiles page.`,
      },
      {
        q: "Will I need to present my research?",
        a: "In past editions, delegates shared their scientific research with eminent scientists, educators and fellow delegates at the Poster Exhibition. Details on research sharing for this year will be sent to participating schools closer to the forum.",
      },
    ],
  },
  {
    title: "Participation",
    items: [
      {
        q: `Who can take part in ISYF ${year}?`,
        a: `ISYF ${year} is open to students from local schools in Singapore who are inquisitive and passionate about science, technology and research. Delegates take part through their schools, so if you are interested, please approach your school's science department or teacher-in-charge.`,
      },
      {
        q: "Are there international delegates this year?",
        a: `ISYF ${year} brings together delegates from local schools only. While there are no overseas delegations this year, you will work in mixed groups with peers from other schools, exchanging ideas across disciplines and backgrounds, in the spirit of this year's theme.`,
      },
      {
        q: "Can teachers attend as well?",
        a: "Yes. Educators accompanying their school's delegates are welcome to join the forum. Through professional sharing and discussions, ISYF also aims to build the capacities of science educators.",
      },
    ],
  },
  {
    title: "Logistics",
    items: [
      {
        q: "Will I be staying overnight?",
        a: `No. ISYF ${year} does not include an overnight stay. Delegates will attend the programme during the day and return home at the end of each day.`,
      },
      {
        q: "Where will ISYF be held?",
        a: `Most activities will take place at Hwa Chong Institution, ${contact.address}. Some sessions may be held at partner institutions such as universities and research centres, and we will arrange transport between Hwa Chong Institution and these venues.`,
      },
      {
        q: "How do I get to Hwa Chong Institution?",
        a: "Hwa Chong Institution is a short walk from Tan Kah Kee MRT station on the Downtown Line, and is also served by buses along Bukit Timah Road. Reporting times and the meeting point for each day will be shared before the forum.",
      },
      {
        q: "What should I wear?",
        a: "Please come in your school uniform unless told otherwise. If any event needs a different dress code, we will let you know in advance.",
      },
      {
        q: "What should I bring?",
        a: "Bring a water bottle, stationery and anything you need for the day, such as an umbrella for Singapore's weather. If you are presenting your research, we will share what to prepare closer to the date.",
      },
      {
        q: "What if I have dietary requirements?",
        a: "If you have submitted your dietary requirements to us, we would have taken note of all your requests and will try our best to cater to them. Should you need to make any changes to your requirements, please do not hesitate to contact us as we wish to make your experience here as pleasant as possible.",
      },
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
