context("Login page", () => {
  it("should sign in", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('input[name="email"]').type("pierre@mail.com");
    cy.get('input[name="password"]').type("123456@Az");
    cy.get('button[type="submit"]').click();
  });
});
