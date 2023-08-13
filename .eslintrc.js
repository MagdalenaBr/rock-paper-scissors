module.exports = {
	extends: ["airbnb-base", "prettier"],
	plugins: ["prettier"],
	rules: {
		"no-unused-vars": "warn",
		"no-console": "warn",
	},
	env: {
		browser: true,
		node: true,
	},
};
