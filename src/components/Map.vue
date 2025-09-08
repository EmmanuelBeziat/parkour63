<template>
	<div ref="mapSpots" class="map-container"></div>
	<div v-if="selectedSpot" class="map-dialog">
		<MapInfos :spot="selectedSpot" />
	</div>
</template>


<script setup lang="ts">
import { ref, onMounted, shallowRef, createVNode, render, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import maplibregl from 'maplibre-gl'
import type { Spot } from '@/api/spots'
import MapInfos from '@/components/MapInfos.vue'
import MapMarker from '@/components/MapMarker.vue'

const router = useRouter()
const route = useRoute()

const props = defineProps<{
	center: [number, number]
	zoom: number
	tiles: string
	spots: Spot[]
}>()

let map: maplibregl.Map | null = null
const mapSpots = ref<HTMLElement | null>(null)
const selectedSpot = shallowRef<Spot | null>(null)

// Watch for route changes to open MapInfos when a slug is present
const openSpotFromRoute = (slug: string | string[] | undefined) => {
	if (slug && typeof slug === 'string') {
		if (props.spots.length > 0) {
			const spot = props.spots.find(spot => spot.slug === slug)
			if (spot) {
				selectedSpot.value = spot
			}
		}
		else {
			setTimeout(() => {
				const spot = props.spots.find(spot => spot.slug === slug)
				if (spot) {
					selectedSpot.value = spot
				}
			}, 100)
		}
	}
}

watch(() => route.params.slug, (newSlug) => {
	openSpotFromRoute(newSlug)
}, { immediate: true })

// Also watch for spots changes to handle the case where spots are loaded after the route
watch(() => props.spots, (newSpots) => {
	if (newSpots.length > 0 && route.params.slug) {
		openSpotFromRoute(route.params.slug)
	}
})

// Create markers for each spot
const createMarkers = () => {
	if (!map || !props.spots.length) return

	// Clear existing markers
	document.querySelectorAll('.spot-marker').forEach(marker => marker.remove())

	// Add markers for each spot
	props.spots.forEach(spot => {
		if (!map) return

		// Create a container for the marker component
		const markerContainer = document.createElement('div')

		// Create a Vue component instance for the marker
		const markerVNode = createVNode(MapMarker, {
			spot: spot,
			onClick: (spot: Spot) => {
				selectedSpot.value = spot
				router.push(`/spot/${spot.slug}`)
			}
		})

		// Render the component into the container
		render(markerVNode, markerContainer)

		// Get the actual marker element from the component
		const markerElement = markerContainer.firstChild as HTMLElement

		new maplibregl.Marker({ element: markerElement })
			.setLngLat([parseFloat(spot.position.longitude), parseFloat(spot.position.latitude)])
			.addTo(map)
	})
}

onMounted(() => {
	if (mapSpots.value) {
		map = new maplibregl.Map({
			container: mapSpots.value,
			style: props.tiles,
			center: props.center,
			zoom: props.zoom
		})

		map.on('load', () => {
			createMarkers()
		})
	}
})
</script>

<style>
@import "maplibre-gl/dist/maplibre-gl.css";
</style>

<style scoped>
:deep(.spot-marker) {
	background: #181317 url('../assets/images/pk63.webp') no-repeat 50% top / contain;
	border: 5px solid #181317;
	outline: 2px solid #ffffff;
	width: 45px;
	aspect-ratio: 1;
	cursor: pointer;
}

.map-dialog {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1000;
}
</style>
