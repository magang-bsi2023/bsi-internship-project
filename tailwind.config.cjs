const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {},
		colors: {
			bsiorange: 'hsl(36, 94%, 61%)',
			white: '#FEFEFEff',
			bsigreen: 'hsl(177, 85%, 35%)',
			bsilgreen: 'hsl(177, 100%, 35%)'
		}
	},

	plugins: ['flowbite/plugin']
};

module.exports = config;
