import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  schema: ({ image }) =>
  z.object({
    cover: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    title: z.string(),
    coverAlt: z.string(),
    date: z.date(),
    description: z.string(),
    order: z.number(), 
    tags: z.array(),
    color: z.string(),
    draft: z.boolean(),
  }),
});

export const collections = {
  casestudies: caseStudiesCollection,
};