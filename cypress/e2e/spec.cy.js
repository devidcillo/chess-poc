describe('empty spec', () => {
  it('allows a valid pawn move', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input').type('a2a3')
    cy.get('input').type('{enter}')

    cy.get('[data-square="a2"]').find('path').should('not.exist')
    cy.get('[data-square="a3"]').find('path').should('exist')
  })
})
