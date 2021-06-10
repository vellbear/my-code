module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				input: "3rem",
			},
			width: {
				default: "535px",
				medium: "435px",
				large: "575px",
				xlarge: "720px",
			},
			minWidth: {
				button: "108.5px",
			},
			height: {
				large: "510px",
				card: "366px",
			},
			minHeight: {
				card: "366px",
			},
			colors: {
				primary: "hsl(229, 8%, 60%)",
				secondary: "hsl(229, 31%, 21%)",
				tertiary: "hsl(231, 69%, 60%)",
				highlight: "hsl(0, 94%, 66%)",
			},
		},
		fontFamily: {
			sans: ["Rubik", "sans-serif"],
		},
		fontSize: {
			xs: "14px",
			sm: "16px",
			base: "18px",
			variant: "20px",
			md: "1.9rem",
			lg: "2.9rem",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
