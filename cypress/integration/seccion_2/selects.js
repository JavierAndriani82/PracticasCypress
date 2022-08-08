/// <reference types="Cypress"/>
// para que funcionen los comandos
describe("       ", () => {

    it("Nueva Seccion Select", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title('eq', 'Selenium Easy Demo - Automate All Scenarios')
        cy.wait(2000)

        cy.get("#select-demo").should("be.visible").select("Friday").should("have.value", "Friday")
        cy.wait(2000)
        cy.get("#select-demo").should("be.visible").select("Saturday").should("have.value","Saturday")
        
    
    })

    it("Nueva Seccion Select 2", () => {
        cy.visit("www.google.com")
        cy.title('eq', 'Google')
        cy.wait(2000)

        cy.get(".gLFyf").should("be.visible").type("Ferrari").type("{enter}")
        cy.wait(2000)
        cy.get(".MUFPAc > :nth-child(2) > a").click()

    })
        
        it.only("Nueva Seccion Select 3", () => {
            cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
            cy.title('eq', 'Selenium Easy Demo - Automate All Scenarios')
            cy.wait(2000)
    
           cy.get("#multi-select").should("be.visible").select(["California", "Ohio", "Washington"]).then(()=>{
               cy.get("#printMe").should("be.visible").click()
           })
            
        
   
    
    })

   

})// Cierre de Describe
