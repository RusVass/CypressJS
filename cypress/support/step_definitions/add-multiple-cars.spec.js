/// <reference types="cypress" />
const { Given, And, When, Then} = require('cypress-cucumber-preprocessor/steps')


Given('User is logged in', () => {
  cy.loginViaAPI(Cypress.env('user'), Cypress.env('password'))
})

And('opened the Garage page', () => {
  cy.get(`.header_nav [href="/panel/garage"]`).click()
})

When('User adds a new {string} car into Garage', (car) => {
  cy.contains('Add car').click()
  cy.get('#addCarBrand').select(car)
  cy.get('#addCarMileage').type(100)
  cy.contains('.modal-content button', 'Add').click()
 // cy.log(car)
})

Then('the {string} car appears in the list', (car) => {
  cy.get('.car_name').eq(0).should('contain', car)
 // cy.log(car)
})