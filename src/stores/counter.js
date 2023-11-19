import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const reset = () => count.value = 0
  
  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }

  return { count, increment, decrement, reset, doubleCount }
})
