<template>
  <div class="map-infos">
    <h3>{{ spot.names.join(' / ') }}</h3>
  </div>
</template>

<script setup lang="ts">
import type { Spot } from '@/api/spots'

defineProps<{
  spot: Spot
}>()
</script>

<style scoped>
.map-infos {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  max-width: 300px;
}

.map-infos h3 {
  margin-block: 0;
  color: #333333;
  font-size: 1.2rem;
}

.map-infos ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.map-infos li {
  padding: 0.25rem 0;
  color: #666666;
}
</style>
