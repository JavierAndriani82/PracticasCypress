

describe("Bienvenido al curso de Cypress seccion 1", () => {

    it("Mi primer Test -> Hola Mundo", () => {

        cy.log("Hola Mundo")
        cy.wait(1500)
    })

    it("Segundo Test -> campo name", () => {

        cy.visit("https://demoqa.com/text-box")

        cy.get("#userName").type("Javier")
        cy.wait(2500)
    })


})