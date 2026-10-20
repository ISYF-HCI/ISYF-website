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

// The two organisers, featured on the home page
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
    role: "Co-organiser",
    text: "The Ministry of Education (MOE) co-organises ISYF and supports the forum each year.",
    href: "https://www.moe.gov.sg",
    image: "moe_logo.png",
  },
];

// Partners and supporters, shown smaller beneath the organisers.
// `scale` evens out logos whose image files carry more or less empty space.
export const partners = [
  { name: "National Research Foundation", href: "https://www.nrf.gov.sg", image: "nrf_logo.png", scale: 1.7 },
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
    { file: "isyf-2026-01.webp", alt: "Delegates arriving at Changi Airport with ISYF welcome signs" },
    { file: "isyf-2026-02.webp", alt: "Delegates and student facilitators seated outdoors at Hwa Chong" },
    { file: "isyf-2026-03.webp", alt: "A speaker answering questions from delegates" },
    { file: "isyf-2026-04.webp", alt: "A delegate in discussion with a speaker" },
    { file: "isyf-2026-05.webp", alt: "A speaker talking with delegates" },
    { file: "isyf-2026-06.webp", alt: "Delegates working in a laboratory" },
    { file: "isyf-2026-07.webp", alt: "Delegates seated in a lecture theatre" },
    { file: "isyf-2026-08.webp", alt: "Delegates watching a demonstration with fire" },
    { file: "isyf-2026-09.webp", alt: "A delegate presenting a gift to a speaker" },
    { file: "isyf-2026-10.webp", alt: "A delegate presenting research to a room" },
    { file: "isyf-2026-11.webp", alt: "A speaker on stage in the Hwa Chong auditorium" },
    { file: "isyf-2026-12.webp", alt: "Panel on stage under the ISYF 2026 theme, Curiosity Unlocked" },
    { file: "isyf-2026-13.webp", alt: "Delegates on stage receiving recognition" },
  ],
};

// Sections of the upcoming edition's site. Until a page exists at
// pages/<year>/<slug>.vue, visiting it redirects to the coming-soon page
// (middleware/redirects.global.js), so add pages here as they go live.
export const upcomingSections = [
  { slug: "about", label: "About", icon: "info", archived: "2026/about/about_isyf" },
  { slug: "programme", label: "Programme", icon: "event_note", archived: "2026/programme" },
  { slug: "profiles", label: "Profiles", icon: "person", archived: "2026/profiles/speakers" },
  { slug: "photos", label: "Photos", icon: "photo_library", archived: "2026/photos" },
  { slug: "faq", label: "FAQ", icon: "help_outline", archived: "2026/faq" },
];

// The forum's three goals, abridged for the home page. The full text is in
// components/goals.vue on the archived About page.
export const goals = [
  {
    title: "Inspire Passion for Science Among Youth",
    text: "Invited Nobel laureates and eminent scientists will inspire them through stories of their own life experiences and scientific discoveries.",
  },
  {
    title: "Establish Cooperation and Friendship Amongst Young Talented Science Students",
    text: "Students will have many opportunities to interact in different cross-cultural groups and forge strong bonds with each other throughout the Forum.",
  },
  {
    title: "Build Capacities of Science Educators",
    text: "Through professional sharing and discussions among Science educators, ISYF helps build the competencies of teachers who are navigating an evolving educational landscape.",
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
  "/archive/infographics": "/2026/archive/infographics",
  // The 2026 reflection page was never finished; its photos live on Photos
  "/reflection": "/2026/photos",
  "/2026/reflection": "/2026/photos",
};

// Pages of an archived site, flattened from its menu.
export function archivePages(year) {
  return (archives[year]?.menu ?? []).flatMap((entry) => entry.children ?? [entry]);
}
