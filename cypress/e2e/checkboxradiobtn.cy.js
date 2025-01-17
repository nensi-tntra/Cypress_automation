describe('Checkbox and Radio button', ()=> {

    // it('checking radio button', () =>{
    //     cy.visit("https://testautomationpractice.blogspot.com/#")

    //     //visibility of radio buttons
    //     cy.get("input#male").should('be.visible')
    //     cy.get("input#female").should('be.visible')

    //     //selecting radio buttons
    //     cy.get("input#male").check().should('be.checked')
    //     cy.get("input#female").should('not.be.checked')

    //     cy.get("input#female").check().should('be.checked')
    //     cy.get("input#male").should('not.be.checked')

    
    // })

    it(' checking checkboxes', () =>{
        cy.visit("https://testautomationpractice.blogspot.com/#")

        //visibility of check boxes
        // cy.get("input#sunday").should('be.visible')

        //selecting check boxes
        // cy.get("input#sunday").check().should('be.checked')

        //Unselecting check boxes
        // cy.get("input#sunday").uncheck().should('not.be.checked')

        //Selecting - unselecting all the checkboxes
        // cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
        // cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        //select first checkbox
        cy.get('input.form-check-input[type="checkbox"]').first().check()
        
        //select last checkbox
        cy.get('input.form-check-input[type="checkbox"]').last().check()
    })
})