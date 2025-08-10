const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://decentraland.org/play/',
    experimentalStudio: true,
    experimentalSessionAndOrigin: true,
  },
  },
);
