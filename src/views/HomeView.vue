<template>
  <main class="home">
		<Logo />
		<Networks />
  </main>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import Networks from '@/components/Networks.vue'
</script>

<style scoped>
.home {
	min-height: 100dvh;
	display: flex;
	padding: 1rem 4rem;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 4rem;
}
</style>
