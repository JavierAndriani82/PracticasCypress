declare namespace Cypress {
    interface Chainable<Subject> {
        Texto_visible(selector: any, texto: any, t: any): Chainable<any>
        Texto_visible_xpath(selector: any, texto: any, t: any): Chainable<any>
        Click(selector: any, t: any): Chainable<any>
        Click_force(selector: any, t: any): Chainable<any>
        Click_force_xpath(selector: any, t: any): Chainable<any>
        Bloque_Selenium_Easy(nombre: any, apellido: any, email: any, telefono: any, zip_code: any, t: any): Chainable<any>
        Bloque_Reto_form(nombre: any, apellido: any, email: any, telefono: any, direccion: any, Ciudad: any, estado: any, zip_code: any, Dominio: any, descripcion: any, t: any): Chainable<any>
        Validar_campo(selector: any, men: any, nombre_campo: any, t: any): Chainable<any>
        Validar_campo2(selector: any, men: any, nombre_campo: any, t: any): Chainable<any>
  }
}