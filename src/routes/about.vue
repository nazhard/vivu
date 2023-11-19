<script setup>
import logo from '@/assets/logo.svg'
</script>

<template>
  <div>
    <img :src="logo" alt="Vuejs logo" h20 mx-auto/>
    <h1 py2>Vue Simple Starter</h1>
    
    <div text-sm op75>
      <p>Includes :</p>
      <ul>
        <li>Vite 4 + Vue 3</li>
        <li>File based routing</li>
        <li>Auto import components</li>
        <li>And moree...</li>
      </ul>
    </div>
    
    <div p7>
      <Counter/>
    </div>
  </div>
</template>