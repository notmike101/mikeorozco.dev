import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { caseStudies } from '../data/caseStudies';
import { projectLayers } from '../data/projectLayers';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('package.json'));

const normalize = (text: string) => text.replace(/\s+/g, ' ').trim();
async function extract(page: Page) {
  await page.addScriptTag({ path: require.resolve('@mozilla/readability/Readability-readerable.js') });
  await page.addScriptTag({ path: require.resolve('@mozilla/readability/Readability.js') });
  return page.evaluate(() => {
    const result = new (window as any).Readability(document.cloneNode(true)).parse();
    const content = document.createElement('div');
    content.innerHTML = result?.content || '';
    return { probable: (window as any).isProbablyReaderable(document), title: result?.title, byline: result?.byline, text: result?.textContent || '', links: [...content.querySelectorAll('a')].map(a => a.href) };
  });
}

for (const project of caseStudies) {
  test(`reader retains ${project.slug}`, async ({ page }) => {
    await page.goto(`/work/${project.slug}/`);
    await expect(page.locator('article h1')).toHaveText(project.title);
    const article = await extract(page);
    test.info().annotations.push({ type: 'isProbablyReaderable', description: String(article.probable) });
    expect(article.title).toBe(project.title);
    expect(article.byline).toBe('Mike Orozco');
    const text = normalize(article.text);
    const parts = projectLayers[project.slug]!;
    for (const paragraph of [project.summary, project.problem, project.role, project.reflection, project.flow.title, project.flow.caption, ...project.flow.steps.flatMap(step => [step.title, step.description]), ...project.details.flatMap(section => section.paragraphs), ...project.outcomes, ...parts.flatMap(part => [part.description, ...(part.diagram?.flatMap(node => [node.label, node.detail]) || [])])]) {
      expect(text, `${project.slug}: ${paragraph}`).toContain(normalize(paragraph));
    }
    for (const url of [...project.links.map(link => link.href), ...(project.repository ? [project.repository] : []), ...parts.flatMap(part => part.source ? [part.source.url] : [])]) expect(article.links).toContain(url);
    expect(text).not.toContain('Use dark color theme');
    expect(text).not.toContain('More work');
    expect(text).not.toContain('Back to project');
  });
}

test('homepage reading starts with the professional introduction', async ({ page }) => {
  await page.goto('/');
  const article = await extract(page);
  test.info().annotations.push({ type: 'isProbablyReaderable', description: String(article.probable) });
  expect(normalize(article.text)).toContain('I build frontend systems, Vue authoring tools, and developer tools for product teams.');
});

test('reader metadata and text follow client navigation', async ({ page }) => {
  await page.goto('/work/quire/');
  await page.locator('.related-projects a').first().click();
  const next = caseStudies.find(project => project.slug !== 'quire')!;
  await expect(page.locator('article h1')).toHaveText(next.title);
  const article = await extract(page);
  expect(article.title).toBe(next.title);
  expect(article.byline).toBe('Mike Orozco');
  expect(normalize(article.text)).toContain(normalize(next.summary));
});

test('mobile project navigation works without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('/');
  await page.getByText('Browse all projects', { exact: true }).click();
  for (const project of caseStudies) await expect(page.locator('.mobile-project-links').getByRole('link', { name: project.title, exact: true })).toBeVisible();
  await page.locator('.mobile-project-links').getByRole('link', { name: 'Quire', exact: true }).click();
  await expect(page.locator('article h1')).toHaveText('Quire');
  await context.close();
});

test('static host preserves redirects and useful 404 responses', async ({ request }) => {
  const redirect = await request.get('/work/quire?from=test', { maxRedirects: 0 });
  expect(redirect.status()).toBe(301);
  expect(redirect.headers().location).toBe('/work/quire/?from=test');
  const missing = await request.get('/work/not-a-project/');
  expect(missing.status()).toBe(404);
  expect(await missing.text()).toContain('href="/"');
  const malformed = await request.get('/%zz');
  expect(malformed.status()).toBe(400);
});

for (const colorScheme of ['light', 'dark'] as const) {
  for (const path of ['/', ...caseStudies.map(project => `/work/${project.slug}/`), '/contact/', '/missing-page/']) {
    test(`accessibility ${colorScheme} ${path}`, async ({ page }) => {
      await page.emulateMedia({ colorScheme });
      await page.goto(path);
      const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
      expect(result.violations).toEqual([]);
    });
  }
}
