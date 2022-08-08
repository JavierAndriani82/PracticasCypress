/// <reference types="Cypress"/>
// para que funciones los comandos
describe(" Funciones para type     ", () => {

    it("Type --> Entwe     ", () => {
        cy.visit("https://www.google.com/")
        cy.title('eq', 'Google')
        cy.wait(1500)

        cy.get("[name='q']").type("cypress io {enter}")
        cy.wait(1000)
        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3").click()
    
    })

})// Cierre de Describe

