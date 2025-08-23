<!-- components/ThemeToggle.vue -->
<template>
    <button @click="toggleTheme" :aria-pressed="isDark">
      <span class="sr-only">Dark theme</span>
      <span class="icon light">
        <Icon icon="sun" />
      </span>
      <span class="icon dark">
        <Icon icon="moon-stars" />
      </span>
    </button>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
 
  
  const isDark = ref(false)
  
  const setTheme = (dark: boolean) => {
    document.documentElement.classList[dark ? 'add' : 'remove']('theme-dark')
    isDark.value = dark
  }
  
  const toggleTheme = () => {
    setTheme(!isDark.value)
  }
  
  const checkIsDark = () => {
    return document.documentElement.classList.contains('theme-dark')
  }
  
  onMounted(() => {
    // Initialize button state to reflect current theme
    setTheme(checkIsDark())
  })
  </script>
  
  <style scoped>
  button {
    display: flex;
    border: 0;
    border-radius: 999rem;
    padding: 0;
    background-color: var(--gray-999);
    box-shadow: inset 0 0 0 1px var(--accent-overlay);
    cursor: pointer;
  }
  
  .icon {
    z-index: 1;
    position: relative;
    display: flex;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    color: var(--accent-overlay);
  }
  
  .icon.light::before {
    content: '';
    z-index: -1;
    position: absolute;
    inset: 0;
    background-color: var(--accent-regular);
    border-radius: 999rem;
  }
  
  :global(.theme-dark) .icon.light::before {
    transform: translateX(100%);
  }
  
  :global(.theme-dark) .icon.dark,
  :global(html:not(.theme-dark)) .icon.light,
  button[aria-pressed='false'] .icon.light {
    color: var(--accent-text-over);
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .icon,
    .icon.light::before {
      transition:
        transform var(--theme-transition),
        color var(--theme-transition);
    }
  }
  
  @media (forced-colors: active) {
    .icon.light::before {
      background-color: SelectedItem;
    }
  }
  </style>