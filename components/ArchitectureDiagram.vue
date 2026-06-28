<template>
  <div class="architecture" role="img" aria-label="Diagram showing interface, application services, rendering, and infrastructure working as a modular system">
    <div class="diagram-label">System architecture</div>
    <div class="diagram-grid">
      <div class="diagram-node node-wide">
        <span>Visual layer</span>
        <ul style="margin-top: 0.5rem; color: var(--muted); font-size: 0.75rem; list-style-type: '·'; display: flex; flex-direction: row; gap: 10px;">
          <li style="list-style-type: none;">Vue</li>
          <li style="padding-left: 5px;">React</li>
          <li style="padding-left: 5px;">TypeScript</li>
          <li style="padding-left: 5px;">JavaScript</li>
        </ul>
      </div>
      <div class="diagram-connector" aria-hidden="true"></div>
      <div class="diagram-pair">
        <div class="diagram-node">
          <span>Services</span>
          <ul style="margin-top: 0.5rem; color: var(--muted); font-size: 0.75rem; list-style-type: '·'; display: flex; flex-direction: row; gap: 10px;">
            <li style="list-style-type: none;">Events</li>
            <li style="padding-left: 5px;">APIs</li>
          </ul>
        </div>
        <div class="diagram-node">
          <span>3D runtime</span>
          <ul style="margin-top: 0.5rem; color: var(--muted); font-size: 0.75rem; list-style-type: '·'; display: flex; flex-direction: row; gap: 10px;">
            <li style="list-style-type: none;">Three.js</li>
            <li style="padding-left: 5px;">Babylon.js</li>
          </ul>
        </div>
      </div>
      <div class="diagram-connector" aria-hidden="true"></div>
      <div class="diagram-node node-wide node-accent">
        <span>Cloud and delivery</span>
        <ul style="margin-top: 0.5rem; color: var(--muted); font-size: 0.75rem; list-style-type: '·'; display: flex; flex-direction: row; gap: 10px;">
          <li style="list-style-type: none;">Azure</li>
          <li style="padding-left: 5px;">AWS</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.architecture {
  position: relative;
  padding: clamp(1.25rem, 3vw, 2rem);
  border: 1px solid var(--line);
  background-color: var(--surface);
  background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 2rem 2rem;
}

.diagram-label {
  display: inline-block;
  margin-bottom: 1.5rem;
  padding: 0.35rem 0.5rem;
  background: var(--surface);
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.diagram-grid {
  max-width: 28rem;
  margin-inline: auto;
}

.diagram-pair {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.diagram-node {
  min-height: 5.5rem;
  padding: 1rem;
  border: 1px solid var(--line);
  background: var(--surface);
}

.diagram-node span,
.diagram-node small {
  display: block;
}

.diagram-node span {
  font-family: "IBM Plex Serif", Georgia, serif;
  font-weight: 600;
  line-height: 1.3;
}

.diagram-node small {
  margin-top: 0.5rem;
  color: var(--muted);
  font-size: 0.75rem;
  line-height: 1.4;
}

.node-accent {
  border-color: var(--accent);
  background: var(--accent-soft);
}

.diagram-connector {
  width: 1px;
  height: 1.5rem;
  margin-inline: auto;
  background: var(--accent);
}
</style>
