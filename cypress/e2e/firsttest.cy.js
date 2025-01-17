
describe("First test", () =>{
    it('verify title-positive',()=> 
    {
        cy.visit("https://testautomationpractice.blogspot.com/#")
        cy.title().should('eq','Automation Testing Practice')
    })
}
)



