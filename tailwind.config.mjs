/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			screens: {
				xxs: "310px",
				xs: "375px",
			},
			colors: {
				"app-pink": "#ffb3d9",
			},
		},
	},
	plugins: [],
};
