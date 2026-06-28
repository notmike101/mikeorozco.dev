<script setup lang="ts">
import type { CaseStudy } from '~/data/caseStudies';

defineProps<{
  project: CaseStudy;
  eager?: boolean;
}>();
</script>

<template>
  <div class="visual-shell">
    <img
      v-if="project.visual === 'pack3d'"
      src="/images/pack3d-screenshot.png"
      :alt="`${project.title} desktop optimization interface`"
      width="1200"
      height="675"
      :loading="eager ? 'eager' : 'lazy'"
    />

    <template v-else-if="project.visual === 'platform'">
      <img
        src="/images/thermofisher-vanquish-tour.png"
        alt="Loaded Thermo Scientific Vanquish Core HPLC System 3D Tour showing the interactive instrument and feature controls"
        width="1280"
        height="720"
        :loading="eager ? 'eager' : 'lazy'"
      />
      <a
        class="visual-source"
        href="https://www.thermofisher.com/us/en/home/virtual/vanquish-core-hplc-3d-tour.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        View the live 3D tour <span aria-hidden="true">↗</span>
      </a>
    </template>

    <div v-else class="sandbox-visual" role="img" aria-label="Diagram of host application communicating with an isolated iframe runtime">
      <div class="host-label">Host application</div>
      <div class="sandbox-stage">
        <div class="runtime-card">
          <span class="runtime-kicker">Controlled surface</span>
          <strong>Sandbox runtime</strong>
          <code>run() · get() · destroy()</code>
        </div>
      </div>
      <div class="runtime-flow">
        <span>Lifecycle</span>
        <span>Isolation</span>
        <span>Explicit access</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.visual-shell {
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--surface);
}

.visual-shell > img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.visual-source {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.9rem;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 500;
  text-decoration: none;
}

.visual-source:hover {
  color: var(--accent);
}

.sandbox-visual {
  min-height: 27rem;
  padding: clamp(1.5rem, 4vw, 3rem);
  background-color: var(--surface);
  background-image: radial-gradient(var(--line) 1px, transparent 1px);
  background-size: 1.25rem 1.25rem;
}

.host-label,
.runtime-kicker {
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.sandbox-stage {
  display: grid;
  min-height: 17rem;
  margin-top: 1rem;
  place-items: center;
  border: 1px solid var(--line);
  background: color-mix(in srgb, var(--canvas) 65%, transparent);
}

.runtime-card {
  width: min(80%, 19rem);
  padding: 1.5rem;
  border: 1px solid var(--accent);
  background: var(--accent-soft);
}

.runtime-card strong,
.runtime-card code,
.runtime-kicker {
  display: block;
}

.runtime-card strong {
  margin-block: 0.5rem 1.25rem;
  font-family: "IBM Plex Serif", Georgia, serif;
  font-size: 1.45rem;
}

.runtime-card code {
  color: var(--accent);
  font-size: 0.8rem;
}

.runtime-flow {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
  color: var(--muted);
  font-size: 0.75rem;
}
</style>
