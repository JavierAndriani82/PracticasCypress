/// <reference types="Cypress"/>
// para que funcionen los comandos

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Segundo reto", () => {

    it("Probando la aplicacion", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title('eq', 'Computers database')
        cy.wait(1500)

        //buscando

        cy.xpath("//*[@id='searchbox']").should("be.visible").type("ACE")
        cy.wait(2000)
        cy.xpath("//input[@id='searchsubmit']").should("be.visible").click()
        cy.wait(2000)
        
        //add
        cy.get("#add").should("be.visible").click()
        cy.xpath("//*[@id='name']").should("be.visible").type("Robot")
        cy.get("#introduced").should("be.visible").type("1982-02-06").tab().type("2022-02-01")
        cy.get("#company").should("be.visible").select("Nokia").should("have.value", "16").wait(2000)
        cy.xpath("//body/section[@id='main']/form[1]/div[1]/input[1]").should("be.visible").click()

        //buscando lo creado
        cy.xpath("//*[@id='searchbox']").should("be.visible").type("Robot")
        cy.wait(2000)
        cy.xpath("//input[@id='searchsubmit']").should("be.visible").click()
        




    
    })

})// Cierre de Describe

