describe("Custom Command" , () => {
    it('Login Web', () => {
        cy.login("standard_user", "secret_sauce")
    })
})