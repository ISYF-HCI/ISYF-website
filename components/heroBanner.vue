<template>
  <div class="banner" :class="{ normal: bannerNormal }">
    <div class="info">
      <img class="logo" :src="useBase('icon_light.webp')" alt="ISYF Logo" />
      <div class="title-wrapper">
        <h1 class="title">{{ title }}</h1>
        <div class="title2-wrapper">
          <h1 class="title title2" aria-hidden>
            {{ title }}
          </h1>
        </div>
      </div>

      <div class="detail-list">
        <template v-for="(detail, i) in details" :key="detail.text">
          <div v-if="i > 0" class="seperator"></div>
          <div class="detail">
            <span class="material-icons-outlined small-icon">{{ detail.icon }}</span>
            {{ detail.text }}
          </div>
        </template>
      </div>
      <slot />
    </div>
    <div class="background" :style="{ backgroundImage: `url('${useBase(background)}')` }"></div>
  </div>
</template>

<style scoped>
.banner {
  display: block;
  margin-inline: calc(50% - 50vw);
  margin-bottom: 4rem;
  height: calc(95vh - 3.5rem);
  height: calc(98svh - 3.5rem);

  --fg: var(--gray-950);

  --info-width: 30rem;
  /*--info-width: clamp(
    30rem,
    60vw - 240px,
    30rem
  ); /* (1300, 30rem), (1600, 40rem) */
  --bg-info-width: 80vw;
  --info-padding: 3rem;
  --info-padding: clamp(1.5rem,
      0.0675vw - 20.25px,
      3rem);
  /* (700, 1.5rem), (1100, 3rem) */

  --deco-size: 180px;

  --trn-time: 1s;
  --trn-func: cubic-bezier(0.75, 0, 0.175, 1);

  display: grid;
  transition: grid-template-columns var(--trn-time) var(--trn-func);
  grid-template-columns: calc(var(--bg-info-width) + 2 * var(--info-padding)) 1fr;
  border-bottom: 5px solid var(--primary);
  border-top: 1px solid var(--fg);
}

@media screen and (max-width: 39rem) {
  .banner {
    --info-width: calc(100vw - 2 * var(--info-padding));
    --bg-info-width: 60vw;
  }
}

.banner.normal {
  --bg-info-width: var(--info-width);
}

.background {
  filter: brightness(0.7);
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

@media screen and (max-width: 39rem) {
  .banner {
    position: relative;
    --deco-size: 140px;
    --fg: var(--bg);
    filter: drop-shadow(2px 2px 7px hsla(var(--gray-900-hsla), 0.25));
  }

  .background {
    position: absolute;
    inset: 0;
    z-index: -1;
    filter: brightness(0.5);
  }

  .banner .title {
    margin-block: 0.5rem 1rem;
  }

  .banner .detail-list {
    --fg: var(--gray-950);
    --bg: var(--gray-100);
    background-color: var(--bg);
    filter: drop-shadow(2px 2px 10px hsla(var(--gray-900-hsla), 0.25));
    margin-block: 0.75rem;
    --neg-margin: 0.5rem;
    margin-inline: calc(-1 * var(--neg-margin));
    width: calc(var(--info-width) + 1 * var(--neg-margin));
  }
}

@media screen and (max-height: 850px) and (max-width: 39rem) {
  .banner .info.info {
    justify-content: flex-end;
    padding-bottom: 2rem;
  }
}

.banner .info {
  padding: var(--info-padding);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 13%;
}

.banner .logo {
  height: var(--deco-size);
  width: var(--deco-size);
  margin: -0.5rem -1rem;
}

.title-wrapper {
  position: relative;
  margin-right: calc(100% - 100vw + 2rem);
}

.title {
  padding-right: 2rem;
  font-size: 42px;
  font-size: clamp(42px,
      calc(9vw - 14px),
      96px);
  /* 42px, (700, 52px), (900, 72px), (1200, 96px) */
  max-width: 90rem;
  margin-block: 1rem;
}

.title2 {
  color: var(--gray-100);
  margin-left: calc((var(--bg-info-width) + var(--info-padding)) * -1);
  transition: margin-left var(--trn-time) var(--trn-func);
  filter: drop-shadow(2px 2px 7px hsla(var(--gray-900-hsla), 0.25));
}

.title2-wrapper {
  position: absolute;
  top: 0;
  overflow: hidden;
  left: calc(var(--bg-info-width) + var(--info-padding));
  transition: left var(--trn-time) var(--trn-func);
}

.detail-list {
  width: var(--info-width);
  display: inline-flex;
  justify-content: space-evenly;
  border: 1px solid var(--fg);
  border-radius: 4px;
}

.detail-list .detail {
  font-weight: 500;
  padding: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.detail-list .seperator {
  width: 1px;
  background-color: var(--fg);
}

@media screen and (max-width: 39rem) {
  .detail-list {
    flex-direction: column;
    border: none;
  }

  .detail-list .detail {
    gap: 0.5rem;
  }

  .detail-list .seperator {
    width: 100%;
    height: 1px;
  }
}

.small-icon {
  color: var(--primary);
  font-size: 20px;
}
</style>

<script setup>
import { useBase } from "~/composables/useBase";
import { ref, onMounted } from "vue";

defineProps({
  title: { type: String, required: true },
  // [{ icon: material icon name, text }]
  details: { type: Array, default: () => [] },
  background: { type: String, default: "images/clocktower-6.webp" },
});

const bannerNormal = ref(false);

onMounted(() => {
  setTimeout(() => {
    window.banner = false;
  }, 1);

  bannerNormal.value = true;
});
</script>
