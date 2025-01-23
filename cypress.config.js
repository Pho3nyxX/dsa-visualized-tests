const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/',
    specPattern: 'cypress/e2e/3-dsa-visualized-ui/**/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 15000,
  },
});