import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    brand: z.string(),
    logo: z.string().optional(),
    name: z.string(),
    category: z.string().optional(),
    description: z.string().optional(),
    images: z.array(z.string()).optional(),
    stock: z.boolean().optional(),
    catalogue: z.string().nullable().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { products };
