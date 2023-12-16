const { defineConfig } = require("cypress");
// import { defineConfig } from "cypress";
 const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

    },
    specPattern: ['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',"**/*.feature"],
    baseUrl: 'https://qauto.forstudy.space'
  },
      retries: {
        // Configure retry attempts for `cypress run`
        // Default is 0
        runMode: 1,
        // Configure retry attempts for `cypress open`
        // Default is 0
        openMode: 0
      },

  screenshotOnRunFailure: true, // default true
  video: true, // default false
  viewportHeight: 2000, // default 660
  viewportWidth: 2000, // default 1200
  // retries: 1,
  defaultCommandTimeout: 5000, // default 4000
  requestTimeout: 10000, // default 5000
  responseTimeout: 30000, // default 30000
  // watchForFileChanges: false,

});

