<script setup lang="ts">
useHead({
  script: [
    {
      id: 'theme-initializer',
      innerHTML: `(function(){try{var stored=localStorage.getItem('color-mode');var dark=stored?stored==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',dark)}catch(e){}})();`,
    },
  ],
});
</script>

<template>
  <div class="site-shell">
    <SiteHeader />
    <main id="main-content">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
