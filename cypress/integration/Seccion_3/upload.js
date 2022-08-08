/// <reference types="Cypress"/>
// para que funcionen los comandos

require('cypress-xpath')
import 'cypress-file-upload'

describe("Upload imagenes", () => {

    it("Cargando imagenes", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title('eq', 'ToolsQA')
        cy.wait(2000)


        const ruta='Captura.PNG'
        cy.get('[type="file"]').attachFile(ruta)
    
    })

})// Cierre de Describe