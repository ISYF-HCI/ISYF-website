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
import { upcoming, ordinal } from "~/data/editions";

useHead({ title: `FAQ · ISYF ${upcoming.year}` });

const questions = [
  {
    title: "Programme",
    items: [
      {
        q: "Who are we?",
        a: `The ISYF student organizing committee is made up of 42 friendly, fun and caring facilitators from the Students' Science Research Club and other selected students from Hwa Chong Institution, Singapore. We are guided by a team of dedicated teachers from Hwa Chong Institution and we're excited to have you here for the ${ordinal(upcoming.edition)} iteration of ISYF!`,
      },
      {
        q: "What can I look forward to?",
        a: "As your facilitators, we have planned an exciting array of activities, including science quests and a cultural exhibition. In fact, what you have seen in the Programme Overview is just a slight preview of what you can experience here. It is our greatest hope that you'll not just take away valuable scientific insights from the forum, but also long-lasting friendships with people all over the world.",
      },
      {
        q: "What is a typical day like?",
        a: "We believe the 5 days of ISYF will be an exciting and enriching experience for you. You can look forward to the cultural exhibition, learning and experiencing the vibrant and unique cultures of each and every participant from various countries. In a typical day, you can expect engaging dialogue sessions or lessons with eminent scientists in our lectures and Masterclasses, and an opportunity to visit Singapore's own industries and universities for further insight into the research culture in Singapore. Get ready for an unforgettable journey of learning and discovery!",
      },
    ],
  },
  {
    title: "Accommodation",
    items: [
      {
        q: "Where will I be staying?",
        a: "All delegates and educators will be housed at the Hwa Chong Institution Boarding School. More information of the boarding school can be found at <a href='http://www.hcibs.edu.sg' target='_blank' rel='noopener'>http://www.hcibs.edu.sg</a>",
      },
      {
        q: "Will I be sharing rooms with other participants?",
        a: "Yes you will. In fact, the rooms of the boarding school that you'll be staying in are either 2 bedders or 4 bedders. Your roommates are likely to be delegates from other schools. We believe that this is an invaluable opportunity for you to form close friendships and create precious memories.",
      },
      {
        q: "Is there any laundry service available?",
        a: "There are self-launderette facilities (washing machines located on the ground floor of Halls B, E and G) available for usage in the boarding school. Each wash / dry takes approximately 30 minutes at a cost of 2 dollars per wash and 1 dollar per dry.",
      },
      {
        q: "Is there a need to bring bath towels/bed sheets?",
        a: "Bed sheets will be provided already upon check in to the boarding school. However, do note that you would have to bring your own bath towels and toiletries (soap, toothbrush etc.) sufficient for the course of ISYF as the Hwa Chong Institution Boarding School does not provide these.",
      },
      {
        q: "What about safety/security?",
        a: "The Hwa Chong Institution Boarding School is manned by security personnel throughout the day. All visitors are strictly screened before entering. The various halls of residence are also equipped with an access card system which only allows authorised entries into the halls.",
      },
      {
        q: "How much money do I need to bring to the forum?",
        a: "All food, programme and transportation costs are covered. You may wish to bring extra money to purchase additional items from the convenience store located in the boarding school or souvenirs and gift items.",
      },
      {
        q: "Is there Internet available in the boarding school?",
        a: "Yes, there is. There is wireless internet access available in the common areas.",
      },
      {
        q: "What if I have dietary requirements?",
        a: "If you have submitted your dietary requirements to us through email, we would have taken note of all your requests and will try our best to cater to them. Should you need to make any changes to your requirements, please do not hesitate to contact us as we wish to make your experience here as pleasant as possible.",
      },
      {
        q: "Can I call for food deliveries?",
        a: "Most of your meals here will be catered from reputable catering companies according to your dietary requirements. For the rest of the meals, you will be brought to local eating centres. Hence, there will be no need for you to call for external food deliveries. Additionally, we will not be allowing this for safety considerations.",
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
