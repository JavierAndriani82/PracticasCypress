/// <reference types="Cypress"/>
// para que funcionen los comandos

require('cypress-xpath')


describe("Alertas en Cypress", () => {

    it("Manejo de los Alias", () => {

        let tiempo=2000
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should('eq', 'Input Validation')
        cy.wait(tiempo)

        cy.get("#firstname").should("be.visible").as("nom")
        cy.get("@nom").type("Javier")
        cy.wait(tiempo)

        cy.get("#firstname").should("be.visible").as("Ap")
        cy.get("#surname").type("Antonio Andriani")

        cy.get("#age").should("be.visible").as("Edad")
        cy.get("#country").should("be.visible").as("Pais")
        cy.get("#notes").should("be.visible").as("Descripcion")

        cy.get("@Edad").type("40")
        cy.get("@Pais").select("Argentina").should("have.value", "Argentina")
        cy.get("@Descripcion").type("Esto es una descripcion")

        cy.get("[type='submit']").click()
        
    })
    

})