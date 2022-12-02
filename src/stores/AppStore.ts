import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    count: 0,
  }),
  actions: {
    inc() {
      this.count++
    },
  },
})
