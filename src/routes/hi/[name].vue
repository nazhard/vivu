<script setup>
const route = useRoute()
let name = route.params.name
</script>

<template>
  <div>
    <div i-carbon-pedestrian inline-block text-4xl />
    <p>
      Hi, {{ name }}
    </p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>
  </div>
</template>