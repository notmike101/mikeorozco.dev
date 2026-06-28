import { caseStudies } from '../../data/caseStudies';
import { siteUrl } from '../../utils/site';

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8');

  const entries = [
    { path: '/', lastmod: '2026-06-28', priority: '1.0' },
    { path: '/contact', lastmod: '2026-06-28', priority: '0.7' },
    ...caseStudies.map((project) => ({
      path: `/work/${project.slug}`,
      lastmod: project.updatedAt,
      priority: project.featured ? '0.9' : '0.6',
    })),
  ];

  const urls = entries.map((entry) => `
  <url>
    <loc>${new URL(entry.path, siteUrl).toString()}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;
});
