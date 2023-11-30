<script setup>
import logo from '@/assets/logo.svg'
</script>

<template>
  <div>
    <img :src="logo" alt="Vuejs logo" h20 mx-auto/>
    <h1 py2>Vue Simple Starter</h1>
    
    <div text-sm op75>
      <p>This is a template designed to be as simple as possible
      with a few core plugins to make the process of developing a simple app easier.</p>
    </div>
    
    <div p7>
      <Counter/>
    </div>
  </div>
</template>