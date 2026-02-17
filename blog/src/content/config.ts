import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        stack: z.array(z.string()),
        github: z.string().url(),
        demo: z.string().url(),
        image: z.string(),
    }),
});

export const collections = { projects };
