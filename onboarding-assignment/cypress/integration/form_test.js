// form_test.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Test #1', () => {
    it('Types names into field', () => {
        cy.visit('localhost:3000')

        cy.get('name').type('name')
        cy.get('EMail').type('mail@mail.com')
        cy.get('Password').type('password')
    })
})

describe('Test #2', () => {
    it('Verifies user can submit form data', () => {
        cy.get('checkbox').click()

    })
})