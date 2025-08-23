<!-- components/Grid.vue -->
<template>
    <ul :class="['grid', { offset: variant === 'offset', small: variant === 'small' }]">
      <slot />
    </ul>
  </template>
  
  <script setup lang="ts">
  interface Props {
    variant?: 'offset' | 'small'
  }
  
  defineProps<Props>()
  </script>
  
  <style scoped>
  .grid {
    display: grid;
    grid-auto-rows: 1fr;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }
  
  .grid.small {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  
  /* If last row contains only one item, make it span both columns. */
  .grid.small > :deep(:last-child:nth-child(odd)) {
    grid-column: 1 / 3;
  }
  
  @media (min-width: 50em) {
    .grid {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  
    .grid.offset {
      --row-offset: 7.5rem;
      padding-bottom: var(--row-offset);
    }
  
    /* Shift first item in each row vertically to create staggered effect. */
    .grid.offset > :deep(:nth-child(odd)) {
      transform: translateY(var(--row-offset));
    }
  
    /* If last row contains only one item, display it in the second column. */
    .grid.offset > :deep(:last-child:nth-child(odd)) {
      grid-column: 2 / 3;
      transform: none;
    }
  
    .grid.small {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
    }
  
    .grid.small > :deep(*) {
      flex-basis: 20rem;
    }
  }
  </style>