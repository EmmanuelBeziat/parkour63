<template>
  <div class="landing">
		<RouterView />
	</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
.landing {
	min-height: 100dvh;
	overflow-x: clip;
}
</style>
