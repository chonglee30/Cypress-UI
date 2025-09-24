/// <reference types="cypress" />

import { onFormLayoutsPage } from "../page-objects/formLayoutsPage"
import { navigateTo } from "../page-objects/navigationPage"

beforeEach('Open Application', () => {
    cy.openHomePage()
})

it('Navigation Test', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datePickerPage()
    navigateTo.tooltipPage()
    navigateTo.toasterPage()
})

it('Test Form Layout', () => {
    navigateTo.formLayoutsPage()
    onFormLayoutsPage.submitUsingGridForm('test@test.com', 'Welcom', 1) // index 0 select 
    onFormLayoutsPage.submitBasicForm('test@test.com', 'Welcom', true)
    // Date: 10
})