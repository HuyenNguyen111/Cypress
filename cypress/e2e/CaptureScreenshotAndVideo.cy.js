describe("My suite" , () => {

    it('Capture Screnshot & Video', () => {
        cy.visit("http://automationpractice.pl/index.php")
        cy.screenshot("homepage")
        cy.wait(5000)
        cy.get("img.logo.img-responsive").screenshot("logo")
    })

})