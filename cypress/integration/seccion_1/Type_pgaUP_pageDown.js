/// <reference types="Cypress"/>
// para que funcionen los comandos
describe("Ejemplo de pageUp, pageDown", () => {

    it("Type pageUp", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get("#userName").type('{pageup}')
        cy.wait(2000)
    
    })

})// Cierre de Describe

describe("Ejemplo de pageUp, pageDown", () => {

    it("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
    
    })

})