import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        work: defineCollection({
            type: 'page',
            source: 'work/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                publishDate: z.coerce.date().optional(),
                tags: z.array(z.string()),
                img: z.string(),
                img_alt: z.string().optional(),
            })
        })
    }
})
