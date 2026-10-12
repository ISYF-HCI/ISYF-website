import { upcoming } from "~/data/editions";
import { legacyRedirects } from "~/data/site";

export default defineNuxtRouteMiddleware((to) => {
  const path = to.path.replace(/\/+$/, "") || "/";

  // Old URLs from when the 2026 site lived at the root
  if (legacyRedirects[path]) {
    return navigateTo(legacyRedirects[path], { replace: true });
  }

  // Pages of the upcoming edition that don't exist yet show "coming soon".
  // Once pages/<year>/<page>.vue is added, it is matched and served instead.
  const prefix = `/${upcoming.year}/`;
  if (path.startsWith(prefix) && to.matched.length === 0) {
    return navigateTo(
      { path: `/${upcoming.year}`, query: { from: path.slice(prefix.length) } },
      { replace: true }
    );
  }
});
