<template>
  <h1>Participating Schools</h1>

  <div class="collage">
    <section class="event" v-for="country in schools">
      <h3 class="event-title">{{ country.country }}</h3>
      <span class="profile" v-for="profile in country.schools">
        <img class="profile-img" :src="useBase('images/profiles/schools/' + profile.name + '.jpg')" alt="" />
        <span class="name">{{ profile.name }}</span>
      </span>
    </section>
  </div>
</template>

<style scoped>
@import url('~/assets/css/profiles.css');

.collage .event {
  grid-template-columns: repeat(auto-fill, minmax(min(80%, 18rem), 1fr));
}

.collage .event-title {
  grid-column: span 1;
  background-color: white;
  font-size: 36px;
  font-style: normal;
}

.collage .profile {
  grid-column: span 1;
  aspect-ratio: 1.9;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  background-image: none;
  border: 1px solid var(--fg);
  overflow: hidden;
}

.collage .profile-img {
  /* padding: 18.75%; */
  vertical-align: middle;
  max-width: 62.5%;
  max-height: 62.5%;
}

.collage .name {
  position: static;
  height: 100%;
  padding-inline: 0.75rem;
  display: grid;
  place-items: center start;

  background-image: none;
  --bg: var(--gray-100);
  --fg: var(--gray-900);
  background-color: var(--bg);
  box-shadow: 0px 0px 20px 0px #272f4077;

  /* Theres a thin black underline for some reason, this is just to cancel it out */
  text-decoration: underline;
  text-decoration-color: var(--bg);
  text-align: left;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.25em;
}
</style>

<script setup>
import { useBase } from '~/composables/useBase';
/* public/profiles/schools/* need to match the name of the school specified here, with .jpg extension */
const schoolsUnordered = [
  { 'country': 'Overseas Schools', 'name': 'Camborne Science & International Academy' }, 
  { 'country': 'Overseas Schools', 'name': 'CentrE for the Development of Gifted and Talented Education'},
  { 'country': 'Overseas Schools', 'name': 'Hyogo Prefectural Takarazukakita High School'},
  { 'country': 'Overseas Schools', 'name': 'New Generation School Preah Sisowath High School' }, 
  { 'country': 'Overseas Schools', 'name': 'The Angkor Intellectual Academy' }, 
  { 'country': 'Overseas Schools', 'name': 'The High School Affiliated to Southern University of Science and Technology'},
  { 'country': 'Overseas Schools', 'name': 'The Second High School Attached to Bejing Normal University' }, 
  { 'country': 'Overseas Schools', 'name': 'Taipei First Girls High School' }, 
  { 'country': 'Overseas Schools', 'name': 'Taipei Municipal Chien Kuo High School' }, 
  { 'country': 'Overseas Schools', 'name': 'Tallinn Secondary School of Science' }, 
  { 'country': 'Overseas Schools', 'name': "Diocesan Girls' School" }, 
  { 'country': 'Overseas Schools', 'name': 'Santa Laurensia Senior High School' }, 
  { 'country': 'Overseas Schools', 'name': 'SMA Negeri 4 Denpasar High School' }, 
  { 'country': 'Overseas Schools', 'name': 'National Gifted Secondary School of Laos' }, 
  {'country':'Overseas Schools','name':'SMJK Chung Ling Pulau Pinang'},
  { 'country': 'Overseas Schools', 'name': 'Philippine Science High School Main Campus' }, 
  { 'country': 'Overseas Schools', 'name': 'Korea Science Academy of KAIST' }, 
  { 'country': 'Local Schools', 'name': 'Anglican High School' }, 
  { 'country': 'Local Schools', 'name': "CHIJ St. Nicholas Girls' School" }, 
  { 'country': 'Local Schools', 'name': 'Chung Cheng High School (Main)' }, 
  { 'country': 'Local Schools', 'name': 'Clementi Town Secondary School' }, 
  { 'country': 'Local Schools', 'name': "Crescent Girls' School" }, 
  { 'country': 'Local Schools', 'name': 'Dunman High School' }, 
  { 'country': 'Local Schools', 'name': 'Hwa Chong Institution' }, 
  { 'country': 'Local Schools', 'name': 'Jurong Secondary School' }, 
  { 'country': 'Local Schools', 'name': "Methodist Girls' School" }, 
  { 'country': 'Local Schools', 'name': 'Nan Chiau High School' }, 
  { 'country': 'Local Schools', 'name': 'Nanyang Girls\' High School' }, 
  { 'country': 'Local Schools', 'name': 'National Junior College' }, 
  { 'country': 'Local Schools', 'name': 'NUS High School of Mathematics and Science' }, 
  { 'country': 'Local Schools', 'name': "Raffles Girls' School (Secondary)" }, 
  { 'country': 'Local Schools', 'name': 'Raffles Institution' }, 
  { 'country': 'Local Schools', 'name': 'River Valley High School' }, 
  { 'country': 'Local Schools', 'name': 'School of Science and Technology, Singapore' },
  { 'country': 'Local Schools', 'name': "St. Joseph's Institution (Secondary)" },  
  { 'country': 'Local Schools', 'name': "St. Margaret's School (Secondary)" }, 
  { 'country': 'Local Schools', 'name': 'Tanjong Katong Secondary School' }, 
  { 'country': 'Local Schools', 'name': 'Temasek Junior College' }, 
  { 'country': 'Local Schools', 'name': 'Xinmin Secondary School' },
  { 'country': 'Local Schools', 'name': 'Yuan Ching Secondary School' },  
  { 'country': 'Local Schools', 'name': 'Zhonghua Secondary School' }, 
  { 'country': 'Overseas Schools', 'name': 'Kamnoetvidya Science Academy' }, 
  { 'country': 'Overseas Schools', 'name': 'Mahidol Wittayanusorn School' }, 
  { 'country': 'Overseas Schools', 'name': 'Staples High School' }, 
  { 'country': 'Overseas Schools', 'name': 'HUS High School for Gifted Students' }];

const aggregatedData = schoolsUnordered.reduce((result, item) => {
  const country = item.country;
  if (!result[country]) {
    result[country] = { country, schools: [] };
  }
  result[country].schools.push({ name: item.name, image: item.image });
  return result;
}, {});

// Convert the aggregated data object back to an array
const schools = Object.values(aggregatedData).sort((a, b) =>
  a.country.localeCompare(b.country),
);

console.log(schools);
</script>
