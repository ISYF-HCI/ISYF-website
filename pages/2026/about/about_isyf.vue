<template>
  <Masthead>
    <h1>About ISYF 2026</h1>
    <h3>
      About the event theme and goals!
    </h3>
  </Masthead>

  <main>
    <section>
      <h2>
        This Year's Theme:
        <PrimaryHighlight>
          Curiosity Unlocked: How Questions Drive Discovery in the Age of AI
        </PrimaryHighlight>
      </h2>

      <p>
        Throughout history, scientific progress has been driven not only by the pursuit of solutions such as curing deadly diseases, improving living conditions, or deepening our understanding of the natural world, but also by the courage to ask profound and often disruptive questions. In today’s era of machine learning and automated systems, it is precisely this courage to ask such questions that crucially underscores the enduring power of human curiosity. From Newton’s reflections on the force of gravity to Franklin’s breakthroughs in molecular biology, many of the greatest advances began not with answers, but with inquiry.<br><br>As artificial intelligence expands our capacity to analyse data and generate ideas, we must safeguard the uniquely human ability to question, doubt, and imagine. Indeed, curiosity lies at the heart of many transformative scientific breakthroughs.

      </p>
    </section>

    <Goals />
  </main>
</template>

<style>
.masthead::before {
  color: var(--bg);
  background-image: url("/images/aboutbg2.webp");
  filter: brightness(40%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}
</style>

<style scoped>
.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active,
.collapsible:hover {
  background-color: #ccc;
}

.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}
</style>

<script setup>
import PrimaryHighlight from "~/components/primaryHighlight.vue";
import Goals from "~/components/goals.vue";
import { ref, watch, onMounted, onUnmounted } from "vue";
definePageMeta({
  layout: "masthead",
});

onMounted(() => {
  var coll = document.getElementsByClassName("collapsible");
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});
</script>
