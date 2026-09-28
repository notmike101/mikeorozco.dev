import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const output = resolve('.output/public');
const home = readFileSync(resolve(output, 'index.html'), 'utf8');
assert.equal((home.match(/data-system-layer=/g) || []).length, 4, 'Homepage must render four populated system layers before JavaScript');
assert.equal((home.match(/class="layer-artwork"/g) || []).length, 5, 'Every plane and the selected-layer detail need artwork');
const { caseStudies, additionalProjects } = await import('../data/caseStudies.ts');
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
console.log(`PASS: populated homepage layers, ${caseStudies.length} complete case studies, ${additionalProjects.length} research projects, images, metadata and contact`);
