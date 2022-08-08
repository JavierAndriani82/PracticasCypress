/// <reference types="Cypress"/>
// para que funcionen los comandos
describe("Introduccion a los asserts", () => {

    it("Demo de los Asserts", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get("#firstName").should("be.visible").type("Javier")
        cy.wait(1000)
        cy.get("#lastName").should("be.visible").type("Andriani")
        cy.wait(1000)
        cy.get("#userEmail").should("be.visible").type("andrianijavier@gmail.com")
    
    })

})// Cierre de Describe

