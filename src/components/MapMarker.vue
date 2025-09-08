<template>
	<div ref="markerElement" class="spot-marker" :data-name="spot.names.join(' / ')" :title="spot.names.join(' / ')"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Spot } from '@/api/spots'

const props = defineProps<{
	spot: Spot
}>()

const markerElement = ref<HTMLElement | null>(null)

defineExpose({
	markerElement
})

onMounted(() => {
	if (markerElement.value) {
		markerElement.value.addEventListener('click', () => {
			emit('click', props.spot)
		})
	}
})

const emit = defineEmits<{
	(e: 'click', spot: Spot): void
}>()
</script>

<style scoped>
.spot-marker {
	background: #181317 url('../assets/images/pk63.webp') no-repeat 50% top / contain;
	border: 5px solid #181317;
	outline: 2px solid #ffffff;
	width: 45px;
	aspect-ratio: 1;
	cursor: pointer;
}
</style>
