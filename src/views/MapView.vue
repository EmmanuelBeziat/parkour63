<template>
	<div class="map">
		<div ref="mapSpots" class="map-container"></div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useSpotsStore } from '@/stores/spots'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const mapSpots = ref<HTMLElement | null>(null)
let map: maplibregl.Map | null = null

const spotsStore = useSpotsStore()
const spots = computed(() => spotsStore.list)

// Create markers for each spot
const createMarkers = () => {
	if (!map || !spots.value.length) return

	// Clear existing markers
	document.querySelectorAll('.spot-marker').forEach(marker => marker.remove())

	// Add markers for each spot
	spots.value.forEach(spot => {
		if (!map) return

		const markerElement = document.createElement('div')
		markerElement.className = 'spot-marker'
		markerElement.dataset.name = spot.names.join(' / ')
		markerElement.title = spot.names.join(' / ')

		new maplibregl.Marker({ element: markerElement })
			.setLngLat([parseFloat(spot.position.longitude), parseFloat(spot.position.latitude)])
			.addTo(map)
	})
}

// Watch for spots changes and create markers
watch(spots, () => {
	if (map) {
		createMarkers()
	}
})

onMounted(async () => {
	// Fetch spots data
	await spotsStore.fetch()

	if (mapSpots.value) {
		map = new maplibregl.Map({
			container: mapSpots.value,
			style: 'https://tiles.openfreemap.org/styles/bright',
			center: [3.0779142, 45.7768346],
			zoom: 14
		})

		// Create markers when map is loaded
		map.on('load', () => {
			createMarkers()
		})
	}
})
</script>

<style scoped>
.map {
	min-height: 100dvh;
	display: grid;
}

:deep(.spot-marker) {
	background: #181317 url('../assets/images/pk63.webp') no-repeat 50% top / contain;
	border: 5px solid #181317;
	outline: 2px solid #ffffff;
	width: 45px;
	aspect-ratio: 1;
}
</style>
