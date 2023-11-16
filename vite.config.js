import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  
  plugins: [
    VueRouter({
      routesFolder: ['src/routes', 'src/pages'],
      extensions: ['.vue', '.route.vue'],
    }),
    
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
      ],
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
      dts: false,
    }),
    
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: false,
    }),
    
    Vue(),
    UnoCSS(),
  ],
})