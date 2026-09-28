export default defineNuxtPlugin(nuxtApp => {
  const router = useRouter();
  // Nuxt replaces its initial scroll handler while hydrating static routes.
  nuxtApp.hook('app:mounted', () => {
    const defaultScroll = router.options.scrollBehavior;
    router.options.scrollBehavior = (to, from, savedPosition) => {
      if (!savedPosition && to.path === '/' && to.query.project && !to.hash) {
        if (from.path === '/') return false;
        // Land on the selected workbench from a reader while keeping the URL clean.
        if (from.path.startsWith('/work/')) return defaultScroll?.({ ...to, hash: '#work' }, from, savedPosition);
      }
      return defaultScroll?.(to, from, savedPosition);
    };
  });
});
