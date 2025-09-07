/**
 * Interface to represent the position of a spot
 */
export interface SpotPosition {
	latitude: string
	longitude: string
}

/**
 * Interface to represent the structure of a spot
 */
export interface Spot {
	slug: string
	names: string[]
	tags: string[]
	position: SpotPosition
}

/**
 * Function to fetch spots
 * Currently, it reads from a local JSON file
 * In the future, it can be modified to connect to a database
 * @returns A promise that resolves to an array of spots with names as array and tags as array
 */
export const fetchSpots = async (): Promise<Spot[]> => {
	try {
		// Dynamic import of the JSON file for test data
		const spotsData = await import('../assets/data/spots.json')
		return spotsData.default as Spot[]
	}
	catch (error) {
		console.error('Error fetching spots:', error)
		return []
	}
}
