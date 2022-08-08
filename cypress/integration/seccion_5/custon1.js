///  <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Hooks ejemplos', () => {
    let tiempo=1500
    before(() => {
        ///recarga en cada test
        cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
        cy.title('eq', 'Selenium Easy - Input Form Demo with Validations')
        cy.wait(tiempo)
    })

    it('Demo uno', () =>{
        cy.Texto_visible("[placeholder='First Name']", "Javier", 2000)
        cy.Texto_visible("[placeholder='Last Name']", "Andriani", 2000)
        cy.Texto_visible(":nth-child(4) > .inputGroupContainer > .input-group > .form-control", "andriani@gmail.com", 1500)
        cy.Texto_visible_xpath('//*[@id="contact_form"]/fieldset/div[4]/div/div/input', "1565256523", 1500)
        cy.Click(":nth-child(1) > label > input", 1500)
        cy.Click_force(':nth-child(2) > label > input', 1500)
        cy.Click_force_xpath('//*[@id="contact_form"]/fieldset/div[13]/div/button', 500)
    })

    it('Demo dos', ()=>{
        cy.Bloque_Selenium_Easy("Javier", "Andriani", "andriani@gmail.com", "1121708417", "1824", 1500)
    })

    it.only('Demo dos', ()=>{
        cy.Bloque_Reto_form("r", "Andriani", "andrianijavier@gmail.com", "1121708417", "Primero de Mayo", "Buenos Aires", "Oregon", "1824", "andriani.com", "Automation test", 1000)
        //cy.Validar_campo("//*[@id='contact_form']/fieldset/div[1]/div/small[1]", "Please enter more than 2 characters", "Nombre", 1000 )
        cy.Validar_campo2("//*[@id='contact_form']/fieldset/div[1]/div/small[1]", "Please enter more than 2 characters", "Nombre", 1000 )
    })
    it('Demo tres', ()=>{
        cy.Bloque_Reto_form("Diego", "Aranda", "andrianijavier@gmail.com", "1121708417", "Primero de Mayo", "Buenos Aires", "Alabama", "1824", "andriani.com", "test manual", 1000)
    })
    it('Demo cuatro', ()=>{
        cy.Bloque_Reto_form("Pedror", "Aranda", "andrianijavier@gmail.com", "1121708417", "Primero de Mayo", "Cordoba", "Colorado", "1824", "andriani.com", "Automation manual", 1000)
    })
})