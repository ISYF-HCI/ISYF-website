// Nobel laureates and eminent scientists invited to ISYF since 2009.
//
// `honour` is the distinction or position listed when they were invited, and
// `years` lists every edition they were invited to. When a new edition's
// speakers are confirmed, add the year to returning guests and append new ones.
export const categories = [
  { id: "nobel", label: "Nobel Laureates", short: "Nobel" },
  { id: "fields", label: "Fields Medallists", short: "Fields" },
  { id: "prize", label: "Other Major Prizes", short: "Prize" },
  { id: "scientist", label: "Eminent Scientists", short: "Scientist" },
];

export const scientists = [
  // ===== Nobel laureates =====
  { name: "Sir Anthony Leggett", category: "nobel", honour: "Nobel Prize in Physics, 2003", years: [2009, 2012, 2014, 2016, 2017] },
  { name: "Professor Douglas D. Osheroff", category: "nobel", honour: "Nobel Prize in Physics, 1996", years: [2009, 2010, 2013] },
  { name: "Professor Kurt Wüthrich", category: "nobel", honour: "Nobel Prize in Chemistry, 2002", years: [2009, 2014] },
  { name: "Professor Avram Hershko", category: "nobel", honour: "Nobel Prize in Chemistry, 2004", years: [2009] },
  { name: "Professor Jerome I. Friedman", category: "nobel", honour: "Nobel Prize in Physics, 1990", years: [2010, 2011, 2014, 2016] },
  { name: "Sir Richard J. Roberts", category: "nobel", honour: "Nobel Prize in Physiology or Medicine, 1993", years: [2010, 2015, 2024, 2026] },
  { name: "Professor Leland H. Hartwell", category: "nobel", honour: "Nobel Prize in Physiology or Medicine, 2001", years: [2010] },
  { name: "Professor David J. Gross", category: "nobel", honour: "Nobel Prize in Physics, 2004", years: [2010, 2014, 2016] },
  { name: "Professor Robert C. Richardson", category: "nobel", honour: "Nobel Prize in Physics, 1996", years: [2011] },
  { name: "Professor Aaron Ciechanover", category: "nobel", honour: "Nobel Prize in Chemistry, 2004", years: [2012, 2014, 2015] },
  { name: "Professor Claude Cohen-Tannoudji", category: "nobel", honour: "Nobel Prize in Physics, 1997", years: [2012, 2015, 2018, 2019] },
  { name: "Professor Dan Shechtman", category: "nobel", honour: "Nobel Prize in Chemistry, 2011", years: [2012, 2013] },
  { name: "Professor Sydney Brenner", category: "nobel", honour: "Nobel Prize in Physiology or Medicine, 2002", years: [2012] },
  { name: "Professor Albert Fert", category: "nobel", honour: "Nobel Prize in Physics, 2007", years: [2013] },
  { name: "Professor Ada Yonath", category: "nobel", honour: "Nobel Prize in Chemistry, 2009", years: [2014, 2018, 2019, 2020] },
  { name: "Professor Hartmut Michel", category: "nobel", honour: "Nobel Prize in Chemistry, 1988", years: [2014, 2023, 2025] },
  { name: "Dr J. Robin Warren", category: "nobel", honour: "Nobel Prize in Physiology or Medicine, 2005", years: [2014, 2016] },
  { name: "Professor Martin Chalfie", category: "nobel", honour: "Nobel Prize in Chemistry, 2008", years: [2014] },
  { name: "Sir Andre Geim", category: "nobel", honour: "Nobel Prize in Physics, 2010", years: [2015, 2017] },
  { name: "Professor Arieh Warshel", category: "nobel", honour: "Nobel Prize in Chemistry, 2013", years: [2015] },
  { name: "Sir Tim Hunt", category: "nobel", honour: "Nobel Prize in Physiology or Medicine, 2001", years: [2015, 2016, 2017, 2018, 2019, 2020, 2023] },
  { name: "Professor Carlo Rubbia", category: "nobel", honour: "Nobel Prize in Physics, 1984", years: [2016] },
  { name: "Professor Ei-ichi Negishi", category: "nobel", honour: "Nobel Prize in Chemistry, 2010", years: [2016] },
  { name: "Professor Rudolph A. Marcus", category: "nobel", honour: "Nobel Prize in Chemistry, 1992", years: [2017] },
  { name: "Sir J. Fraser Stoddart", category: "nobel", honour: "Nobel Prize in Chemistry, 2016", years: [2018] },
  { name: "Professor Klaus von Klitzing", category: "nobel", honour: "Nobel Prize in Physics, 1985", years: [2018] },
  { name: "Professor François Englert", category: "nobel", honour: "Nobel Prize in Physics, 2013", years: [2018] },
  { name: "Professor Barry Barish", category: "nobel", honour: "Nobel Prize in Physics, 2017", years: [2019] },
  { name: "Professor Michael Levitt", category: "nobel", honour: "Nobel Prize in Chemistry, 2013", years: [2019] },
  { name: "Sir Konstantin Novoselov", category: "nobel", honour: "Nobel Prize in Physics, 2010", years: [2020, 2021] },
  { name: "Sir David MacMillan", category: "nobel", honour: "Nobel Prize in Chemistry, 2021", years: [2023] },
  { name: "Professor Duncan Haldane", category: "nobel", honour: "Nobel Prize in Physics, 2016", years: [2024, 2025] },
  { name: "Professor Takaaki Kajita", category: "nobel", honour: "Nobel Prize in Physics, 2015", years: [2025] },
  { name: "Professor Brian Schmidt", category: "nobel", honour: "Nobel Prize in Physics, 2011", years: [2026] },

  // ===== Fields medallists =====
  { name: "Professor Vladimir Voevodsky", category: "fields", honour: "Fields Medal, 2002", years: [2011, 2013, 2014, 2017] },
  { name: "Professor Stephen Smale", category: "fields", honour: "Fields Medal, 1966", years: [2014] },
  { name: "Professor Ngô Bảo Châu", category: "fields", honour: "Fields Medal, 2010", years: [2015] },
  { name: "Sir Michael Atiyah", category: "fields", honour: "Fields Medal, 1966; Abel Prize, 2004", years: [2018] },
  { name: "Professor Pierre-Louis Lions", category: "fields", honour: "Fields Medal, 1994", years: [2019] },
  { name: "Professor Wendelin Werner", category: "fields", honour: "Fields Medal, 2006", years: [2020] },

  // ===== Other major prizes =====
  { name: "Professor Barbara Liskov", category: "prize", honour: "ACM A.M. Turing Award, 2008", years: [2017] },
  { name: "Professor Michael Grätzel", category: "prize", honour: "Millennium Technology Prize, 2010", years: [2017, 2020] },
  { name: "Dr Tuomo Suntola", category: "prize", honour: "Millennium Technology Prize, 2018", years: [2019] },
  { name: "Professor Stuart Parkin", category: "prize", honour: "Millennium Technology Prize, 2014", years: [2022] },
  { name: "Professor Yael Tauman Kalai", category: "prize", honour: "ACM Prize in Computing, 2022", years: [2025] },
  { name: "Professor Leslie Valiant", category: "prize", honour: "ACM A.M. Turing Award, 2010", years: [2026] },
  { name: "Professor Joan Rose", category: "prize", honour: "Stockholm Water Prize, 2016", years: [2026] },

  // ===== Eminent scientists =====
  { name: "Professor David Phillips", category: "scientist", honour: "President, Royal Society of Chemistry", years: [2010] },
  { name: "Professor James Barber", category: "scientist", honour: "Fellow of the Royal Society", years: [2012] },
  { name: "Professor Artur Ekert", category: "scientist", honour: "Co-inventor of quantum cryptography", years: [2013] },
  { name: "Professor Jackie Ying", category: "scientist", honour: "Executive Director, Institute of Bioengineering and Nanotechnology, A*STAR; named one of AIChE's \"One Hundred Engineers of the Modern Era\"", years: [2014, 2018] },
  { name: "Dr Ng Wai Kiong", category: "scientist", honour: "Senior Scientist, Institute of Chemical and Engineering Sciences, A*STAR", years: [2015] },
  { name: "Dr Su Yi", category: "scientist", honour: "Deputy Department Director, Computing Science, A*STAR", years: [2015, 2020] },
  { name: "Dr Guo Huili", category: "scientist", honour: "Adjunct Assistant Professor, Department of Biological Sciences, NUS", years: [2018] },
  { name: "Professor Lim Xin Hong", category: "scientist", honour: "Principal Investigator, Institute of Medical Biology, A*STAR", years: [2018] },
  { name: "Dr Michael Sullivan", category: "scientist", honour: "Department Director, Institute of High Performance Computing, A*STAR", years: [2018] },
  { name: "Dr Jonathan Loh", category: "scientist", honour: "Senior Principal Investigator, Institute of Molecular and Cell Biology, A*STAR", years: [2018] },
  { name: "Professor Tan Choon Hong", category: "scientist", honour: "President, Singapore National Institute of Chemistry; Director, CN Yang Scholars Programme, NTU", years: [2018] },
  { name: "Dr Chong Yi Dong", category: "scientist", honour: "Associate Professor, School of Physical & Mathematical Sciences, NTU", years: [2019] },
  { name: "Dr Kat Agres", category: "scientist", honour: "Principal Investigator, Music Cognition Group, Institute of High Performance Computing, A*STAR", years: [2019] },
  { name: "Professor Kedar Hippalgaonkar", category: "scientist", honour: "Associate Professor, Materials Science and Engineering, NTU", years: [2019, 2026] },
  { name: "Dr Thomas Liew", category: "scientist", honour: "Executive Director, National Metrology Centre; Member, International Committee for Weights and Measures", years: [2019] },
  { name: "Professor Zee Upton", category: "scientist", honour: "Research Director, Institute of Medical Biology, A*STAR", years: [2019] },
  { name: "Dr Anand Andiappan", category: "scientist", honour: "SIgN Fellow, Singapore Immunology Network, A*STAR", years: [2020] },
  { name: "Professor David Cameron-Smith", category: "scientist", honour: "Senior Principal Investigator, Singapore Institute for Clinical Sciences, A*STAR", years: [2020] },
  { name: "Dr Neerja Karnani", category: "scientist", honour: "Senior Principal Investigator, Singapore Institute for Clinical Sciences, A*STAR", years: [2020] },
  { name: "Dr Pavitra Krishnaswamy", category: "scientist", honour: "Deputy Division Head, Institute for Infocomm Research, A*STAR", years: [2020] },
  { name: "Professor Ho Teck Hua", category: "scientist", honour: "Senior Deputy President and Provost, NUS", years: [2020] },
  { name: "Professor Lim Tit Meng", category: "scientist", honour: "Chief Executive, Science Centre Singapore", years: [2021] },
  { name: "Professor Joseph Sung", category: "scientist", honour: "Dean, Lee Kong Chian School of Medicine, NTU", years: [2022] },
  { name: "Professor Bertil Andersson", category: "scientist", honour: "Former President, Nanyang Technological University", years: [2023] },
  { name: "Professor Dame Sue Black", category: "scientist", honour: "Computer scientist; founder of BCSWomen and #techmums", years: [2024] },
  { name: "Professor Armin Aberle", category: "scientist", honour: "CEO, Solar Energy Research Institute of Singapore, NUS", years: [2026] },
  { name: "Professor Dan Chia", category: "scientist", honour: "Associate Professor, Infocomm Technology, Singapore Institute of Technology", years: [2026] },
  { name: "Professor Dario Poletti", category: "scientist", honour: "Head of Science, Mathematics and Technology, SUTD", years: [2026] },
  { name: "Professor Roger Foo", category: "scientist", honour: "Vice Dean (Research), NUS Yong Loo Lin School of Medicine", years: [2026] },
  { name: "Professor Xia Kelin", category: "scientist", honour: "Associate Professor, Nanyang Technological University", years: [2026] },
];

// Anchor id for a scientist, e.g. "Sir Tim Hunt" -> "sir-tim-hunt".
export function scientistId(name) {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function scientistsInYear(year) {
  return scientists.filter((s) => s.years.includes(year));
}
