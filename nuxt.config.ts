// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    head: {
      title: 'Home',
      titleTemplate: '%s · genny',
    },
  },

  devtools: {
    enabled: true,
  },

  devServer: {
    port: 1337,
  },

  modules: ['@nuxt/eslint', '@nuxt/ui'],

  css: ['~/assets/styles/main.css'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  ui: {
    colorMode: true,
    fonts: true,
  },

  fonts: {
    defaults: {
      weights: [300, 400, 500, 700],
      styles: ['normal', 'italic'],
    },
  },
});
