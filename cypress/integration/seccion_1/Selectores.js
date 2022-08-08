/// <reference types="Cypress"/>
// para que funcionen los comandos

require('cypress-xpath')


describe("Tipo de Selectores", () => {

    it("Selector por ID", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('eq', 'ToolsQA')
        cy.wait(1500)

        cy.get("#userName").should("be.visible").type("Javier")
        cy.get("#userEmail").should("be.visible").type("andrianijavier1@gmail.com")
    
    })


    it("Selector por atributos", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('eq', 'ToolsQA')
        cy.wait(1500)

        cy.get("[placeholder='Full Name']").should("be.visible").type("Javier Antonio Andriani")
        
    
    })

    it("Selector por Xpath", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('eq', 'ToolsQA')
        cy.wait(1500)

        cy.xpath("//*[@id='userName']").should("be.visible").type("Javier Antonio Andriani")
        cy.xpath("//input[@id='userEmail']").should("be.visible").type("andrianijavier@gmail.com")    
    
    })


    it("Selector por Contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title('eq', 'ToolsQA')
        cy.wait(1500)

        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(2000)
        cy.get(".custom-control-label").contains("Other").click()   

    
    })


    it.only("Selector por Copy Selector", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title('eq', 'ToolsQA')
        cy.wait(1500)

        cy.get("#userNumber").should("be.visible").type("1121708417")
        
    
    })

})// Cierre de Describe

