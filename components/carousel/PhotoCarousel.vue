<template>
  <div
    class="photo-carousel"
    @touchstart.passive="onTouchStart"
    @touchmove.passive="onTouchMove"
    @touchend.passive="onTouchEnd"
    tabindex="0"
    @keydown="onKeydown"
  >
    <div class="slides">
      <div
        v-for="(img, i) in images"
        :key="i"
        class="slide"
        :class="{ active: i === current }"
      >
        <img :src="img.src" :alt="img.alt || 'slide'" />

        <!-- Transparent overlay for text -->
        <div class="overlay">
          <div class="overlay-content">
            <!-- Custom overlay slot or default caption/description -->
            <slot name="overlay" :image="img">
              <div v-if="img.caption" class="caption-title">{{ img.caption }}</div>
              <div v-if="img.description" class="caption-desc">{{ img.description }}</div>
            </slot>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation controls - always visible -->
    <button class="control prev" @click="prev" aria-label="Previous slide">‹</button>
    <button class="control next" @click="next" aria-label="Next slide">›</button>

    <!-- Indicator dots -->
    <div class="indicators">
      <button
        v-for="(_, idx) in images"
        :key="idx"
        :class="{ active: idx === current }"
        @click="goTo(idx)"
        :aria-label="`Go to slide ${idx + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, watch } from "vue";

const props = defineProps({
  images: { type: Array, default: () => [] },
  interval: { type: Number, default: 0 }, // 0 = no autoplay
});

const current = ref(0);
let touchStartX = 0;
let touchCurrentX = 0;

const next = () => {
  if (!props.images.length) return;
  current.value = (current.value + 1) % props.images.length;
};

const prev = () => {
  if (!props.images.length) return;
  current.value = (current.value - 1 + props.images.length) % props.images.length;
};

const goTo = (i) => {
  current.value = i;
};

const onKeydown = (e) => {
  if (e.key === "ArrowLeft") prev();
  else if (e.key === "ArrowRight") next();
};

const onTouchStart = (e) => {
  touchStartX = e.touches ? e.touches[0].clientX : e.clientX;
  touchCurrentX = touchStartX;
};

const onTouchMove = (e) => {
  touchCurrentX = e.touches ? e.touches[0].clientX : e.clientX;
};

const onTouchEnd = () => {
  const dx = touchCurrentX - touchStartX;
  const threshold = 50;
  if (dx > threshold) prev();
  else if (dx < -threshold) next();
};

watch(
  () => props.images,
  (v) => {
    if (current.value >= v.length) current.value = 0;
  }
);
</script>

<style scoped>
.photo-carousel {
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 1.5rem auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.slides {
  position: relative;
  width: 100%;
  height: 420px;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 600ms ease;
  display: flex;
  align-items: stretch;
}

.slide.active {
  opacity: 1;
  z-index: 2;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Transparent overlay for text */
.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
  pointer-events: none;
}

.overlay-content {
  color: #ffffff;
  max-width: 75%;
  pointer-events: auto;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}

.caption-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  padding: 0.6rem 0.9rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  backdrop-filter: blur(6px);
  color: #ffffff;
}

.caption-desc {
  font-size: 1rem;
  line-height: 1.4;
  padding: 0.7rem 0.9rem;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 6px;
  backdrop-filter: blur(6px);
  max-height: 200px;
  overflow-y: auto;
  color: #f5f5f5;
}

/* Navigation controls - always visible */
.control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  font-size: 28px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 150ms ease, background 150ms;
  z-index: 10;
  opacity: 1;
  pointer-events: auto;
}

.control:hover {
  transform: translateY(-50%) scale(1.08);
  background: rgba(0, 0, 0, 0.7);
}

.control.prev {
  left: 12px;
}

.control.next {
  right: 12px;
}

/* Indicator dots - always visible */
.indicators {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 14px;
  display: flex;
  gap: 10px;
  z-index: 10;
  opacity: 1;
  pointer-events: auto;
}

.indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  padding: 0;
  transition: transform 120ms ease, background 120ms, border-color 120ms;
}

.indicators button:hover {
  transform: scale(1.2);
}

.indicators button.active {
  background: white;
  border-color: rgba(255, 255, 255, 0.9);
  transform: scale(1.3);
}

/* Responsive adjustments */
@media (max-width: 700px) {
  .slides {
    height: 300px;
  }
  .overlay-content {
    max-width: 90%;
  }
  .control {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }
  .caption-title {
    font-size: 1.1rem;
  }
  .caption-desc {
    font-size: 0.9rem;
  }
}
</style>
