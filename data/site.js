// Site-wide navigation, socials and redirects.
// Paths are relative to the site base (see composables/useBase.js).
import { upcoming } from "./editions.js";

export const socials = {
  instagram: { url: "https://www.instagram.com/isyf.2026/", handle: "@isyf.2026" },
  youtube: { url: "https://www.youtube.com/channel/UCs9CbJcxC2x8OPYiNx5QDTg", handle: "@isyfsg" },
  email: "reach_isyf@hci.edu.sg",
};

// Contact details shown on the home page and the main site's footer.
// No phone or fax: Hwa Chong's general office can't answer ISYF questions.
export const contact = {
  email: "isyf@hci.edu.sg",
  // Goes to the student organising committee
  studentEmail: "reach_isyf@hci.edu.sg",
  address: "661 Bukit Timah Road, Singapore 269734",
};

// The organiser and the sponsor, featured on the home page
export const organisers = [
  {
    name: "Hwa Chong Institution",
    role: "Host and organiser",
    text: "ISYF is hosted and organised by Hwa Chong Institution's Students' Science Research Club (SSRC), whose students have run the forum since the first edition in 2009.",
    href: "https://www.hci.edu.sg",
    image: "hc_logo.png",
  },
  {
    name: "Ministry of Education, Singapore",
    role: "Sponsor",
    text: "The Ministry of Education (MOE) sponsors ISYF and supports the forum each year.",
    href: "https://www.moe.gov.sg",
    image: "moe_logo.png",
  },
];

// Partners and supporters, shown smaller beneath the organisers.
// `scale` evens out logos whose image files carry more or less empty space.
export const partners = [
  { name: "National Research Foundation", href: "https://www.nrf.gov.sg", image: "nrf_logo.png", scale: 2.1 },
  { name: "Global Young Scientists Summit", href: "https://gyss.nrf.gov.sg", image: "gyss_logo.png" },
  { name: "NTU Institute of Advanced Studies", href: "https://www.ntu.edu.sg/ias", image: "ntuias_logo.png", scale: 1.15 },
  { name: "National University of Singapore", href: "https://nus.edu.sg", image: "nus_logo.png" },
  { name: "Singapore University of Technology and Design", href: "https://sutd.edu.sg", image: "sutd_logo.png" },
  { name: "Singapore Institute of Technology", href: "https://www.singaporetech.edu.sg/", image: "sit_logo.png", scale: 0.8 },
  { name: "A*STAR", href: "https://a-star.edu.sg", image: "astar_logo.png", scale: 1.35 },
  { name: "Science Centre Singapore", href: "https://www.science.edu.sg", image: "scs_logo.png" },
];

// Photos in the home page carousel, from public/images/home/.
// Keep each about 440px tall (webp) so the home page stays light.
export const homePhotos = {
  edition: 2026,
  photos: [
    { file: "isyf-2026-01.webp", alt: "ISYF 2026 delegates in school blazers at the closing ceremony" },
    { file: "isyf-2026-02.webp", alt: "Delegates at the closing ceremony dinner, under the ISYF 2026 closing ceremony screen" },
    { file: "isyf-2026-03.webp", alt: "Student moderators in dialogue with Nobel laureate Professor Brian Schmidt on stage" },
    { file: "isyf-2026-04.webp", alt: "The Hwa Chong auditorium stage set for the opening, under the theme Curiosity Unlocked" },
    { file: "isyf-2026-05.webp", alt: "A token of appreciation presented on stage" },
    { file: "isyf-2026-06.webp", alt: "Delegates and a teacher in formal dress at the closing dinner" },
    { file: "isyf-2026-07.webp", alt: "Delegates exploring a glowing immersive art gallery" },
    { file: "isyf-2026-08.webp", alt: "A lecture on dark matter in the Hwa Chong auditorium" },
    { file: "isyf-2026-09.webp", alt: "Two student moderators with a Nobel laureate on stage" },
    { file: "isyf-2026-10.webp", alt: "Smiling delegates inside a light installation" },
    { file: "isyf-2026-11.webp", alt: "Student emcees at the podium" },
    { file: "isyf-2026-12.webp", alt: "Delegates silhouetted against rainbow-coloured light" },
    { file: "isyf-2026-13.webp", alt: "Educators at the closing dinner" },
    { file: "isyf-2026-14.webp", alt: "A delegate presenting research" },
    { file: "isyf-2026-15.webp", alt: "Awards presented on stage" },
  ],
};

// Sections of the upcoming edition's site. Until a page exists at
// pages/<year>/<slug>.vue, visiting it redirects to the coming-soon page
// (middleware/redirects.global.js). Once a page is added, mark it `live` so
// the coming-soon page links to it instead of calling it "coming soon".
export const upcomingSections = [
  { slug: "about", label: "About", icon: "info", archived: "2026/about/about_isyf", live: true },
  { slug: "programme", label: "Programme", icon: "event_note", archived: "2026/programme", live: true },
  { slug: "profiles", label: "Profiles", icon: "person", archived: "2026/profiles/speakers" },
  { slug: "faq", label: "FAQ", icon: "help_outline", archived: "2026/faq", live: true },
];

// The forum's three goals. `text` is the abridged version for the home page;
// `full` is the complete text shown on the upcoming edition's About page
// (the archived 2026 About page keeps its own copy in components/goals.vue).
export const goals = [
  {
    title: "Inspire Passion for Science Among Youth",
    text: "Invited Nobel laureates and eminent scientists will inspire them through stories of their own life experiences and scientific discoveries.",
    full: "ISYF aims to provide students who are highly inquisitive and passionate about the sciences with ample opportunities to share and discuss their interests in Science, technology and scientific research. They will be exposed to many fields of science which will broaden their outlook and understanding of the scientific world. Invited Nobel laureates and eminent scientists will inspire them through stories of their own life experiences and scientific discoveries. These interactions will help create greater awareness among the youth about the importance of broad-based knowledge, fuel their curiosity, engender relentless tenacity and a global outlook when considering the pursuit of science as a meaningful and fulfilling endeavour.",
  },
  {
    title: "Establish Cooperation and Friendship Amongst Young Talented Science Students",
    text: "Students will have many opportunities to interact in different cross-cultural groups and forge strong bonds with each other throughout the Forum.",
    full: "Students will have many opportunities to interact in different cross-cultural groups and forge strong bonds with each other throughout the Forum. Activities are designed to promote mutual cooperation, understanding and appreciation of each other’s diverse cultures while sharing a common passion in science, technology and research.",
  },
  {
    title: "Build Capacities of Science Educators",
    text: "Through professional sharing and discussions among Science educators, ISYF helps build the competencies of teachers who are navigating an evolving educational landscape.",
    full: "Through professional sharing and discussions among Science educators, ISYF helps build the competencies of teachers who are navigating an evolving educational landscape.",
  },
];

export const mainMenu = [
  { label: "Home", href: "" },
  {
    label: `ISYF ${upcoming.year}`,
    children: [
      { label: "Overview", href: `${upcoming.year}`, icon: "campaign" },
      ...upcomingSections.map((s) => ({
        label: s.label,
        href: `${upcoming.year}/${s.slug}`,
        icon: s.icon,
      })),
    ],
  },
  {
    label: "History",
    children: [
      { label: "Editions & Themes", href: "history", icon: "history_edu" },
      { label: "Nobel Laureates & Scientists", href: "laureates", icon: "workspace_premium" },
    ],
  },
  {
    label: "Archive",
    children: [{ label: "ISYF 2026", href: "2026", icon: "inventory_2" }],
  },
];

// Archived edition websites, keyed by year. Each keeps its original menu.
export const archives = {
  2026: {
    title: "ISYF 2026",
    summary: "18th edition · 5–9 January 2026",
    // Shortcuts shown wherever the edition is listed
    highlights: [
      { label: "Website", href: "2026" },
      { label: "Programme", href: "2026/programme" },
      { label: "Speakers", href: "2026/profiles/speakers" },
      { label: "Photos", href: "2026/photos" },
      { label: "Infographics", href: "2026/archive/infographics" },
    ],
    menu: [
      { label: "Home", href: "2026" },
      {
        label: "About",
        children: [
          { label: "About ISYF", href: "2026/about/about_isyf" },
          { label: "About Singapore", href: "2026/about/about_singapore" },
        ],
      },
      { label: "Programme", href: "2026/programme" },
      {
        label: "Profiles",
        children: [
          { label: "Speakers", href: "2026/profiles/speakers", icon: "person" },
          { label: "Schools", href: "2026/profiles/schools", icon: "school" },
          { label: "Organising Team", href: "2026/profiles/organising-team", icon: "group" },
        ],
      },
      { label: "Photos", href: "2026/photos" },
      { label: "FAQ", href: "2026/faq" },
    ],
  },
};

// URLs from when the ISYF 2026 site lived at the root. Event pages now point
// at their ISYF 2027 counterparts, which link back to the same 2026 page.
const legacyEventPages = [
  "/about/about_isyf",
  "/about/about_singapore",
  "/programme",
  "/profiles/speakers",
  "/profiles/schools",
  "/profiles/organising-team",
  "/photos",
  "/faq",
];
export const legacyRedirects = {
  ...Object.fromEntries(legacyEventPages.map((p) => [p, `/${upcoming.year}${p}`])),
  // The 2027 site has a single About page and no About Singapore page
  "/about/about_isyf": `/${upcoming.year}/about`,
  [`/${upcoming.year}/about/about_isyf`]: `/${upcoming.year}/about`,
  "/about/about_singapore": "/2026/about/about_singapore",
  [`/${upcoming.year}/about/about_singapore`]: "/2026/about/about_singapore",
  "/archive/infographics": "/2026/archive/infographics",
  // The 2026 reflection page was never finished; its photos live on Photos
  "/reflection": "/2026/photos",
  "/2026/reflection": "/2026/photos",
};

// Pages of an archived site, flattened from its menu.
export function archivePages(year) {
  return (archives[year]?.menu ?? []).flatMap((entry) => entry.children ?? [entry]);
}
