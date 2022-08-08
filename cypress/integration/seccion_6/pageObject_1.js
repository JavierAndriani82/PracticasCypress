import ProyectoUno_PO from '../../support/pagaObjects/proyectoUno_PO/proyectoUNO_PO'

///  <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Page Object Models', () => {

    const master=new ProyectoUno_PO()

    master.visitHome()
    

    
    it.only('test Seccion Uno', ()=>{
        master.SeccionUno("Javier", "Andriani", "javier@gmail.com", 1500)
    }) 

    it('test Seccion Dos', ()=>{
        master.SeccionDos("1552523235", "Valparaiso 173", "Buenos Aires", "Arkansas", "1832", 1500)
    })

    it('test Seccion Tres', ()=>{
        master.SeccionTres("javier.com", "Este curso es lo mejor", 1500)
    })

    it('test Seccion Cuatro', ()=>{
        master.SeccionUno("Javier", "Andriani", "javier@gmail.com", 1500)
        master.SeccionDos("1567285856", "Valparaiso 173", "Buenos Aires", "Arkansas", "1832", 1500)
        master.SeccionTres("javier.com", "Lo mejor de todo", 1500)
    })

    it('test Seccion Cinco', ()=>{
        master.SeccionDos("15", "Valparaiso 173", "Buenos Aires", "Arkansas", "1832", 1500)
        cy.Validar_campo2('/html/body/div[2]/div/div[2]/section/form/fieldset/div[4]/div/div/input', 'Please supply a vaild phone number with area code', 'Telefono')
    })

    it('test Seccion Seis', ()=>{
        master.SeccionTres("javier.com", "Los", 1500)
        cy.Validar_campo2('/html/body/div[2]/div/div[2]/section/form/fieldset/div[11]/div/div/textarea', 'Please enter at least 10 characters and no more than 200', 'descripcion')

    })

})


