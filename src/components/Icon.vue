<template>
	<component :is="IconComponent" v-if="IconComponent" />
</template>

<script setup lang="ts">
import { shallowRef, onMounted } from 'vue'

const props = defineProps<{
	name: string
}>()

const IconComponent = shallowRef(null)

onMounted (async () => {
	try {
		const { default: component } = await import(`../assets/images/icons/${props.name}.svg`)
		IconComponent.value = component
	}
	catch (error: unknown) {
		const errorMessage = error instanceof Error ? error.message : String(error)
		console.error(`Failed to import icon: ${props.name}: (${errorMessage})`)
	}
})
</script>
