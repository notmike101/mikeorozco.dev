<script setup lang="ts">
import { caseStudies, getCaseStudy, type CaseStudy } from '~/data/caseStudies';
import { projectLayers } from '~/data/projectLayers';

const props = defineProps<{ caseStudy?: CaseStudy }>();
const route = useRoute();
const router = useRouter();
const selectedSlug = useState('portfolio-project', () => caseStudies[0]!.slug);
const selectedLayer = ref(3);
const separation = ref(75);
const view = ref<'system' | 'project'>('system');
const project = computed(() => props.caseStudy || getCaseStudy(selectedSlug.value) || caseStudies[0]!);
const artwork = computed(() => projectLayers[project.value.slug]!);
const step = computed(() => project.value.flow.steps[selectedLayer.value]!);
const selectProject = (slug: string) => {
  if (!getCaseStudy(slug)) return;
  selectedSlug.value = slug;
  selectedLayer.value = 3;
  if (props.caseStudy) navigateTo({ path: '/', query: { project: slug }, hash: '#work' });
  else router.replace({ query: { ...route.query, project: slug }, hash: route.hash });
};
onMounted(() => {
  watch(() => route.query.project, slug => {
    if (typeof slug === 'string' && getCaseStudy(slug)) {
      selectedSlug.value = slug;
      selectedLayer.value = 3;
    }
  }, { immediate: true });
});
const onProjectClick = (event: MouseEvent, slug: string) => {
  // Preserve modified clicks and normal links when JavaScript is unavailable.
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
  event.preventDefault();
  selectProject(slug);
};
</script>

<template>
  <section id="work" class="workbench" aria-label="Work">
    <aside class="project-index">
      <p class="index-label">Projects</p>
      <nav class="project-list" aria-label="Projects">
        <a v-for="item in caseStudies" :key="item.slug" :href="`/work/${item.slug}`" :aria-current="project.slug === item.slug ? 'true' : undefined" @click="onProjectClick($event, item.slug)">
          <strong>{{ item.shortTitle }}</strong><small>{{ item.status }}</small>
        </a>
      </nav>
      <select class="mobile-projects" aria-label="Projects" :value="project.slug" @change="selectProject(($event.target as HTMLSelectElement).value)">
        <option v-for="item in caseStudies" :key="item.slug" :value="item.slug">{{ item.title }}</option>
      </select>
    </aside>
    <div class="project-studio">
      <header class="project-heading">
        <div><p>{{ project.status }}</p><component :is="caseStudy ? 'h1' : 'h2'" id="project-title">{{ project.title }}</component></div>
        <NuxtLink v-if="!caseStudy" class="button-primary" :to="`/work/${project.slug}`">Case study</NuxtLink>
        <NuxtLink v-else class="button-secondary" :to="{ path: '/', query: { project: project.slug }, hash: '#work' }">← Back to project</NuxtLink>
      </header>
      <slot v-if="caseStudy" />
      <div v-else class="project-desk">
        <div class="project-canvas">
          <div class="view-switch" role="group" aria-label="Project representation">
            <button type="button" :aria-pressed="view === 'system'" @click="view = 'system'">System</button>
            <button type="button" :aria-pressed="view === 'project'" @click="view = 'project'">Project</button>
          </div>
          <div v-if="view === 'system'" class="system-scene">
            <svg class="system-assembly" viewBox="0 0 600 530" role="img" :aria-label="project.flow.title">
              <ellipse cx="300" cy="475" rx="225" ry="24" class="assembly-shadow" />
              <g v-for="(layer, i) in artwork" :key="`${project.slug}-${i}`" :data-system-layer="i" :class="['system-layer', { selected: selectedLayer === i }]" :transform="`translate(190 ${305 - i * (15 + separation * .72)}) matrix(.94 .27 -.65 .43 0 0)`" @click="selectedLayer = i">
                <rect class="layer-edge" x="0" y="7" width="360" height="220" rx="5" />
                <ProjectLayerGraphic :artwork="layer" :image="project.image?.src" width="360" height="220" />
                <rect class="layer-outline" x="0" y="0" width="360" height="220" rx="5" />
              </g>
            </svg>
            <div class="layer-range"><label for="layer-separation">Layers</label><input id="layer-separation" v-model.number="separation" type="range" min="0" max="100" /><div><span>Assembled</span><span>Exploded</span></div></div>
          </div>
          <div v-else class="project-preview">
            <ProjectVisual v-if="project.image" :project="project" eager />
            <div v-else class="flat-layers">
              <button v-for="(layer, i) in artwork" :key="layer.label" type="button" :aria-label="project.flow.steps[i]!.title" :aria-pressed="selectedLayer === i" @click="selectedLayer = i"><ProjectLayerGraphic :artwork="layer" /></button>
            </div>
          </div>
          <div class="layer-tabs" role="group" aria-label="Inspect a system responsibility">
            <button v-for="(item, i) in project.flow.steps" :key="item.title" type="button" :aria-pressed="selectedLayer === i" @click="selectedLayer = i">{{ item.title }}</button>
          </div>
          <p class="flow-caption">{{ project.flow.caption }}</p>
        </div>
        <aside class="project-inspector" aria-label="Selected layer and project">
          <div class="layer-detail" aria-live="polite">
            <h3>{{ step.title }}</h3><p>{{ step.description }}</p>
            <div class="detail-art"><ProjectLayerGraphic :artwork="artwork[selectedLayer]!" :image="project.image?.src" /></div>
          </div>
          <p class="project-summary">{{ project.summary }}</p>
          <section><h3>Role</h3><p>{{ project.role }}</p></section>
          <section><h3>Stack</h3><ul class="stack-tags" aria-label="Technology stack"><li v-for="technology in project.stack" :key="technology">{{ technology }}</li></ul></section>
          <a v-if="project.repository" class="text-link" :href="project.repository" target="_blank" rel="noopener noreferrer">Repository ↗</a>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.workbench { display: grid; grid-template-columns: 196px minmax(0, 1fr); border-block: 1px solid var(--line); scroll-margin-top: 6rem; }
.project-index { background: var(--rail); border-right: 1px solid var(--line); }
.index-label { margin: 0; padding: 22px 18px 16px; color: var(--muted); font-size: 13px; }
.project-list a { display: block; padding: 17px 18px; border-bottom: 1px solid var(--line); border-left: 2px solid transparent; text-decoration: none; }
.project-list a:hover { background: var(--hover); }
.project-list a[aria-current] { background: var(--accent-soft); border-left-color: var(--accent); }
.project-list strong, .project-list small { display: block; }
.project-list strong { font-size: 14px; font-weight: 500; line-height: 1.4; }
.project-list small { font-size: 12px; color: var(--muted); margin-top: 4px; }
.mobile-projects { display: none; }
.project-studio { min-width: 0; }
.project-heading { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 22px 26px; border-bottom: 1px solid var(--line); }
.project-heading p { margin: 0 0 5px; color: var(--muted); font-size: 12px; }
.project-heading h1, .project-heading h2 { margin: 0; font-size: clamp(23px, 2.2vw, 30px); line-height: 1.2; font-weight: 500; letter-spacing: -.7px; }
.project-heading a { flex-shrink: 0; font-size: 13px; }
.project-desk { display: grid; grid-template-columns: minmax(0, 1fr) 280px; }
.project-canvas { min-width: 0; padding: 18px 22px 22px; background: var(--surface); }
.view-switch { display: flex; justify-content: flex-end; }
.view-switch button { border: 1px solid var(--line); padding: 6px 12px; background: var(--canvas); font-size: 12px; }
.view-switch button + button { border-left: 0; }
.view-switch button[aria-pressed='true'] { background: var(--ink); color: var(--canvas); }
.system-scene { background-image: radial-gradient(var(--grid) .7px, transparent .7px); background-size: 15px 15px; }
.system-assembly { display: block; width: 100%; max-height: 490px; overflow: visible; }
.assembly-shadow { fill: var(--shadow); opacity: .18; }
.system-layer { transition: transform 160ms ease; cursor: pointer; }
.system-layer :deep(.layer-artwork) { width: 360px; height: 220px; }
.layer-edge { fill: var(--diagram-edge); stroke: var(--diagram-line); }
.layer-outline { fill: none; stroke: var(--diagram-line); stroke-width: 1; pointer-events: none; }
.selected .layer-outline { stroke: var(--accent); stroke-width: 3; }
.layer-range { padding: 12px 0; border-top: 1px solid var(--line); font-size: 12px; background: var(--surface); }
.layer-range label { display: block; }
.layer-range input { width: 100%; accent-color: var(--accent); height: 28px; cursor: ew-resize; }
.layer-range > div { display: flex; justify-content: space-between; color: var(--muted); }
.layer-tabs { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px; }
.layer-tabs button { padding: 12px 5px 8px; border: 0; border-top: 2px solid var(--line); background: transparent; text-align: left; font-size: 12px; line-height: 1.4; }
.layer-tabs button[aria-pressed='true'] { border-color: var(--accent); color: var(--accent); }
.flow-caption { margin: 14px 0 0; color: var(--muted); font-size: 12px; line-height: 1.6; }
.project-inspector { min-width: 0; padding: 20px; border-left: 1px solid var(--line); font-size: 13px; line-height: 1.65; }
.project-inspector h3 { margin: 0 0 9px; font-size: 12px; color: var(--muted); font-weight: 400; }
.layer-detail h3 { color: var(--ink); font-size: 18px; font-weight: 500; }
.project-inspector p { margin: 0; }
.detail-art { margin-top: 16px; aspect-ratio: 360 / 220; }
.project-summary, .project-inspector section { border-top: 1px solid var(--line); margin-top: 21px !important; padding-top: 18px; }
.stack-tags { padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 6px 12px; margin: 0; font-size: 12px; }
.project-inspector > a { margin-top: 18px; }
.project-preview { min-height: 390px; display: grid; align-content: center; padding: 24px 0; }
.flat-layers { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.flat-layers button { padding: 0; border: 1px solid var(--line); background: var(--diagram-sheet); }
.flat-layers button[aria-pressed='true'] { outline: 2px solid var(--accent); outline-offset: 2px; }
@media (max-width: 1100px) {
  .project-desk { grid-template-columns: minmax(0, 1fr) 244px; }
  .workbench { grid-template-columns: 180px minmax(0, 1fr); }
}
@media (max-width: 920px) {
  .project-desk { grid-template-columns: 1fr; }
  .project-inspector { border-left: 0; border-top: 1px solid var(--line); display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .layer-detail { grid-row: span 3; }
  .project-summary { border: 0; margin: 0 !important; padding: 0; }
  .project-inspector section { margin: 0 !important; }
  .system-assembly { max-height: 440px; }
}
@media (max-width: 620px) {
  .workbench { display: block; }
  .project-index { padding: 12px 18px; border-right: 0; border-bottom: 1px solid var(--line); }
  .index-label, .project-list { display: none; }
  .mobile-projects { display: block; width: 100%; padding: 11px; background: var(--canvas); color: var(--ink); border: 1px solid var(--line); font-size: 16px; }
  .project-heading { padding: 19px 18px; flex-wrap: wrap; gap: 14px; }
  .project-canvas { padding: 15px 14px; }
  .project-inspector { display: block; padding: 20px 18px; }
  .project-inspector section, .project-summary { border-top: 1px solid var(--line); margin-top: 20px !important; padding-top: 18px; }
  .detail-art { max-width: 360px; }
  .project-preview { min-height: 280px; }
  .flat-layers { grid-template-columns: 1fr; }
}
</style>
