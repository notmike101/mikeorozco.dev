<script setup lang="ts">
import type { ProjectFlow } from '~/data/caseStudies';

defineProps<{ flow: ProjectFlow }>();
</script>

<template>
  <figure class="project-flow" :aria-label="flow.title">
    <p class="flow-title">{{ flow.title }}</p>
    <ol class="flow-steps" role="list">
      <li v-for="step in flow.steps" :key="step.title">
        <strong>{{ step.title }}</strong>
        <p>{{ step.description }}</p>
      </li>
    </ol>
    <figcaption>{{ flow.caption }}</figcaption>
  </figure>
</template>

<style scoped>
.project-flow {
  margin: 0;
  padding: clamp(1.25rem, 3vw, 2.5rem);
  border: 1px solid var(--line);
  background: var(--surface);
}
.flow-title {
  margin: 0 0 1rem;
  font-size: 1.1rem;
  line-height: 1.3;
}
.flow-steps {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.flow-steps li {
  padding: 1rem;
  border-top: 1px solid var(--line);
}
.flow-steps strong {
  display: block;
}
.flow-steps strong {
  margin-top: 0.4rem;
  line-height: 1.35;
}
.flow-steps p,
figcaption {
  color: var(--muted);
  font-size: 0.875rem;
  line-height: 1.6;
}
.flow-steps p {
  margin: 0.5rem 0 0;
}
figcaption {
  margin-top: 1.25rem;
}
@media (max-width: 480px) {
  .flow-steps {
    grid-template-columns: 1fr;
  }
}
</style>
