<template>
  <footer class="site-footer">
    <div class="page-container footer-grid">
      <div>
        <p class="footer-name">Mike Orozco</p>
        <p class="muted">Senior Software Engineer &amp; Web Architect</p>
      </div>
      <nav aria-label="Footer navigation" class="footer-links">
        <NuxtLink to="/#work">Past work</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <a href="https://github.com/notmike101" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/mikeoroz" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  padding-block: 2.5rem;
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
  font-family: "IBM Plex Serif", Georgia, serif;
  font-size: 1.15rem;
  font-weight: 600;
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
