/// <reference types="Cypress"/>

describe("       ", () => {

    it("     ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')

        cy.log("Funciona bien!")
    })

})// Cierre de Describe

