<template>
  <div>
    <h1>Profiles</h1>
    <p class="lede">
      Meet the Nobel laureates and eminent scientists joining ISYF {{ year }}.
      More profiles will be added here as they are confirmed.
    </p>

    <SpeakerProfiles :groups="speakers" />

    <section class="ruled">
      <p class="more">
        Looking for more?
        <a :href="useBase(`${year}/programme`)">See when they speak on the Programme page</a>
        or
        <a :href="useBase('laureates')">browse every Nobel laureate and scientist ISYF has welcomed</a>.
      </p>
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

.more {
  margin: 0;
  --fg: var(--ink-soft);
}
</style>

<script setup>
import { useBase } from "~/composables/useBase";
import SpeakerProfiles from "~/components/speakerProfiles.vue";
import { upcoming } from "~/data/editions";
import { speakers } from "~/data/speakers";

useHead({ title: `Profiles · ISYF ${upcoming.year}` });

const year = upcoming.year;
</script>
