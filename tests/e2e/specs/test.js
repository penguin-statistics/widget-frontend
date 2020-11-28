// https://docs.cypress.io/api/introduction/api.html

describe('basic functionality', () => {
  it('received a document', () => {
    cy.visit('/')
  })
  it('contains basic element `header`', () => {
    cy.get('[penguin\\:element="header"]')
  })
  it('contains basic element `content`', () => {
    cy.get('[penguin\\:element="content"]')
  })
  it('contains basic element `footer`', () => {
    cy.get('[penguin\\:element="footer"]')
  })
})
