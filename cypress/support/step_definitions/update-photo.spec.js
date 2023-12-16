/// <reference types="cypress" />
const { Given, And, When, Then} = require('cypress-cucumber-preprocessor/steps')

Given('User is logged in', () => {
  cy.loginViaAPI(Cypress.env('user'), Cypress.env('password'))
})

And('opened the Profile page', () => {
  cy.contains('[routerlink="profile"]', "Profile").click()
})

When('User updates the profile Photo on the Edit Profile modal', () => {
  
})

Then('the profile image is updated', () => {

})