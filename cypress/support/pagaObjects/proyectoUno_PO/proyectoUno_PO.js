class ProyectoUno_PO {
    visitHome(){

        let tiempo=1500
        before(() => {
            cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
            cy.title('eq', 'Selenium Easy - Input Form Demo with Validations')
            cy.wait(tiempo)
        })
    }

    SeccionUno(nombre, apellido, email, t){
    let tiempo=t
    cy.get('[placeholder="First Name"]').clear().should('be.visible').type(nombre)
    cy.wait(tiempo)
    cy.screenshot("campo nombre")
    cy.get("[placeholder='Last Name']").clear().should('be.visible').type(apellido)
    cy.wait(tiempo)
    cy.screenshot("campo apellido")
    cy.get(":nth-child(4) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(email)
    cy.wait(tiempo)
    }

    SeccionDos(telefono, direccion, Ciudad, estado, zip_code, t){
    let tiempo=t
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
    }

    SeccionTres(Dominio, descripcion, t){
    let tiempo=t
    cy.get('[placeholder="Website or domain name"]').clear().should('be.visible').type(Dominio)
    cy.wait(tiempo)
    cy.get(':nth-child(2) > label > input').should('be.visible').click({force:true})
    cy.wait(tiempo)
    cy.get('[placeholder="Project Description"]').clear().should('be.visible').type(descripcion)
    cy.wait(tiempo)
    cy.get('.btn').should('be.visible').click({force:true})
    cy.wait(tiempo)
    }
}//final 

export default ProyectoUno_PO;