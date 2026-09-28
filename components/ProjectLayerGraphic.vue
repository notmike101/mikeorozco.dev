<script setup lang="ts">
import type { ProjectLayer } from '~/data/projectLayers';
defineProps<{ artwork: ProjectLayer; compact?: boolean }>();
</script>

<template>
  <div :class="['layer-artwork', { compact }]" :aria-hidden="compact || undefined">
    <img v-if="artwork.image && compact" :src="artwork.image" :width="artwork.imageWidth" :height="artwork.imageHeight" alt="" loading="lazy" />
    <a v-else-if="artwork.image" class="screenshot-link" :href="artwork.image" target="_blank" rel="noopener noreferrer" :aria-label="`Enlarge ${artwork.label} screenshot`">
      <img :src="artwork.image" :width="artwork.imageWidth" :height="artwork.imageHeight" :alt="artwork.caption" loading="eager" />
      <span>Enlarge screenshot ↗</span>
    </a>
    <div v-else class="component-diagram" :aria-label="artwork.caption">
      <div v-for="node in artwork.diagram" :key="node.label" class="diagram-node">
        <span class="node-port" aria-hidden="true" />
        <strong>{{ node.label }}</strong><span>{{ node.detail }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layer-artwork { min-width: 0; overflow: hidden; background: var(--canvas); }
.layer-artwork img { display: block; width: 100%; height: auto; }
.screenshot-link { display: block; text-decoration: none; }
.screenshot-link:focus-visible { outline-offset: -3px; }
.screenshot-link > span { display: block; padding: 7px 12px; border-top: 1px solid var(--line); color: var(--muted); text-align: right; font-size: 11px; }
.screenshot-link:hover > span { color: var(--accent); }
.component-diagram { display: grid; gap: 24px; padding: 24px 32px; min-height: 270px; align-content: center; background-image: radial-gradient(var(--grid) .7px, transparent .7px); background-size: 15px 15px; }
.diagram-node { position: relative; border: 1px solid var(--line); padding: 12px 15px 12px 27px; background: var(--surface); }
.diagram-node + .diagram-node::before { content: ''; position: absolute; width: 1px; height: 25px; background: var(--accent); left: 12px; top: -25px; }
.node-port { position: absolute; left: 9px; top: 19px; width: 7px; height: 7px; border: 1px solid var(--accent); background: var(--accent-soft); border-radius: 50%; }
.diagram-node strong, .diagram-node > span:last-child { display: block; }
.diagram-node strong { font-size: 14px; font-weight: 500; }
.diagram-node > span:last-child { margin-top: 3px; color: var(--muted); font-size: 12px; }
.compact { height: 82px; pointer-events: none; }
.compact > img { height: 100%; object-fit: cover; object-position: center; }
.compact .component-diagram { min-height: 0; gap: 5px; padding: 7px 20px; }
.compact .diagram-node { padding: 3px 6px 3px 13px; }
.compact .diagram-node strong { font-size: 7px; }
.compact .diagram-node > span:last-child { display: none; }
.compact .node-port { width: 3px; height: 3px; left: 5px; top: 7px; }
.compact .diagram-node + .diagram-node::before { top: -6px; height: 5px; left: 6px; }
@media (max-width: 620px) {
  .component-diagram { padding: 20px; }
}
</style>
