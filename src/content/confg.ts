import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    order: z.number(), 
    tags: z.array(),
    color: z.string(),
    draft: z.boolean(),
  }),
});

export const collections = {
  posts: caseStudiesCollection,
};