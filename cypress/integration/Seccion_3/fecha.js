/// <reference types="Cypress"/>
// para que funcionen los comandos
require('cypress-xpath')
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')


describe("", () => {

    it("Fecha uno", () => {
        let tiempo=2000
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title('eq', 'Selenium Easy - Best Demo website for Bootstrap Date picker')
        cy.wait(tiempo)

        cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").click()
        cy.wait(tiempo)
        //cy.get(":nth-child(2) > .today").should("be.visible").click()
        cy.get(".today").first().click({force:true})
        //los dos son validos
 
    
    })

    it.only("Fecha dos", () => {
        let tiempo=2000
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title('eq', 'Selenium Easy - Best Demo website for Bootstrap Date picker')
        cy.wait(tiempo)

        /*cy.get("[placeholder='Start date']").should("be.visible").type("10/12/2022").tab()
        cy.wait(tiempo)
        cy.get("[placeholder='End date']").should("be.visible").type("15/12/2022")*/

        /*cy.get("[placeholder='Start date']").should("be.visible").type("10/12/2022 {esc}")
        cy.wait(tiempo)
        cy.get("[placeholder='End date']").should("be.visible").type("15/12/2022 {esc}")*/

        cy.get("[placeholder='Start date']").should("be.visible").type("10/12/2022 {esc}").tab().type("18/12/2022")

        //los 3 son validos
    
    })


})// Cierre de Describe