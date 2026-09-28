import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const output = resolve('.output/public');
const home = readFileSync(resolve(output, 'index.html'), 'utf8');
assert.ok(!home.includes('Assembled') && !home.includes('Exploded'), 'Components must remain visible without the assembly slider');
assert.ok(home.includes('data-project-component='), 'Homepage must render project components before JavaScript');
const { caseStudies, additionalProjects } = await import('../data/caseStudies.ts');
const { projectLayers } = await import('../data/projectLayers.ts');
assert.equal((home.match(/data-project-component=/g) || []).length, projectLayers[caseStudies[0].slug].length);
assert.ok(new Set(Object.values(projectLayers).map(parts => parts.length)).size > 1, 'Project component counts must be independent');
for (const project of caseStudies) {
  const parts = projectLayers[project.slug];
  assert.ok(parts?.length, `Missing components for ${project.slug}`);
  assert.equal(new Set(parts.map(part => part.id)).size, parts.length, 'Component IDs must be unique');
  for (const part of parts) {
    assert.ok(part.label && part.description && part.caption, 'Components need readable context');
    assert.equal(Number(!!part.image) + Number(!!part.code) + Number(!!part.diagram), 1, 'Each component needs one concrete visual');
    if (part.image) assert.ok(existsSync(resolve(output, part.image.slice(1))), `Missing component image: ${part.image}`);
    if (part.code) assert.ok(part.code.text.trim() && part.code.file && part.code.line > 0 && part.source?.url.startsWith('https://'), 'Source excerpts need content and attribution');
    if (part.diagram) assert.ok(part.diagram.length > 1 && part.diagram.every(node => node.label && node.detail), 'Diagrams must describe actual responsibilities');
  }
}
for (const logo of ['mktr.png', 'valiant.svg']) assert.ok(existsSync(resolve(output, 'images', logo)), `Missing organization logo: ${logo}`);

// Exercise the installed router wrapper while leaving Nuxt's normal navigation behavior intact.
const fallback = { top: 123 };
let delegated = 0;
let lastScrollTarget;
const router = { options: { scrollBehavior: () => { delegated++; return fallback; } } };
let onMounted;
Object.assign(globalThis, {
  defineNuxtPlugin: setup => setup({ hook: (name, callback) => { assert.equal(name, 'app:mounted'); onMounted = callback; } }),
  useRouter: () => router,
});
await import('../plugins/project-navigation.client.ts');
Reflect.deleteProperty(globalThis, 'defineNuxtPlugin');
Reflect.deleteProperty(globalThis, 'useRouter');
// Nuxt installs its definitive handler before app:mounted; capture that handler.
router.options.scrollBehavior = to => { lastScrollTarget = to; delegated++; return fallback; };
onMounted();
const route = (path, query = {}, hash = '') => ({ path, query, hash });
assert.equal(router.options.scrollBehavior(route('/', { project: 'quire' }), route('/', {}, '#work'), null), false);
assert.equal(router.options.scrollBehavior(route('/', { project: 'quire' }), route('/', { project: 'pack3d' }), null), false);
assert.equal(delegated, 0, 'Project selection must preserve the viewport');
assert.equal(router.options.scrollBehavior(route('/', {}, '#experience'), route('/'), null), fallback);
assert.equal(router.options.scrollBehavior(route('/work/quire'), route('/'), null), fallback);
assert.equal(router.options.scrollBehavior(route('/', { project: 'quire' }), route('/'), { top: 50, left: 0 }), fallback);
assert.equal(delegated, 3, 'Anchors, case-study navigation and browser history must retain default scrolling');
assert.equal(router.options.scrollBehavior(route('/', { project: 'quire' }), route('/work/pack3d'), null), fallback);
assert.equal(lastScrollTarget.hash, '#work', 'Reader project selection must land at the workbench without adding a URL hash');
const escape = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
for (const project of caseStudies) {
  assert.ok(home.includes(`/work/${project.slug}`), `Missing crawlable project link: ${project.slug}`);
  const page = readFileSync(resolve(output, 'work', project.slug, 'index.html'), 'utf8');
  for (const text of [project.summary, project.problem, project.role, project.reflection, project.flow.title, project.flow.caption, ...project.flow.steps.flatMap(step => [step.title, step.description]), ...project.outcomes, ...project.details.flatMap(section => section.paragraphs)]) {
    assert.ok(page.includes(escape(text)), `Case-study content lost: ${project.slug}: ${text.slice(0, 50)}`);
  }
  assert.ok(page.includes(`https://mikeorozco.dev/work/${project.slug}`), `Missing canonical route: ${project.slug}`);
  if (project.image) assert.ok(existsSync(resolve(output, project.image.src.slice(1))), `Missing image: ${project.image.src}`);
}
for (const project of additionalProjects) assert.ok(home.includes(escape(project.description)), `Research content lost: ${project.title}`);
assert.ok(readFileSync(resolve(output, 'contact/index.html'), 'utf8').includes('mailto:me@mikeorozco.dev'), 'Contact paths must remain available');
console.log(`PASS: variable evidence components, navigation scrolling, ${caseStudies.length} complete case studies, ${additionalProjects.length} research projects, images, metadata and contact`);
