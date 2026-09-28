<script setup lang="ts">
const route = useRoute();
watch([() => route.path, () => route.hash], async ([path, hash], [previousPath]) => {
  // In-place project selection clears the anchor while keeping the active control.
  if (path === '/' && path === previousPath && !hash && route.query.project) return;
  await nextTick();
  const id = route.hash.slice(1) || (route.path === '/' && route.query.project ? 'work' : 'main-content');
  const target = document.getElementById(id);
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
}, { flush: 'post' });

useHead({
  script: [
    {
      id: 'theme-initializer',
      innerHTML: `(function(){var stored;try{stored=localStorage.getItem('color-mode')}catch(e){}var dark=stored?stored==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',dark)})();`,
    },
  ],
});
</script>

<template>
  <div class="site-shell">
    <SiteHeader />
    <main id="main-content" tabindex="-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
