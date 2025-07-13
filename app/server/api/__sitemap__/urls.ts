import { defineSitemapEventHandler } from "#imports";
import type { SitemapUrlInput } from "#sitemap/types";

export default defineSitemapEventHandler(() => {
  const groups = [{ id: 1 }, { id: 2 }];

  const urls: SitemapUrlInput[] = [];

  groups.forEach((group) => {
    const base = `/groups/${group.id}`;
    urls.push({ loc: base });
    urls.push({ loc: `${base}/budget` });
    urls.push({ loc: `${base}/category` });
    urls.push({ loc: `${base}/expense` });
  });

  return urls;
});
