const env = import.meta.env

export const networks = {
	instagram: env.VITE_SOCIAL_INSTAGRAM,
	facebook: env.VITE_SOCIAL_FACEBOOK,
	tiktok: env.VITE_SOCIAL_TIKTOK,
	discord: env.VITE_SOCIAL_DISCORD,
	whatsapp: env.VITE_SOCIAL_WHATSAPP,
	email: env.VITE_SOCIAL_EMAIL,
	helloasso: env.VITE_SOCIAL_HELLOASSO
}
