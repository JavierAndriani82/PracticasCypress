/// <reference types="Cypress"/>
// para que funcionen los comandos


import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe("Manejo de Invoke", () => {

    it("Invoke text", () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title('eq', 'Input Validation')
        cy.wait(1500)

        cy.get(".page-body > :nth-child(5)").invoke("text").as("info")
        cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.")

        cy.get("[for='firstname']").invoke("text").as("title_name")

        cy.wait(1500)

        cy.get("@title_name").should("contain", "First name").then(()=>{
            cy.get("#firstname").type("Javier")
        })
    
    })

    it("Invoke estilos", () => {
        let tiempo=1500

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title('eq', 'Input Validation')
        cy.wait(tiempo)

        cy.get("[for='firstname']").invoke("attr", "style", "color:red; font-size: 50px")

        
    })

    it("Ocultar y mostrar", () => {
        let tiempo=1500

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title('eq', 'Input Validation')
        cy.wait(tiempo)

        cy.get("[for='firstname']").invoke("hide")
        cy.get("#firstname").invoke("hide")

        cy.wait(tiempo)

        cy.get("[for='firstname']").invoke("show", "3s")
        cy.get("#firstname").invoke("show", "6s")


   
    })

    it("Reto", () => {
        let tiempo=1500

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title('eq', 'Input Validation')
        
        cy.get("[for='surname']").invoke("hide")
        cy.get("#surname").invoke("hide")
        cy.wait(tiempo)

        cy.get("#firstname").should("be.visible").type("Javier Antonio").then(()=>{
            cy.wait(tiempo) 
            cy.get("[for='surname']").invoke("show", "3s")
            cy.get("#surname").invoke("show", "6s")
            cy.wait(tiempo) 

            cy.get("#surname").should("be.visible").type("Andriani")
        })

        

    })

    it("Invoke SCR", () => {
        let tiempo=1500

        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html")
        cy.title('eq', 'Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(tiempo)

        cy.xpath("//body/div[1]/div[1]/div[2]/a[1]/img[1]").invoke("attr", "src").should("include", "sponsored-by-CBT.png")
  

    })

    it.only("Invoke SCR", () => {
        let tiempo=1500

        cy.visit("https://dvwa.co.uk/")
        cy.title('eq', 'DVWA - Damn Vulnerable Web Applicationn')
        cy.wait(tiempo)

        cy.xpath("/html/body/div[1]/div/div/div/div/div/div[5]/a[2]").invoke("removeAttr", "target").click({force:true})
  

    })

})// Cierre de Describe


