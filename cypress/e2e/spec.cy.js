describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    
    cy.get('input').type('a2a3')
    cy.get('input').type('{enter}')
    
//FIXME: Add assertion
  })
})
