<script setup lang="ts">
import type { CaseStudy } from '~/data/caseStudies';

defineProps<{
  project: CaseStudy;
  eager?: boolean;
}>();
</script>

<template>
  <div class="visual-shell">
    <template v-if="project.image">
      <img
        :src="project.image.src"
        :alt="project.image.alt"
        :width="project.image.width"
        :height="project.image.height"
        :loading="eager ? 'eager' : 'lazy'"
      />
      <a
        v-if="project.image.href"
        class="visual-source"
        :href="project.image.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ project.image.label }} <span aria-hidden="true">↗</span>
      </a>
    </template>
    <ProjectFlow v-else :flow="project.flow" />
  </div>
</template>

<style scoped>
.visual-shell {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--surface);
}
.visual-shell > img {
  display: block;
  width: 100%;
  height: auto;
}
.visual-shell > :deep(.project-flow) {
  border: 0;
}
.visual-source {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
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
</style>
