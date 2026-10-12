<template>
  <div>
    <ul class="supporters" v-for="(row, i) in rows" :key="i">
      <a v-for="logo in row" :key="logo.href" :href="logo.href" target="_blank">
        <img :src="useBase('images/logos/' + logo.image)" :alt="logo.name" :style="logo.style" />
      </a>
    </ul>
  </div>
</template>

<style scoped>
.supporters {
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 16rem));
  justify-content: center;
  justify-items: center;

  padding: 15px 0px;
  border-radius: 8px;
  overflow: hidden;

  border: 1px solid var(--gray-200);
}

.supporters>* {
  display: grid;
  place-items: center;
  width: 9rem;
  padding-inline: 3rem;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.supporters>*::before {
  content: "open_in_new";
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  font-family: "Material Icons Outlined";
  color: var(--bg);
  background-color: var(--primary);
  padding: 0.25rem;
  border-radius: 4px;

  transform: translateX(3rem);
  transition: 200ms transform;
}

.supporters>*::after {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  transform: translateY(101%);
  transition: 200ms transform;

  background-color: var(--primary-100);
}

.supporters>*:hover::before {
  transform: translateX(0);
}

.supporters>*:active::before {
  transform: scale(1.2);
}

.supporters>*:hover::after {
  transform: translateY(0);
}

.supporters>*:active::after {
  background-color: var(--primary-200);
}

.supporters img {
  width: 100%;
}
</style>

<script setup>
import { useBase } from "~/composables/useBase";

const rows = [
  [
    { name: "Hwa Chong Institution", href: "https://www.hci.edu.sg", image: "hc_logo.png" },
    { name: "Ministry of Education", href: "https://www.moe.gov.sg", image: "moe_logo.png" },
    { name: "National Research Foundation", href: "https://www.nrf.gov.sg", image: "nrf_logo.png", style: "scale: 1.15" },
    { name: "Global Young Scientists Summit", href: "https://gyss.nrf.gov.sg", image: "gyss_logo.png" },
  ],
  [
    { name: "NTU", href: "https://www.ntu.edu.sg/ias", image: "ntuias_logo.png" },
    { name: "NUS", href: "https://nus.edu.sg", image: "nus_logo.png" },
    { name: "SUTD", href: "https://sutd.edu.sg", image: "sutd_logo.png" },
    { name: "SIT", href: "https://www.singaporetech.edu.sg/", image: "sit_logo.png" },
  ],
  [
    { name: "ASTAR Research", href: "https://a-star.edu.sg", image: "astar_logo.png" },
    { name: "Science Centre Singapore", href: "https://www.science.edu.sg", image: "scs_logo.png" },
  ],
];
</script>
