<template>
	<main class="landing">
		<slot />
	</main>
</template>

<style scoped>
.landing {
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
