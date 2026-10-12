<template>
  <div class="archive-bar" role="note">
    <span class="tag">Archive</span>
    <span class="message">
      You're viewing the {{ archive.title }} website<span class="summary"> · {{ archive.summary }}</span>
    </span>
    <span class="links">
      <a :href="useBase('')">ISYF Home</a>
      <a :href="useBase(`${upcoming.year}`)">
        ISYF {{ upcoming.year }}
        <span class="material-icons-outlined">arrow_forward</span>
      </a>
    </span>
  </div>
</template>

<style scoped>
.archive-bar {
  /* Below the nav, so the open mobile menu covers it */
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--archive-bar-height);
  padding-inline: 1.5rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  --fg: var(--gray-100);
  background-color: var(--primary-900);
  color: var(--fg);
  font-size: 14px;
  white-space: nowrap;
}

.tag {
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  --fg: var(--gray-950);
  background-color: var(--gold);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.message {
  overflow: hidden;
  text-overflow: ellipsis;
}

.links {
  margin-left: auto;
  display: flex;
  gap: 1.25rem;
}

.links a {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 500;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

.links .material-icons-outlined {
  font-size: 16px;
}

@media screen and (max-width: 900px) {
  .summary {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .archive-bar {
    padding-inline: 1rem;
    font-size: 13px;
  }
  .message {
    display: none;
  }
  .links {
    margin-left: 0;
    flex-grow: 1;
    justify-content: space-between;
  }
}
</style>

<script setup>
import { useBase } from "~/composables/useBase";
import { upcoming } from "~/data/editions";

defineProps({
  archive: { type: Object, required: true },
});
</script>
