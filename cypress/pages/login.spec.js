export class LoginPage {
  signInSite() {
    const userAndPass = `${Cypress.env("siteAuthUserName")}:${Cypress.env(
      "siteAuthUserPassword",
    )}`;
    return cy.visit(`https://${userAndPass}@qauto.forstudy.space`);
  }

  userLogin() {
    cy.request("POST", "/api/auth/signin", {
      email: Cypress.env("user"),
      password: Cypress.env("password"),
      remember: false,
    });
  }

}
