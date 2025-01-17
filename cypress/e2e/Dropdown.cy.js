
describe('Dropdowns',()=>{

    it('dropdown with select',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/#')

        cy.get('#country')
        .select('India')
        .should('have.value','india')
    })
})