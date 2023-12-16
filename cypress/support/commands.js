// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




Cypress.Commands.add('loginViaAPI', (email, password) => {
  const userAndPass = `${Cypress.env('siteAuthUserName')}:${Cypress.env('siteAuthPassword')}`

  cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', {
    "email": email,
    "password": password,
    "remember": false
  })
  cy.visit(`https://${userAndPass}@qauto.forstudy.space/`)
})