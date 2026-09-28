<script setup lang="ts">
import { additionalProjects } from '~/data/caseStudies';
import { defaultDescription, defaultSocialImage, defaultTitle, siteUrl } from '~/utils/site';

const emailHref = (subject: string) => `mailto:me@mikeorozco.dev?subject=${encodeURIComponent(subject)}`;

const proofPoints = [
  { value: '13+', label: 'Years in web and software development' },
  { value: '50+', label: 'Custom client solutions delivered' },
];

const capabilities = [
  {
    title: 'Frontend architecture',
    description: 'Reusable component systems, content-authoring tools, and responsive applications across web, desktop, and mobile.',
    skills: ['TypeScript', 'JavaScript', 'Vue', 'React', 'Nuxt', 'Web Components', 'Electron', 'React Native'],
    links: [{ label: 'MealMind', href: '/work/mealmind' }, { label: 'ZCode Extensions', href: '/work/zcode-desktop-extensions' }],
  },
  {
    title: 'Interactive 3D & authoring',
    description: 'Product tours, virtual sales demos, shared browser runtimes, and editors that turn content into interactive experiences.',
    skills: ['Three.js', 'Babylon.js', 'WebGL', 'Unity web UI', 'JSON manifests'],
    links: [{ label: '3D Product Tour', href: '/work/immersive-product-platform' }],
  },
  {
    title: 'Backend & data integration',
    description: 'API design, data models, and integration layers connecting applications to databases and external services. Recent contributions also include Java/Spring Boot APIs.',
    skills: ['Node.js', 'Python', 'REST', 'GraphQL', 'SOAP', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
    links: [{ label: 'Quire', href: '/work/quire' }, { label: 'Monrovia', href: '/work/monrovia-web-platform' }],
  },
  {
    title: 'Cloud & delivery',
    description: 'Cloud migrations, containerized applications, deployment pipelines, and ongoing service operation, from client hosting to enterprise infrastructure.',
    skills: ['Microsoft Azure', 'AWS', 'Docker', 'Cloudflare', 'GitHub Actions', 'CI/CD'],
    links: [{ label: 'Monrovia', href: '/work/monrovia-web-platform' }],
  },
  {
    title: 'Performance engineering',
    description: 'Browser preloading, API caching, CDN delivery, and 3D asset optimization, with attention to loading time, runtime cost, and visual quality.',
    skills: ['Caching', 'Load balancing', 'Preloading', 'Asset compression'],
    links: [{ label: 'Pack3D', href: '/work/pack3d' }, { label: 'Monrovia', href: '/work/monrovia-web-platform' }],
  },
  {
    title: 'Developer tools & AI workflows',
    description: 'Plugins, CLI helpers, and integrations for planning, implementation, testing, and review. Local prototypes explore LangGraph orchestration and A2A agent communication.',
    skills: ['Codex', 'MCP', 'Jira', 'Confluence', 'Figma', 'LangChain'],
    links: [{ label: 'Engineering Marketplace', href: '/work/engineering-workflow-tooling' }, { label: 'ZCode Extensions', href: '/work/zcode-desktop-extensions' }],
  },
  {
    title: 'Application security',
    description: 'Vulnerability investigation, reproducible findings, and practical fixes. Work spans enterprise remediation, confidential client assessments, and independent research.',
    skills: ['Secure coding', 'Penetration testing', 'Impact analysis', 'Responsible reporting'],
    links: [{ label: 'Quire', href: '/work/quire' }, { label: 'Security research', href: '/#research' }],
  },
  {
    title: 'Technical leadership & consulting',
    description: 'Architecture and code review, developer mentoring, requirements clarification, and delivery ownership. Explain technical decisions to clients and cross-functional teams.',
    skills: ['Architecture reviews', 'Mentoring', 'Technical documentation', 'Client consulting'],
    links: [{ label: '3D Product Tour', href: '/work/immersive-product-platform' }],
  },
];

const experience = [
  {
    company: 'Thermo Fisher Scientific',
    role: 'Developer III (Senior Software Engineer)',
    period: 'Sep 2022 — Present',
    scope: 'Immersive Technologies · Digital Engineering',
    highlights: [
      'Led the 3D Product Tour and built Vue authoring tools for tours and sales demos. Collaborated on the shared Three.js/Babylon.js runtime and later took on broader stewardship of the ecosystem.',
      'Built a templated, sandboxed web interface for Unity experiences, with asynchronous loading and HTML-based authoring.',
      'Created and maintained a Codex plugin marketplace for engineering workflows, including Jira, Confluence, and Figma integrations. Built a local MCP usage-reporting prototype.',
      'Remediated persistent XSS, SQL injection, and denial-of-service issues. Reviewed architecture and code, mentored developers, and contributed Java/Spring Boot endpoints and service refactoring across teams.',
    ],
    recognition: 'Outstanding Achievement for the 3D Product Tour · Innovation Award for foundational technical solutions',
    links: [{ label: '3D Product Tour', href: '/work/immersive-product-platform' }, { label: 'Engineering Marketplace', href: '/work/engineering-workflow-tooling' }],
  },
  {
    company: 'Independent Consulting',
    role: 'Freelance Web & Software Developer',
    period: 'Jan 2013 — Present',
    scope: 'Client engagements across e-commerce, healthcare, legal services, and education',
    highlights: [
      'Delivered 50+ custom web and software solutions, often as the sole engineer from discovery and architecture through implementation, deployment, and ongoing support.',
      'Built frontend and backend applications with React, Vue, Node.js, Python, and SQL. Managed multiple engagements and explained technical trade-offs to nontechnical clients.',
      'Performed confidential application-security assessments and penetration testing, with reproducible findings, impact analysis, and remediation guidance.',
    ],
  },
  {
    company: 'Monrovia Plants',
    role: 'Web Developer',
    period: 'Apr 2019 — Oct 2021',
    scope: 'Web infrastructure · Backend integration · Community products',
    highlights: [
      'Migrated web services to Azure, reducing hosting costs and improving website response time by approximately 20%. A separate Cloudflare integration reduced average page load times by approximately 30%.',
      'Designed a unified Node.js API over SOAP services, MySQL, and external data, using caching, load balancing, and modular services.',
      'Built a Nuxt and Docker community application with server-side rendering and plant recommendations, partnering with marketing and IT.',
    ],
    links: [{ label: 'Monrovia infrastructure', href: '/work/monrovia-web-platform' }],
  },
  {
    company: 'MKTR INC',
    role: 'UI/UX Programmer',
    period: 'Jun 2018 — Dec 2018',
    scope: 'E-commerce SaaS · Web and mobile',
    highlights: [
      'Led the Vue frontend and reusable component library for a SaaS product serving online retailers. Integrated its REST API with error handling and logging.',
      'Built a cross-platform React Native application and incorporated design and user-testing feedback into the interfaces.',
    ],
  },
];

const earlierExperience = [
  {
    company: 'Valiant Technology',
    role: 'Technical Support Technician',
    period: 'Jul 2017 — May 2018',
    description: 'Diagnosed workstation, network, and server issues across client environments. Managed approximately 200 support tickets per month and automated recurring support tasks.',
  },
  {
    company: 'Artris',
    role: 'Frontend Web Developer',
    period: 'Aug 2015 — Dec 2016',
    description: 'Maintained a JavaScript performance library using page preloading and caching. Built the company website and demonstrated the library against real sites.',
  },
  {
    company: 'InTouch Marketing LLC',
    role: 'Frontend Developer',
    period: 'Jan 2015 — Sep 2015',
    description: 'Led development and maintenance across 30+ client websites. Built WordPress themes and plugins, HubSpot templates, and managed virtual-server environments.',
  },
  {
    company: 'TOTAL PC',
    role: 'On-Site Technician',
    period: 'May 2014 — Jan 2015',
    description: 'Provided hardware and software troubleshooting, system setup, hardware replacement, and data-recovery assistance for residential and business customers.',
  },
  {
    company: 'MedeMedia',
    role: 'Web Developer',
    period: 'Nov 2013 — Feb 2014',
    description: 'Led a small web-development team, coordinated deployments, built administrative interfaces, and collaborated on an online reading and content-sharing platform.',
  },
  {
    company: 'Yuba-Sutter Chamber of Commerce',
    role: 'Marketing & Technical Intern',
    period: 'Sep 2012 — Mar 2013',
    description: 'Created web marketing assets and newsletter templates, maintained business data, and helped migrate the organization to an updated database.',
  },
];

const organizations = [
  { name: 'Thermo Fisher Scientific', logo: '/images/thermofisher.svg', url: 'https://www.thermofisher.com' },
  { name: 'Monrovia', logo: '/images/monrovia.svg', url: 'https://www.monrovia.com' },
  { name: 'MKTR INC', logo: '/images/mktr.png', url: 'https://www.mktr.co/', dark: true },
  { name: 'Valiant Technology', logo: '/images/valiant.svg', url: 'https://thevaliantway.com/', dark: true },
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
        <article v-for="capability in capabilities" :key="capability.title">
          <h3>{{ capability.title }}</h3>
          <p>{{ capability.description }}</p>
          <ul class="capability-skills" :aria-label="`${capability.title} skills`"><li v-for="skill in capability.skills" :key="skill">{{ skill }}</li></ul>
          <div class="evidence-links"><NuxtLink v-for="link in capability.links" :key="link.href" :to="link.href">{{ link.label }} <span aria-hidden="true">↗</span></NuxtLink></div>
        </article>
      </div>
    </section>
    <section id="experience" class="portfolio-section" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>
      <div class="experience-list">
        <article v-for="job in experience" :key="job.company" class="experience-entry">
          <span class="experience-period">{{ job.period }}</span>
          <div>
            <h3>{{ job.company }}</h3>
            <p class="experience-role">{{ job.role }}</p>
            <p class="experience-scope">{{ job.scope }}</p>
            <ul class="experience-highlights"><li v-for="highlight in job.highlights" :key="highlight">{{ highlight }}</li></ul>
            <p v-if="job.recognition" class="experience-recognition"><span>Awards</span>{{ job.recognition }}</p>
            <div v-if="job.links" class="evidence-links"><NuxtLink v-for="link in job.links" :key="link.href" :to="link.href">{{ link.label }} <span aria-hidden="true">↗</span></NuxtLink></div>
          </div>
        </article>
        <h3 class="earlier-title">Earlier experience</h3>
        <article v-for="job in earlierExperience" :key="job.company" class="experience-entry earlier-entry">
          <span class="experience-period">{{ job.period }}</span>
          <div><h4>{{ job.company }}</h4><p class="experience-role">{{ job.role }}</p><p>{{ job.description }}</p></div>
        </article>
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
        <a v-for="organization in organizations" :key="organization.name" :href="organization.url" :class="{ 'dark-logo': organization.dark }" target="_blank" rel="noopener noreferrer" :aria-label="organization.name"><img :src="organization.logo" :alt="organization.name" loading="lazy" /></a>
        <p class="other-organizations">Artris <span>·</span> TOTAL PC <span>·</span> MedeMedia</p>
      </div>
    </section>
    <section id="contact" class="portfolio-section contact-section" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <div class="contact-options">
        <article>
          <h3>Hiring opportunity</h3>
          <p>For senior engineering roles involving frontend architecture, interactive web applications, developer tooling, or technical leadership.</p>
          <a class="button-secondary" :href="emailHref('Senior engineering opportunity')">Discuss an opportunity</a>
        </article>
        <article>
          <h3>Consulting project</h3>
          <p>For custom software, SaaS products, web development, architecture reviews, or focused implementation.</p>
          <a class="button-secondary" :href="emailHref('Consulting project inquiry')">Discuss a project</a>
        </article>
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
.capability-grid article { display: flex; flex-direction: column; min-width: 0; border-top: 1px solid var(--line); padding-top: 16px; }
.capability-skills { display: flex; flex-wrap: wrap; gap: 6px 8px; list-style: none; margin: 14px 0 16px; padding: 0; }
.capability-skills li { padding: 3px 7px; background: var(--rail); border: 1px solid var(--line); font-size: 11px; line-height: 1.5; }
.evidence-links { display: flex; flex-wrap: wrap; gap: 7px 18px; font-size: 12px; }
.evidence-links a { color: var(--accent); text-underline-offset: 3px; }
.capability-grid .evidence-links { margin-top: auto; }
.experience-entry { display: grid; grid-template-columns: 145px minmax(0, 1fr); gap: 24px; padding: 24px 0; border-top: 1px solid var(--line); }
.experience-entry:first-child { padding-top: 0; border: 0; }
.experience-entry:last-child { padding-bottom: 0; }
.experience-period { font-size: 12px; color: var(--muted); padding-top: 3px; }
.portfolio-section .experience-role { color: var(--ink); font-size: 14px; margin-top: 4px; }
.portfolio-section .experience-scope { font-size: 12px; margin-top: 3px; }
.experience-highlights { margin: 16px 0; padding-left: 16px; list-style: disc; color: var(--muted); font-size: 14px; line-height: 1.65; }
.experience-highlights li + li { margin-top: 9px; }
.experience-highlights li::marker { color: var(--accent); }
.portfolio-section .experience-recognition { margin: 16px 0; padding: 12px 14px; background: var(--accent-soft); font-size: 12px; color: var(--ink); }
.experience-recognition > span { display: block; color: var(--accent); margin-bottom: 4px; font-weight: 500; }
.portfolio-section .earlier-title { padding: 8px 0 16px; font-size: 13px; color: var(--muted); }
.earlier-entry { padding-block: 18px; }
.earlier-entry h4 { margin: 0; font-size: 15px; font-weight: 500; line-height: 1.4; }
.earlier-entry .experience-role { font-size: 12px; }
.earlier-entry p:last-child { font-size: 13px; }
.research-list { display: grid; grid-template-columns: 1fr 1fr; gap: 24px 34px; }
.research-list article { padding-bottom: 20px; border-bottom: 1px solid var(--line); }
.research-list a { text-decoration: none; }
.research-list a:hover { color: var(--accent); }
.research-tags { display: flex; gap: 6px 13px; flex-wrap: wrap; padding: 0; list-style: none; margin: 12px 0 0; color: var(--muted); font-size: 12px; }
.organizations { display: flex; flex-wrap: wrap; gap: 22px; align-items: center; }
.organizations a { width: 130px; min-height: 70px; padding: 10px; display: grid; place-items: center; background: #fff; border-radius: 2px; }
.organizations img { display: block; max-height: 42px; max-width: 110px; object-fit: contain; }
.organizations a.dark-logo { background: #242833; }
.other-organizations { flex-basis: 100%; margin: 0 !important; }
.other-organizations span { padding-inline: 10px; }
.contact-section { border-bottom: 0; }
.contact-options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px 34px; min-width: 0; }
.contact-options article { display: flex; flex-direction: column; align-items: flex-start; min-width: 0; padding-top: 16px; }
.contact-options p { margin-bottom: 18px; }
.contact-options .button-secondary { margin-top: auto; font-size: 13px; }
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
  .capability-grid, .research-list, .contact-options { grid-template-columns: 1fr; gap: 20px; }
  .experience-entry { grid-template-columns: 1fr; gap: 8px; }
}
</style>
