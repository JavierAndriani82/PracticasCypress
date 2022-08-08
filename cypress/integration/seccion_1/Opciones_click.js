/// <reference types="Cypress"/>
// para que funcionen los comandos

require('cypress-plugin-tab')

describe("Opciones de click", () => {

    it("Click Sencillo", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title('eq', 'OrangeHRM' )
        cy.wait(1500)

        cy.get("#txtUsername").type("Admin").tab().
        type("admin123")

        cy. get(".button").should("be.visible").click()
        cy.wait(1500)
        cy. get("#menu_admin_viewAdminModule > b").should("be.visible").click()
        cy.wait(1500)
        cy. get("#menu_time_viewTimeModule > b").should("be.visible").click()
    

        //una vez mas
    })

})// Cierre de Describe

