// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
  ],
  svg: {
    vueSvgLoader: {

    },
  },
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
