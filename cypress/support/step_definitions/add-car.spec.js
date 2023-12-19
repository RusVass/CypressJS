/// <reference types="cypress" />
//const { Given, And, When, Then} = require('cypress-cucumber-preprocessor/steps')
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
Given('User is logged in', () => {

//     const userAndPass = `${Cypress.env("siteAuthUserName")}:${Cypress.env(
//         "siteAuthUserPassword",
//     )}`;
//     return cy.visit(
//         `https://${userAndPass}@qauto.forstudy.space/panel/profile/`,
//     );
//
//   cy.loginViaAPI(Cypress.env('user'), Cypress.env('password'))
// })

const userAndPass = `${Cypress.env("siteAuthUserName")}:${Cypress.env(
    "siteAuthUserPassword",
)}`;

   // cy.visit(`https://${userAndPass}@qauto.forstudy.space/`)
    cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', {
        "email": Cypress.env('user'),
        "password": Cypress.env('password'),
        "remember": false
    })

return cy.visit(`https://${userAndPass}@qauto.forstudy.space`);
})

And('Garage is opened', () => {
  cy.get(`.header_nav [href="/panel/garage"]`).click()
})

When('user adds {string} car {string}', (car, miles) => {
    cy.contains('Add car').click()
    cy.get('#addCarBrand').select(car)
    cy.get('#addCarMileage').type(miles)
    cy.contains('.modal-content button', 'Add').click()
  //cy.log(car, miles)
})

Then('the {string} car appears in the Garage', (car) => {
  cy.get('.car_name').eq(0).should('contain', car)
  //  cy.log(car)
})