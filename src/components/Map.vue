<template>
	<div ref="mapSpots" class="map-container"></div>
</template>


<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import type { Spot } from '@/api/spots'

const props = defineProps<{
	center: [number, number]
	zoom: number
	tiles: string
	spots: Spot[]
}>()

const mapSpots = ref<HTMLElement | null>(null)
let map: maplibregl.Map | null = null

// Create markers for each spot
const createMarkers = () => {
	if (!map || !props.spots.length) return

	// Clear existing markers
	document.querySelectorAll('.spot-marker').forEach(marker => marker.remove())

	// Add markers for each spot
	props.spots.forEach(spot => {
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
watch(() => props.spots, () => {
	if (map) {
		createMarkers()
	}
})

onMounted(() => {
	if (mapSpots.value) {
		map = new maplibregl.Map({
			container: mapSpots.value,
			style: props.tiles,
			center: props.center,
			zoom: props.zoom
		})

		// Create markers when map is loaded
		map.on('load', () => {
			createMarkers()
		})
	}
})
</script>

<style scoped>
:deep(.spot-marker) {
	background: #181317 url('../assets/images/pk63.webp') no-repeat 50% top / contain;
	border: 5px solid #181317;
	outline: 2px solid #ffffff;
	width: 45px;
	aspect-ratio: 1;
}
</style>
