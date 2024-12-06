/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	prefix: 'tw-',
	important: false,
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: "#c490ff",
				secondary: "#6c72e8",
			}
		},
	},
	plugins: [],
};
