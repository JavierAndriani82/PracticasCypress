/// <reference types="Cypress"/>
// para que funcionen los comandos
import 'cypress-file-upload';

require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')



describe("Carga por Fixture", () => {
    

    it("Test dos cargando desde JSON", () => {
        

        cy.fixture("datos2").then(testdata =>{
            testdata.forEach(data => {
                const d_nombre=data.nombre
                const d_apellido=data.apellido
                const d_email=data.email
                const d_telefono=data.telefono

                cy.visit("https://demo.seleniumeasy.com/input-form-demo.html")
                cy.title("eq", "Selenium Easy - Input Form Demo with Validations")
                cy.wait(2000)

                
                cy.get("[name=first_name]").should("be.visible").type(d_nombre)
                cy.get("[name=last_name]").should("be.visible").type(d_apellido)
                cy.get("[name='email']").should("be.visible").type(d_email)
                cy.get("[name='phone']").should("be.visible").type(d_telefono)
                cy.get(".btn").should("be.visible").click({force:true})


                
            })
        })

        

        })
        
    })

