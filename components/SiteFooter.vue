<template>
  <footer class="site-footer">
    <div class="page-container footer-grid">
      <div>
        <p class="footer-name">Mike Orozco</p>
      </div>
      <nav aria-label="Footer navigation" class="footer-links">
        <NuxtLink to="/#contact">Hiring &amp; consulting</NuxtLink>
        <a href="https://github.com/notmike101" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/mikeoroz" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <NuxtLink to="/#research">Open source &amp; research</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  padding-block: 1.75rem;
  background: var(--rail);
}

.footer-grid {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
}

.footer-name,
.muted {
  margin: 0;
}

.footer-name {
  font-size: 1.4rem;
  font-weight: 500;
}

.muted {
  font-size: 0.875rem;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1.25rem;
}

.footer-links a {
  color: var(--muted);
  font-size: 0.875rem;
  text-underline-offset: 0.25em;
}

.footer-links a:hover {
  color: var(--accent);
}

@media (max-width: 680px) {
  .footer-grid {
    align-items: flex-start;
    flex-direction: column;
  }

  .footer-links {
    justify-content: flex-start;
  }
}
</style>
