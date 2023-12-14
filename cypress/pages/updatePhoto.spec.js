export class EditPhoto {
  elements = {
    getEditButton: () => cy.get("button.btn-primary"),
    getInputPhoto: () => cy.get("input#editProfilePhoto"),
    getSaveButton: () => cy.contains("button", "Save"),
  };

  openProfilePage() {
    const userAndPass = `${Cypress.env("siteAuthUserName")}:${Cypress.env(
      "siteAuthUserPassword",
    )}`;
    return cy.visit(
      `https://${userAndPass}@qauto.forstudy.space/panel/profile/`,
    );
  }

  getUploadPhoto() {
    return cy.request("https://qauto.forstudy.space/api/users/profile");
  }
}
