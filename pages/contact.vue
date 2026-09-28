<script setup lang="ts">
import { absoluteUrl, defaultSocialImage, siteUrl } from '~/utils/site';

const title = 'Contact Mike Orozco — Frontend Architecture & Developer Tooling';
const description = 'Contact Mike Orozco about senior engineering roles or consulting for custom software, SaaS products, web development, and frontend architecture.';
const canonical = absoluteUrl('/contact');

const emailHref = (subject: string) => `mailto:me@mikeorozco.dev?subject=${encodeURIComponent(subject)}`;

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: canonical,
  ogImage: defaultSocialImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: defaultSocialImage,
});

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': `${canonical}#contact`,
        url: canonical,
        name: title,
        description,
        about: { '@id': `${siteUrl}/#person` },
      }),
    },
  ],
});
</script>

<template>
  <div class="page-container contact-page">
    <header class="contact-intro">
      <p class="eyebrow">Contact</p>
      <h1 class="display-title">Contact me about a role or project</h1>
      <p class="lede">
        Choose hiring or consulting below. Each link opens an email with a subject line already filled in.
      </p>
    </header>

    <section class="contact-options" aria-label="Contact options">
      <article>
        <h2>Hiring opportunity</h2>
        <p>For senior engineering roles involving frontend architecture, interactive web applications, developer tooling, or technical leadership.</p>
        <a class="button-primary" :href="emailHref('Senior engineering opportunity')">Discuss an opportunity</a>
      </article>
      <article>
        <h2>Consulting project</h2>
        <p>For custom software, SaaS products, web development, architecture reviews, or focused implementation.</p>
        <a class="button-primary" :href="emailHref('Consulting project inquiry')">Discuss a project</a>
      </article>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  padding-block: 40px;
}

.contact-options {
  display: flex;
  flex-direction: row;
  margin-top: 28px;
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  & article {
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
    padding: clamp(1.5rem, 3vw, 2rem);
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);

    & > p {
      min-height: 5.5rem;
      color: var(--muted);
    }
  }

  & h2 {
    margin: 0;
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 500;
  }
}
</style>
