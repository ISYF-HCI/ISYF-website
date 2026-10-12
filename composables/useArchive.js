import { computed } from "vue";
import { useRoute } from "#app";
import { archives } from "~/data/site";

// The archived edition being viewed (e.g. on /2026/...), or null.
export function useArchive() {
  const route = useRoute();
  return computed(() => {
    const year = Object.keys(archives).find(
      (y) => route.path === `/${y}` || route.path.startsWith(`/${y}/`)
    );
    return year ? { year: Number(year), ...archives[year] } : null;
  });
}
