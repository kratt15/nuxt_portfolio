<!-- pages/work.vue -->
<template>
  <div class="stack gap-20">
    <main class="wrapper stack gap-8">
      <Hero
        title="Projets"
        tagline="See my most recent projects below to get an idea of my past experience."
        align="start"
      />
      <Grid variant="offset">
        <li v-for="project in projects" :key="project.path">
          <PortfolioPreview :project="project" />
        </li>
      </Grid>
    </main>
    <ContactCTA />
  </div>
</template>

<script setup lang="ts">
// Récupération de tous les projets avec Nuxt Content
const { data: projects } = await useAsyncData("work", () =>
  queryCollection("work")
    .all()
    .then((data) =>
      data.map((item) => ({
        ...item,
        slug: item.path?.split("/").pop() || "",
        data: item,
      }))
    )
);

useHead({
  title: "Mes projets | Sidney ADJOH",
  meta: [
    { name: "description", content: "Learn about Sidney most recent projects" },
  ],
});
</script>
