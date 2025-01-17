describe('xpathLocator', function() {
    it("xpath", () => {
        
        cy.visit("https://www.amazon.in/") // Step 1: Visit the Amazon India website.
        cy.xpath("//span[contains(text(),'Air conditioners')]").click() // Step 2: Locate the "Air conditioners" link using an XPath expression and click it.
    })
})
