// Pages render client-side, so on a fresh load (e.g. /laureates#sir-tim-hunt)
// the #fragment target doesn't exist yet when the browser looks for it.
// Scroll to it once the first page has rendered.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hooks.hookOnce("page:finish", () => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    setTimeout(() => document.getElementById(id)?.scrollIntoView(), 0);
  });
});
