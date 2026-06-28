<script setup lang="ts">
const route = useRoute();

const isActive = (path: string) => route.path === path || (path === '/#work' && route.path.startsWith('/work/'));
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header">
    <div class="page-container header-inner">
      <NuxtLink class="wordmark" to="/" aria-label="Mike Orozco, home">
        MO<span aria-hidden="true">.</span>
      </NuxtLink>

      <nav aria-label="Primary navigation" class="primary-nav">
        <NuxtLink to="/#work" :aria-current="isActive('/#work') ? 'page' : undefined">Work</NuxtLink>
        <NuxtLink to="/#capabilities">Capabilities</NuxtLink>
        <NuxtLink to="/#about">About</NuxtLink>
        <NuxtLink to="/contact" :aria-current="isActive('/contact') ? 'page' : undefined">Contact</NuxtLink>
      </nav>

      <div class="header-actions">
        <a href="https://github.com/notmike101" target="_blank" rel="noopener noreferrer" aria-label="Mike Orozco on GitHub">GitHub</a>
        <a href="https://www.linkedin.com/in/mikeoroz" target="_blank" rel="noopener noreferrer" aria-label="Mike Orozco on LinkedIn">LinkedIn</a>
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
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
}

.wordmark {
  color: var(--ink);
  font-family: "IBM Plex Serif", Georgia, serif;
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: -0.04em;
  text-decoration: none;
}

.wordmark span {
  color: var(--accent);
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
.header-actions a:hover {
  color: var(--accent);
}

@media (max-width: 800px) {
  .header-inner {
    gap: 1rem;
  }

  .primary-nav a:not(:first-child):not(:last-child),
  .header-actions a {
    display: none;
  }
}
</style>
