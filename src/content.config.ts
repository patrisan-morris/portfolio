// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const heros = defineCollection({
    type: 'content',
    schema: z.object({
        hero: z.string(),
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        image: z.string(),
        bg: z.string(),
        likes: z.string(),
    })
});

const works = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        date: z.string(),
        time: z.string(),
        company: z.string(),
        job: z.string(),
        description: z.array(z.string()),
        skills: z.array(z.string()),
    })
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        skills: z.array(z.string()),
    })
});

const degrees = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.string(),
        name: z.string(),
        img: z.string(),
        class: z.string(),
        certifiedBy: z.string(),
        subtitle: z.string(),
        title: z.string(),
        date: z.string(),
    })
});

const certificates = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.string(),
        img: z.string(),
        class: z.string(),
        classModal: z.string(),
        certifiedBy: z.string(),
        title: z.string(),
        duration: z.string(),
        date: z.string(),
    })
});


// 4. Export a single `collections` object to register your collection(s)
export const collections = { heros, projects, works, degrees, certificates};