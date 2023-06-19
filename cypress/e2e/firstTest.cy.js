describe('My first test', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains("type").click()
    cy.url().should('include', '/commands/actions')
  })
})