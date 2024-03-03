/// <reference types="Cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open Elizabeth Theme home page on local dev', () => {
	cy.visit(Cypress.env('url'));
	cy.get('input[name=password]').type('staylo').type('{enter}');
});

Then('Validate that the heading title exists', () => {
	cy.get('h1.text-xl').should('exist');
});

Then('Heading title is also correct', () => {
	cy.get('h1.text-xl').should('have.text', 'Loc Tran Digital');
});

Then('Validate that the React menu item exists', () => {
	cy.get(':nth-child(1) > .inline-flex').contains('React');
});
