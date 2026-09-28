<script setup lang="ts">
const route = useRoute();

const isActive = (path: string) => route.path === path || (path === '/#work' && route.path.startsWith('/work/'));
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header">
    <div class="page-container header-inner">
      <NuxtLink class="wordmark" to="/" aria-label="Mike Orozco, home">
        <span class="monogram" aria-hidden="true">MO</span><span>Mike Orozco</span>
      </NuxtLink>

      <nav aria-label="Primary navigation" class="primary-nav">
        <NuxtLink to="/#work" :aria-current="isActive('/#work') ? 'page' : undefined">Work</NuxtLink>
        <NuxtLink to="/#capabilities" :aria-current="route.path === '/' && route.hash === '#capabilities' ? 'location' : undefined">Capabilities</NuxtLink>
        <NuxtLink to="/#experience" :aria-current="route.path === '/' && route.hash === '#experience' ? 'location' : undefined">Experience</NuxtLink>
        <NuxtLink to="/#contact" :aria-current="route.path === '/' && route.hash === '#contact' ? 'location' : undefined">Contact</NuxtLink>
      </nav>

      <div class="header-actions">
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<style scoped>
.skip-link {
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 100;
  padding: 0.75rem 1rem;
  transform: translateY(-160%);
  border-radius: 0.25rem;
  background: var(--ink);
  color: var(--canvas);
  text-decoration: none;
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid color-mix(in srgb, var(--line) 85%, transparent);
  background: color-mix(in srgb, var(--canvas) 92%, transparent);
  backdrop-filter: blur(14px);
}

.header-inner {
  display: grid;
  min-height: 4.5rem;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 2rem;
}

.wordmark {
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
}

.monogram {
  border: 1px solid var(--line);
  padding: 5px;
  font: 12px ui-monospace, monospace;
}

.primary-nav,
.header-actions {
  display: flex;
  align-items: center;
}

.primary-nav {
  gap: clamp(1rem, 3vw, 2rem);
}

.header-actions {
  gap: 1rem;
}

.primary-nav a,
.header-actions a {
  color: var(--muted);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
}

.primary-nav a:hover,
.primary-nav a[aria-current='page'],
.primary-nav a[aria-current='location'],
.header-actions a:hover {
  color: var(--accent);
}

@media (max-width: 700px) {
  .header-inner {
    grid-template-columns: 1fr auto;
    gap: 10px;
    padding-block: 12px;
  }
  .primary-nav { grid-row: 2; grid-column: 1 / -1; justify-content: space-between; gap: 10px; }
  .primary-nav a { padding-block: 6px; font-size: 13px; }
  .header-actions { grid-row: 1; grid-column: 2; }
}
</style>
