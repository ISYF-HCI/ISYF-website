<template>
  <Masthead>
    <h1>About Singapore</h1>
    <h3></h3>
  </Masthead>

  <main>
    <section>
      <h2>
        Singapore Locale
      </h2>

      <p>
      </p>

      <PhotoCarousel :images="carouselImages" />
    </section>
    <section>
      <h2>A Cosmopolitan Garden City</h2>
      <p>Singapore is a city state nestled off the southern tip of the Malay Peninsula in Southeast Asia, and is commonly known as the 
         <b>“Little Red Dot”</b> due to its small land area of 725.7km.<br><br>
        Singapore is adorned with modern architectural icons such as the Marina Bay Sands and the Jewel Changi. Colonial buildings and Chinese shophouses – reminiscent of the city's rich history blend in with these modern icons to create a truly unique city skyline.
         Specks of greenery add life to this small city state, with some of the best places to get in touch with nature including the Singapore Botanic Gardens, Bukit Timah Hill and the Southern Ridges, a 10 km trail connecting multiple national parks together.
         <br><br>
        Besides the beautiful scenery, Singapore also offers a unique cultural experience. In Singapore, many cultures blend with one another, creating the unique Singaporean identity where people of different races and religions live together harmoniously. This has shaped the cuisines we enjoy and the way we communicate.

      </p>
      <div class="button-row">
        <a class="btn" :href="useBase('programme')">
          <span class="icon material-icons-outlined">event_note</span>
            Which locale will delegates be visiting?
          <span class="icon material-icons-outlined">chevron_right</span>
        </a>
      </div>
    </section>
  </main>
</template>

<style>
.masthead::before {
  color: var(--bg);
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/54/Singapore_Skyline_at_Night_with_Black_Sky_%28banner_esVoy%29.JPG");
  filter: brightness(40%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 43% 50%;
}
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

.red::before {
  background-color: var(--red);
}
.green::before {
  background-color: var(--green);
}
.purple::before {
  background-color: var(--purple);
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

/* ========== BUTTON ROW (from index) ========== */
.button-row {
  width: 100%;
  --fg: var(--primary);
  margin-block: 3.5rem;
}

.button-row .btn {
  margin-block: -1px;
  padding-block: 0.5rem;
  padding-inline: 0.25rem;
  border-block: 1px solid var(--gray-300);

  text-decoration: none;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.375rem;
}
</style>

<script setup>
import { useBase } from '~/composables/useBase';
import PrimaryHighlight from "../components/primaryHighlight.vue";
import PhotoCarousel from "~/components/carousel/PhotoCarousel.vue";
import { ref, watch, onMounted, onUnmounted } from "vue";
definePageMeta({
  layout: "masthead",
});

// Carousel images with transparent overlay text
const carouselImages = [
  {
    src: useBase('images/singapore-skyline.webp'),
    caption: "Singapore Skyline",
    description: "Experience the stunning cityscape of Singapore, a global hub of innovation and culture. The iconic Marina Bay Sands and Gardens by the Bay showcase the perfect blend of nature and modern architecture.",
    alt: "Singapore skyline"
  },
  {
    src: useBase('images/marina-bay-sands.webp'),
    caption: "Marina Bay Area",
    description: "Marina Bay is the heart of Singapore's business and entertainment district. This waterfront precinct features world-class convention facilities, museums, and cultural attractions.",
    alt: "Marina Bay waterfront"
  },
  {
    src: useBase('images/gardens-by-the-bay.webp'),
    caption: "Gardens by the Bay",
    description: "An iconic horticultural attraction spanning 101 hectares. The Supertree Grove and Cloud Forest dome represent Singapore's commitment to sustainability and green innovation.",
    alt: "Gardens by the Bay Supertrees"
  },
  {
    src: useBase('images/art-science-museum.webp'),
    caption: "Singapore ArtScience Museum",
    description: "A space for art, science, and human spirit, with 33 galleries showcasing a multidisciplinary space celebrating cosmology, couture, environmental justice, and other cutting edge innovation.",
    alt: "The ArtScience Museum, Singapore"
  },
  {
    src: useBase('images/clarke-quay.webp'),
    caption: "Clarke Quay",
    description: "A vibrant riverside district filled with colorful shophouses, lively nightlife, and waterfront dining. Popular for bars, clubs, and scenic evening strolls.",
    alt: "Clarke Quay"
  },
  {
    src: useBase('images/little-india.webp'),
    caption: "Little India",
    description: "A sensory-rich neighborhood bursting with colorful shops, fragrant spice stalls, and vibrant Hindu temples showcasing Indian heritage.",
    alt: "Little India"
  },

  {
    src: useBase('images/chinatown.webp'),
    caption: "Chinatown",
    description: "A historic enclave blending old temples, heritage streets, and bustling markets with trendy cafes and culture-rich experiences.",
    alt: "Chinatown"
  },
  {
    src: useBase('images/kampong-glam.webp'),
    caption: "Kampong Glam",
    description: "Singapore’s Malay-Arab quarter known for its striking Sultan Mosque, indie boutiques, and a cool mix of tradition and modern street culture.",
    alt: "Kampong Glam"
  },
  {
    src: useBase('images/fort-canning.webp'),
    caption: "Fort Canning",
    description: "Stroll through a historic landmark that traces Singapore’s beginnings. Fort Canning Park reveals ancient artifacts unearthed from its grounds and teems with diverse flora and fauna.",
    alt: "Fort Canning"
  },
  {
    src: useBase('images/ura-museum.webp'),
    caption: "URA Museum",
    description: "Trace Singapore’s journey from a humble fishing village to the modern metropolis it is today. Explore interactive exhibitions that showcase the urban strategies and planning efforts that shaped our city.",
    alt: "URA Museum"
  },

];

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
