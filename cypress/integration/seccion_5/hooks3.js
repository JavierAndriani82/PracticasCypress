///  <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Hooks reto', () => {
    let tiempo=1500
    before(() => {
        ///recarga en cada test
        cy.visit('https://slimwiki.com/sign_in')
        cy.title('eq', 'SlimWiki — Sign in')
        cy.wait(tiempo)
        cy.get('#user_email').should('be.visible').type('julioarandadev@gmail.com')
        cy.wait(tiempo)
        cy.get('#user_password').should('be.visible').type('SI2020SI')
        cy.wait(tiempo)
        cy.get('#new_user > .btn').should('be.visible').click({force:true})
        cy.wait(tiempo)
    })

    after(() => {
        cy.log("############### Ultimo ciclo ################")
        cy.get('.dropdown-toggle > .fa').should('be.visible').click({force:true})
        cy.wait(tiempo)
        cy.get('.dropdown-menu > :nth-child(8) > a').should('be.visible').click({force:true})
        cy.wait(tiempo)

    })

    it('Test uno', () =>{
        cy.get('span > .internal').should('be.visible').click({force:true})
        cy.wait(5000)
    })
    
})