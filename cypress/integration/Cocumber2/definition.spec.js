

Given ('Abrir el navegador principal', ()=> {
    cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
})

When ('Cargando el nombre {word}', (nombre)=> {
    cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(nombre)
})

And('Cargando el apellido {word}', (apellido)=> {
    cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(apellido)
})

And('Cargando el email {word}', (email)=> {
    cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(email)
})

Then('Validar el nombre de la pagina',()=> {
    cy.title('eq', 'Selenium Easy - Input Form Demo with Validations')
})



