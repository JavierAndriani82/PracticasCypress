/// <reference types="Cypress"/>
// para que funcionen los comandos
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

//ejemplo 1
/*describe("Carga por Fixture", () => {

    before(function(){
        cy.fixture("datos2").then(function(data){
            //this.data=data
            globalThis.data=data
        })
    })

    it("Test uno cargando desde JSON", () => {
        cy.visit("https://demo.seleniumeasy.com/input-form-demo.html")
        cy.title("eq", "Selenium Easy - Input Form Demo with Validations")
        cy.wait(2000)

        cy.get("[name=first_name]").should("be.visible").type(data.nombre)
        cy.get("[name=last_name]").should("be.visible").type(data.apellido)
        cy.get("[name='email']").should("be.visible").type(data.email)
        cy.get("[name='phone']").should("be.visible").type(data.telefono)
        cy.get(".btn").should("be.visible").click({force:true})

    
    })

})*/

//ejemplo 2 con alias

describe("Carga por Fixture", () => {

    before(function(){
        cy.fixture("datos2").as("datos_json")//el alias
        })
    

    it("Test uno cargando desde JSON", () => {
        cy.visit("https://demo.seleniumeasy.com/input-form-demo.html")
        cy.title("eq", "Selenium Easy - Input Form Demo with Validations")
        cy.wait(2000)

        cy.get("@datos_json").then((data)=>{
            cy.get("[name=first_name]").should("be.visible").type(data.nombre)
            cy.get("[name=last_name]").should("be.visible").type(data.apellido)
            cy.get("[name='email']").should("be.visible").type(data.email)
            cy.get("[name='phone']").should("be.visible").type(data.telefono)
            cy.get(".btn").should("be.visible").click({force:true})

        })
        
    })

})

