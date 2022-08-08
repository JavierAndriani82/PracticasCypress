/// <reference types="Cypress"/>
// para que funcionen los comandos

require('cypress-plugin-tab')

describe("Primer reto", () => {

    it("Primer reto", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1500)

        cy.get("#searchBox").should("be.visible").type("Cierra")
        cy.wait(1500)
        cy.get("#searchBox").should("be.visible").clear()

        //agregando campos
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1500)
        cy.get("#firstName").should("be.visible").type("Javier").tab().
        type("Andriani").tab().
        type("andrianijavier@gmail.com").tab().
        type("39").tab().
        type("109000").tab().
        type("Sistemas")
        cy.get("#submit").should("be.visible").click()

        cy.get("#searchBox").should("be.visible").type("Javier")
        cy.wait(1500)
        cy.get("#searchBox").should("be.visible").clear()

        //Editar un campo

    cy.get("#edit-record-4").should("be.visible").click()
    cy.wait(1500)
    cy.get("#age").should("be.visible").clear().type("40")
    cy.wait(1500)
    cy.get("#salary").should("be.visible").clear().type("200000")
    cy.get("#submit").should("be.visible").click()

    //borrando el campo
    cy.wait(2000)
    cy.get("#delete-record-4").should("be.visible").click()
    })

})// Cierre de Describe

