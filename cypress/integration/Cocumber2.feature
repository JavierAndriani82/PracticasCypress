Feature: Demo de Cucumber dos

    Esto es una demo de como utilizar Cocumber

    Scenario Outline: Demo de comcumber dos
        Given Abrir el navegador principal
        When Cargando el nombre <Nombre>
        And Cargando el apellido <Apellido>
        And Cargando el email <Email>
        Then Validar el nombre de la pagina

        Examples:
            | Nombre    | Apellido | Email               |
            | Javier    | Andriani | javier@gmail.com    |
            | Romina    | Jinks    | romina@gmail.com    |
            | Martina   | Andriani | martina@gmail.com   |
            | Valentino | Andriani | valentino@gmail.com |
            | Giuliano  | Andriani | giuliano@gmail.com  |


