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
    <header class="page-container case-header">
      <NuxtLink class="back-link" to="/#work">← Back to work</NuxtLink>
      <p class="eyebrow">{{ project.status }} · Case study</p>
      <h1 class="display-title">{{ project.title }}</h1>
      <p class="lede">{{ project.summary }}</p>
      <div class="stack-list" aria-label="Technology stack">
        <span v-for="technology in project.stack" :key="technology">{{ technology }}</span>
      </div>
      <a v-if="project.repository" class="text-link" :href="project.repository" target="_blank" rel="noopener noreferrer">
        Explore the repository <span aria-hidden="true">↗</span>
      </a>
    </header>

    <div class="page-container case-visual">
      <ProjectVisual :project="project" eager />
    </div>

    <div class="page-container case-reader">
      <nav class="case-contents" aria-label="On this page">
        <p class="eyebrow">On this page</p>
        <a href="#overview">The challenge &amp; my role</a>
        <a v-for="(section, index) in project.details" :key="section.title" :href="`#decision-${index + 1}`">
          {{ section.title }}
        </a>
        <a href="#outcomes">Outcomes</a>
        <a href="#reflection">Perspective</a>
      </nav>

      <div class="case-body">
        <section id="overview" class="case-section" aria-labelledby="overview-title">
          <p class="eyebrow">Context &amp; ownership</p>
          <h2 id="overview-title">The challenge</h2>
          <p>{{ project.problem }}</p>
          <div class="case-role">
            <h3>My role</h3>
            <p>{{ project.role }}</p>
          </div>
          <ProjectFlow v-if="project.image" class="inline-flow" :flow="project.flow" />
        </section>

        <section
          v-for="(section, index) in project.details"
          :id="`decision-${index + 1}`"
          :key="section.title"
          class="case-section"
          :aria-labelledby="`decision-title-${index + 1}`"
        >
          <p class="eyebrow">{{ String(index + 1).padStart(2, '0') }} · Engineering decisions</p>
          <h2 :id="`decision-title-${index + 1}`">{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </section>

        <section id="outcomes" class="case-section" aria-labelledby="outcomes-title">
          <p class="eyebrow">What changed</p>
          <h2 id="outcomes-title">Outcomes</h2>
          <ul class="outcomes-list">
            <li v-for="outcome in project.outcomes" :key="outcome">{{ outcome }}</li>
          </ul>
        </section>

        <section id="reflection" class="case-section" aria-labelledby="reflection-title">
          <p class="eyebrow">Perspective</p>
          <h2 id="reflection-title">What this work taught me</h2>
          <p>{{ project.reflection }}</p>
          <div v-if="project.links.length" class="supporting-links">
            <h3>Explore the work</h3>
            <ul>
              <li v-for="link in project.links" :key="link.href">
                <a :href="link.href" target="_blank" rel="noopener noreferrer">
                  {{ link.label }} <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>

    <nav class="page-container related-projects" aria-label="Related case studies">
      <p class="eyebrow">Continue exploring</p>
      <div class="related-grid">
        <NuxtLink v-for="related in relatedProjects" :key="related.slug" :to="`/work/${related.slug}`">
          <span>{{ related.status }}</span>
          <strong>{{ related.title }}</strong>
          <i aria-hidden="true">→</i>
        </NuxtLink>
      </div>
      <NuxtLink class="text-link all-work" to="/#work">View all work <span aria-hidden="true">→</span></NuxtLink>
    </nav>
  </article>
</template>

<style scoped>
.case-study {
  padding-top: clamp(2rem, 5vw, 4rem);
}
.case-header {
  padding-bottom: 2.5rem;
}
.back-link {
  display: inline-block;
  margin-bottom: 2.5rem;
  color: var(--muted);
  text-underline-offset: 0.25em;
}
.case-header .display-title {
  max-width: 24ch;
  font-size: clamp(2.5rem, 5vw, 4.25rem);
  line-height: 1.08;
}
.case-header .lede {
  max-width: 54ch;
  margin-block: 1.25rem;
}
.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}
.stack-list span {
  padding: 0.25rem 0.6rem;
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.8125rem;
}
.case-visual {
  margin-bottom: clamp(2.5rem, 6vw, 5rem);
}
.case-reader {
  display: grid;
  grid-template-columns: 15rem minmax(0, 1fr);
  align-items: start;
  gap: clamp(2rem, 5vw, 5rem);
}
.case-contents {
  position: sticky;
  top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-left: 1px solid var(--line);
  padding-left: 1.25rem;
}
.case-contents .eyebrow {
  margin-bottom: 0.2rem;
}
.case-contents a {
  color: var(--muted);
  font-size: 0.875rem;
  line-height: 1.5;
  text-decoration: none;
}
.case-contents a:hover,
.supporting-links a:hover {
  color: var(--accent);
  text-decoration: underline;
}
.case-body {
  min-width: 0;
  max-width: 46rem;
}
.case-section {
  padding-bottom: 2.75rem;
  margin-bottom: 2.75rem;
  border-bottom: 1px solid var(--line);
  scroll-margin-top: 6rem;
}
.case-section h2 {
  margin: 0 0 1.25rem;
  font-family: "IBM Plex Serif", Georgia, serif;
  font-size: clamp(1.6rem, 2.6vw, 2.15rem);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.2;
}
.case-section h3 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}
.case-section > p:not(.eyebrow),
.case-role p {
  margin: 0 0 1.25rem;
  color: var(--muted);
  font-size: 1.0625rem;
  line-height: 1.85;
}
.case-section > p:last-child,
.case-role p:last-child {
  margin-bottom: 0;
}
.case-role {
  margin-top: 1.75rem;
  padding: 1.25rem 1.5rem;
  border-left: 3px solid var(--accent);
  background: var(--surface);
}
.inline-flow {
  margin-top: 2rem;
}
.outcomes-list {
  margin: 0;
  padding-left: 1.25rem;
}
.outcomes-list li {
  margin-top: 1rem;
  padding-left: 0.4rem;
  font-size: 1.0625rem;
}
.outcomes-list li::marker {
  color: var(--accent);
}
.supporting-links {
  margin-top: 2rem;
}
.supporting-links ul {
  margin: 0;
  padding-left: 1.2rem;
}
.supporting-links li + li {
  margin-top: 0.65rem;
}
.supporting-links a {
  color: var(--accent);
  text-underline-offset: 0.2em;
}
.related-projects {
  padding-block: 1rem 4rem;
}
.related-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}
.related-grid a {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--line);
  text-decoration: none;
}
.related-grid span {
  grid-column: 1 / -1;
  color: var(--muted);
  font-size: 0.75rem;
  text-transform: uppercase;
}
.related-grid strong {
  font-family: "IBM Plex Serif", Georgia, serif;
  font-size: 1.35rem;
  font-weight: 500;
  line-height: 1.3;
}
.related-grid i {
  color: var(--accent);
  font-style: normal;
}
.related-grid a:hover {
  background: var(--accent-soft);
}
.all-work {
  margin-top: 1.5rem;
}
@media (max-width: 900px) {
  .case-reader {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .case-contents {
    position: static;
  }
  .case-body {
    max-width: none;
  }
}
@media (max-width: 600px) {
  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
