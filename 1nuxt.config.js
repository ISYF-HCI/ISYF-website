// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  app: {
    baseURL: '/',
    pageTransition: { name: "page", mode: "out-in" },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: "ISYF 2026",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Welcome to the 18th International Science Youth Forum (ISYF) @ Hwa Chong Institution, held from 5 to 9 January 2026!" },
        { name: "format-detection", content: "telephone=no" },
        { name: "og:title", content: "ISYF 2026" },
        { name: "og:description", content: "International Science Youth Forum 2026" },
        { name: "og:image", content: "https://isyf.hci.edu.sg/icon_light_solid.png" },
        { name: "google-site-verification", content: "ruZ7ymb2KZPXkT8UsU6_dJEUggZkb2sm9-mth5_sDCc" }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  

  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/index.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  middleware: ["~/middleware/scrollAnim.js"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/eslint-module"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  compatibilityDate: "2024-10-21",
});
