// Nuxt composable for base-aware asset and link paths
import { useRuntimeConfig } from '#app';

export function useBase(path = '') {
  const config = useRuntimeConfig();
  let base = config.app.baseURL || '/';
  if (!base.endsWith('/')) base += '/';
  if (path.startsWith('/')) path = path.slice(1);
  return base + path;
}
