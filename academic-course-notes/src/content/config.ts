import { defineCollection, z } from 'astro:content';

const coursesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subject: z.enum([
      'Econometrics',
      'International Trade Service',
      'International Business',
      'Accounting',
      'Industrial Economics',
      'Inter-Culture Communication',
      'International Settlement',
      'Productivity Economics'
    ]),
    courseSlug: z.string(),
    lectureNumber: z.number(),
    totalLectures: z.number(),
    date: z.date(),
    tags: z.array(z.string()),
    examImportant: z.boolean().default(false),
  }),
});

export const collections = {
  'lectures': coursesCollection,
};