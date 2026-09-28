<script setup lang="ts">
defineProps<{ error: { statusCode?: number; statusMessage?: string } }>();

useSeoMeta({ title: 'Page unavailable — Mike Orozco', robots: 'noindex' });
</script>

<template>
  <main class="error-page">
    <div>
      <p class="eyebrow">{{ error.statusCode || 404 }}</p>
      <h1 class="display-title">This page isn’t part of the system.</h1>
      <p class="lede">The address may be outdated or the page may have moved.</p>
      <a class="button-primary" href="/">Return home</a>
    </div>
  </main>
</template>

<style scoped>
.error-page {
  display: grid;
  min-height: 100vh;
  padding: 2rem;
  place-items: center;
  background: var(--canvas);
  color: var(--ink);
}

.error-page > div {
  width: min(100%, 52rem);
}

.error-page .button-primary {
  margin-top: 1rem;
  cursor: pointer;
}
</style>
