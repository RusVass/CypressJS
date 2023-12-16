/// <reference types="cypress" />
const { Given, And, When, Then} = require('cypress-cucumber-preprocessor/steps')


Given('User is logged in', () => {
  cy.loginViaAPI(Cypress.env('user'), Cypress.env('password'))
})

And('opened the Garage page', () => {
  cy.get(`.header_nav [href="/panel/garage"]`).click()
})

When('User adds a new {string} car into Garage', (car) => {
  cy.log(car)
})

Then('the {string} car appears in the list', (car) => {
  cy.log(car)
})