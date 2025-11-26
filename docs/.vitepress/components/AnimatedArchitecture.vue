<template>
  <div class="diagram-container">
    <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Definitions for gradients and markers -->
      <defs>
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#FFA101;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FFD54F;stop-opacity:1" />
        </linearGradient>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#FFA101" />
        </marker>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Nodes -->
      <g transform="translate(50, 125)">
        <rect x="0" y="0" width="100" height="50" rx="8" class="node-rect" />
        <text x="50" y="30" text-anchor="middle" class="node-text">User</text>
      </g>

      <g transform="translate(250, 125)">
        <rect x="0" y="0" width="120" height="50" rx="8" class="node-rect" />
        <text x="60" y="30" text-anchor="middle" class="node-text">Create/ Trade UI</text>
      </g>

      <g transform="translate(470, 125)">
        <rect x="0" y="0" width="120" height="50" rx="8" class="node-rect" />
        <text x="60" y="30" text-anchor="middle" class="node-text">Market Factory</text>
      </g>

      <g transform="translate(670, 125)">
        <rect x="0" y="0" width="120" height="50" rx="8" class="node-rect" />
        <text x="60" y="30" text-anchor="middle" class="node-text">  CAMM on BASE</text>
      </g>

      <!-- Connecting Lines -->
      <path d="M150 150 L250 150" class="link-line" marker-end="url(#arrowhead)" />
      <path d="M370 150 L470 150" class="link-line" marker-end="url(#arrowhead)" />
      <path d="M590 150 L670 150" class="link-line" marker-end="url(#arrowhead)" />

      <!-- Animated Data Packets -->
      <circle r="5" fill="#F8FAFC" filter="url(#glow)">
        <animateMotion dur="2s" repeatCount="indefinite" path="M150 150 L250 150" />
      </circle>
      
      <circle r="5" fill="#F8FAFC" filter="url(#glow)">
        <animateMotion dur="2s" begin="0.7s" repeatCount="indefinite" path="M370 150 L470 150" />
      </circle>

      <circle r="5" fill="#F8FAFC" filter="url(#glow)">
        <animateMotion dur="2s" begin="1.4s" repeatCount="indefinite" path="M590 150 L670 150" />
      </circle>

    </svg>
  </div>
</template>

<style scoped>
.diagram-container {
  width: 100%;
  background: rgba(255, 161, 1, 0.05);
  border: 1px solid rgba(255, 161, 1, 0.2);
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
}

.node-rect {
  fill: rgba(255, 161, 1, 0.1);
  stroke: #FFA101;
  stroke-width: 2;
  transition: all 0.3s ease;
}

.node-rect:hover {
  fill: rgba(255, 161, 1, 0.3);
  filter: url(#glow);
}

.node-text {
  fill: #FFA600; /* Dark text for light mode */
  font-family: 'SUSE', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

/* Dark mode overrides */
:global(.dark) .node-text {
  fill: #F8FAFC;
}

.link-line {
  stroke: #FFA101;
  stroke-width: 2;
  stroke-dasharray: 5;
  animation: dash 30s linear infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: -1000;
  }
}
</style>
