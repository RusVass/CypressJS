/// <reference types="cypress" />

import { LoginPage } from "../../pages/login.spec.js";
import { EditPhoto } from "../../pages/updatePhoto.spec.js";

describe("Photo upload test", () => {
  const loginPage = new LoginPage();
  const editPhoto = new EditPhoto();

  it("photo upload check", () => {
    loginPage.signInSite();
    loginPage.userLogin(),
      editPhoto.openProfilePage(),
      editPhoto.elements.getEditButton().click(),
      editPhoto.elements
        .getInputPhoto()
        .selectFile("cypress/fixtures/logo.jpg"),
      editPhoto.elements.getSaveButton().click(),
      editPhoto.getUploadPhoto().then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});

// import { LoginPage } from "../pages/login.spec.js";
// import { EdPhoto } from "../pages/updatePhoto.spec.js";
//
// describe("Photo upload test", () => {
//   const loginPage = new LoginPage();
//   const edPhoto = new EdPhoto();
//
//   it("photo upload check", () => {
//     loginPage.openSite();
//     loginPage.userSignIn(),
//       // loginPage.openSite(),
//       loginPage.openProfilePage(),
//       loginPage.openCurrentPage().then((response) => {
//         expect(response.status).to.eq(200),
//           edPhoto.elements.getEditButton().click(),
//           edPhoto.elements
//             .getInputPhoto()
//             .selectFile("cypress/fixtures/logo.jpg"),
//           edPhoto.elements.getSaveButton().click(),
//           loginPage.getUploadPhoto().then((response) => {
//             expect(response.status).to.eq(200);
//           });
//       });
//   });
// });

// describe("Form layouts", () => {
//   const userAndPass = `${Cypress.env("siteAuthUserName")}:${Cypress.env(
//     "siteAuthUserPassword",
//   )}`;
//   const mainUrl = `https://${userAndPass}@qauto.forstudy.space`;
//
//   it("it test file upload", () => {
//     // cy.visit('https://guest:welcome2qauto@qauto.forstudy.space')
//     cy.visit(mainUrl); // дані userAndPass у файлі cypress.env.json в корні папки
//     cy.request("POST", "api/auth/signin", {
//       email: Cypress.env("user"),
//       password: Cypress.env("password"),
//       remember: false,
//     });
//     cy.visit(mainUrl + "/panel/profile/");
//     cy.get("button.btn-primary").click();
//     cy.get("input#editProfilePhoto").selectFile("cypress/fixtures/logo.jpg");
//     cy.intercept("PUT", "api/users/profile").as("logo");
//     cy.contains("button", "Save").click();
//     cy.get("@logo")
//       .its("response")
//       .then((res) => {
//         console.log(res);
//         expect(res.statusCode).eq(200);
//       });
//   });
// });
