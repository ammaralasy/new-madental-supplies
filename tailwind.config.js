/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat']
			},
			colors: {
				'madental-red': '#E30712'
			}
		}
	},
	plugins: []
};
