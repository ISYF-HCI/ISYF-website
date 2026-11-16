<template>
  <section v-for="group in groups" :key="group.title" class="ruled split" :id="group.id">
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
</template>

<style scoped>
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
</style>

<script setup>
import { useBase } from "~/composables/useBase";

defineProps({ groups: { type: Array, required: true } });
</script>
