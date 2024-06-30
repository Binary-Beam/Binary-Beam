import { resolve } from 'path'; 
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/preline.client.ts"],
  app: {
    head: {
      bodyAttrs: {
        class: 'bg-white dark:bg-neutral-900',
      },
    },
  },
})
