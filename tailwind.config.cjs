const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {},
		colors: {
			...colors,
			orange: "#fd7e14",
			gray: {
				200: "#fafafa",
				300: "#dcdce1",
				400: "#666",
			},
		},
	},
	plugins: [],
};
