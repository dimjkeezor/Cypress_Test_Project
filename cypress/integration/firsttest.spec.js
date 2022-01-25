/// <reference types="cypress" />
describe('Conduit Sign In', () => {
it('Sign In', () => {
cy.visit('https://react-redux.realworld.io/#/login?_k=0xkab9');
cy.get(':nth-child(1) > .form-control').type('tonysoprano@mafia.nj');
cy.get(':nth-child(2) > .form-control').type('loudbreathing');
cy.get('.btn').click();
cy.get(':nth-child(4) > .nav-link').should('contain.text', 'tonysoprano');
});
});
