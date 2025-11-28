// src/content/config.ts
import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content", // Usaremos archivos Markdown (.md)
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), // Ej: ['React', 'Node.js', 'SQL']
    image: z.string().optional(),
    githubLink: z.string().url().optional(),
    demoLink: z.string().url().optional(),
    publishDate: z.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};
