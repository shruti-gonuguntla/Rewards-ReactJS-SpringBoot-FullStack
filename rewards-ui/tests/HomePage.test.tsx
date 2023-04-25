/// <reference types="Cypress" />
import { getRewardPoints } from '../src/utils/Utils'
export { };

describe('Home Page', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/api/customers', { fixture: 'Customers.json' })
        cy.intercept('GET', '**/transactions', { fixture: 'CustomerTxn.json' })
        cy.visit('http://localhost:3000')
    })
    it('should display list of customers', () => {
        
        cy.get(`[id = "select-customers"]`).should(`have.text`, `John Smith`);
        cy.get(`[data-cy = "input-rewards-by-customer"]`).click().then(()=>{
            cy.get(`ul li`).its('length').should('be.eq',6)
        });
    })
    it('should display selected customer', () => {
        cy.get(`[data-cy = "input-rewards-by-customer"]`).click()
        cy.get(`[data-cy = "select-option-Krishna"]`).click();
        cy.get(`[id = "select-customers"]`).should(`have.text`, `Krishna`); 
    })
    it('should display last three months', () => {
        
        cy.get(`[id = "select-month"]`).should(`have.text`, `All`);
        cy.get(`[data-cy = "input-monthly-rewards"]`).click().then(()=>{
            cy.get(`ul li`).its('length').should('be.eq',4)
        });
        cy.get(`[data-cy = "select-option-Feb"]`).click();
        cy.get(`[id = "select-month"]`).should(`have.text`, `Feb`); 
    })
    it('should display customer transactions', () => {
        cy.get(`[data-testid="Table"]`).children().should('have.length', 2);
        cy.get(`[data-testid="TableBody"]`).children().should('have.length', 6);
        const expected = [
            {
                "id": "1",
                "description": "Walmart Misc",
                "price": 120.0,
                "dateTime": "02-04-2023 09:00:10 AM"
            },
            {
                "id": "2",
                "description": "Schnucks Misc",
                "price": 75.0,
                "dateTime": "03-14-2023 11:00:22 AM"
            },
            {
                "id": "3",
                "description": "Restaurant bill",
                "price": 94.0,
                "dateTime": "03-01-2023 12:30:40 PM"
            },
            {
                "id": "4",
                "description": "Mobile bill pay",
                "price": 20.0,
                "dateTime": "04-14-2023 02:05:58 PM"
            },
            {
                "id": "5",
                "description": "Internet bill pay",
                "price": 55.0,
                "dateTime": "04-21-2023 04:07:12 PM"
            },
            {
                "id": "6",
                "description": "Other",
                "price": 15.0,
                "dateTime": "04-23-2023 04:07:12 PM"
            }
        ]
        expected.forEach((exp, i) => {
            cy.get(`[data-testid="TableBody"]`)
                .children()
                .eq(i)
                .should(
                    'contain.html',
                    `<div class="Cell MuiBox-root css-0">${exp.description}</div><div class="Cell MuiBox-root css-0">${exp.price}</div><div class="Cell MuiBox-root css-0">${getRewardPoints(exp.price)}</div><div class="Cell MuiBox-root css-0">${exp.dateTime}</div>`
                );
        });
    });
    it('should display customer transactions per month', () => {
        cy.get(`[data-cy = "input-monthly-rewards"]`).click()
        cy.get(`[data-cy = "select-option-Mar"]`).click();
        cy.get(`[id = "select-month"]`).should(`have.text`, `Mar`); 
        cy.get(`[data-testid="Table"]`).children().should('have.length', 2);
        cy.get(`[data-testid="TableBody"]`).children().should('have.length', 2);
        const expected = [
        
            {
                "id": "2",
                "description": "Schnucks Misc",
                "price": 75.0,
                "dateTime": "03-14-2023 11:00:22 AM"
            },
            {
                "id": "3",
                "description": "Restaurant bill",
                "price": 94.0,
                "dateTime": "03-01-2023 12:30:40 PM"
            }
        ]
        expected.forEach((exp, i) => {
            cy.get(`[data-testid="TableBody"]`)
                .children()
                .eq(i)
                .should(
                    'contain.html',
                    `<div class="Cell MuiBox-root css-0">${exp.description}</div><div class="Cell MuiBox-root css-0">${exp.price}</div><div class="Cell MuiBox-root css-0">${getRewardPoints(exp.price)}</div><div class="Cell MuiBox-root css-0">${exp.dateTime}</div>`
                ); 
        });
    });
})


