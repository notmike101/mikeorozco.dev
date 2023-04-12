// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  googleFonts: {
    families: {
      'Open Sans': true,
    },
  },
  colorMode: {
    classSuffix: '',
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
});
