<template>
  <div class="timeline-container">
    <div class="timeline-line"></div>
    
    <div class="timeline-item" v-for="(item, index) in items" :key="index" :style="{ animationDelay: index * 0.2 + 's' }">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-time">{{ item.time }}</div>
        <div class="timeline-title">{{ item.title }}</div>
        <div class="timeline-desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  { time: 'Finality Time', title: '🏁 Market Ends', desc: 'Trading stops. Prices are finalized.' },
  { time: 'In 2 Hours', title: '📢 Outcome Proposed', desc: 'Oracle submits the result on-chain.' },
  { time: '2 Hours', title: '⏳ Challenge Window', desc: '2h period to dispute the result.' },
  { time: 'Day 2', title: '⚖️ Final Resolution', desc: 'Payouts enabled for winners.' }
]
</script>

<style scoped>
.timeline-container {
  position: relative;
  padding: 20px 0;
  margin: 40px 0;
  font-family: 'SUSE', sans-serif;
}

.timeline-line {
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, #FFA101, transparent);
}

.timeline-item {
  position: relative;
  padding-left: 50px;
  margin-bottom: 30px;
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.timeline-dot {
  position: absolute;
  left: 11px;
  top: 0;
  width: 20px;
  height: 20px;
  background: #FFA101;
  border-radius: 50%;
  box-shadow: 0 0 10px #FFA101;
  z-index: 1;
  animation: pulse 2s infinite;
}

.timeline-dot::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
}

/* ... existing styles ... */

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 161, 1, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 161, 1, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 161, 1, 0);
  }
}
</style>
