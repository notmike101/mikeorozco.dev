<script setup lang="ts">
import { additionalProjects, caseStudies } from '~/data/caseStudies';
import { defaultDescription, defaultSocialImage, defaultTitle, siteUrl } from '~/utils/site';

const featuredProjects = caseStudies.filter((project) => project.featured);

const proofPoints = [
  { value: '12+', label: 'Years building production systems' },
  { value: '50+', label: 'Applications and platforms delivered' },
];

const capabilities = [
  {
    number: '01',
    title: 'Architecture & system design',
    description: 'Modular frontend systems, event-driven services, integration boundaries, technical standards, and pragmatic tradeoff analysis.',
  },
  {
    number: '02',
    title: 'Immersive web engineering',
    description: 'High-performance product experiences built with Three.js, Babylon.js, WebGL, Vue, React, and TypeScript.',
  },
  {
    number: '03',
    title: 'Backend, cloud & delivery',
    description: 'Node.js and Python services, REST and GraphQL APIs, SQL and NoSQL data, Azure, Docker, Cloudflare, and CI/CD.',
  },
  {
    number: '04',
    title: 'Security & technical leadership',
    description: 'Vulnerability remediation, secure design, code review, developer mentorship, documentation, and workflow improvement.',
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
  ogImageAlt: 'Mike Orozco, Senior Software Engineer and Web Architect',
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
          jobTitle: 'Senior Software Engineer and Web Architect',
          homeLocation: { '@type': 'Place', name: 'Texas, USA' },
          knowsAbout: ['Web architecture', 'TypeScript', 'Immersive web', 'Three.js', 'Babylon.js', 'Application security'],
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
          <h1 class="display-title">Senior software engineer &amp; web architect.</h1>
          <p class="lede">
            I design scalable web platforms, immersive 3D experiences, and secure systems &mdash; combining hands-on engineering with architecture and technical leadership.
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
          <h2 id="experience-title" class="section-title">Architecture stays useful when teams can operate it.</h2>
          <p class="lede">
            My work spans enterprise engineering, independent consulting, frontend performance, cloud migration, security, and team enablement.
          </p>
        </header>
        <div class="experience-copy">
          <div class="experience-list">
            <article>
              <span>2022—Present</span>
              <div>
                <h3>Senior Software Engineer, Immersive Technologies</h3>
                <p>Architecture and implementation for enterprise 3D platforms, shared tooling, secure delivery practices, and developer mentorship.</p>
              </div>
            </article>
            <article>
              <span>2013—Present</span>
              <div>
                <h3>Independent Web &amp; Software Engineer</h3>
                <p>More than 50 production systems delivered across consulting and product engagements, frequently with end-to-end technical ownership.</p>
              </div>
            </article>
            <article>
              <span>Recognition</span>
              <div>
                <h3>Achievement and innovation awards</h3>
                <p>Recognized for leadership on a flagship immersive product platform and foundational technical solutions.</p>
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
          <h2 id="work-title" class="section-title">Systems built for scale, clarity, and longevity.</h2>
          <p class="lede">
            A closer look at the engineering decisions behind enterprise platforms and focused open-source tools.
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
          <h2 id="capabilities-title" class="section-title">Broad enough to connect the system. Focused enough to improve it.</h2>
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
          <h2 id="labs-title" class="section-title">Smaller systems, explored in public.</h2>
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
          <p>Share the role, problem, or system you're working through. I'll respond with the most useful next step.</p>
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
