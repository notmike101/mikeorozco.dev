<script setup lang="ts">
import type { LayerArtwork } from '~/data/projectLayers';
defineProps<{ artwork: LayerArtwork; image?: string }>();
</script>

<template>
  <svg class="layer-artwork" viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" :aria-label="`${artwork.label}: ${artwork.items.join(', ')}`">
    <rect class="sheet" x="1" y="1" width="358" height="218" rx="5" />
    <path class="line" d="M1 34H359M1 191H359" />
    <circle class="accent-fill" cx="17" cy="18" r="3" />
    <text class="heading" x="29" y="23">{{ artwork.label }}</text>

    <template v-if="artwork.kind === 'image' && image">
      <image :href="image" x="8" y="40" width="344" height="145" preserveAspectRatio="xMidYMid meet" />
    </template>
    <template v-else-if="artwork.kind === 'editor'">
      <rect class="panel" x="12" y="45" width="93" height="136" rx="3" />
      <g v-for="(item, i) in artwork.items" :key="item" :transform="`translate(20 ${61 + i * 35})`">
        <rect class="accent-fill" width="5" height="5" y="-5" /><text x="13">{{ item }}</text>
        <path class="line" d="M0 10H74" />
      </g>
      <rect class="panel" x="117" y="45" width="231" height="136" rx="3" />
      <path class="wire" d="M186 137V86L225 64 268 87V138L227 161ZM186 86l41 24 41-23M227 110v51M186 137l39-24 43 25" />
      <path class="accent-line" d="M269 99h48M184 122h-45M226 63V51" />
      <circle class="accent-fill" cx="269" cy="99" r="4" /><circle class="accent-fill" cx="184" cy="122" r="4" />
      <path class="line" d="M303 112h26M303 120h19M129 145h28M129 153h21" />
    </template>
    <template v-else-if="artwork.kind === 'code'">
      <rect class="panel" x="14" y="46" width="332" height="133" rx="3" />
      <text class="brace" x="27" y="76">{</text><text class="brace" x="27" y="166">}</text>
      <g v-for="(item, i) in artwork.items" :key="item" :transform="`translate(55 ${83 + i * 27})`">
        <circle class="accent-fill" r="2" cy="-4" /><text class="code" x="12">{{ item }}</text>
        <path class="line" d="M12 8H260" />
      </g>
    </template>
    <template v-else-if="artwork.kind === 'pipeline'">
      <path class="accent-line" d="M56 103H306m-104-5 7 5-7 5m-104-10 7 5-7 5" />
      <g v-for="(item, i) in artwork.items" :key="item" :transform="`translate(${12 + i * 115} 64)`">
        <rect class="panel" width="105" height="76" rx="4" />
        <path class="wire" d="M42 15l-9 10 9 10m21-20 9 10-9 10M56 13l-7 24" />
        <text class="compact" x="52" y="59" text-anchor="middle">{{ item }}</text>
        <path class="line" d="M26 92H79" />
      </g>
    </template>
    <template v-else-if="artwork.kind === 'sources'">
      <g v-for="(item, i) in artwork.items" :key="item" :transform="`translate(${18 + i * 116} 51)`">
        <template v-if="artwork.sourceType === 'people'">
          <circle class="panel" cx="46" cy="15" r="15" /><path class="wire" d="M18 62v-7a28 22 0 0 1 56 0v7Z" />
        </template>
        <template v-else-if="artwork.sourceType === 'documents'">
          <path class="panel" d="M20 0h39l14 15v49H20Z" /><path class="wire" d="M59 0v15h14M29 28h35M29 39h35M29 50h25" />
        </template>
        <template v-else-if="artwork.sourceType === 'services'">
          <path class="panel" d="M19 53a16 16 0 0 1-1-32 25 25 0 0 1 47-7 20 20 0 0 1 12 39Z" /><path class="wire" d="M35 34h24m-12-12v24" />
        </template>
        <template v-else>
          <path class="panel" d="M13 11C13-2 79-2 79 11v39c0 14-66 14-66 0Z" />
          <ellipse class="wire" cx="46" cy="11" rx="33" ry="10" /><path class="wire" d="M13 29c0 14 66 14 66 0" />
        </template>
        <text class="compact" x="46" y="85" text-anchor="middle">{{ item }}</text>
      </g>
      <path class="accent-line" d="M64 144v19h232v-19M180 144v34m-5-5 5 5 5-5" />
    </template>
    <template v-else-if="artwork.kind === 'catalog'">
      <g v-for="(item, i) in artwork.items" :key="item" :transform="`translate(${12 + i * 115} 46)`">
        <rect class="panel" width="105" height="132" rx="3" />
        <path class="wire" d="M52 78V45m0 17C29 62 27 47 29 37c19 0 24 12 23 25Zm0-11c0-23 14-27 28-28 1 17-8 29-28 28Z" />
        <path class="line" d="M14 91h77" /><text class="compact" x="52" y="114" text-anchor="middle">{{ item }}</text>
      </g>
    </template>
    <template v-else-if="artwork.kind === 'mesh'">
      <path class="panel" d="M37 145V81l64-29 61 31v65l-62 29Z" />
      <path class="wire" d="M37 81l63 34 62-32M100 115v62M37 145l64-32 61 35M67 67l63 34v61M132 67l-63 31v63M37 113l63 34 62-33" />
      <g v-for="(item, i) in artwork.items" :key="item" :transform="`translate(196 ${56 + i * 41})`">
        <path class="panel" d="M0 0h23l6 6h94v27H0Z" /><text x="11" y="22">{{ item }}</text>
      </g>
    </template>
    <template v-else-if="artwork.kind === 'settings'">
      <g v-for="(item, i) in artwork.items" :key="item" :transform="`translate(21 ${65 + i * 45})`">
        <text>{{ item }}</text><path class="wire" d="M112-4H311" />
        <path class="accent-line" :d="`M112-4H${180 + i * 34}`" />
        <circle class="accent-fill" :cx="180 + i * 34" cy="-4" r="6" />
        <path class="line" d="M112 9v5m49-5v5m50-5v5m50-5v5m50-5v5" />
      </g>
    </template>
    <template v-else-if="artwork.kind === 'security'">
      <rect class="panel" x="15" y="48" width="145" height="129" rx="3" />
      <text x="26" y="68">{{ artwork.items[0] }}</text>
      <path class="line" d="M27 87H147M27 105H147M27 123H147M27 141H147" />
      <rect class="accent-fill" x="60" y="99" width="66" height="10" rx="2" /><rect class="accent-fill" x="29" y="135" width="47" height="10" rx="2" />
      <path class="accent-line" d="M168 113h27m-6-5 6 5-6 5" />
      <rect class="panel" x="205" y="48" width="140" height="129" rx="3" />
      <path class="wire" d="M258 98V84a17 17 0 0 1 34 0v14" /><rect class="wire" x="250" y="98" width="50" height="36" rx="4" /><circle class="accent-fill" cx="275" cy="113" r="4" />
      <text x="87" y="163" text-anchor="middle">{{ artwork.items[1] }}</text><text x="275" y="163" text-anchor="middle">{{ artwork.items[2] }}</text>
    </template>
    <template v-else-if="artwork.kind === 'storage'">
      <path class="panel" d="M25 75c0-25 111-25 111 0v76c0 25-111 25-111 0Z" />
      <ellipse class="wire" cx="80" cy="75" rx="55" ry="18" /><path class="wire" d="M25 101c0 25 111 25 111 0m-111 26c0 25 111 25 111 0" />
      <path class="accent-line" d="M136 112h32M168 66v92m0-92h18m-18 46h18m-18 46h18" />
      <g v-for="(item, i) in artwork.items" :key="item" :transform="`translate(187 ${50 + i * 46})`">
        <rect class="panel" width="158" height="32" rx="3" /><circle class="accent-fill" cx="14" cy="16" r="3" /><text x="27" y="21">{{ item }}</text>
      </g>
    </template>
    <template v-else-if="artwork.kind === 'browser'">
      <rect class="panel" x="15" y="46" width="330" height="134" rx="3" /><path class="line" d="M15 62H345" />
      <circle class="accent-fill" cx="26" cy="54" r="2" /><circle class="muted-fill" cx="34" cy="54" r="2" />
      <g v-for="(item, i) in artwork.items" :key="item" :transform="`translate(28 ${72 + i * 34})`">
        <rect class="soft" :x="i === 1 ? 34 : 0" width="276" height="27" rx="3" /><text :x="i === 1 ? 44 : 10" y="18">{{ item }}</text><path class="line" d="M161 12h91m-91 6h58" />
      </g>
    </template>
    <template v-else-if="artwork.kind === 'calendar'">
      <g v-for="(day, i) in ['M', 'T', 'W', 'T', 'F', 'S', 'S']" :key="i" :transform="`translate(${13 + i * 48} 48)`">
        <rect class="panel" width="45" height="78" rx="2" /><text x="22" y="20" text-anchor="middle">{{ day }}</text>
        <rect class="soft" x="5" y="30" width="35" :height="i % 2 ? 20 : 37" rx="2" /><path class="accent-line" d="M11 39h22" />
      </g>
      <g v-for="(item, i) in artwork.items" :key="item"><text class="compact" :x="13 + i * 116" y="159">{{ item }}</text><path class="line" :d="`M${13 + i * 116} 170h102`" /></g>
    </template>
    <template v-else-if="artwork.kind === 'review'">
      <g v-for="(item, i) in artwork.items" :key="item" :transform="`translate(20 ${48 + i * 44})`">
        <rect class="panel" width="320" height="35" rx="3" /><path class="accent-line" d="M12 17l5 5 10-12" /><text x="41" y="23">{{ item }}</text>
      </g>
    </template>
    <template v-else-if="artwork.kind === 'world'">
      <path class="panel" d="M16 116l65-58 85 17 95-25 85 59-65 68-88-13-89 20Z" />
      <path class="line" d="M42 116l76-21 81 20 106-16M65 149l60-20 81 22 76-20M81 58l23 126M166 75l27 89M261 50l20 127" />
      <g v-for="(x, i) in [79, 143, 225, 289]" :key="x" :transform="`translate(${x} ${92 + (i % 2) * 29})`"><path class="wire" d="M0 0l-12 19H12ZM0 20v9" /></g>
      <circle class="accent-fill" cx="177" cy="126" r="6" /><path class="accent-line" d="M173 124l-27-17m36 17 35-16M165 135h25" />
      <rect class="wire" x="131" y="72" width="101" height="79" rx="2" />
      <g v-for="(item, i) in artwork.items" :key="item"><text class="compact" :x="18 + i * 116" y="184">{{ item }}</text></g>
    </template>
    <template v-else-if="artwork.kind === 'archive'">
      <g v-for="(item, i) in artwork.items" :key="item" :transform="`translate(${16 + i * 115} 60)`">
        <path class="panel" d="M7 10h75l12 15v66H-5V25Z" /><path class="wire" d="M-5 25h99M33 10v15m-15 17h53v16H18Z" />
        <text class="compact" x="44" y="111" text-anchor="middle">{{ item }}</text>
      </g>
    </template>
    <text class="footer" x="13" y="210">{{ artwork.footer }}</text>
  </svg>
</template>

<style scoped>
.layer-artwork { display: block; width: 100%; height: 100%; overflow: visible; }
.sheet { fill: var(--diagram-sheet); stroke: var(--diagram-line); }
.panel { fill: var(--diagram-panel); stroke: var(--diagram-line); }
.soft { fill: var(--accent-soft); }
.line { fill: none; stroke: var(--diagram-line); stroke-width: 1; }
.wire { fill: none; stroke: var(--diagram-ink); stroke-width: 1.4; stroke-linejoin: round; }
.accent-line { fill: none; stroke: var(--accent); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.accent-fill { fill: var(--accent); }
.muted-fill { fill: var(--muted); }
text { fill: var(--diagram-ink); font: 12px 'IBM Plex Sans', sans-serif; }
.heading { font-size: 13px; font-weight: 500; }
.compact, .footer { font-size: 11px; }
.footer { fill: var(--muted); }
.code { font-family: ui-monospace, monospace; }
.brace { fill: var(--accent); font: 23px ui-monospace, monospace; }
</style>
