/// <reference types="cypress" />

describe('Test Todo App', () => {

  beforeEach(() =>{
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.injectAxe();
  })

  it('Log Any accessibility failures - all pages', () => {
    cy.checkA11y();
  })

  it('Log Any accessibility failures exclude specific element', () => {
    cy.checkA11y({exclude: ['.learn']});
  })

  it('Log Any accessibility failures - include only specific element', () => {
    cy.checkA11y('.learn');
  })

  it('Log Any accessibility failures - only critical and serious', () => {
    cy.checkA11y(null, {includedImpacts: ['critical','serious']});
  })

  it('Exclude specific accessibility rules', () => {
    cy.checkA11y(null, {
      rules: {
        'heading-order': {enabled: false},
        'region': {enabled: false},
    }});
  })
})