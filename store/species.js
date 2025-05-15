import { defineStore } from 'pinia'

export const useSpeciesStore = defineStore('species', {
  state: () => {
    return { value: 'Classic Svin' }
  },
})