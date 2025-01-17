
describe("Assertions", () => {
    it("Implicit assertions", () => {
      cy.visit("https://www.saucedemo.com/v1/");
  
      cy.url()
        .should("include", "https://www.saucedemo.com/v1/")
        .and("eq", "https://www.saucedemo.com/v1/")
        .and("contain", "com")
        .and("not.contain", "aa");
  
      cy.title()
        .should("include", "Swag Labs")
        .and("eq", "Swag Labs")
        .and("contain", "Labs");
  
      cy.get(".login_logo").should("be.visible").and("exist");
  
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="username"]').should("have.value", "standard_user");
    });
  
    it("Explicit assertions", () => {
      cy.visit("https://tulip-uat.tntra.io/tntra/login");
  
      cy.get('[data-testid="email"]').type("testkp@yopmail.com");
      cy.get('[data-testid="password"]').type("Tntra@123");
      cy.get(".btn-primary").click();
  
      cy.get(".ant-flex > .ant-avatar > img" , { timeout : 10000}).should("exist").click();
      cy.get('[data-menu-id*="profile"]', { timeout: 10000 })
        .should("exist")
        .click();


        let expName = "testkp@yopmail.com";

        cy.get('.mb-2 > :nth-child(3) > span').then ((x) => {

            let actualName = x.text()

            //BDD style

            expect(actualName).to.equal(expName)
            expect(actualName).to.not.equal(expName)

            //TDD style

            assert.equal(actualName,expName)
            assert.notEqual(actualName,expName)

        })


    })

})