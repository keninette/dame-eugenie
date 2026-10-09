import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const recipies = defineCollection({
  loader: glob({
    base: "./src/content/recipies",
    pattern: "**/*.mdoc",
  }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    ingredients: z.array(z.string()),
    duration: z.number().int().positive(),
    picture: z.string().optional(),
  }),
});

export const collections = { recipies };
