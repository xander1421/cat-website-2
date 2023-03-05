import { getCollection } from "astro:content";

// Only return posts without `draft: true` in the frontmatter

export const latestPosts = (
  await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  })
).sort(
  (a, b) =>
    new Date(b.data.postdate).valueOf() -
    new Date(a.data.postdate).valueOf()
);

export const allCats = (
  await getCollection("catalog", ({ data }) => {
    return data.draft !== true;
  })
).sort(
  (a, b) =>
    new Date(b.data.birthday).valueOf() -
    new Date(a.data.birthday).valueOf()
);
