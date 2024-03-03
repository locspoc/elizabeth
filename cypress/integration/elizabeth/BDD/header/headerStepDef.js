/// <reference types="Cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open Elizabeth Theme home page on local dev', () => {
	cy.visit(Cypress.env('url'));
});

Then('Validate that the header exists', () => {
	cy.get('input[name=password]').type('staylo').type('{enter}');
	cy.get('h1.text-xl').should('exist');
});
