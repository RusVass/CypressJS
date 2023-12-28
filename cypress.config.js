
const { defineConfig } = require("cypress");
// import { defineConfig } from "cypress";
const {addMatchImageSnapshotPlugin} = require('@simonsmith/cypress-image-snapshot/plugin')

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on)
    },
    baseUrl: "https://qauto.forstudy.space",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
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
   //retries: 1,
  defaultCommandTimeout: 5000, // default 4000
  requestTimeout: 10000, // default 5000
  responseTimeout: 30000, // default 30000
  // watchForFileChanges: false,
});

