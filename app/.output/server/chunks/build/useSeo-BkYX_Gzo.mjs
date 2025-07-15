import { f as useRoute, k as useRuntimeConfig, u as useHead } from './server.mjs';

const logo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";
const useSeo = ({
  title,
  description,
  ogTitle,
  ogDescription,
  image
}) => {
  const route = useRoute();
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl || "http://localhost:3000";
  const fullUrl = baseUrl + route.path;
  const fullTitle = `${title} | Mon\xE9a`;
  const fullOgTitle = `${ogTitle} | Mon\xE9a`;
  const fullOgDescription = `${ogDescription} - Mon\xE9a`;
  const fullDescription = `${description} - Mon\xE9a`;
  useHead({
    title: fullTitle,
    meta: [
      { name: "description", content: fullDescription },
      { property: "og:title", content: fullOgTitle || fullTitle },
      {
        property: "og:description",
        content: fullOgDescription || fullDescription
      },
      { property: "og:image", content: image || logo },
      { property: "og:type", content: "website" },
      { property: "og:url", content: fullUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullOgTitle || fullTitle },
      {
        name: "twitter:description",
        content: fullOgDescription || fullDescription
      },
      { name: "twitter:image", content: image }
    ]
  });
};

export { useSeo as u };
//# sourceMappingURL=useSeo-BkYX_Gzo.mjs.map
