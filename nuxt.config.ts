// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
});
