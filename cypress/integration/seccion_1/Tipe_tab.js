/// <reference types="Cypress"/>
// para que funcionen los comandos

require('cypress-plugin-tab')
//instalar https://www.npmjs.com/package/cypress-plugin-tab para usar el tab 

describe("Ejemplo funcion Tab", () => {

    it("Type con tab", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get("#userName").type("Javier Andriani").tab().
        type("andrianijavier1@gmail.com").tab().
        type("1 de Mayo 2175")    
    })

})// Cierre de Describe

