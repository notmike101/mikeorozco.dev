<script setup lang="ts">
import type { ProjectLayer } from '~/data/projectLayers';
defineProps<{ artwork: ProjectLayer; compact?: boolean }>();
</script>

<template>
  <div :class="['layer-artwork', { compact }]" :aria-hidden="compact || undefined">
    <img v-if="artwork.image" :src="artwork.image" :alt="compact ? '' : artwork.caption" :loading="compact ? 'lazy' : 'eager'" />
    <div v-else-if="artwork.code" class="source-card">
      <div class="source-file">{{ artwork.code.file }}</div>
      <pre :aria-label="compact ? undefined : artwork.code.file" :tabindex="compact ? undefined : 0"><code><span v-for="(line, i) in artwork.code.text.split('\n')" :key="i" class="code-line"><span class="line-number" aria-hidden="true">{{ artwork.code.line + i }}</span><span>{{ line || ' ' }}</span></span></code></pre>
    </div>
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
.layer-artwork > img { display: block; width: 100%; height: auto; }
.source-card { min-height: 270px; }
.source-file { padding: 12px 16px; border-bottom: 1px solid var(--line); font: 11px/1.5 monospace; color: var(--muted); overflow-wrap: anywhere; }
pre { margin: 0; padding: 20px 14px 24px 0; overflow: auto; font: 12px/1.8 Consolas, monospace; tab-size: 2; }
.code-line { display: flex; white-space: pre-wrap; overflow-wrap: anywhere; }
.code-line > span:last-child { min-width: 0; }
.line-number { flex: 0 0 43px; padding-right: 13px; color: var(--muted); text-align: right; user-select: none; }
.component-diagram { display: grid; gap: 24px; padding: 24px 32px; min-height: 270px; align-content: center; background-image: radial-gradient(var(--grid) .7px, transparent .7px); background-size: 15px 15px; }
.diagram-node { position: relative; border: 1px solid var(--line); padding: 12px 15px 12px 27px; background: var(--surface); }
.diagram-node + .diagram-node::before { content: ''; position: absolute; width: 1px; height: 25px; background: var(--accent); left: 12px; top: -25px; }
.node-port { position: absolute; left: 9px; top: 19px; width: 7px; height: 7px; border: 1px solid var(--accent); background: var(--accent-soft); border-radius: 50%; }
.diagram-node strong, .diagram-node > span:last-child { display: block; }
.diagram-node strong { font-size: 14px; font-weight: 500; }
.diagram-node > span:last-child { margin-top: 3px; color: var(--muted); font-size: 12px; }
.compact { height: 82px; pointer-events: none; }
.compact > img { height: 100%; object-fit: cover; object-position: center; }
.compact .source-card { min-height: 0; }
.compact .source-file { display: none; }
.compact pre { padding: 8px; font-size: 5px; line-height: 1.6; overflow: hidden; }
.compact .line-number { flex-basis: 18px; padding-right: 5px; }
.compact .component-diagram { min-height: 0; gap: 5px; padding: 7px 20px; }
.compact .diagram-node { padding: 3px 6px 3px 13px; }
.compact .diagram-node strong { font-size: 7px; }
.compact .diagram-node > span:last-child { display: none; }
.compact .node-port { width: 3px; height: 3px; left: 5px; top: 7px; }
.compact .diagram-node + .diagram-node::before { top: -6px; height: 5px; left: 6px; }
@media (max-width: 620px) {
  pre { font-size: 11px; }
  .component-diagram { padding: 20px; }
}
</style>
