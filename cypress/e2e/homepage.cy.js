describe('E-Kart Homepage and Product Search', () => {

beforeEach(() => {
cy.visit('http://127.0.0.1:5500/index.html')
})

it('should load the homepage successfully', () => {
cy.get('body').should('be.visible')
cy.title().should('not.be.empty')
})

it('should display matching products for a valid search', () => {
cy.get('#search').type('Wireless Mouse')

cy.get('#product-list')
  .should('contain.text', 'Wireless Mouse')
  .and('contain.text', '₹599')

cy.get('#result-count')
  .should('have.text', '1 product(s) found')

})

it('should display no products for an invalid search', () => {
cy.get('#search').type('XYZ123Invalid')

cy.get('#product-list')
  .should('contain.text', 'No products found')

cy.get('#result-count')
  .should('have.text', '0 product(s) found')

})

})