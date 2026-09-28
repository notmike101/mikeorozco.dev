<script setup lang="ts">
import { caseStudies, getCaseStudy, type CaseStudy } from '~/data/caseStudies';
import { projectLayers } from '~/data/projectLayers';

const props = defineProps<{ caseStudy?: CaseStudy }>();
const route = useRoute();
const router = useRouter();
const selectedSlug = useState('portfolio-project', () => caseStudies[0]!.slug);
const selectedLayer = ref(0);

const project = computed(() => props.caseStudy || getCaseStudy(selectedSlug.value) || caseStudies[0]!);
const artwork = computed(() => projectLayers[project.value.slug]!);
const layer = computed(() => artwork.value[selectedLayer.value] || artwork.value[0]!);
const selectProject = (slug: string) => {
  if (!getCaseStudy(slug)) return;
  selectedSlug.value = slug;
  selectedLayer.value = 0;
  if (props.caseStudy) navigateTo({ path: '/', query: { project: slug } });
  else router.replace({ query: { ...route.query, project: slug }, hash: '' });
};
onMounted(() => {
  watch(() => route.query.project, slug => {
    if (typeof slug === 'string' && getCaseStudy(slug)) {
      selectedSlug.value = slug;
      selectedLayer.value = 0;
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
          <div class="component-grid" role="group" aria-label="Project components">
            <button v-for="(item, i) in artwork" :key="item.id" :data-project-component="item.id" type="button" :aria-pressed="selectedLayer === i" :aria-label="item.label" aria-controls="component-detail" @click="selectedLayer = i">
              <ProjectLayerGraphic :artwork="item" compact />
              <span>{{ item.label }}</span>
            </button>
          </div>
          <section id="component-detail" class="component-detail" aria-live="polite" aria-labelledby="component-title">
            <header><h3 id="component-title">{{ layer.label }}</h3><span>{{ layer.caption }}</span></header>
            <ProjectLayerGraphic :artwork="layer" />
            <p>{{ layer.description }}</p>
            <a v-if="layer.source" class="text-link" :href="layer.source.url" target="_blank" rel="noopener noreferrer">{{ layer.source.label }} ↗</a>
          </section>
        </div>
        <aside class="project-inspector" aria-label="Project overview">
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
.component-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin-bottom: 20px; }
.component-grid button { display: block; min-width: 0; padding: 0; text-align: left; border: 1px solid var(--line); background: var(--surface); }
.component-grid button:hover { border-color: var(--muted); }
.component-grid button[aria-pressed='true'] { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
.component-grid button > span { display: block; padding: 9px 10px; font-size: 12px; line-height: 1.4; border-top: 1px solid var(--line); }
.component-grid button[aria-pressed='true'] > span { color: var(--accent); background: var(--accent-soft); }
.component-detail { border-top: 1px solid var(--line); padding-top: 18px; }
.component-detail header { display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 14px; margin-bottom: 12px; }
.component-detail h3 { margin: 0; font-size: 17px; font-weight: 500; }
.component-detail header > span { font-size: 11px; color: var(--muted); }
.component-detail > :deep(.layer-artwork) { border: 1px solid var(--line); }
.component-detail p { margin: 14px 0 8px; font-size: 13px; line-height: 1.65; color: var(--muted); }
.component-detail a { font-size: 12px; }
.project-inspector { min-width: 0; padding: 20px; border-left: 1px solid var(--line); font-size: 13px; line-height: 1.65; }
.project-inspector h3 { margin: 0 0 9px; font-size: 12px; color: var(--muted); font-weight: 400; }
.project-inspector p { margin: 0; }
.project-inspector section { border-top: 1px solid var(--line); margin-top: 21px !important; padding-top: 18px; }
.stack-tags { padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 6px 12px; margin: 0; font-size: 12px; }
.project-inspector > a { margin-top: 18px; }
.project-summary { color: var(--ink); }
@media (max-width: 1100px) {
  .project-desk { grid-template-columns: minmax(0, 1fr) 244px; }
  .workbench { grid-template-columns: 180px minmax(0, 1fr); }
}
@media (max-width: 920px) {
  .project-desk { grid-template-columns: 1fr; }
  .project-inspector { border-left: 0; border-top: 1px solid var(--line); display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .project-summary { border: 0; margin: 0 !important; padding: 0; }
  .project-inspector section { margin: 0 !important; }
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
}
</style>
