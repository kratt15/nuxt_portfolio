<!-- components/MainHead.vue -->
<template>
  <!-- Ce composant n'a pas de template visible -->
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Sidney ADJOH Portfolio',
  description: 'The personal site of sidney ADJOH'
})

useHead({
  title: props.title,
  meta: [
    { name: 'description', content: props.description },
    { property: 'og:description', content: props.description },
    { property: 'og:title', content: props.title }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { 
      rel: 'stylesheet', 
      href: 'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400&family=Rubik:wght@500;600&display=swap' 
    }
  ]
})
</script>