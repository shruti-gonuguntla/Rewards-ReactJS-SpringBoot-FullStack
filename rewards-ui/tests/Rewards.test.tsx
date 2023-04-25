/// <reference types="Cypress" />
export { };

describe('Rewards Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/rewards', { fixture: 'Rewards.json' })
    cy.intercept('GET', '**/api/customers', { fixture: 'Customers.json' })
    cy.intercept('GET', '**/transactions', { fixture: 'CustomerTxn.json' })
    cy.visit('http://localhost:3000')
  })
  it('should run display rewards correctly', () => {
    cy.clearLocalStorage();
    cy.get(`[data-testid="viewAllRewards"]`).click();

    cy.get(`[data-testid="Table"]`).children().should('have.length', 2);
    cy.get(`[data-testid="TableBody"]`).children().should('have.length', 6);
    const expected = [
      {
        "id": 1,
        "customerName": "John Smith",
        "rewardPoints": 500
      },
      {
        "id": 2,
        "customerName": "Lucky",
        "rewardPoints": 400
      },
      {
        "id": 3,
        "customerName": "Krishna",
        "rewardPoints": 600
      },
      {
        "id": 4,
        "customerName": "Raj",
        "rewardPoints": 300
      },
      {
        "id": 5,
        "customerName": "Pete",
        "rewardPoints": 450
      },
      {
        "id": 6,
        "customerName": "Tejas LLC",
        "rewardPoints": 800
      }
    ]
    expected.forEach((exp, i) => {
      cy.get(`[data-testid="TableBody"]`)
        .children()
        .eq(i)
        .should(
          'contain.html',
          `<div class="Cell MuiBox-root css-0">${exp.customerName}</div><div class="Cell MuiBox-root css-0">${exp.rewardPoints}</div>`
        );
    });
  });
})




