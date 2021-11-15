context("ProductsRegister", () => {
  it("should products register", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get('input[name="name"]').type("test");
    cy.get('input[name="category"]').type("test");
    cy.get('input[name="price"]').type("123");
    cy.get('input[name="provider"]').type("test");
    cy.get('button[type="submit"]').click();
  });
});
