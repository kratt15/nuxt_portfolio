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
const isDark = ref(false);

const setTheme = (dark: boolean) => {
  if (dark) {
    document.documentElement.classList.add("theme-dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("theme-dark");
    localStorage.setItem("theme", "light");
  }
  isDark.value = dark;
};

const toggleTheme = () => {
  setTheme(!isDark.value);
};

const checkIsDark = () => {
  return document.documentElement.classList.contains("theme-dark");
};

onMounted(() => {
  // Vérifier d'abord le localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme === "dark");
  } else {
    // Sinon, initialiser avec l'état actuel du DOM
    setTheme(checkIsDark());
  }
});
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
  position: relative;
  overflow: hidden;
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
  transition: color var(--theme-transition);
}

.icon.active {
  color: var(--accent-text-over);
}

/* .icon.light {
  transform: translateX(0);
  
  z-index: -1;
	background-color: var(--accent-regular);
	border-radius: 999rem;
} */

.icon.light::before {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background-color: var(--accent-regular);
  border-radius: 999rem;
}

.icon.dark {
  transform: translateX(-100%);

  background-color: var(--accent-regular);
  border-radius: 999rem;
}

:global(.theme-dark) .icon.light {
  transform: translateX(100%);
}

:global(.theme-dark) .icon.dark {
  transform: translateX(0);
}

@media (prefers-reduced-motion: no-preference) {
  .icon {
    transition: transform var(--theme-transition), color var(--theme-transition);
  }
}

/* :global(.theme-dark) .icon.dark,
	:global(html:not(.theme-dark)) .icon.light,
	button[aria-pressed='false'] .icon.light {
		color: var(--accent-text-over);
	} */

@media (forced-colors: active) {
  .icon.active {
    color: SelectedItem;
  }
}
</style>
