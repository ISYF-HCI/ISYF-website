<template>
  <div>
    <span class="eyebrow">Since {{ firstYear }}</span>
    <h1>Laureates & Eminent Scientists</h1>
    <p>
      Across {{ editions.length }} editions, ISYF has invited {{ count("nobel") }} Nobel
      laureates, {{ count("fields") }} Fields medallists and many other
      distinguished scientists to share their journeys with delegates. Here is
      everyone who has joined us, edition by edition.
    </p>

    <div class="filters">
      <div class="category-filter" role="group" aria-label="Filter by distinction">
        <button
          v-for="option in categoryOptions"
          :key="option.id"
          :class="{ selected: category === option.id }"
          :aria-pressed="category === option.id"
          @click="category = option.id"
        >
          {{ option.label }} <span class="count">{{ option.count }}</span>
        </button>
      </div>
      <label class="year-filter">
        <span class="material-icons-outlined">event</span>
        <select v-model="year" aria-label="Filter by year">
          <option :value="null">All years</option>
          <option v-for="y in years" :key="y" :value="y">ISYF {{ y }}</option>
        </select>
      </label>
    </div>

    <div>
      <section v-for="group in groups" :key="group.id" class="group">
        <h2>
          {{ group.label }}
          <span class="count">{{ group.people.length }}</span>
        </h2>
        <ul class="people">
          <li
            v-for="person in group.people"
            :key="person.name"
            :id="scientistId(person.name)"
            class="person"
            :class="person.category"
          >
            <h3>{{ person.name }}</h3>
            <p class="honour">{{ person.honour }}</p>
            <span class="years-label">Invited</span>
            <ul class="chips">
              <li v-for="y in person.years" :key="y">
                <a :href="useBase(`history#y${y}`)" :class="{ current: y === year }">{{ y }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <p v-if="!groups.length" class="empty">
        No one matches these filters.
        <button class="reset" @click="resetFilters">Show everyone</button>
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url("~/assets/css/common.css");

h1 {
  margin-top: 1rem;
}

.count {
  --fg: var(--gray-500);
  font-family: var(--font);
  font-weight: 400;
  font-size: 0.6em;
  vertical-align: 0.15em;
}

/* ========== FILTERS ========== */
.filters {
  position: sticky;
  top: 3.5rem;
  z-index: 10;
  margin: 2rem -0.75rem 0;
  padding: 0.75rem;
  border-bottom: 1px solid var(--gray-200);
  background-color: var(--bg);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

@media screen and (max-width: 700px) {
  .filters {
    position: static;
  }
}

.category-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.category-filter button {
  padding: 0.375rem 0.875rem;
  border: 1px solid var(--gray-300);
  border-radius: 999px;
  font-size: 14px;
  font-weight: 400;
  transition: background-color 200ms, border-color 200ms;
}

.category-filter button:hover {
  border-color: var(--primary);
}

.category-filter button.selected {
  --fg: var(--gray-100);
  border-color: var(--primary);
  background-color: var(--primary);
}

.category-filter button.selected .count {
  --fg: var(--primary-100);
}

.category-filter .count {
  font-size: 12px;
  margin-left: 0.125rem;
  vertical-align: 0;
}

.year-filter {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.year-filter .material-icons-outlined {
  --fg: var(--primary);
}

.year-filter select {
  padding: 0.375rem 0.5rem;
  border: 1px solid var(--gray-300);
  border-radius: 6px;
  background-color: var(--bg);
  font: inherit;
  font-size: 14px;
}

/* ========== PEOPLE ========== */
.group h2 {
  margin-block: 2.5rem 1rem;
}

.people {
  list-style: none;
  padding: 0;
  margin: 0 -0.75rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: 1rem;
}

.person {
  scroll-margin-top: 9rem;
  margin: 0;
  padding: 1rem 1rem 1.125rem 1.25rem;
  border: 1px solid var(--fg);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  transition: box-shadow 200ms, background-color 200ms;
}

/* Category stripe, matching the goals and history markers */
.person::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0.375rem;
  background-color: var(--green);
}

.person.nobel::before {
  background-color: var(--gold);
}

.person.fields::before {
  background-color: var(--purple);
}

.person.prize::before {
  background-color: hsla(var(--blue-hsla), 0.8);
}

.person:target {
  background-color: var(--primary-50);
  box-shadow: 0px 0px 20px 2px #272f4033;
}

.person h3 {
  font-style: normal;
  font-size: 20px;
  line-height: 1.3;
  margin-block: 0 0.25rem;
}

.honour {
  margin-block: 0 0.875rem;
  font-size: 15px;
  line-height: 1.45;
}

.years-label {
  display: block;
  margin-bottom: 0.375rem;
  --fg: var(--gray-500);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.chips a.current {
  --fg: var(--gray-100);
  border-color: var(--primary);
  background-color: var(--primary);
}

/* ========== MISC ========== */
.empty {
  margin-block: 3rem;
  text-align: center;
}

.reset {
  --fg: var(--primary);
  font-weight: 500;
  text-decoration: underline;
}
</style>

<script setup>
import { ref, computed } from "vue";
import { useBase } from "~/composables/useBase";
import { editions, firstYear } from "~/data/editions";
import { categories, scientists, scientistId } from "~/data/scientists";

useHead({ title: "Laureates & Scientists · ISYF" });

const years = editions.map((e) => e.year).reverse();
const count = (id) => scientists.filter((s) => s.category === id).length;

const categoryOptions = [
  { id: "all", label: "All", count: scientists.length },
  ...categories.map((c) => ({ id: c.id, label: c.label, count: count(c.id) })),
];

// ?year=2014 opens the page filtered to one edition
const route = useRoute();
const initialYear = Number(route.query.year);
const category = ref("all");
const year = ref(years.includes(initialYear) ? initialYear : null);

function resetFilters() {
  category.value = "all";
  year.value = null;
}

// Each distinction's guests, in the order they were first invited
const groups = computed(() =>
  categories
    .filter((c) => category.value === "all" || category.value === c.id)
    .map((c) => ({
      ...c,
      people: scientists
        .filter((s) => s.category === c.id && (!year.value || s.years.includes(year.value)))
        .sort((a, b) => a.years[0] - b.years[0]),
    }))
    .filter((g) => g.people.length)
);
</script>
