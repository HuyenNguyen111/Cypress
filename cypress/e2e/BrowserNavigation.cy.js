describe("Navigation", () => {

    it("Navigation Test", () => {
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq', 'Your Store') // home page

        cy.xpath("//a[text()='Cameras']").click()
        cy.xpath("//*[@id='content']//h2").should("have.text","Cameras")

        cy.go("back")
        cy.title().should('eq', 'Your Store') // home page

        cy.go("forward")
        cy.xpath("//*[@id='content']//h2").should("have.text","Cameras")

        cy.go(-1) //home
    })

})