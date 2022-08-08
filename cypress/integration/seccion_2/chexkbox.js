/// <reference types="Cypress"/>
// para que funcionen los comandos

require('cypress-xpath')



describe("Nueva seccion checkbox", () => {

    it("check uno", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should('eq', 'Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(2000)

        cy.get("[type='checkbox']").check().should("be.checked")
        cy.wait(2000)
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")
    
    })

    it("check por seleccion", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should('eq', 'Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(2000)

        //cy.get("#isAgeSelected").check().should("be.checked")
        //cy.get(":nth-child(4) > label > .cb1-element").check()

        //otra forma

        cy.xpath("//*[@id='isAgeSelected']").click()
        cy.xpath("//*[@id='easycont']/div/div[2]/div[2]/div[2]/div[3]/label/input").click()
    
    })
    it.only("check por radios button", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-radiobutton-demo.html")
        cy.title().should('eq', 'Selenium Easy Demo - Radio buttons demo for Automation')
        cy.wait(2000)

        cy.get(".panel-body > :nth-child(3) > input").check()

    
    })

})


