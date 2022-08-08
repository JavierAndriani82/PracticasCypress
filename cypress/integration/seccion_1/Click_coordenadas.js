/// <reference types="Cypress"/>
// para que funcionen los comandos

require('cypress-plugin-tab')

describe("Click por coordenadas (x, y",() => {

    it("Click por coordenadas", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title('eq', 'OrangeHRM' )
        cy.wait(1500)

        cy.get("#txtUsername").type("Admin").tab().
        type("admin123")

        cy. get(".button").should("be.visible").click()
        cy.wait(1500)
        cy.get("#branding > a:nth-child(1) > img").should("be.visible").click(50, 5)
        cy.get("#branding > a:nth-child(1) > img").should("be.visible").click(99, 10)
    
    })

})// Cierre de Describe