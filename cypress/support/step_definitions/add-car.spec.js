/// <reference types="cypress" />
const { Given, And, When, Then} = require('cypress-cucumber-preprocessor/steps')

Given('User is logged in', () => {
  cy.loginViaAPI(Cypress.env('user'), Cypress.env('password'))
})

And('Garage is opened', () => {
  
})

When('user adds {string} car {string}', (car, miles) => {
  cy.log(car, miles)
})

Then('the {string} car appears in the Garage', (car) => {
  cy.log(car)
})