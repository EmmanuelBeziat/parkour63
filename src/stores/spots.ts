import { defineStore } from 'pinia'
import { fetchSpots, type Spot } from '@/api/spots'

export const useSpotsStore = defineStore('spots', {
	state: () => ({
		spots: [] as Spot[]
	}),

	getters: {
		list: state => state.spots,
		count: state => state.spots.length,
		getSpot: state => (slug: string) => state.spots.find(spot => spot.slug === slug)
	},

	actions: {
		async fetch (): Promise<void> {
			try {
				this.spots = await fetchSpots()
			}
			catch (error) {
				console.error(`Store error: ${error}`)
			}
		}
	}
})
