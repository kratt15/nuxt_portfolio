<!-- components/Icon.vue -->
<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 256 256"
      aria-hidden="true"
      :stroke="gradient ? `url(#${gradientId})` : color"
      :fill="gradient ? `url(#${gradientId})` : color"
      :style="size ? { '--size': size } : {}"
    >
      <g v-html="iconPath" />
      <linearGradient
        v-if="gradient"
        :id="gradientId"
        x1="23"
        x2="235"
        y1="43"
        y2="202"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--gradient-stop-1)" />
        <stop offset=".5" stop-color="var(--gradient-stop-2)" />
        <stop offset="1" stop-color="var(--gradient-stop-3)" />
      </linearGradient>
    </svg>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { iconPaths } from './IconPaths'
  
  interface Props {
    icon: keyof typeof iconPaths
    color?: string
    gradient?: boolean
    size?: string
  }
  
  const props = withDefaults(defineProps<Props>(), {
    color: 'currentcolor',
    gradient: false,
    size: undefined
  })
  
  const iconPath = computed(() => iconPaths[props.icon])
  const gradientId = computed(() => 'icon-gradient-' + Math.round(Math.random() * 10e12).toString(36))
  </script>
  
  <style scoped>
  svg {
    vertical-align: middle;
    width: var(--size, 1em);
    height: var(--size, 1em);
  }
  </style>