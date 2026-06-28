// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  css: [
    '@fontsource/ibm-plex-sans/latin-400.css',
    '@fontsource/ibm-plex-sans/latin-500.css',
    '@fontsource/ibm-plex-sans/latin-600.css',
    '@fontsource/ibm-plex-serif/latin-500.css',
    '@fontsource/ibm-plex-serif/latin-600.css',
    '~/assets/css/main.css',
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#f7f6f2', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#101820', media: '(prefers-color-scheme: dark)' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/contact',
        '/work/immersive-product-platform',
        '/work/pack3d',
        '/sitemap.xml',
      ],
    },
  },
});
