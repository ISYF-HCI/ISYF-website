<template>
  <h1>The Organising Team</h1>

  <div class="comm" v-for="comm in profiles">
    <div class="comm-title">{{ comm.name }}</div>
    <div class="comm-showcase">
        <img
        class="comm-img"
        :src="useBase('images/profiles/organising-team/' + comm.image + '.webp')"
      />
      <div class="comm-description">
        <p v-html="comm.description" class="commDescription"></p>
        <p v-html="comm.imgCaption"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.commDescription {
  margin-top: 0rem;
}
.comm {
  margin-block: 3rem 3.5rem;
}

.comm-title {
  font-size: 56px;
  font-weight: bold;
  margin-block: 0 -0.25rem;
  margin-left: 0.5rem;
  line-height: 0.9em;
  margin-bottom: 1rem;

  color: var(--primary);
}

.comm-showcase {
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 2rem;
}

.comm-img {
  width: 100%;
  border-radius: 4px;
}

@media screen and (max-width: 900px) {
  .comm-title {
    font-size: 48px;
  }

  .comm-showcase {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .comm-description {
    margin-top: 0;
  }

  .comm-showcase p {
    margin-block: 0.75rem;
  }
}
@media screen and (max-width: 600px) {
  .comm-title {
    font-size: 38px;
    margin-left: 0;
    /* margin-bottom: -0.075em; */
  }
}
</style>

<script setup>
import { useBase } from '~/composables/useBase';
const profiles = [
  {
    name: 'Admin & Operations',
    image: 'AnO',
    description:
      'The Admin & Operations team are dedicated individuals who work tirelessly to ensure your ISYF experience is smooth and seamless. They orchestrate and tie events together behind the scenes to bring you a truly fulfilling experience!',
    imgCaption:
      '<b>LEFT TO RIGHT: </b>Liu Dong Yue, Kim Eng Kian, Cao Zihan, Chan Jin Tian Donovan, Jeremiah Ho Leung Enn, Wong Yu Feng',
  },
  {
    name: 'Ceremonies',
    image: 'Ceremonies',
    description:
      'The Ceremonies team have planned two major events for ISYF: The ISYF Keynote Lecture and Closing Lunch. <br/><br/> The Keynote Lecture is a great chance for you to hear more from Nobel laureates and eminent scientists on issues surrounding the theme of the forum. You also get a chance to pose your very own questions to the experts in a forum styled question-and-answer session. <br/><br/> The Closing Ceremony on the other hand is our way of ending off ISYF on a high note, so be ready with your cameras to take some memorable photos!',
    imgCaption:
      '<b>LEFT TO RIGHT: </b>Kenneth Kuah Seng Ray, Kwek Yee Shong, Jolin Lim En Qi, Kan Wei Sen, Ang En Ci, Nguyen Do Khanh Phuong (not in photo)',
  },
  {
    name: 'Dialogues & Masterclasses',
    image: 'DnM',
    description:
      'The Dialogues & Masterclasses team seek to connect you to knowledgeable and prominent scientists, allowing you to explore new perspectives and gain new insights on notable scientific research. We hope you stay curious and embrace this valuable oportunity with eminent scientists and Nobel laureates!',
    imgCaption:
      '<b>1ST ROW: </b>Sun Zizhuo, Leong Wei Chan, Alexis Lee Simin<br><b>2ND ROW: </b>Cao Xizhen, Alex Liu Su, Zhou Ruihan<br><b>3RD ROW: </b>Zhang Qinqi, Vu Minh Tran',
  },
  {
    name: 'Media & Publications',
    image: 'MnP',
    description:
      'The Media & Publications team constantly strive to deliver to you the best publicity efforts and media projects. Stay informed with the ISYF website, Instagram pages and the student handbook. Also enjoy the unique designs on the ISYF merchandise made by our very own designers. We hope that the content we create will be able to add to your ISYF experience!',
    imgCaption:
      '<b>1ST ROW: </b>Tay Hao Chen, Zhao Jianzhi, Chua Wenzheng Frederic, Jiang Yixiang<br><b>2ND ROW: </b>Ernest Chan Ern Yi, Amy Ong Jin Lu (Wang Jingru), Cheah Sheng Xin<br><b>3RD ROW: </b>Sophie Tung Xuan Ying, Wee Xi Ya Venecia, Wang Shihan, Liu Jia Yue (not in photo)',
  },
  {
    name: 'Recreational Activities',
    image: 'ReActs',
    description:
      'The Recreational Activities team are in charge of ensuring you enjoy yourself thoroughly, through fun activities like the Singapore Discovery Tour, Cultural Hour and Exhibitions. ISYF is the perfect avenue to meet new friends who are passionate in science, and we hope that these activities provide a great time for you to bond with them!',
    imgCaption:
      '<b>1ST ROW: </b>Liang Zhongchen, Xie Sihao, Dai Jiacheng<br><b>2ND ROW: </b>Su Ruo En, Tan Eu Chern, Koo Xin Xuan (Gu Xinxuan), Gao Yuxin<br><b>3RD ROW: </b>Wang Shao Kai',
  },
  {
    name: 'Science Activities',
    image: 'SciActs',
    description:
      'The Science Activities team will enrich your learning with various activities to dive deeper into the world of Science. Do look forward to science excursions and challenges, which will be sure to provide something new for everyone!',
    imgCaption:
      '<b>1ST ROW: </b>Zhu Yijun, Yao Zilu Isaiah<br><b>2ND ROW: </b>Sim Shuan Luck, Boyce Ang Kok Hong (Hong Guo Feng), Kong Jia Le Dylan<br><b>3RD ROW: </b>Caelen Chang Kai Mun, Jethro Chai Tsin Kai',
  },
];
</script>
