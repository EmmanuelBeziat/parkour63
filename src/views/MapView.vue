<template>
	<div class="map">
		<Map :spots="spotsStore.list" :center="[3.0779142, 45.7768346]" :zoom="14" tiles="https://tiles.openfreemap.org/styles/bright" />
	</div>
</template>

<script setup lang="ts">
import Map from '@/components/Map.vue'
import { useSpotsStore } from '@/stores/spots'
import { onMounted } from 'vue'

const spotsStore = useSpotsStore()

onMounted(async () => {
	await spotsStore.fetch()
})
</script>

<style scoped>
.map {
	min-height: 100dvh;
	display: grid;
}
</style>
