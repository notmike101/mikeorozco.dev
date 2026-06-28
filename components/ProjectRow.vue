<script setup lang="ts">
import type { CaseStudy } from '~/data/caseStudies';

defineProps<{
  project: CaseStudy;
  reverse?: boolean;
}>();
</script>

<template>
  <article class="project-row" :class="{ reverse }">
    <ProjectVisual class="project-visual" :project="project" />
    <div class="project-copy">
      <div class="project-meta">
        <span>{{ project.stack.slice(0, 3).join(' · ') }}</span>
      </div>
      <h3 class="project-title">{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
      <ul>
        <li v-for="outcome in project.outcomes.slice(0, 2)" :key="outcome">{{ outcome }}</li>
      </ul>
      <NuxtLink class="text-link" :to="`/work/${project.slug}`">
        Read the case study <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped>
.project-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 15px;
  padding-block: clamp(1rem, 3vh, 5.5rem);
  border-top: 1px solid var(--line);
  flex-wrap: wrap;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }

  & .project-visual {
    flex: 0 0 55%;
  }

  & .project-copy {
    flex: 1;
  }

  @media screen and (max-width: 1000px) {
    &, &:nth-of-type(even) {
      flex-direction: column !important;
    }
  }
}

.project-row.reverse .project-copy {
  grid-column: 1;
  grid-row: 1;
}

.project-copy > p {
  color: var(--muted);
  font-size: 1.05rem;
}

.project-copy ul {
  margin: 1.5rem 0;
  padding: 0;
  list-style: none;
}

.project-copy li {
  position: relative;
  margin-top: 0.75rem;
  padding-left: 1.25rem;
}

.project-copy li::before {
  position: absolute;
  top: 0.75em;
  left: 0;
  width: 0.4rem;
  height: 1px;
  background: var(--accent);
  content: '';
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 860px) {
  .project-row,
  .project-row.reverse {
    grid-template-columns: 1fr;
  }

  .project-row.reverse .project-visual,
  .project-row.reverse .project-copy {
    grid-column: 1;
  }

  .project-row.reverse .project-copy {
    grid-row: auto;
  }
}
</style>
