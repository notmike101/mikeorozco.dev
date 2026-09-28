<script setup lang="ts">
import { caseStudySchema, serializeJsonLd } from '~/utils/structuredData';
import { caseStudies, getCaseStudy } from '~/data/caseStudies';
import { absoluteUrl, siteUrl, caseStudyPath } from '~/utils/site';

const route = useRoute();
const project = getCaseStudy(String(route.params.slug));

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found' });
}

const canonical = absoluteUrl(caseStudyPath(project.slug));
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
  script: [{ key: 'page-schema', type: 'application/ld+json', innerHTML: serializeJsonLd(caseStudySchema(project)) }],
});

const relatedProjects = caseStudies.filter((item) => item.slug !== project.slug).slice(0, 2);
</script>
<template>
  <div class="page-container case-page">
    <ProjectWorkbench :case-study="project">
      <article class="case-reader">
        <p class="case-lead">{{ project.summary }}</p>
        <div v-if="project.image" class="case-image"><ProjectVisual :project="project" eager /></div>
        <section class="reader-row" aria-labelledby="challenge-title"><h2 id="challenge-title">The challenge</h2><p>{{ project.problem }}</p></section>
        <section class="reader-row" aria-labelledby="role-title"><h2 id="role-title">Role</h2><p>{{ project.role }}</p></section>
        <section class="reader-row" aria-labelledby="stack-title"><h2 id="stack-title">Stack</h2><ul class="reader-stack"><li v-for="technology in project.stack" :key="technology">{{ technology }}</li></ul></section>
        <section class="reader-row" aria-labelledby="system-title"><h2 id="system-title">System</h2><ProjectFlow class="reader-flow" :flow="project.flow" /></section>
        <section v-for="(section, index) in project.details" :id="`decision-${index + 1}`" :key="section.title" class="reader-row" :aria-labelledby="`decision-title-${index + 1}`">
          <h2 :id="`decision-title-${index + 1}`">{{ section.title }}</h2>
          <div><p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p></div>
        </section>
        <section id="outcomes" class="reader-row" aria-labelledby="outcomes-title"><h2 id="outcomes-title">Outcomes</h2><ul><li v-for="outcome in project.outcomes" :key="outcome">{{ outcome }}</li></ul></section>
        <section id="reflection" class="reader-row" aria-labelledby="reflection-title"><h2 id="reflection-title">What this work taught me</h2><p>{{ project.reflection }}</p></section>
        <section v-if="project.repository || project.links.length" class="reader-row" aria-labelledby="links-title">
          <h2 id="links-title">Links</h2><ul class="reader-links">
            <li v-if="project.repository"><a :href="project.repository" target="_blank" rel="noopener noreferrer">Repository ↗</a></li>
            <li v-for="link in project.links" :key="link.href"><a :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }} ↗</a></li>
          </ul>
        </section>
        <NuxtLink class="button-secondary" :to="{ path: '/', query: { project: project.slug }, hash: '#work' }">← Back to project</NuxtLink>
      </article>
    </ProjectWorkbench>
    <nav class="related-projects" aria-label="Related case studies">
      <h2>More work</h2><div class="related-grid">
        <NuxtLink v-for="related in relatedProjects" :key="related.slug" :to="caseStudyPath(related.slug)"><span>{{ related.status }}</span><strong>{{ related.title }} →</strong></NuxtLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.case-page { padding-top: 24px; }
.case-reader { padding: 26px; background: var(--surface); }
.case-lead { margin: 0 0 26px; font-size: 18px; line-height: 1.6; max-width: 70ch; }
.case-image { max-width: 800px; margin-bottom: 26px; }
.reader-row { display: grid; grid-template-columns: 190px minmax(0, 1fr); gap: 28px; padding-block: 25px; border-top: 1px solid var(--line); }
.reader-row h2 { font-size: 19px; line-height: 1.35; font-weight: 500; letter-spacing: -.3px; margin: 0; }
.reader-row p, .reader-row ul { margin: 0; color: var(--muted); font-size: 15px; line-height: 1.8; max-width: 72ch; }
.reader-row p + p, .reader-row li + li { margin-top: 15px; }
.reader-row ul { padding-left: 18px; }
.reader-row .reader-stack { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 8px 18px; }
.reader-stack li + li { margin: 0; }
.reader-flow { padding: 0; border: 0; background: transparent; }
.reader-links a { color: var(--accent); text-underline-offset: 3px; }
.related-projects { padding: 28px 26px; display: grid; grid-template-columns: 170px 1fr; gap: 26px; }
.related-projects h2 { font-size: 22px; margin: 0; font-weight: 500; }
.related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 26px; }
.related-grid a { text-decoration: none; }
.related-grid span { font-size: 12px; color: var(--muted); display: block; margin-bottom: 6px; }
.related-grid strong { font-size: 17px; font-weight: 500; }
.related-grid a:hover { color: var(--accent); }
@media (max-width: 1000px) { .reader-row { grid-template-columns: 1fr; gap: 12px; } }
@media (max-width: 620px) {
  .case-page { width: 100%; padding-top: 0; }
  .case-reader { padding: 22px 18px; }
  .related-projects, .related-grid { grid-template-columns: 1fr; }
  .related-projects { padding: 26px 18px; }
}
</style>
