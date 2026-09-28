<script setup lang="ts">
import { siteUrl } from '~/utils/site';

const router = useRouter();

useHead({
  title: 'Contact Mike Orozco',
  link: [{ rel: 'canonical', href: siteUrl }],
});
// Wait for static-route hydration so it cannot restore the old URL afterward.
onNuxtReady(() => router.replace('/#contact'));
</script>

<template>
  <div class="page-container legacy-contact">
    <h1>Contact Mike Orozco</h1>
    <NuxtLink class="button-secondary" to="/#contact">Hiring &amp; consulting</NuxtLink>
  </div>
</template>

<style scoped>
.legacy-contact { display: flex; flex-direction: column; align-items: flex-start; gap: 20px; padding-block: 40px; }
.legacy-contact h1 { margin: 0; font-size: 28px; font-weight: 500; }
</style>
