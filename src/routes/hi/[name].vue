<script setup>
const router = useRouter()
const route = useRoute()
let name = route.params.name
</script>

<template>
  <div>
    <div i-carbon:ibm-cloud inline-block text-4xl />
    <p>
      Hi, {{ name }}
    </p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>
    
    <div py4/>
    <button btn @click="router.back()">Back</button>
  </div>
</template>