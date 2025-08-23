// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: ['@nuxt/content'],
    css: ['~/assets/css/main.css'],
    content: {
        experimental: {nativeSqlite: true},
    },
    future: {
        compatibilityVersion: 4,
    },

})
