/// <reference types="cypress" />
//const { Given, And, When, Then} = require('cypress-cucumber-preprocessor/steps')
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given('User is logged in', () => {
  cy.loginViaAPI(Cypress.env('user'), Cypress.env('password'))
})

And('opened the Profile page', () => {
  cy.contains('[routerlink="profile"]', "Profile").click()
})

When('User updates the profile Photo on the Edit Profile modal', () => {
  cy.get("button.btn-primary").click()
  cy.get('input#editProfilePhoto').selectFile("cypress/fixtures/logo.jpg")
  cy.contains("button", "Save")
  cy.log('log from when')
})

Then('the profile image is updated', () => {
  cy.request("https://qauto.forstudy.space/api/users/profile").then((response) => {
    expect(response.status).to.eq(200);
    cy.log('log from then')
  })
})