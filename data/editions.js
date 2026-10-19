// Every ISYF edition held so far, oldest first.
//
// `chairs` lists the co-chairpersons of that year's Student Organising
// Committee. Each is a name, or { name, link } to link the name to a profile
// (the link looks like plain text). Add them for any year once confirmed.
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
    chairs: ["Ong Kai Zhi", "Lee Liu Yi"],
  },
  {
    year: 2011,
    edition: 3,
    theme: "Challenges for a Sustainable World",
    chairs: ["Sim Meng Ying", "Katherine Nay Yaung"],
  },
  {
    year: 2012,
    edition: 4,
    theme: "Nurturing the Scientific Mind",
    chairs: ["Kenneth Tan Yoong Sheng", "Ang Jia Wei"],
  },
  {
    year: 2013,
    edition: 5,
    theme: "Breaking Through",
    chairs: ["Daniel Tan Han Jie", "Ong Kaijing Gin"],
  },
  {
    year: 2014,
    edition: 6,
    theme: "Science for Humanity in the 21st Century",
    chairs: ["Chiang Yan Li", "Chen Sihao"],
  },
  {
    year: 2015,
    edition: 7,
    theme: "Becoming a Modern Scientist",
    chairs: ["Yi Kuishuai", "Ho Kai Lun"],
  },
  {
    year: 2016,
    edition: 8,
    theme: "Communicating Science",
    chairs: ["Wong Shi Le", "Jiang Qian Feng"],
  },
  {
    year: 2017,
    edition: 9,
    theme: "Innovation for a Better Life",
    chairs: ["Chiang Yan Qi", "Kho Tze Jit"],
  },
  {
    year: 2018,
    edition: 10,
    theme: "Transcending Frontiers",
    chairs: ["Ooi Ren An", "Eiw Tse Gao Flanders"],
  },
  {
    year: 2019,
    edition: 11,
    theme: "Science: A Common Language",
    chairs: ["Wong Ying Yee", "Pan JiaQi"],
  },
  {
    year: 2020,
    edition: 12,
    theme: "Evolving Aspirations: Divergent Pathways, Convergent Future",
    chairs: ["Johnny Xiao Hong Yu", "Leng Wen Hui"],
  },
  {
    year: 2021,
    edition: 13,
    theme: "Overcoming Adversity, Redefining Normalcy",
    online: true,
    note: "Held online during the COVID-19 pandemic.",
    chairs: ["Tan Jia Shuen Maegan", "Teng Jia Jun Zen"],
  },
  {
    year: 2022,
    edition: 14,
    theme: "Sparking Innovation, Igniting Collaboration",
    online: true,
    note: "Held online during the COVID-19 pandemic.",
    chairs: ["Low Jeen Liang", "Wu Kexin"],
  },
  {
    year: 2023,
    edition: 15,
    theme: "Reconnecting, Reimagining: Looking Ahead to a Better World",
    note: "The forum returned in person, welcoming over 100 delegates to Singapore.",
    chairs: ["Lee Huan Yu", "Tan Keng How"],
  },
  {
    year: 2024,
    edition: 16,
    theme: "Science and Technology for Humanity: Building a Sustainable Future",
    chairs: ["Ling Jun Quan", "Nguyen Chi Mai"],
  },
  {
    year: 2025,
    edition: 17,
    theme: "Innovation Unified: Towards A Better Future",
    chairs: ["Jacinda Kung Jiexin", "Seah Yuheng"],
  },
  {
    year: 2026,
    edition: 18,
    theme: "Curiosity Unlocked: How Questions Drive Discovery in the Age of AI",
    dates: "5–9 January 2026",
    archive: "2026",
    chairs: ["Jolin Lim En Qi", "Kan Wei Sen"],
  },
];

// The next edition, announced as "coming soon" until its pages are ready.
export const upcoming = {
  year: 2027,
  edition: 19,
  chairs: [
    { name: "Fu Cai Gui", link: "https://www.linkedin.com/in/caiguifu/" },
    { name: "Hong Debo", link: "https://sg.linkedin.com/in/debo-hong-460096421" },
  ],
};

export const firstYear = editions[0].year;

// A co-chairperson's name, whether written as "Name" or { name, link }
export const chairName = (chair) => (typeof chair === "string" ? chair : chair.name);

export function ordinal(n) {
  const suffixes = { one: "st", two: "nd", few: "rd", other: "th" };
  return n + suffixes[new Intl.PluralRules("en", { type: "ordinal" }).select(n)];
}
