<script setup lang="ts">
const isDark = ref(false);

const applyTheme = (dark: boolean) => {
  isDark.value = dark;
  document.documentElement.classList.toggle('dark', dark);
  localStorage.setItem('color-mode', dark ? 'dark' : 'light');
};

onMounted(() => {
  const stored = localStorage.getItem('color-mode');
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored ? stored === 'dark' : preferred);
});
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="isDark ? 'Use light color theme' : 'Use dark color theme'"
    :title="isDark ? 'Use light theme' : 'Use dark theme'"
    @click="applyTheme(!isDark)"
  >
    <svg v-if="isDark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42m0-12.72-1.42 1.42M7.06 16.94l-1.42 1.42" />
      <circle cx="12" cy="12" r="4" />
    </svg>
    <svg v-else viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-grid;
  width: 2.5rem;
  height: 2.5rem;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 0.375rem;
  background: transparent;
  color: var(--ink);
  cursor: pointer;
}

.theme-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}

svg {
  width: 1.1rem;
  height: 1.1rem;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.7;
}
</style>
