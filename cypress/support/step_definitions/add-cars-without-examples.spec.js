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
    cy.log(hash.name)
    cy.contains('Add car').click()
    cy.get('#addCarBrand').select(hash.name)
    cy.get('#addCarMileage').type(hash.miles)
    cy.contains('.modal-content button', 'Add').click()
  })
})

Then('the car appears in the list', () => {
 cy.get('.car_name').eq(0).should('contain', 'Ford Fiesta')
 // cy.log(table.hashes())
})