<template>
  <h1>Invited Speakers</h1>

  <p>
    Click on each speaker's name to see their profile! You may also scroll down to view
    further details.
  </p>

  <div class="collage">
    <section class="event" v-for="(event, eventIndex) in profiles" :class="{ 'event-open': eventsOpen[eventIndex] }">
      <h3 class="event-title">{{ event.event }}</h3>
      <a class="profile" v-for="profile in event.profiles" :href="'#' + profile.name.replaceAll(' ', '')"
        @click="resetLink">
        <img class="profile-img" :src="assetBase + 'images/profiles/speakers/' + profile.image + '.png'" alt="" />
        <div class="name">
          {{ profile.name }}
        </div>
      </a>
    </section>
  </div>

  <div class="intros">
    <div class="event" v-for="event in profiles">
      <h2>
        <div class="scroll-banner-wrapper">
          <span class="scroll-banner">{{
            event.event.concat('&nbsp;&nbsp;•&nbsp;&nbsp;').repeat(30)
          }}</span>
        </div>
      </h2>

      <section class="profile" v-for="profile in event.profiles">
        <div class="scroll-anchor" :id="profile.name.replaceAll(' ', '')"></div>
        <img :src="assetBase + 'images/profiles/speakers/' + profile.image + '.png'" :alt="profile.name"/>
        <div class="info">
          <h3>{{ profile.name }}</h3>
          <h4 v-if="profile.status">{{ profile.status }}</h4>
          <p>
            <span v-html="profile.description"></span>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
@import url('~/assets/css/profiles.css');

.collage .event {
  grid-template-columns: repeat(auto-fill, minmax(min(40%, 10.8rem), 1fr));
}

.collage .name {
  bottom: -1rem;
  background-color: var(--bg);
  width: 80%;
  color: var(--fg);
  border-radius: 2rem;
  border: 1px solid var(--gray-900);
}

.collage .profile-img{
  outline: 1px solid var(--fg);
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
}

</style>

<script setup>
import { ref } from "vue";
import { useRuntimeConfig } from '#imports'
definePageMeta({ alias: ['/'] })

// Base path for static assets 
const assetBase = useRuntimeConfig().app.baseURL

function resetLink() {
  setTimeout(() => {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState({ path: newurl }, "", newurl);
  }, 1);
}

const profiles = [
  {
    event: "Keynote Lecture",
    profiles: [
      {
        name: "Professor Brian Schmidt",
        status: "Keynote Speaker",
        image: "brian-schmidt",
        description:
        "Brian Schmidt is Distinguished Professor of Astronomy at the Australian National University, of which he has been a faculty member since 1995. From 2016 to 2023, he was the university’s 12th Vice Chancellor and President. He is a Fellow of the Australian Academy of Science, the US National Academy of Sciences and the Royal Society (London), as well as a Foreign Member of the Spanish Royal Academy of Sciences and the Indian Academy of Sciences. He also serves on several boards and councils, including Australia’s National Science and Technology Council and Singapore’s Research Innovation and Enterprise Council.<br><br>Prof Schmidt has worked across many areas of astronomy, including supernovae, gamma-ray bursts, gravitational wave transients, exo-planets and metal-poor stars. In 2000, he received the Australian Government’s inaugural Malcolm McIntosh Award for his achievements in the physical sciences. This was followed by the 2006 Shaw Prize for Astronomy and the 2007 Gruber Prize for Cosmology. For his work on the accelerating universe, he shared the 2011 Nobel Prize in Physics with Adam Riess and Saul Perlmutter. In 2013, he was made a Companion of the Order of Australia."
      }
    ],
  },
  {
    event: "Guest of Honour",
    profiles: [
      {
        name: "Dr Ong Chen Hui",
        status: "Guest of Honour",
        image: "ong-chen-hui",
        description:
          "Dr Ong Chen Hui is the Assistant Chief Executive of Business and Technology at the Infocomm Media Development Authority (IMDA), where she oversees the agency’s efforts in developing the industry and research ecosystem around emerging digital technologies, such as AI, AI safety, quantum communications and green computing.<br>She developed the A.I. Verify toolkit and Project Moonshot for governing AI and launched multiple programmes, including the National Multimodal LLM R&D programme to support SEA-LION and MERaLiON LLMs, the Future Communications R&D Programme to support 6G research, the Digital Trust Centre to support research into trust technologies, and the National Quantum Safe Networks Plus Programme to support business access to quantum safe communications. <br><br>Chen Hui has spent more than 20 years in R&D and technology innovation. She serves on the technical boards of non-profits and is the Chair of AI Verify Foundation. Prior to IMDA, she was the APJ CTO in Trustwave – a Singtel company and a Principal Member of Technical Staff in DSO National Laboratories.",
      },
      ]
  },
  {
    event: "Masterclasses",
    profiles: [
      {
        name: "Professor Armin Aberle",
        image: "armin-aberle",
        description: "Prof Armin Aberle serves as CEO and Head of the Solar Energy Research Institute of Singapore (SERIS) at the National University of Singapore (NUS). He is also a tenured full professor in the university’s Department of Electrical and Computer Engineering. He holds BSc/MSc, PhD and Dr habil degrees in physics from German universities (Freiburg, Hannover). His research focus is on photovoltaic (PV) materials, devices and modules. His R&D work covers the full spectrum from fundamental materials research to the industrial evaluation of advanced or novel PV technologies at the pilot line level and their transfer to industry. In his 38-year career in the PV sector, he has (co)authored more than 600 scientific-technical papers (which have received more than 20,000 citations, h-index 68) and has supervised more than 60 PhD students. He is an Editorial Board member of Progress in Photovoltaics and other scientific journals.<br><br>From 1994 to 1998, he was the Scientific Director of the newly established Silicon PV Department at the Institute for Solar Energy Research (ISFH) in Hamelin, Germany. He then worked for 10 years in Sydney, Australia as a solar energy professor at the University of New South Wales (UNSW) and was a member of the UNSW team that developed and taught the world’s first Bachelor of Engineering degree programme for Photovoltaic and Renewable Energy Engineering. In 2008, he joined NUS to establish SERIS, as the Deputy CEO and Director of the Silicon PV Cluster. Since 2012, he has been serving as SERIS CEO. He is also the Director of the institute’s Next-Generation Industrial Solar Cells & Modules Cluster and the Acting Director of the Novel PV Concepts Cluster."
      },
      {
        name: "Professor Dan Chia",
        image: "dan-chia",
        description:
          "Wei Ming Dan Chia is an Associate Professor in the Infocom Technology cluster at the Singapore Institute of Technology. He obtained his PhD from the School of Computing Science at the University of Glasgow. Prior to his academic career, he gained 17 years of industry experience at Delphi, Siemens VDO, and Continental from 2001 to 2017. His last position at Continental was Director of the ITS Laboratory and Head of Advanced Development in Asia for infotainment and connectivity products. His primary research interests focus on the applied research of artificial intelligence to enhance the safety operations of autonomous vehicles and to develop intelligent transport systems.",
      },
      {
        name: "Professor Dario Poletti",
        image: "dario-poletti",
        description:
          "Dr Dario Poletti is an Associate Professor and Head of the Science, Mathematics and Technology department of the Singapore University of Technology and Design (SUTD). He is also Principal Investigator at the Centre for Quantum Technologies and coordinator of the Majulab for the Quantum Thermodynamics, Energetics and Resources axis.<br><br>Dario first joined SUTD in 2012 as an Assistant Professor, starting his own group. He was previously a postdoc at CQT and with groups in France and Switzerland. He obtained his joint PhD in Physics from the National University of Singapore and the Australian National University in 2009, for which he received the Medal of the Materials Research Society of Singapore for the best PhD thesis in NUS Physics Department. Before that, he earned a Master of Engineering (Nuclear Engineering) from Politecnico di Milano and Master of Engineer (Applied Physics) from Ecole Centrale Paris.<br><br>In 2015, he was named in the Asia Pacific MIT Technology Review’s Innovators under 35 list, and in 2017 received the IoP Outstanding Referee Award for New Journal of Physics. He has publications in journals including Nature, Nature Communications, Nature Quantum Information, Physical Review Letters, Physical Review X, and Review of Modern Physics. Presently, he is serving as Vice President for the Institute of Physics Singapore. <br><br>His work focuses on the physics of large quantum systems, especially their dynamics and interaction with the environment, and the development of numerical methods to study them, including tensor networks and neural networks. In recent years, his research has also expanded towards quantum and quantum-inspired computing. "
      },
      {
        name: "Professor Joan Rose",
        image: "joan-rose",
        description:
          "Professor Joan B. Rose holds the Homer Nowlin Chair in Water Research at Michigan State University, where she has worked for the last 22 years. She is Director of the university’s Water Alliance, leading interdisciplinary efforts to solve global water problems. She is also a member of the US National Academy of Engineering, the Royal Institution of Singapore, and the EU Academy of Sciences, as well as a Corresponding Member of the Royal Academy of Sciences and Arts of Barcelona, Spain.<br><br>Professor Rose is an international expert in water microbiology, water quality, and public health safety with over 300 publications. She is the recipient of the 2016 Stockholm Water Prize and the 2024 IWA Global Water Award. Her research focuses on the application of new molecular methods, pathogen surveillance, microbial source tracking, the removal of pathogens by water and wastewater treatment, and quantitative microbial risk assessment.<br><br>She is currently Chair of the International Joint Commission’s Health Professionals Advisory Board. She has also been collaborating with the Michigan Department of Environment, Great Lakes, and Energy on the state-wide programme to use advanced technology for beach water testing and with the Michigan Department of Human Health Services on wastewater surveillance.",
      },
      {
        name: "Professor Kedar Hippalgaonkar",
        image: "kedar-hippalgaonkar",
        description: "Kedar Hippalgaonkar is an Associate Professor in Materials Science and Engineering at Nanyang Technological University and Principal Scientist at Institute of Materials Research and Engineering, A*STAR, as well as co-founder of a startup: Xinterra, Inc. He leads research programmes integrating AI with solid-state chemistry, physics, and advanced synthesis to accelerate the discovery of new functional materials. He develops AI-guided materials design frameworks, autonomous experimentation platforms, and ultra-fast solid-state synthesis techniques to explore materials for energy, sustainability, and emerging technologies."
      },
      {
        name: "Professor Leslie Valiant",
        image: "leslie-valiant",
        description:
        "Professor Leslie Valiant was educated at King's College, Cambridge and Imperial College, London, and received his PhD in computer science at Warwick University in 1974. He is currently T. Jefferson Coolidge Professor of Computer Science and Applied Mathematics in the School of Engineering and Applied Sciences at Harvard University, where he has been teaching since 1982. Prior to this, he taught at Carnegie Mellon University, Leeds University, and the University of Edinburgh.<br><br>His work encompasses several areas of theoretical computer science, particularly complexity theory, learning and parallel computation. He also has interests in computational neuroscience, evolution, and artificial intelligence, and is the author of two books, Circuits of the Mind and Probably Approximately Correct. Prof Valiant received the Nevanlinna Prize in 1986, the Knuth Award in 1997, the European Association for Theoretical Computer Science EATCS Award in 2008, and the Turing Award in 2010. He is a Fellow of the Royal Society (London) and a member of the US National Academy of Sciences."
      },
      {
        name: "Sir Richard Roberts",
        image: "richard-roberts",
        description: "Sir Richard J. Roberts is Chief Scientific Officer at New England Biolabs in Ipswich, Massachusetts, United States. He first joined the company as Chief Consultant in 1975 and moved there permanently in 1992. He received his PhD in Organic Chemistry in 1968 from Sheffield University and was a postdoctoral fellow at Harvard University.<br><br>While at Cold Spring Harbor Laboratory from 1972 to 1992, he began work on the newly discovered Type II restriction enzymes. His laboratory discovered more than 70 percent of the first 100 enzymes described. Studies of transcription in Adenovirus-2 led to the discovery of split genes and mRNA splicing in 1977, for which he received the Nobel Prize in Physiology or Medicine in 1993. Since then, Sir Richard has been involved in organising a number of Nobel initiatives to correct scientific misunderstandings and promote humanitarian causes, such as supporting the use of genetic engineering techniques to improve plant breeding practices.",
      },
      {
        name: "Professor Roger Foo Sik Yin",
        image: "roger-foo",
        description: "Professor Roger Foo is the inaugural chair holder of the Zayed Bin Sultan Al Nahyan Professorship of Medicine and Vice Dean (Research) at the NUS Yong Loo Lin School of Medicine. He is also Director of the National University Health System (NUHS) Cardiovascular Research Institute (CVRI) and Senior Consultant at the National University Heart Centre Singapore (NUHCS), where he serves as the Clinical Lead for the Cardiac Genetics Service. <br><br>A cardiac geneticist with a specific interest in cardio-metabolism, Prof Foo has established Singapore’s first Cardiac Genetics clinical service and has published widely in the field of Cardiovascular Molecular Epigenetics and Cell Biology. Prof Foo trained and worked in Cambridge, UK, for over 20 years, before moving his lab to Singapore in 2013. Research in his lab continues to use genomic technology to study the cardiac epigenome and hunt for novel heart failure mechanisms.",
      },
      {
        name: "Professor Xia Kelin",
        image: "xia-kelin",
        description: "Dr. Kelin Xia earned his Ph.D. from the Chinese Academy of Sciences in 2013. He was a visiting scholar in the Department of Mathematics at Michigan State University from 2009 to 2012, and then a Visiting Assistant Professor there from 2013 to 2016. He joined Nanyang Technological University in 2016 and was promoted to Associate Professor in 2023. <br><br>His research focuses on the mathematical foundations of AI for molecular science, developing geometry-, topology-, and algebra-inspired learning methods for chemistry, biology, and materials. He has published over 90 papers in leading journals and conferences, including SIAM Review, Nature Machine Intelligence, Science Advances, npj Computational Materials, ACS Nano, TPAMI, ICML, etc. He serves on multiple editorial boards and is recognized as a Stanford and Elsevier World’s Top 2% Scientist (2024 & 2025)."
      }
    ],
  },
];

const eventsOpen = ref(Array(profiles.length).fill(false));
</script>
