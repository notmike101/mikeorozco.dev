<script setup lang="ts">
import { caseStudies, getCaseStudy } from '~/data/caseStudies';
import { absoluteUrl, siteUrl } from '~/utils/site';

const route = useRoute();
const project = getCaseStudy(String(route.params.slug));

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found' });
}

const canonical = absoluteUrl(`/work/${project.slug}`);
const socialImage = absoluteUrl(project.socialImage);
const schemaType = project.repository ? 'SoftwareSourceCode' : 'CreativeWork';

useSeoMeta({
  title: project.seoTitle,
  description: project.seoDescription,
  ogTitle: project.seoTitle,
  ogDescription: project.seoDescription,
  ogType: 'article',
  ogUrl: canonical,
  ogImage: socialImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${project.title} case study by Mike Orozco`,
  articlePublishedTime: project.publishedAt,
  articleModifiedTime: project.updatedAt,
  twitterCard: 'summary_large_image',
  twitterTitle: project.seoTitle,
  twitterDescription: project.seoDescription,
  twitterImage: socialImage,
});

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': schemaType,
        '@id': `${canonical}#project`,
        name: project.title,
        description: project.summary,
        url: canonical,
        datePublished: project.publishedAt,
        dateModified: project.updatedAt,
        creator: { '@id': `${siteUrl}/#person` },
        author: { '@id': `${siteUrl}/#person` },
        codeRepository: project.repository,
        programmingLanguage: project.stack,
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Past work', item: `${siteUrl}/#work` },
          { '@type': 'ListItem', position: 3, name: project.title, item: canonical },
        ],
      }),
    },
  ],
});

const relatedProjects = caseStudies.filter((item) => item.slug !== project.slug).slice(0, 2);
</script>

<template>
  <article class="case-study">
    <header class="page-container case-header section-space">
      <div class="case-title-grid">
        <div>
          <p class="eyebrow">{{ project.status }} · Case study</p>
          <h1 class="display-title">{{ project.title }}</h1>
        </div>
        <p class="lede">{{ project.summary }}</p>
      </div>
    </header>

    <div class="page-container case-visual">
      <ProjectVisual :project="project" eager />
    </div>

    <section class="page-container case-section case-overview" aria-labelledby="overview-title">
      <div>
        <p class="eyebrow">Overview</p>
        <h2 id="overview-title" class="section-title">The system behind the outcome.</h2>
      </div>
      <div class="case-prose">
        <h3>Problem</h3>
        <p>{{ project.problem }}</p>
        <h3>Role</h3>
        <p>{{ project.role }}</p>
        <div class="stack-list" aria-label="Technology stack">
          <span v-for="technology in project.stack" :key="technology">{{ technology }}</span>
        </div>
        <a v-if="project.repository" class="button-secondary" :href="project.repository" target="_blank" rel="noopener noreferrer">
          View repository <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>

    <section class="case-detail-section" aria-labelledby="constraints-title">
      <div class="page-container case-section">
        <div>
          <p class="eyebrow">Constraints</p>
          <h2 id="constraints-title" class="section-title">What the architecture had to respect.</h2>
        </div>
        <ol class="numbered-list">
          <li v-for="(constraint, index) in project.constraints" :key="constraint">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ constraint }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="page-container case-section" aria-labelledby="decisions-title">
      <div>
        <p class="eyebrow">Decisions</p>
        <h2 id="decisions-title" class="section-title">How the system was shaped.</h2>
      </div>
      <ol class="numbered-list">
        <li v-for="(decision, index) in project.decisions" :key="decision">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <p>{{ decision }}</p>
        </li>
      </ol>
    </section>

    <section class="case-detail-section" aria-labelledby="outcomes-title">
      <div class="page-container case-section">
        <div>
          <p class="eyebrow">Outcomes</p>
          <h2 id="outcomes-title" class="section-title">What changed as a result.</h2>
        </div>
        <ol class="numbered-list outcomes-list">
          <li v-for="(outcome, index) in project.outcomes" :key="outcome">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ outcome }}</p>
          </li>
        </ol>
      </div>
    </section>

    <nav class="page-container related-projects" aria-label="Related case studies">
      <p class="eyebrow">Continue exploring</p>
      <div class="related-grid">
        <NuxtLink v-for="related in relatedProjects" :key="related.slug" :to="`/work/${related.slug}`">
          <span>{{ related.status }}</span>
          <strong>{{ related.title }}</strong>
          <i aria-hidden="true">→</i>
        </NuxtLink>
      </div>
    </nav>
  </article>
</template>

<style scoped>
.case-study {
  margin-top: 15px;
  margin-bottom: 15px;
  padding-top: clamp(3rem, 1vh, 8rem);
}
.case-header {
  padding-top: 0;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: clamp(3rem, 8vw, 6rem);
  color: var(--muted);
  font-size: 0.8125rem;
}

.breadcrumb a {
  text-underline-offset: 0.25em;
}

.case-title-grid,
.case-section {
  display: grid;
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  /* gap: clamp(2rem, 6vw, 5rem); */
}

.case-title-grid > div,
.case-section > div:first-child {
  grid-column: span 6;
}

.case-title-grid > .lede,
.case-prose,
.numbered-list {
  grid-column: 7 / span 6;
}

.case-title-grid > .lede {
  margin: 0;
}

.case-visual {
  margin-bottom: clamp(1rem, 3vh, 9rem);
}

.case-visual :deep(.visual-shell),
.case-visual :deep(.sandbox-visual) {
  min-height: min(62vw, 42rem);
}

.case-section {
  padding-block: clamp(1rem, 3vh, 8rem);
}

.case-prose h3 {
  margin: 0 0 0.5rem;
  font-family: "IBM Plex Serif", Georgia, serif;
  font-size: 1.25rem;
}

.case-prose p {
  margin: 0 0 2rem;
  color: var(--muted);
}

.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.stack-list span {
  padding: 0.35rem 0.6rem;
  border: 1px solid var(--line);
  border-radius: 0.25rem;
  color: var(--muted);
  font-size: 0.75rem;
}

.case-detail-section {
  border-block: 1px solid var(--line);
  background: var(--surface);
}

.numbered-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.numbered-list li {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: 1rem;
  padding-block: 1.35rem;
  border-top: 1px solid var(--line);
}

.numbered-list span {
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 600;
}

.numbered-list p {
  margin: 0;
}

.outcomes-list p {
  font-family: "IBM Plex Serif", Georgia, serif;
  font-size: 1.15rem;
}

.related-projects {
  padding-block: clamp(5rem, 10vw, 8rem);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.related-grid a {
  display: grid;
  min-height: 13rem;
  grid-template-columns: 1fr auto;
  padding: 1.5rem;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  text-decoration: none;
}

.related-grid span {
  grid-column: 1 / -1;
  color: var(--muted);
  font-size: 0.75rem;
  text-transform: uppercase;
}

.related-grid strong {
  align-self: end;
  font-family: "IBM Plex Serif", Georgia, serif;
  font-size: 1.35rem;
}

.related-grid i {
  align-self: end;
  color: var(--accent);
  font-style: normal;
}

.related-grid a:hover {
  background: var(--accent-soft);
}

@media (max-width: 760px) {
  .case-title-grid > div,
  .case-title-grid > .lede,
  .case-section > div:first-child,
  .case-prose,
  .numbered-list {
    grid-column: 1 / -1;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
