/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			colors: {
				'brand-sea-blue': '#1936D7',
				'brand-sky-blue': '#01CCFD'
			},
			fontFamily: {
				'brand': ['"Instrument Sans"', 'sans-serif'],
				'onest': ['"Onest"', 'sans-serif']
			},
		},
	},

	plugins: [

	],
}
