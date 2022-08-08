/// <reference types="Cypress"/>

const { visible, styles } = require('ansi-colors')

// para que funcionen los comandos

require('cypress-xpath')

describe("Asserts", () => {

    it("Contains", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title('eq', 'My Store')
        cy.wait(2000)

        cy.get("#block_top_menu").contains("Women").click()
    
    })

        it("find, eq", () => {
            cy.visit("http://automationpractice.com/index.php")
            cy.title('eq', 'My Store')
            cy.wait(2000)
    
            cy.get(".product-container").find(".product-image-container").eq(0).click()
        
        })    

        
        it("busqueda de texto", () => {
            cy.visit("http://automationpractice.com/index.php")
            cy.title('eq', 'My Store')
            cy.wait(2000)
    
            cy.get(".product-container").find(".product-image-container").eq(2).click()

            cy.get("#product_condition .editable").then((e)=>{
                //cy.log(e.text())
                let estado = e.text()
                //cy.log(estado)
                if(estado=="New"){
                    cy.log("El vestido es nuevo")
                }

            })
        
        })

        it("busqueda de precio", () => {
            cy.visit("http://automationpractice.com/index.php")
            cy.title('eq', 'My Store')
            cy.wait(2000)
    
            cy.get(".product-container").find(".product-image-container").eq(3).click()

            cy.get("#our_price_display").then((e)=>{
                //cy.log(e.text())
                let precio = e.text()
                //cy.log(precio)
                precio=precio.slice(1,3)
                //cy.log(precio)
                if(precio > "30"){
                    cy.log("se nos fue del presupuesto")
                    cy.get(".breadcrumb").click()
                    cy.wait(2000)
                }else{
                    cy.log("Lo podemos comprar")  
                    cy.xpath("//*[@id='add_to_cart']/button/span").click()  
                    cy.wait(2000)
                }

            })
        
        })

        it("have.text y contain.text", () => {
            cy.visit("https://demoqa.com/text-box")
            cy.title('eq', 'ToolsQA')
            cy.wait(2000)

            cy.get("#userName").should("be.visible").type("Javier")
            cy.get("#userEmail").should("be.visible").type("Javier@gmail.com")
            cy.get("#submit").should("be.visible").click()

            cy.get("#name").should("have.text", "Name:Javier")
            cy.get("#email").should("contain.text", "Javier@gmail.com")



            
        
        })


        it("have.text + then", () => {
            cy.visit("https://demoqa.com/text-box")
            cy.title('eq', 'ToolsQA')
            cy.wait(2000)

            cy.get("#userName").should("be.visible").type("Javier")

            cy.get("#userName").should("have.value", "Javier").then(()=>{
                cy.get("#userEmail").should("be.visible").type("Javier@gmail.com")
                cy.get("#submit").should("be.visible").click()
            })
            
        
        })

        it("have.class", () => {
            cy.visit("https://demoqa.com/text-box")
            cy.title('eq', 'ToolsQA')
            cy.wait(2000)

            cy.get("#userName").should("be.visible").should("have.class", "mr-sm-2").then(()=>{
                cy.get("#userName").type("Javier")
            })
        
        
        })

        it("have.class y la funcion and", () => {
            cy.visit("https://demoqa.com/text-box")
            cy.title('eq', 'ToolsQA')
            cy.wait(2000)

            cy.get("#userName").should("be.visible").and("have.class", "mr-sm-2").then(()=>{
                cy.get("#userName").type("Javier")
            })
        
        
        })


        it("negacion en los assert(not)", () => {
            cy.visit("https://demoqa.com/text-box")
            cy.title('eq', 'ToolsQA')
            cy.wait(2000)

            cy.get("#userName").should("be.visible").and("not.have.class", "mr-sm-22").then(()=>{
                cy.get("#userName").type("Javier")
            })
        
        
        })

        it("asserts length y el css", () => {
            cy.visit("https://demo.seleniumeasy.com/table-pagination-demo.html")
            cy.title('eq', 'Selenium Easy - Table with Pagination Demo')
            cy.wait(2000)

            cy.get("#myTable >tr >td").should("have.length", 91).should("have.css", "padding", "8px")
  
        })

        it("asserts length y el css", () => {
            let tiempo = 2000
            
            cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
            cy.title('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
            cy.wait(tiempo)

            //eliminando Pop UP
            cy.get(".at-cm-no-button").should("be.visible").click({force:true})
            cy.xpath("//body/div[@id='easycont']/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]").should("be.visible").type("Demo de contenido")

            cy.wait(tiempo)
            cy.contains("[type='button']","Show Message").should("be.visible").click({force:true})
        
  
        })


        it("Reto asserts", () => {
            let tiempo = 2000
            
            cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
            cy.title('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
            cy.wait(tiempo)

            //eliminando Pop Up
            cy.get(".at-cm-no-button").should("be.visible").click({force:true})
            
            cy.get("#sum1").should("be.visible").and("have.class", "form-control").type("10")
            cy.get("#sum2").should("be.visible").and("have.class", "form-control").type("20")

            cy.contains("[type='button']", "Get Total").click()

        
  
        })

        it("Reto asserts", () => {
            let tiempo = 2000
            
            cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
            cy.title('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
            cy.wait(tiempo)

            //eliminando Pop Up
            cy.get(".at-cm-no-button").should("be.visible").click({force:true})

            let a=20
            let b=20+a
            
            cy.get("#sum1").should("be.visible").and("have.class", "form-control").type(a)
            cy.wait(tiempo)
            cy.get("#sum2").should("be.visible").and("have.class", "form-control").type(b)
            cy.wait(tiempo)
            cy.contains("[type='button']", "Get Total").click()

            cy.get("#displayvalue").should("be.visible").then((e)=>{
                let r=a+b
                cy.log("el valor de r: "+ r)
                cy.log(e.text())
                let res=e.text()

                if(r==res){
                    cy.log("Son iguales")
                }else{
                    cy.log("el resultado es incorrecto")
                }

                if(res > 50){
                    a=a-10
                    b=b-10

                    cy.get("#sum1").should("be.visible").and("have.class", "form-control").clear().type(a)
                    cy.wait(tiempo)
                    cy.get("#sum2").should("be.visible").and("have.class", "form-control").clear().type(b)
                    cy.wait(tiempo)
                    cy.contains("[type='button']", "Get Total").click()
                }else{
                    a=a+5
                    b=b+5

                    cy.get("#sum1").should("be.visible").and("have.class", "form-control").clear().type(a)
                    cy.wait(tiempo)
                    cy.get("#sum2").should("be.visible").and("have.class", "form-control").clear().type(b)
                    cy.wait(tiempo)
                    cy.contains("[type='button']", "Get Total").click()

                }

                
            })

        
  
        })

        it.only("Reto asserts", () => {
            let tiempo = 2000
            
            cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
            cy.title('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
            cy.wait(tiempo)

            //eliminando Pop Up
            cy.get(".at-cm-no-button").should("be.visible").click({force:true})

            let a=20
            let b=20+a
            
            cy.get("#sum1").should("be.visible").and("have.class", "form-control").type(a)
            cy.wait(tiempo)
            cy.get("#sum2").should("be.visible").and("have.class", "form-control").type(b)
            cy.wait(tiempo)
            cy.contains("[type='button']", "Get Total").click()

            cy.get("#displayvalue").should("be.visible").then((e)=>{
                let r=a+b
                cy.log("el valor de r: "+ r)
                cy.log(e.text())
                let res=e.text()

                if(r==res){
                    cy.log("Son iguales")
                }else{
                    cy.log("el resultado es incorrecto")
                }

                if(res > 50){
                    a=a-10
                    b=b-10

                    cy.get("#sum1").invoke("attr", "placeholder").should("contain", "Enter value").then(()=>{
                        cy.get("#sum1").clear().type(a)
                        cy.wait(tiempo)
                        cy.get("#sum1").invoke("attr", "style", "color:orange")     
                    })
                    cy.wait(tiempo)
                    cy.get("#sum2").should("be.visible").and("have.class", "form-control").clear().type(b)
                    cy.wait(tiempo)
                    cy.get("#sum2").invoke("attr", "style", "color:yellow")
                    cy.wait(tiempo)  
                    cy.contains("[type='button']", "Get Total").click()

                    cy.get("#displayvalue").should("be.visible").then((e)=>{
                        cy.get("#displayvalue").invoke("attr", "style", "color:pink")
                    })
                }else{
                    a=a+5
                    b=b+5

                    cy.get("#sum1").should("be.visible").and("have.class", "form-control").clear().type(a)
                    cy.wait(tiempo)
                    cy.get("#sum2").should("be.visible").and("have.class", "form-control").clear().type(b)
                    cy.wait(tiempo)
                    cy.contains("[type='button']", "Get Total").click()

                }

                
            })

        
  
        })
            
            
        
})// Cierre de Describe
