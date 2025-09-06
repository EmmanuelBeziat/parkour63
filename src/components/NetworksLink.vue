<template>
	<a :href="url" :aria-label="name" :title="title">
		<Icon :name="icon" />
	</a>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'

defineProps<{
	name: string
	title: string
	url: string
	icon: string
}>()
</script>

<style scoped>
a {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: currentcolor;
	text-decoration: none;

	&[href="#"] {
		display: none;
	}

	svg {
		width: 1em;
		transition: .35s var(--ease-back-out);
		border: none;
	}

	@media (hover: hover) {
		&:hover {
			svg {
				transform: translateY(-8px);
			}
		}
	}
}
</style>
