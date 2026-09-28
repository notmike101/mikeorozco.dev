import type { CaseStudy } from '../data/caseStudies';
import { absoluteUrl, caseStudyPath, defaultDescription, defaultTitle, siteName, siteUrl } from './site.ts';

export const serializeJsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');

const person = {
  '@type': 'Person',
  '@id': `${siteUrl}#person`,
  name: siteName,
  url: siteUrl,
  jobTitle: 'Senior Software Engineer | Frontend Architecture & Developer Tooling',
  homeLocation: { '@type': 'Place', name: 'Texas, USA' },
  knowsAbout: ['Frontend architecture', 'Vue authoring tools', 'TypeScript', 'Immersive web', 'Developer tooling', 'Application security'],
  sameAs: ['https://github.com/notmike101', 'https://www.linkedin.com/in/mikeoroz'],
};
const website = {
  '@type': 'WebSite',
  '@id': `${siteUrl}#website`,
  name: siteName,
  url: siteUrl,
  inLanguage: 'en',
  publisher: { '@id': person['@id'] },
};

export const profileSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [website, person, {
    '@type': 'ProfilePage',
    '@id': `${siteUrl}#profile`,
    url: siteUrl,
    name: defaultTitle,
    description: defaultDescription,
    inLanguage: 'en',
    mainEntity: { '@id': person['@id'] },
    isPartOf: { '@id': website['@id'] },
  }],
});

export const caseStudySchema = (project: CaseStudy) => {
  const url = absoluteUrl(caseStudyPath(project.slug));
  return {
    '@context': 'https://schema.org',
    '@graph': [website, person, {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: project.seoTitle,
      description: project.seoDescription,
      inLanguage: 'en',
      isPartOf: { '@id': website['@id'] },
      mainEntity: { '@id': `${url}#article` },
      breadcrumb: { '@id': `${url}#breadcrumbs` },
    }, {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: project.title,
      description: project.seoDescription,
      url,
      inLanguage: 'en',
      author: { '@type': 'Person', '@id': person['@id'], name: siteName, url: siteUrl },
      mainEntityOfPage: { '@id': `${url}#webpage` },
      about: { '@id': `${url}#project` },
      datePublished: project.publishedAt,
      dateModified: project.updatedAt,
      image: { '@type': 'ImageObject', url: absoluteUrl(project.socialImage), width: 1200, height: 630 },
    }, {
      // A case study describes the work, not a claim of sole source-code ownership.
      '@type': 'CreativeWork',
      '@id': `${url}#project`,
      name: project.title,
      description: project.summary,
      url,
      keywords: project.stack,
      ...(project.repository ? { sameAs: project.repository } : {}),
    }, {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: project.title, item: url },
      ],
    }],
  };
};
