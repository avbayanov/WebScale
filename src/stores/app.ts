// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    currentWeight: 999 as number | null,
  }),
})
