///  <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Hooks ejemplos', () => {
    let tiempo=1500     
    before(() => {
        ///recarga solo una vez
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.title('eq', 'Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(tiempo)
    })

    it('Test uno', () =>{
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.wait(tiempo)
    })

    it('Test dos', () =>{
        cy.get('[type="checkbox"]').uncheck().should('be.not.checked')
        cy.wait(tiempo)
    })

    it('Test tres', () =>{
        cy.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[3]/label/input').check().should('be.checked')
        cy.wait(tiempo)
    })
})

describe('Hooks ejemplos', () => {
    let tiempo=1500     
    beforeEach(() => {
        ///recarga en cada test
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.title('eq', 'Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(tiempo)
    })

    it('Test uno', () =>{
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.wait(tiempo)
    })

    it('Test dos', () =>{
        cy.get('[type="checkbox"]').uncheck().should('be.not.checked')
        cy.wait(tiempo)
    })

    it('Test tres', () =>{
        cy.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[3]/label/input').check().should('be.checked')
        cy.wait(tiempo)
    })
})


