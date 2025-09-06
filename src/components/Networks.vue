<template>
	<nav class="network-links">
		<NetworksLink :url="networks.instagram" name="Instagram" title="Suivez-nous sur Instagram" icon="instagram" />
		<NetworksLink :url="networks.facebook" name="Facebook" title="Suivez-nous sur Facebook" icon="facebook" />
		<NetworksLink :url="networks.helloasso" name="HelloAsso" title="Inscriptions sur HelloAsso" icon="join" />
		<NetworksLink :url="networks.email" name="E-mail" title="Contactez-nous par email" icon="email" />
	</nav>
</template>

<script setup lang="ts">
import { networks } from '@/config'
import { default as NetworksLink } from '@/components/NetworksLink.vue'
</script>

<style scoped>
.network-links {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: .75em;
	font-size: 4rem;
}
</style>
