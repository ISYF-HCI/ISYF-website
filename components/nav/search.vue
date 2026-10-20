<template>
  <div class="site-search" @focusout="onFocusOut">
    <label class="visually-hidden" for="site-search-input">Search ISYF</label>
    <span class="material-icons-outlined search-icon" aria-hidden="true">search</span>
    <input
      id="site-search-input"
      v-model="query"
      type="search"
      placeholder="Search"
      autocomplete="off"
      role="combobox"
      aria-autocomplete="list"
      aria-controls="site-search-results"
      :aria-expanded="open"
      :aria-activedescendant="open && results.length ? `site-search-${active}` : undefined"
      @focus="focused = true"
      @keydown.down.prevent="move(1)"
      @keydown.up.prevent="move(-1)"
      @keydown.enter.prevent="go(results[active])"
      @keydown.esc="query = ''"
    />
    <ul v-if="open" id="site-search-results" class="results" role="listbox">
      <li
        v-for="(result, i) in results"
        :id="`site-search-${i}`"
        :key="result.href + result.title"
        role="option"
        :aria-selected="i === active"
        :class="{ active: i === active }"
      >
        <a :href="useBase(result.href)" @mouseenter="active = i">
          <span class="result-title">{{ result.title }}</span>
          <span class="result-kind">{{ result.kind }}</span>
        </a>
      </li>
      <li v-if="!results.length" class="none">No matches for “{{ query }}”</li>
    </ul>
  </div>
</template>

<style scoped>
.site-search {
  position: relative;
  display: flex;
  align-items: center;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.search-icon {
  position: absolute;
  left: 0.5rem;
  font-size: 20px;
  pointer-events: none;
}

input {
  width: 11rem;
  min-height: 36px;
  padding: 0 0.75rem 0 2.1rem;
  box-sizing: border-box;
  border: 1px solid var(--fg);
  border-radius: 2px;
  background: transparent;
  color: var(--fg);
  font: inherit;
  font-size: 14px;
  letter-spacing: normal;
  text-transform: none;
  transition: width 250ms cubic-bezier(0.16, 1, 0.3, 1);
}

input::placeholder {
  color: var(--fg);
  opacity: 0.75;
}

input:focus {
  width: 16rem;
  outline: 2px solid var(--crimson);
  outline-offset: 2px;
}

.results {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  z-index: 130;
  width: min(26rem, calc(100vw - 2rem));
  max-height: min(70vh, 30rem);
  overflow-y: auto;
  margin: 0;
  padding: 0.25rem 0;
  list-style: none;
  background-color: var(--plaster);
  border: 1px solid var(--ink);
  border-radius: 2px;
  box-shadow: 0 12px 24px -12px rgba(31, 26, 25, 0.35);
  text-transform: none;
  letter-spacing: normal;
}

.results li {
  margin: 0;
}

.results a {
  display: block;
  padding: 0.5rem 0.875rem;
  text-decoration: none;
  --fg: var(--ink);
  color: var(--ink);
}

.results li.active a {
  background-color: var(--primary-50);
}

.result-title {
  display: block;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.35;
  --fg: var(--ink);
}

.result-kind {
  display: block;
  font-size: 13px;
  line-height: 1.4;
  --fg: var(--ink-mute);
}

.none {
  padding: 0.75rem 0.875rem;
  font-size: 14px;
  --fg: var(--ink-mute);
}

/* Inside the phone menu the field runs full width */
@media screen and (max-width: 1099px) {
  .site-search {
    width: 100%;
    max-width: 24rem;
    margin-top: 0.5rem;
  }

  input,
  input:focus {
    width: 100%;
  }

  .results {
    left: 0;
    right: auto;
    width: 100%;
  }
}
</style>

<script setup>
import { ref, computed, watch } from "vue";
import { useBase } from "~/composables/useBase";
import { editions, upcoming, chairName } from "~/data/editions";
import { scientists, scientistId } from "~/data/scientists";

// Everything the search can find. Built from data/, so new editions and
// guests appear without changes here.
const index = [
  { title: "Home", kind: "Page", href: "" },
  { title: "Contact us", kind: "Email and address", href: "#contact" },
  { title: `ISYF ${upcoming.year}`, kind: "Coming soon", href: `${upcoming.year}`, extra: (upcoming.chairs ?? []).map(chairName).join(" ") },
  { title: "Editions & themes", kind: "Every ISYF since 2009", href: "history" },
  { title: "Nobel laureates & eminent scientists", kind: "Everyone ISYF has invited", href: "laureates" },
  ...editions.map((e) => ({
    title: `ISYF ${e.year}${e.theme ? ` · ${e.theme}` : ""}`,
    kind: e.archive ? "Edition · website archived" : "Edition",
    href: `history#y${e.year}`,
    extra: [e.note, ...(e.chairs ?? []).map(chairName)].join(" "),
  })),
  ...editions
    .filter((e) => e.archive)
    .map((e) => ({ title: `ISYF ${e.year} website`, kind: "Archive", href: e.archive })),
  ...scientists.map((s) => ({
    title: s.name,
    kind: s.honour,
    href: `laureates#${scientistId(s.name)}`,
    extra: s.years.join(" "),
  })),
];

const normalise = (text) =>
  text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const searchable = index.map((item) => ({
  item,
  text: normalise(`${item.title} ${item.kind} ${item.extra ?? ""}`),
}));

const query = ref("");
const focused = ref(false);
const active = ref(0);

const results = computed(() => {
  const words = normalise(query.value).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  return searchable
    .filter(({ text }) => words.every((w) => text.includes(w)))
    .slice(0, 8)
    .map(({ item }) => item);
});

const open = computed(() => focused.value && query.value.trim().length > 0);

watch(query, () => (active.value = 0));

function move(step) {
  if (!results.value.length) return;
  active.value = (active.value + step + results.value.length) % results.value.length;
}

function go(result) {
  if (!result) return;
  window.location.href = useBase(result.href);
  query.value = "";
  focused.value = false;
}

function onFocusOut(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) focused.value = false;
}
</script>
