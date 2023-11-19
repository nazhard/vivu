<script setup>
const store = useCounterStore()
</script>

<template>
  <div>
    <button btn @click="store.decrement()">-</button>
    <span w-fit mx2>
      {{ store.count }} • {{ store.doubleCount }}
    </span>
    <button btn @click="store.increment()">+</button>
    
    <div my2 w-full>
      <button
        btn
        :disabled="store.count==0"
        @click="store.reset()">Reset</button>
    </div>
  </div>
</template>