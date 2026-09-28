import { caseStudies } from '../../data/caseStudies';
import { absoluteUrl, caseStudyPath } from '../../utils/site';

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8');

  const entries = [
    { path: '/', lastmod: '2026-09-28' },
    ...caseStudies.map((project) => ({
      path: caseStudyPath(project.slug),
      lastmod: project.updatedAt,
    })),
  ];

  const urls = entries.map((entry) => `
  <url>
    <loc>${absoluteUrl(entry.path)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;
});
