import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

export default defineConfig({
  // alias to easy import (optional, you can set up auto import for it)
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  
  plugins: [
    // Choose the directory for your pages
    VueRouter({
      routesFolder: ['src/routes', 'src/pages'],
      extensions: ['.vue', '.route.vue'],
    }),

    // Set up auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
      ],
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
      dts: false,
    }),

    // Set up auto-import for components
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: false,
    }),
    
    Vue(),
    UnoCSS(),
  ],
})