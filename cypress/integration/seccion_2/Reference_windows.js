/// <reference types="Cypress"/>
// para que funcionen los comandos



describe("Referencias a windows", () => {

    it("Windows propiedades a Charset", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title('eq', 'The Number Game')
        cy.wait(1500)

        cy.document().should("have.property", "charset").and('eq', 'UTF-8')
    
    })

    it.only("Windows URL", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title('eq', 'The Number Game')
        cy.wait(1500)

        cy.url().should("include", "random-number.html")
        cy.url().should("eq", "https://testsheepnz.github.io/random-number.html")
    
    })

})