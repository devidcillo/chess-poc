describe('empty spec', () => {
  it('allows a valid pawn move', () => {
    cy.visit('http://localhost:3000/')
    
    cy.get('input').type('a2a3')
    cy.get('input').type('{enter}')

    cy.get('[data-square="a2"]').find('path').should('not.exist')
    // cy.get('[data-square="a3"]').find('path').should('exist').then(cy.log)
    cy.get('[data-square="a3"]').then(cy.log)//.find('path').should('exist')
  })

  it('castling king side is possible', () => {
    cy.visit('http://localhost:3000')

    cy.get('input').type('castle')
    cy.get('input').type('{enter}')
    cy.get('input').type('{enter}')
    cy.get('input').clear()
    cy.get('input').type('0-0')
    cy.get('input').type('{enter}')

    cy.get('[data-square="e1"]').find('path').should('not.exist')
    cy.get('[data-square="h1"]').find('path').should('not.exist')
    cy.get('[data-square="f1"]').find('path').should('exist')
    cy.get('[data-square="g1"]').find('path').should('exist')
  })
})
