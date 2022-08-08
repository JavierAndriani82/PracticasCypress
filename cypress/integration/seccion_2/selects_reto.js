/// <reference types="Cypress"/>
// para que funcionen los comandos

require('cypress-xpath')

describe("Reto de los selects", () => {

    it("Nueva Seccion Select reto", () => {
        cy.visit("https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html")
        cy.title('eq', 'Selenium Easy - JQuery Dual List Box Demo')
        
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/select[1]").should("be.visible").select(["Sophia", "Valentina", "Luiza"]).
        then(()=>{
            cy.wait(2000)
            cy.get(".pAdd").should("be.visible").click().then(()=>{
                cy.wait(2000)
                cy.get(".pAddAll").should("be.visible").click().then(()=>{
                    cy.wait(2000)
                    cy.get(".pRemoveAll").should("be.visible").click().then(()=>{
                        cy.wait(2000)
                        cy.log("Todo listo!!")
                    })
                })
            })
        })

    })


})// Cierre de Describe
