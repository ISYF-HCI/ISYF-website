<template>
  <div>
    <Masthead :background="heroBackground">
      <h1>Infographic Archive</h1>
    </Masthead>

    <main class="infographic-archive content">
      

      <section class="pdf-grid-section">
        <div class="section-heading">
          <h2>Top 10 Infographics</h2>
          <p>Due to popular demand we will release the votes + rankings for the top 10 subgroups: </p>
        </div>
        <div class="pdf-grid">
          <article class="pdf-card" v-for="entry in topTenInfographics" :key="entry.file">
            <header>
              <p class="label"># {{ entry.rank }}</p>
              <h3>{{ entry.name }}</h3>
              <p class="percentage">{{ entry.percentage }} of votes</p>
            </header>
            <iframe :src="entry.url" loading="lazy" title="Infographic preview"></iframe>
            <a class="download-link" :href="entry.url" target="_blank" rel="noopener" download>
              Download PDF ↗
            </a>
          </article>
        </div>
      </section>

      <section class="pdf-grid-section">
        <div class="section-heading">
          <h2>All Remaining Infographics</h2>
          <p>Every other submission, preserved in one scroll-friendly gallery.</p>
        </div>
        <div class="pdf-grid">
          <article class="pdf-card" v-for="infographic in otherInfographics" :key="infographic.file">
            <header>
              <h3>{{ infographic.displayName }}</h3>
            </header>
            <iframe :src="infographic.url" loading="lazy" title="Infographic preview"></iframe>
            <a class="download-link" :href="infographic.url" target="_blank" rel="noopener" download>
              Download PDF ↗
            </a>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useBase } from '~/composables/useBase';

const heroBackground = useBase('images/infographicsbg.webp');
const encodedDirectory = ['Infographic Creation Gallery']
  .map((segment) => encodeURIComponent(segment))
  .join('/');

const buildPdfUrl = (fileName) => useBase(`${encodedDirectory}/${encodeURIComponent(fileName)}`);

const topTenRaw = [
  { rank: 1, name: '6A', percentage: '24.1%', file: '#1-6A.pdf' },
  { rank: 2, name: '2C', percentage: '21.4%', file: '#2-2C.pdf' },
  { rank: 3, name: '7C', percentage: '18.8%', file: '#3-7C.pdf' },
  { rank: 4, name: '2B', percentage: '17.9%', file: '#4-2B.pdf' },
  { rank: 5, name: '3A', percentage: '14.3%', file: '#5-3A.pdf' },
  { rank: 6, name: '9B', percentage: '14.3%', file: '#10-9B.pdf' },
  { rank: 7, name: '6C', percentage: '14.3%', file: '#7-6C.pdf' },
  { rank: 8, name: '3C', percentage: '13.4%', file: '#8-3C.pdf' },
  { rank: 9, name: '6B', percentage: '12.5%', file: '#9-6B.pdf' },
  { rank: 10, name: '10A', percentage: '11.6%', file: '#9-10A.pdf' },
];

const additionalFiles = [
  '1A.pdf',
  '1B.pdf',
  '1C.pdf',
  '2A.pdf',
  '3B.pdf',
  '4A.pdf',
  '4B.pdf',
  '4C.pdf',
  '5A.pdf',
  '5B.pdf',
  '5C.pdf',
  '7A.pdf',
  '7B.pdf',
  '8A.pdf',
  '8B.pdf',
  '8C.pdf',
  '9A.pdf',
  '9C.pdf',
  '10B.pdf',
  '10C.pdf',
  '11A.pdf',
  '11B.pdf',
  '11C.pdf',
  '12A.pdf',
  '12B.pdf',
  '12C.pdf',
];

const topTenInfographics = topTenRaw.map((entry) => ({
  ...entry,
  url: buildPdfUrl(entry.file),
}));

const otherInfographics = additionalFiles.map((file) => ({
  file,
  displayName: file.replace('.pdf', ''),
  url: buildPdfUrl(file),
}));
</script>

<style scoped>
.infographic-archive {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 6rem;
}

.announcement {
  background: var(--bg);
  border: 1px solid var(--gray-500);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 12px 40px hsla(var(--primary-900-hsla, 210, 20%, 20%), 0.1);
}

.intro {
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.ranking-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.ranking-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: hsla(var(--primary-200-hsla, 214, 65%, 85%), 0.35);
  border: 1px solid var(--primary-200, rgba(0, 0, 0, 0.1));
}

.rank-number {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 700;
  background: var(--primary);
  color: white;
}

.rank-name {
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
}

.rank-percentage {
  margin: 0;
  color: var(--gray-400);
}

.pdf-grid-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.label {
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: var(--gray-400);
}

.percentage {
  margin: 0;
  color: var(--gray-400);
  font-weight: 500;
}

.section-heading h2 {
  margin: 0;
  font-family: var(--font-display);
}

.section-heading p {
  margin: 0.25rem 0 0;
  color: var(--gray-500);
}

.pdf-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.pdf-card {
  border: 1px solid var(--gray-500);
  border-radius: 16px;
  padding: 1.25rem;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.pdf-card header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.pdf-card iframe {
  width: 100%;
  min-height: 360px;
  border: 1px solid var(--gray-400);
  border-radius: 8px;
  background: white;
}

.download-link {
  align-self: flex-start;
  text-decoration: none;
  font-weight: 600;
  color: var(--primary);
  font-size: 0.95rem;
}

@media (min-width: 900px) {
  .announcement {
    padding: 3rem 4rem;
  }

  .ranking-list {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}
</style>


