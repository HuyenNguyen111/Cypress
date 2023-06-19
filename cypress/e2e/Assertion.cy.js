describe('Assertion', () => {

    it('Implicit Assertion', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // cy.url().should("include","orangehrmlive.com")
        // cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should("contain","demo.orangehrmlive.com/web")

        // cy.url().should("include","orangehrmlive.com")
        // .should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .should("contain","demo.orangehrmlive.com/web")

        cy.url().should("include","orangehrmlive.com")
        .and("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and("contain","orangehrm")
        .and("not.contain","greenhrm")

        cy.title('include','Orange')
        .and('eq',"OrangeHRM")
        .and('contain','HRM')
    })

  })