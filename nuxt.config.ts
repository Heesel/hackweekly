// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
	app: {
		head: {
		  title: 'HackWeekly',
		  htmlAttrs:{
			lang: 'en'
		  },
		  meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
	
		  ], 
		  link: [
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "anonymous" },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap' },
		  ],
		  script: []
		},
	  },
})
