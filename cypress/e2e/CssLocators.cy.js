
describe('CSS Locators', function()
{

    it('css locators', function()
    {
        cy.visit("https://www.amazon.in/") // open url
        cy.get("[aria-label ='Search Amazon.in']").type("New balance shoes") // css selector : using attribute "click on search box and add keywords"
        cy.get("#nav-search-submit-button").click() // css selector : id
    })
})