import { test, expect } from '@playwright/test';
import { caseStudies } from '../data/caseStudies';
import { projectLayers } from '../data/projectLayers';

test('skip link transfers keyboard focus into main content', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});

test('keyboard selections retain focus and announce concise state', async ({ page }) => {
  await page.goto('/');
  const project = page.locator('.project-list a[href="/work/quire/"]');
  await project.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#project-title')).toHaveText('Quire');
  await expect(project).toBeFocused();
  await expect(project).toHaveAttribute('aria-current', 'true');
  const component = page.getByRole('button', { name: projectLayers.quire![1]!.label, exact: true });
  await component.focus();
  await page.keyboard.press('Space');
  await expect(component).toHaveAttribute('aria-pressed', 'true');
  await expect(component).toBeFocused();
  await expect(page.getByRole('status')).toHaveText(`Selected Quire. Component: ${projectLayers.quire![1]!.label}.`);
  expect((await page.getByRole('status').innerText()).length).toBeLessThan(160);
  await expect(page.locator('#component-detail')).not.toHaveAttribute('aria-live');
});

test('client navigation replaces metadata, article, announcement and focus', async ({ page }) => {
  await page.goto('/?project=quire');
  await expect(page.locator('#project-title')).toHaveText('Quire');
  await page.getByRole('link', { name: 'Case study', exact: true }).click();
  await expect(page.locator('article h1')).toHaveText('Quire');
  await expect(page.locator('main')).toBeFocused();
  await expect(page.getByRole('alert')).toContainText('Quire');
  const next = caseStudies.find(project => project.slug !== 'quire')!;
  await page.locator('.related-projects').getByRole('link').first().click();
  await expect(page.locator('article h1')).toHaveText(next.title);
  await expect(page).toHaveTitle(next.seoTitle);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://mikeorozco.dev/work/${next.slug}/`);
  const scripts = page.locator('script[type="application/ld+json"]');
  await expect(scripts).toHaveCount(1);
  await expect.poll(() => scripts.textContent()).toContain(next.title);
  const graph = JSON.parse((await scripts.textContent())!)['@graph'];
  expect(graph.find((node: any) => node['@type'] === 'Article').headline).toBe(next.title);
});

test('theme remains usable when browser storage is denied', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new DOMException('Denied', 'SecurityError'); };
    Storage.prototype.setItem = () => { throw new DOMException('Denied', 'SecurityError'); };
  });
  await page.goto('/');
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.getByRole('button', { name: 'Use light color theme' }).click();
  await expect(page.locator('html')).not.toHaveClass(/dark/);
  expect(errors).toEqual([]);
});

test('reduced motion and in-page navigation remain usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  expect(await page.locator('html').evaluate(el => getComputedStyle(el).scrollBehavior)).toBe('auto');
  await page.getByRole('link', { name: 'Work', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Work', exact: true })).toHaveAttribute('aria-current', 'location');
  await expect(page.locator('#work')).toBeFocused();
  await expect.poll(async () => (await page.locator('#work').boundingBox())!.y).toBeGreaterThanOrEqual((await page.locator('.site-header').boundingBox())!.height);
});

for (const path of ['/', '/work/quire/', '/work/immersive-product-platform/', '/work/false-witness/', '/work/stateful-workflow-runtime/']) {
  test(`reflow and text spacing ${path}`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    await page.goto(path);
    await page.addStyleTag({ content: '* { line-height: 1.5 !important; letter-spacing: .12em !important; word-spacing: .16em !important; } p { margin-bottom: 2em !important; }' });
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.evaluate(() => {
      const sizes = [...document.querySelectorAll<HTMLElement>('body, body *')].map(el => [el, getComputedStyle(el).fontSize] as const);
      for (const [el, size] of sizes) el.style.fontSize = `${parseFloat(size) * 2}px`;
    });
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(1280);
  });
}

test('screenshot dimensions match decoded assets', async ({ page }) => {
  await page.goto('/');
  for (const part of Object.values(projectLayers).flat().filter(part => part.image)) {
    const size = await page.evaluate(async src => {
      const image = new Image();
      image.src = src!;
      await image.decode();
      return [image.naturalWidth, image.naturalHeight];
    }, part.image);
    expect(size).toEqual([part.imageWidth, part.imageHeight]);
  }
});
