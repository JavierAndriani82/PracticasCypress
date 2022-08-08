// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { zip } from "lodash"


Cypress.Commands.add("Texto_visible", (selector, texto, t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add("Texto_visible_xpath", (selector, texto, t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add("Click", (selector, t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo)
})

Cypress.Commands.add("Click_force", (selector, t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add("Click_force_xpath", (selector, t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add("Bloque_Selenium_Easy", (nombre, apellido, email, telefono, zip_code, t ) => { 
    let tiempo=t
    cy.get('[placeholder="First Name"]').should('be.visible').type(nombre)
    cy.wait(tiempo)
    cy.get("[placeholder='Last Name']").should('be.visible').type(apellido)
    cy.wait(tiempo)
    cy.get(":nth-child(4) > .inputGroupContainer > .input-group > .form-control").should('be.visible').type(email)
    cy.wait(tiempo)
    cy.xpath('//*[@id="contact_form"]/fieldset/div[4]/div/div/input').should('be.visible').type(telefono)
    cy.wait(tiempo)
    cy.get("[placeholder='Zip Code']").should('be.visible').type(zip_code)
    cy.wait(tiempo)
    cy.get(":nth-child(1) > label > input").should('be.visible').click({force:true})
    cy.wait(tiempo)
    cy.get(':nth-child(2) > label > input').should('be.visible').click({force:true})
    cy.wait(tiempo)
})


Cypress.Commands.add("Bloque_Reto_form", (nombre, apellido, email, telefono, direccion, Ciudad, estado, zip_code, Dominio, descripcion, t ) => { 
    let tiempo=t
    cy.get('[placeholder="First Name"]').clear().should('be.visible').type(nombre)
    cy.wait(tiempo)
    cy.get("[placeholder='Last Name']").clear().should('be.visible').type(apellido)
    cy.wait(tiempo)
    cy.get(":nth-child(4) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(email)
    cy.wait(tiempo)
    cy.xpath('//*[@id="contact_form"]/fieldset/div[4]/div/div/input').clear().should('be.visible').type(telefono)
    cy.wait(tiempo)
    cy.get('[placeholder="Address"]').should('be.visible').clear().type(direccion)
    cy.wait(tiempo)
    cy.get('[placeholder="city"]').should('be.visible').clear().type(Ciudad)
    cy.wait(tiempo)
    cy.xpath('//*[@id="contact_form"]/fieldset/div[7]/div/div/select').select(estado, {force:true})
    cy.wait(tiempo)
    cy.get("[placeholder='Zip Code']").should('be.visible').clear().type(zip_code)
    cy.wait(tiempo)
    cy.get('[placeholder="Website or domain name"]').clear().should('be.visible').type(Dominio)
    cy.wait(tiempo)
    cy.get(':nth-child(2) > label > input').should('be.visible').click({force:true})
    cy.wait(tiempo)
    cy.get('[placeholder="Project Description"]').clear().should('be.visible').type(descripcion)
    cy.wait(tiempo)
    cy.get('.btn').should('be.visible').click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add("Validar_campo", (selector, men, nombre_campo, t) => { 
cy.xpath(selector).should("be.visible").then((val)=> {
    let dato=val.text()
    let mensaje=men
    expect(dato).to.contain(mensaje)
    if(dato==mensaje){
    cy.log("###############")
    cy.log("El Campo "+ nombre_campo +" no es valido")
    cy.log("###############")

        }
    })
})


Cypress.Commands.add("Validar_campo2", (selector, men, nombre_campo, t) => { 
    cy.xpath(selector).should("be.visible", men).then(()=> {
        cy.log("###############")
        cy.log("El Campo "+ nombre_campo +" no es valido")
        cy.log("###############")
        })
    })