import { describe, it, expect } from 'vitest'

describe('Environment Variables', () => {
	it('should have PORT defined', () => {
		expect(process.env.VITE_PORT).toBeDefined()
	})

	it('should have SOCIAL_INSTAGRAM defined', () => {
		expect(process.env.VITE_SOCIAL_INSTAGRAM).toBeDefined()
	})

	it('should have SOCIAL_FACEBOOK defined', () => {
		expect(process.env.VITE_SOCIAL_FACEBOOK).toBeDefined()
	})

	it('should have SOCIAL_EMAIL defined', () => {
		expect(process.env.VITE_SOCIAL_EMAIL).toBeDefined()
	})

	it('should have SOCIAL_HELLOASSO defined', () => {
		expect(process.env.VITE_SOCIAL_HELLOASSO).toBeDefined()
	})
})
