import { caseStudies } from './data/caseStudies';

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
        { name: 'theme-color', content: '#f4f5f7', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#151619', media: '(prefers-color-scheme: dark)' },
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
        ...caseStudies.map((project) => `/work/${project.slug}`),
        '/sitemap.xml',
      ],
    },
  },
});
