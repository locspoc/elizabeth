const { defineConfig } = require('cypress');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');

async function setupNodeEvents(on, config) {
	// Browserify
	on('file:preprocessor', browserify.default(config));

	// Cucumber
	await preprocessor.addCucumberPreprocessorPlugin(on, config);

	return config;
}

module.exports = defineConfig({
	chromeWebSecurity: false,
	defaultCommandTimeout: 6000,
	e2e: {
		setupNodeEvents,
		specPattern: 'cypress/integration/elizabeth/BDD/*.feature',
	},
	env: {
		url: 'http://127.0.0.1:9292/',
	},
	retries: {
		runMode: 1,
	},
});
