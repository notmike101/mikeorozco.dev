<script setup lang="ts">
import { additionalProjects } from '~/data/caseStudies';
import { defaultDescription, defaultSocialImage, defaultTitle, siteUrl } from '~/utils/site';


const proofPoints = [
  { value: '13+', label: 'Years in web and software development' },
  { value: '50+', label: 'Custom client solutions delivered' },
];

const capabilities = [
  {
    title: 'Frontend architecture & authoring tools',
    description: 'Reusable browser runtimes and Vue authoring interfaces that let content teams configure product tours and sales demos.',
  },
  {
    title: 'Interactive web applications',
    description: 'Product tours and virtual sales demos built with Three.js, Babylon.js, Vue, React, and TypeScript.',
  },
  {
    title: 'Backend, cloud & performance',
    description: 'Node.js APIs, data integrations, Azure migrations, Cloudflare delivery, Docker, and CI/CD.',
  },
  {
    title: 'Developer tooling & technical leadership',
    description: 'Codex plugins for engineering workflows and a local MCP usage-reporting prototype, alongside code review, security remediation, and mentorship.',
  },
];

const organizations = [
  { name: 'Thermo Fisher Scientific', logo: '/images/thermofisher.svg', url: 'https://www.thermofisher.com' },
  { name: 'Monrovia', logo: '/images/monrovia.svg', url: 'https://www.monrovia.com' },
  { name: 'InTouch Marketing', logo: '/images/intouch-marketing.png', url: 'https://intouch-marketing.com' },
  { name: 'Katz Law', logo: '/images/katzlaw.png', url: 'https://www.katzlaw.com' },
  { name: 'Yuba-Sutter Chamber of Commerce', logo: '/images/yuba-sutter-chamber-of-commerce.png', url: 'https://www.yubasutterchamber.com' },
];

useSeoMeta({
  title: defaultTitle,
  description: defaultDescription,
  ogTitle: defaultTitle,
  ogDescription: defaultDescription,
  ogType: 'profile',
  ogUrl: siteUrl,
  ogImage: defaultSocialImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Mike Orozco, Senior Software Engineer in Frontend Architecture and Developer Tooling',
  twitterCard: 'summary_large_image',
  twitterTitle: defaultTitle,
  twitterDescription: defaultDescription,
  twitterImage: defaultSocialImage,
});

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profile`,
        url: siteUrl,
        name: defaultTitle,
        description: defaultDescription,
        mainEntity: {
          '@type': 'Person',
          '@id': `${siteUrl}/#person`,
          name: 'Mike Orozco',
          url: siteUrl,
          jobTitle: 'Senior Software Engineer | Frontend Architecture & Developer Tooling',
          homeLocation: { '@type': 'Place', name: 'Texas, USA' },
          knowsAbout: ['Frontend architecture', 'Vue authoring tools', 'TypeScript', 'Immersive web', 'Developer tooling', 'Application security'],
          sameAs: ['https://github.com/notmike101', 'https://www.linkedin.com/in/mikeoroz'],
        },
      }),
    },
  ],
});
</script>
<template>
  <div class="page-container portfolio-home">
    <section class="portfolio-intro">
      <div><p class="location">Texas, USA</p><h1>Senior software engineer</h1></div>
      <div>
        <p class="intro-copy">I build frontend systems, Vue authoring tools, and developer tools for product teams. My work spans interactive 3D experiences, client software, performance, and technical leadership.</p>
        <div class="career-highlights" aria-label="Career highlights">
          <p v-for="point in proofPoints" :key="point.label"><strong>{{ point.value }}</strong><span>{{ point.label }}</span></p>
        </div>
      </div>
    </section>
    <ProjectWorkbench />
    <section id="capabilities" class="portfolio-section" aria-labelledby="capabilities-title">
      <h2 id="capabilities-title">Capabilities</h2>
      <div class="capability-grid">
        <article v-for="capability in capabilities" :key="capability.title"><h3>{{ capability.title }}</h3><p>{{ capability.description }}</p></article>
      </div>
    </section>
    <section id="experience" class="portfolio-section" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>
      <div class="experience-list">
        <article><span>2022—Present</span><div><h3>Senior Software Engineer, Immersive Technologies</h3><p>Led development of the 3D Product Tour, built Vue authoring and configuration tools, and collaborated on the shared runtime. Developed a team Codex plugin marketplace and a local MCP usage-reporting prototype.</p></div></article>
        <article><span>2013—Present</span><div><h3>Independent Web &amp; Software Engineer</h3><p>Delivered 50+ custom web and software solutions across client engagements, often owning architecture, implementation, deployment, and support.</p></div></article>
        <article><span>2019—2021</span><div><h3>Web Developer, Monrovia Plants</h3><p>Azure migration improved website response time by approximately 20%. A separate Cloudflare integration reduced average page load times by approximately 30%.</p></div></article>
        <article><span>2022</span><div><h3>Thermo Fisher Scientific awards</h3><p>Outstanding Achievement for the 3D Product Tour and an Innovation Award for foundational technical solutions.</p></div></article>
      </div>
    </section>
    <section id="research" class="portfolio-section" aria-labelledby="research-title">
      <h2 id="research-title">Open source &amp; research</h2>
      <div class="research-list">
        <article v-for="project in additionalProjects" :key="project.title">
          <h3><a :href="project.repository" target="_blank" rel="noopener noreferrer">{{ project.title }} <span aria-hidden="true">↗</span></a></h3>
          <p>{{ project.description }}</p>
          <ul class="research-tags" aria-label="Technologies"><li v-for="tag in project.tags" :key="tag">{{ tag }}</li></ul>
        </article>
      </div>
    </section>
    <section class="portfolio-section" aria-labelledby="organizations-title">
      <h2 id="organizations-title">Organizations I've supported</h2>
      <div class="organizations">
        <a v-for="organization in organizations" :key="organization.name" :href="organization.url" target="_blank" rel="noopener noreferrer" :aria-label="organization.name"><img :src="organization.logo" :alt="organization.name" loading="lazy" /></a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio-intro { display: grid; grid-template-columns: 320px minmax(0, 1fr); gap: 42px; padding: 34px 26px; align-items: center; }
.location { font-size: 12px; color: var(--muted); margin: 0 0 12px; }
.portfolio-intro h1 { font-size: clamp(36px, 3.5vw, 48px); line-height: 1.05; letter-spacing: -1.9px; font-weight: 500; margin: 0; max-width: 14ch; }
.intro-copy { margin: 0; max-width: 78ch; font-size: 15px; line-height: 1.65; }
.career-highlights { display: flex; gap: 26px; margin-top: 22px; }
.career-highlights p { display: flex; align-items: baseline; gap: 9px; margin: 0; }
.career-highlights strong { font-size: 23px; font-weight: 500; letter-spacing: -.8px; }
.career-highlights span { font-size: 12px; color: var(--muted); }
.portfolio-section { padding: 30px 26px; display: grid; grid-template-columns: 170px minmax(0, 1fr); gap: 26px; border-bottom: 1px solid var(--line); }
.portfolio-section > h2 { font-size: 22px; font-weight: 500; letter-spacing: -.5px; line-height: 1.25; margin: 0; }
.portfolio-section h3 { margin: 0; font-size: 16px; font-weight: 500; line-height: 1.4; }
.portfolio-section p { color: var(--muted); font-size: 14px; line-height: 1.65; margin: 6px 0 0; }
.capability-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px 34px; }
.experience-list article { display: grid; grid-template-columns: 115px minmax(0, 1fr); gap: 24px; padding: 18px 0; border-top: 1px solid var(--line); }
.experience-list article:first-child { padding-top: 0; border: 0; }
.experience-list article:last-child { padding-bottom: 0; }
.experience-list article > span { font-size: 12px; color: var(--muted); padding-top: 3px; }
.research-list { display: grid; grid-template-columns: 1fr 1fr; gap: 24px 34px; }
.research-list article { padding-bottom: 20px; border-bottom: 1px solid var(--line); }
.research-list a { text-decoration: none; }
.research-list a:hover { color: var(--accent); }
.research-tags { display: flex; gap: 6px 13px; flex-wrap: wrap; padding: 0; list-style: none; margin: 12px 0 0; color: var(--muted); font-size: 12px; }
.organizations { display: flex; flex-wrap: wrap; gap: 22px; align-items: center; }
.organizations a { width: 130px; min-height: 70px; padding: 10px; display: grid; place-items: center; background: #fff; border-radius: 2px; }
.organizations img { display: block; max-height: 42px; max-width: 110px; object-fit: contain; }
@media (max-width: 920px) {
  .portfolio-intro { grid-template-columns: 250px minmax(0, 1fr); gap: 24px; }
  .career-highlights { gap: 16px; }
  .career-highlights p { display: block; }
  .career-highlights span { display: block; }
}
@media (max-width: 620px) {
  .portfolio-home { width: 100%; }
  .portfolio-intro { display: block; padding: 25px 18px; }
  .portfolio-intro h1 { margin-bottom: 20px; max-width: 15ch; }
  .career-highlights { gap: 24px; }
  .portfolio-section { grid-template-columns: 1fr; padding: 26px 18px; gap: 22px; }
  .capability-grid, .research-list { grid-template-columns: 1fr; gap: 20px; }
  .experience-list article { grid-template-columns: 1fr; gap: 6px; }
}
</style>
