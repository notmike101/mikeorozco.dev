import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const output = resolve('.output/public');
const home = readFileSync(resolve(output, 'index.html'), 'utf8');
assert.ok(home.includes('<link rel="canonical" href="https://mikeorozco.dev/">'), 'Homepage canonical must match the served root URL');
const robots = readFileSync(resolve(output, 'robots.txt'), 'utf8');
const groups = new Map([...robots.matchAll(/User-agent:\s*(\S+)\s*\n(Allow|Disallow):\s*(\S+)/gi)].map(([, agent, action, path]) => [agent.toLowerCase(), { action, path }]));
for (const agent of ['Googlebot', 'Bingbot', 'Applebot', 'OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User']) {
  assert.deepEqual(groups.get(agent.toLowerCase()) || groups.get('*'), { action: 'Allow', path: '/' }, `${agent} must remain allowed`);
}
for (const agent of ['GPTBot', 'ClaudeBot', 'Google-Extended', 'Applebot-Extended', 'CCBot']) {
  assert.deepEqual(groups.get(agent.toLowerCase()), { action: 'Disallow', path: '/' }, `${agent} must be opted out`);
}
assert.ok(robots.includes('Sitemap: https://mikeorozco.dev/sitemap.xml'));
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
    assert.equal(Number(!!part.image) + Number(!!part.diagram), 1, 'Every component must communicate visually without requiring code');
    if (part.image) assert.ok(existsSync(resolve(output, part.image.slice(1))), `Missing component image: ${part.image}`);
    if (part.code) assert.ok(part.code.text.trim() && part.code.file && part.code.line > 0 && part.source?.url.startsWith('https://'), 'Source excerpts need content and attribution');
    if (part.diagram) assert.ok(part.diagram.length > 1 && part.diagram.every(node => node.label && node.detail), 'Diagrams must describe actual responsibilities');
  }
}
for (const slug of ['quire', 'mealmind', 'pack3d', 'between-sessions', 'false-witness']) {
  assert.ok(projectLayers[slug][0].image, `${slug} must lead with its real interface`);
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

// A shorter project must keep the active row visible inside the resized list.
const { revealActiveProject } = await import('../utils/revealActiveProject.ts');
let activeOffset = 734;
const navigation = {
  clientHeight: 880,
  scrollTop: 0,
  getBoundingClientRect() { return { top: 100, bottom: 100 + this.clientHeight }; },
  querySelector(selector) {
    assert.equal(selector, '[aria-current]');
    return { getBoundingClientRect: () => ({ top: 100 + activeOffset - this.scrollTop, bottom: 172 + activeOffset - this.scrollTop }) };
  },
};
revealActiveProject(navigation);
assert.equal(navigation.scrollTop, 0, 'A visible selected row must not move the list');
navigation.clientHeight = 680;
revealActiveProject(navigation);
assert.equal(navigation.scrollTop, 126, 'Reveal the selected row after the list shrinks');
revealActiveProject(navigation);
assert.equal(navigation.scrollTop, 126, 'Repeated layout checks must not move a visible row');
activeOffset = 0;
revealActiveProject(navigation);
assert.equal(navigation.scrollTop, 0, 'Reveal a selection above the current list viewport');
navigation.clientHeight = 0;
activeOffset = 734;
revealActiveProject(navigation);
assert.equal(navigation.scrollTop, 0, 'Leave the hidden desktop list alone on mobile');
const escape = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const graphOf = html => {
  const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1, 'Each page needs one authoritative JSON-LD graph');
  const schema = JSON.parse(scripts[0][1]);
  assert.equal(schema['@context'], 'https://schema.org');
  assert.ok(Array.isArray(schema['@graph']), 'Structured data must connect page, author, and content');
  const graph = schema['@graph'];
  const ids = graph.map(node => node['@id']);
  assert.equal(new Set(ids).size, ids.length, 'Graph entity IDs must be unique');
  for (const reference of JSON.stringify(graph).matchAll(/"@id":"([^"]+)"/g)) assert.ok(ids.includes(reference[1]), `Unresolved schema identity: ${reference[1]}`);
  return graph;
};
const profileGraph = graphOf(home);
assert.equal(profileGraph.find(node => node['@type'] === 'ProfilePage').mainEntity['@id'], 'https://mikeorozco.dev/#person');
for (const project of caseStudies) {
  assert.ok(home.includes(`/work/${project.slug}`), `Missing crawlable project link: ${project.slug}`);
  const page = readFileSync(resolve(output, 'work', project.slug, 'index.html'), 'utf8');
  for (const text of [project.summary, project.problem, project.role, project.reflection, project.flow.title, project.flow.caption, ...project.flow.steps.flatMap(step => [step.title, step.description]), ...project.outcomes, ...project.details.flatMap(section => section.paragraphs)]) {
    assert.ok(page.includes(escape(text)), `Case-study content lost: ${project.slug}: ${text.slice(0, 50)}`);
  }
  assert.ok(page.includes(`<link rel="canonical" href="https://mikeorozco.dev/work/${project.slug}/">`), `Canonical must match served directory: ${project.slug}`);
  const graph = graphOf(page);
  const article = graph.find(node => node['@type'] === 'Article');
  assert.equal(article?.headline, project.title, `Missing Article: ${project.slug}`);
  assert.equal(article.author.name, 'Mike Orozco');
  assert.equal(article.author.url, 'https://mikeorozco.dev/');
  assert.equal(article.mainEntityOfPage['@id'], `https://mikeorozco.dev/work/${project.slug}/#webpage`);
  assert.equal(article.about['@id'], `https://mikeorozco.dev/work/${project.slug}/#project`);
  assert.equal(graph.find(node => node['@type'] === 'WebPage').mainEntity['@id'], article['@id']);
  assert.ok(!JSON.stringify(graph).includes('"email"'), 'Schema must preserve contact privacy');
  if (project.image) assert.ok(existsSync(resolve(output, project.image.src.slice(1))), `Missing image: ${project.image.src}`);
}
assert.equal(new Set(caseStudies.map(project => project.slug)).size, caseStudies.length, 'Case-study routes must be unique');
assert.ok(!caseStudies.some(project => /vibe.?translate/i.test(project.slug)), 'Vibe Translate belongs in supporting contributions');
assert.ok(additionalProjects.some(project => project.repository === 'https://github.com/suicvne/vibe-translate/pull/1'), 'The merged Vibe Translate contribution must remain discoverable');
for (const project of additionalProjects) {
  assert.ok(home.includes(escape(project.description)), `Research content lost: ${project.title}`);
  assert.ok(home.includes(project.repository), `Research evidence link lost: ${project.title}`);
  assert.ok(!caseStudies.some(study => study.repository === project.repository), `Duplicate project placement: ${project.title}`);
}
assert.ok(home.includes('id="contact"'), 'Contact must be a homepage section');
assert.ok(home.includes('href="/#contact"') && !home.includes('href="/contact"'), 'Site navigation must lead to the contact section');
for (const subject of ['Senior engineering opportunity', 'Consulting project inquiry']) {
  assert.ok(home.includes(`mailto:me@mikeorozco.dev?subject=${encodeURIComponent(subject)}`), `Missing contact option: ${subject}`);
}
const legacyContact = readFileSync(resolve(output, 'contact/index.html'), 'utf8');
assert.ok(legacyContact.includes('href="/#contact"'), 'Old contact links must retain a usable fallback');
for (const page of [home, legacyContact]) {
  assert.ok(!page.includes('>me@mikeorozco.dev<') && !page.includes('"email":"me@mikeorozco.dev"'), 'Email address must not appear as visible text or structured metadata');
}
assert.ok(!readFileSync(resolve(output, 'sitemap.xml'), 'utf8').includes('https://mikeorozco.dev/contact'), 'The sitemap must point to the homepage rather than the legacy contact route');
const sitemapUrls = [...readFileSync(resolve(output, 'sitemap.xml'), 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(sitemapUrls, ['https://mikeorozco.dev/', ...caseStudies.map(project => `https://mikeorozco.dev/work/${project.slug}/`)]);
const notFound = readFileSync(resolve(output, '404.html'), 'utf8');
assert.ok(/<title>[^<]+<\/title>/.test(notFound), '404 needs a title');
assert.ok(notFound.includes('name="robots" content="noindex"'), '404 must opt out of indexing');
assert.ok(/<main[\s>]/.test(notFound) && /<a[^>]+href="\/"/.test(notFound), '404 must provide a main landmark and a non-JavaScript home link');
const { serializeJsonLd } = await import('../utils/structuredData.ts');
const hostileText = { text: '</script><b>&\u2028' };
assert.ok(!serializeJsonLd(hostileText).includes('<'), 'JSON-LD cannot close its HTML script');
assert.deepEqual(JSON.parse(serializeJsonLd(hostileText)), hostileText, 'Escaping must preserve content');
const { absoluteUrl, caseStudyPath } = await import('../utils/site.ts');
assert.equal(absoluteUrl(caseStudyPath('quire')), 'https://mikeorozco.dev/work/quire/');
for (const [input, expected] of [['/images/og-default.png', 'https://mikeorozco.dev/images/og-default.png'], ['/#contact', 'https://mikeorozco.dev/#contact'], ['/?project=quire#work', 'https://mikeorozco.dev/?project=quire#work'], ['mailto:example@example.com', 'mailto:example@example.com']]) assert.equal(absoluteUrl(input), expected);
console.log(`PASS: variable evidence components, navigation scrolling, ${caseStudies.length} complete case studies, ${additionalProjects.length} research projects, images, metadata and contact`);
