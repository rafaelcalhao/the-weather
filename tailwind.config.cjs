/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.jsx'],
	theme: {
		fontFamily: {
			sans: ['Nunito', 'sans-serif'],
		},
		screens: {
			'2xl': '1440px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
			},
		},
		extend: {},
	},
	plugins: [],
};
