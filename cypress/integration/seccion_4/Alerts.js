/// <reference types="Cypress"/>
// para que funcionen los comandos

require('cypress-xpath')


describe("Alertas en Cypress", () => {

    it("Alerta uno", () => {
        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html")
        cy.title().should('eq', 'Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(1500)

        cy.xpath("//body/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/a[1]").click()
        cy.wait(1500)
        cy.xpath("//*[@id='myModal0']/div/div/div[4]/a[2]").click({force:true})
        cy.wait(1500)

        cy.xpath("//body/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/a[1]").click()
        cy.wait(1500)
        cy.xpath("//*[@id='myModal0']/div/div/div[4]/a[1]").click({force:true})
    
    })

})