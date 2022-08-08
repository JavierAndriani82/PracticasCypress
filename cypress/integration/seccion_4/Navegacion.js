///  <reference types='Cypress' />

import { gold } from 'color-name';
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Navegacion entre las paginas', () => {
    it('Back, Forward', () => {
        let tiempo=1500
        cy.visit('https://demo.seleniumeasy.com/')
        cy.title('eq', 'Selenium Easy - Best Demo website to practice Selenium Webdriver Online')
        cy.wait(tiempo)

        cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(1)').should('be.visible').click({force:true})
        cy.wait(tiempo)
        cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(2) > a').should('be.visible').click({force:true})
        cy.wait(tiempo)

        cy.go("back")
        cy.wait(tiempo)
        cy.go("forward")
    })

    it.only('Reload', () => {
        let tiempo=1500
        cy.visit('https://demo.seleniumeasy.com/')
        cy.title('eq', 'Selenium Easy - Best Demo website to practice Selenium Webdriver Online')
        cy.wait(tiempo)

        cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(1)').should('be.visible').click({force:true})
        cy.wait(tiempo)
        cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(5) > a').should('be.visible').click({force:true})
        cy.wait(tiempo)

        cy.get('[name="first_name"]').should("be.visible").type('Javier')
        cy.wait(tiempo)
        cy.get('[name="last_name"]').should("be.visible").type('Andriani')
        cy.wait(tiempo)
        
        cy.reload()
        cy.wait(tiempo)
        cy.go("back")
    
        
    })
})