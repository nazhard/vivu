<script setup>
const store = useCounterStore()
</script>

<template>
  <div>
    <div btn>{{ store.count }}</div>
    <button btn @click="store.increment()">+</button>
  </div>
</template>