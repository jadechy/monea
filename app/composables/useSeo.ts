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
  useHead({
    title,
    meta: [
      { name: "description", content: description },

      { property: "og:title", content: ogTitle || title },
      { property: "og:description", content: ogDescription || description },
      { property: "og:image", content: image || logo },
      { property: "og:type", content: "website" },
      { property: "og:url", content: fullUrl },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle || title },
      { name: "twitter:description", content: ogDescription || description },
      { name: "twitter:image", content: image },
    ],
  });
};
