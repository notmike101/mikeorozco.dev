<script setup lang="ts">
defineProps<{ error: { statusCode?: number; statusMessage?: string } }>();

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class="error-page">
    <div>
      <p class="eyebrow">{{ error.statusCode || 404 }}</p>
      <h1 class="display-title">This page isn’t part of the system.</h1>
      <p class="lede">The address may be outdated or the page may have moved.</p>
      <button class="button-primary" type="button" @click="handleError">Return home</button>
    </div>
  </div>
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
