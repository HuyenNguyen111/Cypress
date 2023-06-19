describe('CSS Locator', () => {

    it('css locator', () => {
      cy.visit("https://example.cypress.io/")
      cy.xpath("//a[text()='get']").click()
    })
  })