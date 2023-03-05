import { z, defineCollection } from "astro:content";

const CatInfo = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    personality: z.string().trim(),
    author: z.string().trim(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    birthday: z.string().transform((str) => new Date(str)),
  }),
});

const blogInfo = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    personality: z.string().trim(),
    author: z.string().trim(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    postdate: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = {
  catalog: CatInfo,
  blog: blogInfo,
};
