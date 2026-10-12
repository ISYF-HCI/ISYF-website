// Every ISYF edition held so far, oldest first.
//
// To archive an edition once the next one launches, give it an `archive`
// path (the folder under pages/ that holds its website) and add its menu to
// `archives` in data/site.js.
export const editions = [
  {
    year: 2009,
    edition: 1,
    theme: "Science and the Ever Changing Environment",
    note: "The inaugural forum opened on 19 January 2009.",
  },
  {
    year: 2010,
    edition: 2,
    theme: "Future Innovations and Science",
    note: "A record five Nobel laureates joined the panel discussion.",
  },
  { year: 2011, edition: 3, theme: "Challenges for a Sustainable World" },
  { year: 2012, edition: 4, theme: "Nurturing the Scientific Mind" },
  { year: 2013, edition: 5, theme: "Breaking Through" },
  { year: 2014, edition: 6, theme: "Science for Humanity in the 21st Century" },
  { year: 2015, edition: 7, theme: "Becoming a Modern Scientist" },
  { year: 2016, edition: 8, theme: "Communicating Science" },
  { year: 2017, edition: 9, theme: "Innovation for a Better Life" },
  { year: 2018, edition: 10, theme: "Transcending Frontiers" },
  { year: 2019, edition: 11, theme: "Science: A Common Language" },
  {
    year: 2020,
    edition: 12,
    theme: "Evolving Aspirations: Divergent Pathways, Convergent Future",
  },
  {
    year: 2021,
    edition: 13,
    theme: "Overcoming Adversity, Redefining Normalcy",
    online: true,
    note: "Held online during the COVID-19 pandemic.",
  },
  {
    year: 2022,
    edition: 14,
    theme: "Sparking Innovation, Igniting Collaboration",
    online: true,
    note: "Held online during the COVID-19 pandemic.",
  },
  {
    year: 2023,
    edition: 15,
    theme: "Reconnecting, Reimagining: Looking Ahead to a Better World",
    note: "The forum returned in person, welcoming over 100 delegates to Singapore.",
  },
  {
    year: 2024,
    edition: 16,
    theme: "Science and Technology for Humanity: Building a Sustainable Future",
  },
  { year: 2025, edition: 17, theme: "Innovation Unified: Towards A Better Future" },
  {
    year: 2026,
    edition: 18,
    theme: "Curiosity Unlocked: How Questions Drive Discovery in the Age of AI",
    dates: "5–9 January 2026",
    archive: "2026",
  },
];

// The next edition, announced as "coming soon" until its pages are ready.
export const upcoming = {
  year: 2027,
  edition: 19,
};

export const firstYear = editions[0].year;

export function ordinal(n) {
  const suffixes = { one: "st", two: "nd", few: "rd", other: "th" };
  return n + suffixes[new Intl.PluralRules("en", { type: "ordinal" }).select(n)];
}
