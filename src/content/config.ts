import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
  z.object({
    cover: image().optional(),
    title: z.string().optional(),
    coverAlt: z.string().optional(),
    date: z.date().optional(),
    description: z.string().optional(),
    order: z.number().optional(), 
    tags: z.array(z.string()).optional(),
    color: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  'casestudies': caseStudiesCollection,
};