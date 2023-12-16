/// <reference types="cypress" />
const { Given, And, When, Then} = require('cypress-cucumber-preprocessor/steps')


Given('User is logged in', () => {
  cy.loginViaAPI(Cypress.env('user'), Cypress.env('password'))
})

And('opened the Garage page', () => {
  cy.get(`.header_nav [href="/panel/garage"]`).click()
})

When('User adds a new car into Garage', (table) => {
  cy.log(table.hashes())
  table.hashes().forEach(hash => {
    cy.log(hash)
  })
})

Then('the car appears in the list', (table) => {
  cy.log(table.hashes())
})