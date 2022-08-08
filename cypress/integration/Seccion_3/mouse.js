/// <reference types="Cypress"/>
// para que funcionen los comandos

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

describe("Cypress evento mouse", () => {

    it("Drag and Drop", () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title('eq', 'The Internet')

        cy.wait(2000)

        cy.get("#column-a").drag("#column-b",{force:true})
    
    })

    it("Drag and Drop 2", () => {
        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html")
        cy.title("'eq", "Selenium Easy Demo - Drag and Drop Demo")

        cy.wait(2000)

        cy.get("#todrag > :nth-child(2)").drag("#mydropzone", { position: 'left' })
        cy.wait(2000)
        cy.get("#todrag > :nth-child(3)").drag("#mydropzone", { position: 'left' })
        cy.wait(2000)
        cy.get("#todrag > :nth-child(4)").drag("#mydropzone", { position: 'left' })
        cy.wait(2000)
        cy.get("#todrag > :nth-child(5)").drag("#mydropzone", { position: 'left' })

    
    })

    it.only("Mouse over e invoke(evita que abra en otra pestaña)", () => {
        let tiempo = 2000
        cy.visit("https://www.way2automation.com/")
        cy.title("eq", "Get Online Selenium Certification Course | Way2Automation")

        cy.wait(tiempo)

        cy.contains("Video Tutorial").trigger('mouseover')
        cy.wait(tiempo)


        cy.contains("Cypress").click()
        //el invoke borra el target para que no abra en otra pagina
        //cy.contains("Cypress").invoke("removeAttr", "target").click()
    
    })  

    it("slider e invoke", () => {
        let tiempo = 2000
        cy.visit("https://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html")
        cy.title("'eq", "Selenium Easy - Drag and Drop Range Sliders ")
        cy.wait(tiempo)

        cy.get("#slider1 > .range > input").invoke("attr", "value", "98")
        cy.wait(tiempo)
        cy.get("#slider3 > .range > input").invoke("attr", "value", "98")
        cy.wait(tiempo)
        cy.get("#slider5 > .range > input").invoke("attr", "value", "98")


        
    
    })  

})// Cierre de Describe
