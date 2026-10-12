<template>
  <section class="colored goals">
    <h2>{{ title }}</h2>

    <div class="goal blue">
      <div>
        <h3>Inspire Passion for Science Among Youth</h3>
        <p>
          ISYF aims to provide students who are highly inquisitive and
          passionate about the sciences with ample opportunities to share and
          discuss their interests in Science, technology and scientific
          research. They will be exposed to many fields of science which will
          broaden their outlook and understanding of the scientific world.
          Invited Nobel laureates and eminent scientists will inspire them
          through stories of their own life experiences and scientific
          discoveries. These interactions will help create greater awareness
          among the youth about the importance of broad-based knowledge, fuel
          their curiosity, engender relentless tenacity and a global outlook
          when considering the pursuit of science as a meaningful and
          fulfilling endeavour.
        </p>
      </div>
    </div>

    <div class="goal purple">
      <div>
        <h3>
          Establish Cooperation and Friendship Amongst Young Talented Science
          Students
        </h3>
        <p>
          Students will have many opportunities to interact in different
          cross-cultural groups and forge strong bonds with each other
          throughout the Forum. Activities are designed to promote mutual
          cooperation, understanding and appreciation of each other’s diverse
          cultures while sharing a common passion in science, technology and
          research.
        </p>
      </div>
    </div>

    <div class="goal gold">
      <div>
        <h3>Build Capacities of Science Educators</h3>
        <p>
          Through professional sharing and discussions among Science
          educators, ISYF helps build the competencies of teachers who are
          navigating an evolving educational landscape.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.goals {
  border: 1px solid black;
  border-radius: 16px;
  padding: 0;
  overflow: hidden;
  margin-inline: -0.75rem;
}
.goals > * {
  padding-inline: 1rem;
}
.goals > * + * {
  border-top: 1px solid black;
}
.goals h2 {
  margin: 0;
  padding-block: 0.5rem;
}
.goal {
  display: grid;
  grid-template-columns: 1rem 1fr;
  padding-left: 0;
}
.goal::before {
  content: "";
  display: inline-block;
  background-color: purple;
  border-right: 1px solid var(--fg);
}
.goal > * {
  padding-left: 1rem;
}

.blue::before {
  background-color: hsla(var(--blue-hsla), 0.6);
}
.gold::before {
  background-color: var(--gold);
}
.purple::before {
  background-color: var(--purple);
}
</style>

<script setup>
defineProps({
  title: { type: String, default: "Our Goals" },
});
</script>
