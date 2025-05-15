<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {label: 'Svin.space',
    to: '/',
  },
  {
    label: 'Classic Species Guidelines',
    icon: 'game-icons:dripping-goo',
    to: '/species'
  },
  {
    label: 'Classic Reference',
    icon: 'game-icons:leaky-skull',
    to: '/ref'
  },
  {
    label: 'What About...',
    icon: 'game-icons:barrel-leak',
    to: '/faq',
    children: [
      {
        label: 'Modern Svins',
        icon: 'i-lucide-file-text',
        description: 'Why does this exist if there is already a modern ruleset for the Svin Species?',
        to: '/faq/why'
      },
      {
        label: 'Copyright and Usage',
        icon: 'i-lucide-file-text',
        description: 'What is the copyright and usage rules for Classic Svins?',
        to: '/faq/copyright'
      },
      {
        label: 'The Creator',
        icon: 'i-lucide-file-text',
        description: 'Learn about the creator of Svins, Aesural',
        to: '/faq/aesural'
      }
    ]
  },
  {
    label: 'Who Made This?',
    icon: 'game-icons:hazard-sign',
    to: '/about'
  }
])
</script>

<template>
  <UApp>
    <UNavigationMenu :items="items" class="w-full justify-center" />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </UApp>
</template>
