
function selectMenuItem(itemName) {
  cy.contains('a', itemName).invoke('attr', 'aria-expanded').then(attr => {
    if (attr.includes('false')) { // not expanded
      cy.contains('a', itemName).click()
    }
  })
}

class NavigationPage {

  formLayoutsPage() {
    selectMenuItem('Forms')
    cy.contains('Form Layouts').click()
  }

  datePickerPage() {
    selectMenuItem('Forms')
    cy.contains('Datepicker').click()
  }

  toasterPage() {
    selectMenuItem('Modal & Overlays')
    cy.contains('Toastr').click()
  }

  tooltipPage() {
    selectMenuItem('Modal & Overlays')
    cy.contains('Tooltip').click()
  }
}

export const navigateTo = new NavigationPage()