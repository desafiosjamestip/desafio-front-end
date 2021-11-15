context("Register", () => {
  it("should register", () => {
    cy.visit("http://localhost:3000/register");
    cy.get('input[name="name"]').type("test123");
    cy.get('input[name="email"]').type("test123@mail.com");
    cy.get('input[name="password"]').type("Pierre123#");
    cy.get('input[name="passwordConfirm"]').type("Pierre123#");
    cy.get('button[type="submit"]').click();
  });
});
