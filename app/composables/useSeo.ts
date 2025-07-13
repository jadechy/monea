import logo from "../assets/logo.svg";
export const useSeo = ({
  title,
  description,
  ogTitle,
  ogDescription,
  image,
}: {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
}) => {
  const route = useRoute();
  const config = useRuntimeConfig();

  const baseUrl = config.public.baseUrl || "http://localhost:3000";
  const fullUrl = baseUrl + route.path;
  const fullTitle = `${title} | Monéa`;
  const fullOgTitle = `${ogTitle} | Monéa`;
  const fullOgDescription = `${ogDescription} - Monéa`;
  const fullDescription = `${description} - Monéa`;
  useHead({
    title: fullTitle,
    meta: [
      { name: "description", content: fullDescription },

      { property: "og:title", content: fullOgTitle || fullTitle },
      {
        property: "og:description",
        content: fullOgDescription || fullDescription,
      },
      { property: "og:image", content: image || logo },
      { property: "og:type", content: "website" },
      { property: "og:url", content: fullUrl },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullOgTitle || fullTitle },
      {
        name: "twitter:description",
        content: fullOgDescription || fullDescription,
      },
      { name: "twitter:image", content: image },
    ],
  });
};
