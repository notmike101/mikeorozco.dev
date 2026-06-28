<script setup lang="ts">
import { absoluteUrl, defaultSocialImage, siteUrl } from '~/utils/site';

const title = 'Contact Mike Orozco — Software Engineering & Architecture';
const description = 'Contact Mike Orozco about senior software engineering opportunities, web architecture, immersive 3D systems, or consulting projects.';
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
      <h1 class="display-title">Start with the context that matters.</h1>
      <p class="lede">
        Choose the path that best fits the conversation. Both options open a direct email with a useful subject line—no form account or data collection involved.
      </p>
    </header>

    <section class="contact-options" aria-label="Contact options">
      <article>
        <h2>Hiring opportunity</h2>
        <p>For senior engineering, architecture, immersive-web, platform, or technical leadership roles.</p>
        <a class="button-primary" :href="emailHref('Senior engineering opportunity')">Discuss an opportunity</a>
      </article>
      <article>
        <h2>Consulting project</h2>
        <p>For architecture reviews, complex web platforms, 3D experiences, security work, or focused implementation.</p>
        <a class="button-primary" :href="emailHref('Consulting project inquiry')">Discuss a project</a>
      </article>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  margin-top: 15px;
  margin-bottom: 15px;
  padding-top: clamp(3rem, 1vh, 8rem);
}

.contact-options {
  display: flex;
  flex-direction: row;
  margin-top: clamp(4rem, 8vw, 7rem);
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
    padding: clamp(1.5rem, 5vw, 3.5rem);
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);

    & > p {
      min-height: 5.5rem;
      color: var(--muted);
    }
  }

  & h2 {
    margin: 0;
    font-family: "IBM Plex Serif", Georgia, serif;
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 500;
  }
}
</style>
