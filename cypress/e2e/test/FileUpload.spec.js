/// <reference types="cypress" />

import { LoginPage } from "../../pages/login.spec.js";
import { EditPhoto } from "../../pages/updatePhoto.spec.js";

describe("Photo upload test", () => {
  const loginPage = new LoginPage();
  const editPhoto = new EditPhoto();

  it("photo upload check", () => {
    loginPage.signInSite()
    loginPage.userLogin()
      editPhoto.openProfilePage()
      editPhoto.elements.getEditButton().click()
      editPhoto.elements
        .getInputPhoto()
        .selectFile("cypress/fixtures/logo.jpg")
      editPhoto.elements.getSaveButton().click()
     /* cy.matchImageSnapshot()*/
      editPhoto.getUploadPhoto().then((response) => {
        expect(response.status).to.eq(200)
      });
  });
});

