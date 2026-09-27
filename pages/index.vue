<script setup lang="ts">
import { additionalProjects, caseStudies } from '~/data/caseStudies';
import { defaultDescription, defaultSocialImage, defaultTitle, siteUrl } from '~/utils/site';

const featuredProjects = caseStudies.filter((project) => project.featured);

const proofPoints = [
  { value: '13+', label: 'Years in web and software development' },
  { value: '50+', label: 'Custom client solutions delivered' },
];

const capabilities = [
  {
    number: '01',
    title: 'Frontend architecture & authoring tools',
    description: 'Reusable browser runtimes and Vue authoring interfaces that let content teams configure product tours and sales demos.',
  },
  {
    number: '02',
    title: 'Interactive web applications',
    description: 'Product tours and virtual sales demos built with Three.js, Babylon.js, Vue, React, and TypeScript.',
  },
  {
    number: '03',
    title: 'Backend, cloud & performance',
    description: 'Node.js APIs, data integrations, Azure migrations, Cloudflare delivery, Docker, and CI/CD.',
  },
  {
    number: '04',
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
  <div class="content-wrapper">
    <section class="hero">
      <div class="page-container">
        <div class="hero-copy">
          <p class="eyebrow" style="margin: 0;">Mike Orozco &bullet; Texas, USA</p>
          <h1 class="display-title">Senior software engineer.</h1>
          <p class="lede">
            I build frontend systems, Vue authoring tools, and developer tools for product teams. My work spans interactive 3D experiences, client software, performance, and technical leadership.
          </p>
          <div class="hero-actions">
            <a class="button-primary" href="#work">View past work</a>
            <NuxtLink class="button-secondary" to="/contact">Contact me</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section aria-label="Career highlights" class="proof-section">
      <div class="page-container proof-grid">
        <div v-for="point in proofPoints" :key="point.label" class="proof-item">
          <strong>{{ point.value }}</strong>
          <span>{{ point.label }}</span>
        </div>
      </div>
    </section>

    <section id="experience" class="experience-section" aria-labelledby="experience-title">
      <div class="page-container">
        <header>
          <h3>Experience &amp; recognition</h3>
          <h2 id="experience-title" class="section-title">Enterprise products, client software, and web performance</h2>
          <p class="lede">
            I work across implementation, architecture, developer tools, security, and technical guidance, with hands-on ownership from design through maintenance.
          </p>
        </header>
        <div class="experience-copy">
          <div class="experience-list">
            <article>
              <span>2022—Present</span>
              <div>
                <h3>Senior Software Engineer, Immersive Technologies</h3>
                <p>Led development of the 3D Product Tour, built Vue authoring and configuration tools, and collaborated on the shared runtime. Developed a team Codex plugin marketplace and a local MCP usage-reporting prototype.</p>
              </div>
            </article>
            <article>
              <span>2013—Present</span>
              <div>
                <h3>Independent Web &amp; Software Engineer</h3>
                <p>Delivered 50+ custom web and software solutions across client engagements, often owning architecture, implementation, deployment, and support.</p>
              </div>
            </article>
            <article>
              <span>2019—2021</span>
              <div>
                <h3>Web Developer, Monrovia Plants</h3>
                <p>Azure migration improved website response time by approximately 20%. A separate Cloudflare integration reduced average page load times by approximately 30%.</p>
              </div>
            </article>
            <article>
              <span>2022</span>
              <div>
                <h3>Thermo Fisher Scientific awards</h3>
                <p>Outstanding Achievement for the 3D Product Tour and an Innovation Award for foundational technical solutions.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="work" class="work-section" aria-labelledby="work-title">
      <div class="page-container">
        <header>
          <h3>Past work</h3>
          <h2 id="work-title" class="section-title">Selected engineering work</h2>
          <p class="lede">
            The 3D Product Tour at Thermo Fisher Scientific and Pack3D, an open-source desktop optimizer.
          </p>
        </header>
        <ProjectRow
          v-for="(project, index) in featuredProjects"
          :key="project.slug"
          :project="project"
          :reverse="index % 2 === 1"
        />
      </div>
    </section>

    <section id="capabilities" class="capability-section" aria-labelledby="capabilities-title">
      <div class="page-container">
        <header>
          <h3>Capabilities</h3>
          <h2 id="capabilities-title" class="section-title">What I build and maintain</h2>
        </header>
        <div class="capability-grid">
          <article v-for="capability in capabilities" :key="capability.number">
            <h3>{{ capability.title }}</h3>
            <p>{{ capability.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="research" class="labs-section" aria-labelledby="labs-title">
      <div class="page-container">
        <header>
          <h3>Open source &amp; research</h3>
          <h2 id="labs-title" class="section-title">Open-source tools and research projects</h2>
        </header>
        <div class="labs-list">
          <article v-for="project in additionalProjects" :key="project.title">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tag-row">
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
            <a class="text-link" :href="project.repository" target="_blank" rel="noopener noreferrer">
              View repository <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </div>
    </section>

    <section class="organizations-section" aria-labelledby="organizations-title">
      <div class="page-container">
        <header>
          <h3 id="organizations-title">Organizations I've supported</h3>
        </header>
        <div class="organization-grid">
          <a
            v-for="organization in organizations"
            :key="organization.name"
            :href="organization.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="organization.name"
          >
            <img :src="organization.logo" :alt="organization.name" loading="lazy" />
          </a>
        </div>
      </div>
    </section>

    <section class="contact-section" aria-labelledby="contact-title">
      <div class="page-container contact-grid">
        <header>
          <h3>Start a conversation</h3>
          <h2 id="contact-title" class="section-title">Hiring for a senior role or planning a complex project?</h2>
        </header>
        <div class="contact-copy">
          <p>Share the role or project, the current challenge, and what kind of engineering help you need.</p>
          <NuxtLink class="button-primary" to="/contact">Choose a contact path</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 15px 0;
}

.section-intro {
  margin-bottom: clamp(1rem, 1vh, 4rem);

  & .lede {
    margin-top: 1.5rem;
  }
}

.hero {
  padding-top: clamp(3rem, 1vh, 8rem);

  & .hero-copy {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;
  }

  & .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: auto;
  }

  @media screen and (max-width: 767px) {
    & .hero-actions {
      flex-direction: column;
    }
  }
}

.proof-section {
  border-block: 1px solid var(--line);

  & .proof-grid {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }

    & .proof-item {
      flex: 1;
      padding: 2rem clamp(1rem, 3vw, 2rem);
      border-left: 1px solid var(--line);

      @media screen and (max-width: 767px) {
        border-left: 0;
        border-right: 1px solid var(--line);
        border-top: 1px solid var(--line);
      }

      &:last-child {
        border-right: 1px solid var(--line);
      }

      & strong,
      & span {
        display: block;
      }
    
      & strong {
        font-family: "IBM Plex Serif", Georgia, serif;
        font-size: 2.25rem;
        font-weight: 500;
        line-height: 1;
      }

      & span {
        margin-top: 0.75rem;
        color: var(--muted);
        font-size: 0.8125rem;
        line-height: 1.5;
      }
    }
  }
}

.experience-section {
  border-block: 1px solid var(--line);
  padding-block: clamp(3rem, 1vh, 8rem);
  background-color: var(--surface);

  & header {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;

    & h3 {
      color: var(--accent);
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      line-height: 1.3;
      text-transform: uppercase;
    }
  }

  & .experience-list {
    & article {
      display: flex;
      flex-direction: row;
      gap: 1.5rem;
      padding-block: 1.5rem;
      border-top: 1px solid var(--line);
      align-items: center;

      @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
      }

      & span {
        flex: 0 1 fit-content;
        color: var(--muted);
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      & > div {
        flex: 1;

        & h3 {
          font-family: "IBM Plex Serif", Georgia, serif;
          font-size: 1.25rem;
          margin: 0;
          padding: 0;
        }

        & p {
          color: var(--muted);
        }
      }
    }
  }
}

.work-section {
  padding-block: clamp(3rem, 1vh, 8rem);

  & header {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;

    & h3 {
      color: var(--accent);
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      line-height: 1.3;
      text-transform: uppercase;
    }
  }
}

.capability-section {
  border-block: 1px solid var(--line);
  padding-block: clamp(3rem, 1vh, 8rem);
  background-color: var(--surface);
  gap: 15px;

  & header {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;

    & h3 {
      color: var(--accent);
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      line-height: 1.3;
      text-transform: uppercase;
    }
  }

  & .capability-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }

    & h3 {
      font-family: "IBM Plex Serif", Georgia, serif;
      font-size: 1.25rem;
    }

    & p {
      color: var(--muted);
    }

    & article {
      flex: 1 1 50%;
      padding: clamp(1.5rem, 4vw, 3rem);
      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      gap: 15px;

      & > span {
        color: var(--accent);
        font-size: 0.75rem;
        font-weight: 600;
      }
    }
  }
}

.labs-section {
  padding-block: clamp(3rem, 1vh, 8rem);

  & header {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;

    & h3 {
      color: var(--accent);
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      line-height: 1.3;
      text-transform: uppercase;
    }
  }

  & .labs-list {
    display: flex;
    flex-direction: column;

    & h3 {
      font-family: "IBM Plex Serif", Georgia, serif;
      font-size: 1.25rem;
    }

    & p {
      color: var(--muted);
    }

    & article {
      padding-block: 1.75rem;
      border-top: 1px solid var(--line);

      & .tag-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-block: 1rem;

        & span {
          padding: 0.25rem 0.5rem;
          border: 1px solid var(--line);
          border-radius: 0.25rem;
          color: var(--muted);
          font-size: 0.75rem;
        }
      }
    }
  }
}

.organizations-section {
  border-block: 1px solid var(--line);
  padding-block: clamp(3rem, 1vh, 8rem);
  background-color: var(--surface);
  gap: 15px;

  & header {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;
    text-align: center;

    & h3 {
      color: var(--accent);
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      line-height: 1.3;
      text-transform: uppercase;
    }
  }

  & .organization-grid {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;

    & a {
      width: min(100%, 10rem);
      place-items: center;

      &:hover {
        & img {
          filter: grayscale(0);
          opacity: 1;
        }
      }

      & img {
        max-height: 4rem;
        object-fit: contain;
        filter: grayscale(0.9);
        opacity: 0.6;
        transition: filter 160ms ease, opacity 160ms ease;
      }
    }
  }
}

.contact-section {
  padding-block: clamp(3rem, 1vh, 8rem);
  
  & .contact-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    justify-content: center;
    align-items: center;

    & header {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 15px;

      & h3 {
        color: var(--accent);
        font-size: 0.8125rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        line-height: 1.3;
        text-transform: uppercase;
      }
    }

    & .contact-copy {
      max-width: 30rem;
      display: flex;
      flex-direction: column;
      gap: 15px;
      color: var(--muted);
      font-size: 1.1rem;
      text-align: center;
    }
  }
}
</style>
