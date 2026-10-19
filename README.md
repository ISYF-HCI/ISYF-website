# ISYF Website

The website of the International Science Youth Forum (ISYF) @ Singapore,
covering every edition since 2009.

This project is constructed using:

- NuxtJS 3 and Vue 3, for the purposes of reactivity, component reusability
  and filesystem page routing
- Google's Material Symbols, for the purposes of iconography
- Google Fonts, for the purposes of fonts

Planning and design specs can be found in the ISYF24 - MnP - Website
Planning Document.
A lot of effort was put into this aesthetic and interactivity, so please try
to reuse/recycle as much of this as possible.

## Site Structure

- `/` is the ISYF home page, `/history` lists every edition and its theme,
  and `/laureates` lists every Nobel laureate and eminent scientist invited.
- `/2027` is the upcoming edition. Any `/2027/...` page that doesn't exist yet
  (about, programme, profiles, photos, faq) redirects to the coming-soon page
  at `/2027`. To publish one, add it under `pages/2027/` and it takes over
  from the redirect.
- `/2026` is the archived ISYF 2026 website, kept as it was with its own menu
  and an "Archive" bar on top. Old root URLs (e.g. `/programme`) redirect to
  their 2027 equivalents, see `legacyRedirects` in `data/site.js`.

Content shared across pages lives in `data/`:

- `data/editions.js`: every edition's year, number and theme, the
  co-chairpersons of its Student Organising Committee (`chairs`), plus the
  upcoming edition.
- `data/scientists.js`: laureates and scientists, with the years they were
  invited.
- `data/site.js`: menus, socials, archived sites and redirects, plus the home
  page's organisers, partners, contact details and photo carousel
  (`homePhotos`, images in `public/images/home/`).

### Starting a new edition

When ISYF 2027 is over and 2028 begins:

1. Add 2027 to `editions` in `data/editions.js` (with `archive: "2027"`) and
   bump `upcoming` to 2028.
2. Add the 2027 menu to `archives` in `data/site.js`, and point the
   "Archive" menu and `upcomingSections` at the new archive.
3. Add the year to returning guests and the new guests in
   `data/scientists.js`.
4. Create `pages/2028/index.vue` that renders `components/comingSoon.vue`
   with the `masthead` layout.
5. Add the 2028 co-chairpersons to `upcoming.chairs`, and swap the home page
   photos in `homePhotos` for ones from the new archived edition.

## Styling

Styling is all done in vanilla CSS, with a focus on responsiveness and
ease of change through logical use of variables.
Styling can be found in `assets/css` and in the style tags of individual
components, where relevant.
Refer to `assets/css/index.css` for all the colours, fonts, sizing and
other style settings—These can be re-used or altered as needed!

## Document Update

Ok, so this was an attempt to serve documents to the delegates
in a non-google-drive method. Honestly (this is Xuyuan speaking),
its not worth the effort, just share your documents over Google Drive
instead.

This method is highly manual, and its use of security-through-obscurity
was always problematic. Similiarly, the janky scripts I wrote
ended up causing much chaos because they were not reliable,
nearly as much as Google Drive is.

~Tang Xuyuan 3rd July 2024

### How it works

For those who are still curious, this page effectively achieves
encryption through security-through-obscurity. The files are
placed under a hash filename, and the links ('LONG-UUID.pdf' etc)
are then encrypted through basic SHA256

The encryption is done by encoding the JSON-string with each of the document's
links, using the password as a key. This is done on the server-side (see
`/generateFilesDigest.js`), with manually inputted constants at the top of the script.
The decoding is done in `/pages/documents.vue` (lines 120:157).

These documents are to be released on a schedule, and I wrote a script to do
this automatically. These are found in `/documentUpdate`, with the trigger
script being `/documentUpdate/update.sh`. On my personal computer, a cron job
triggers this script at 6AM and 6PM, at which point the script checks the current
time and reads the corresponding prepared file for that day & time.

The output is piped into the `/public/documents.txt`, which contains the
encrypted digest and is referenced by `/pages/documents.vue`.
