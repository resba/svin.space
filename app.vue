<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import {useSpeciesStore} from "~/store/species";
const species = useSpeciesStore()
const items = ref<NavigationMenuItem[]>([
  {label: 'classic.svin.space',
    to: '/',
  },
  {
    label: species.value + ' Species Guidelines',
    icon: 'game-icons:dripping-goo',
    to: '/species'
  },
    /**
  {
    label: species.value + ' Reference',
    icon: 'game-icons:leaky-skull',
    to: '/ref'
  },

  {
    label: 'What About...',
    icon: 'game-icons:barrel-leak',
    to: '#',
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
        description: 'What is the copyright and usage rules for '+ species.value +'?',
        to: '/faq/copyright'
      }
    ]
  }, **/
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
    <NuxtPage id="body" />
  </UApp>
</template>
