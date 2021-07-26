'use strict';

describe('Heading text', () => {
  it('contains the correct title', () => {
    cy.visit('http://localhost:3000/excample-1');

    cy.get('h1')
      .invoke('text')
      .should('equal', 'My Awesome Web Application');
  })
})