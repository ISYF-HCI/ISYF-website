<!-- Co-chairpersons as "A and B". A name with a link opens the profile in a
     new tab but looks like plain text. -->
<template>
  <span>
    <template v-for="(chair, i) in chairs" :key="chairName(chair)">
      <a
        v-if="typeof chair !== 'string' && chair.link"
        class="plain-link"
        :href="chair.link"
        target="_blank"
        rel="noopener"
      >{{ chair.name }}</a>
      <template v-else>{{ chairName(chair) }}</template>
      <template v-if="i < chairs.length - 2">, </template>
      <template v-else-if="i === chairs.length - 2"> and </template>
    </template>
  </span>
</template>

<style scoped>
.plain-link,
.plain-link:hover {
  color: inherit;
  --fg: inherit;
  text-decoration: none;
}

.plain-link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
</style>

<script setup>
import { chairName } from "~/data/editions";

defineProps({
  chairs: { type: Array, required: true },
});
</script>
