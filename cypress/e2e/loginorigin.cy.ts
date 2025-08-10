// cypress/e2e/google-login.cy.ts

describe('Decentraland Google Login', () => {
  it('should log in via Google', () => {
    cy.visit('https://decentraland.org/play')

    // Click "Login with Google"
    cy.contains('Continue with Google').click()

    // Handle Google login page
    cy.origin('https://accounts.google.com', () => {
      cy.get('input[type="email"]').type('tatev.yayloyan@gmail.com', { log: false })
      cy.get('#identifierNext').click()

      cy.get('input[type="password"]', { timeout: 10000 })
        .type('YAYloyan1991%%%', { log: false })
      cy.get('#passwordNext').click()
    })

    // After login, assert you’re logged in
    cy.url().should('include', '/play')
    cy.contains('Your Avatar').should('exist')
  })
})
