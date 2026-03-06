describe('LOGIN', () => {
it('passes', () => {
cy.visit('https://www.saucedemo.com')
cy.get('[data-test="username"]').type('Elijah')
cy.get('[data-test="password"]').type('Elijah1234')
cy.get('[data-test="login-button"]').click()

  })

it('passes', () => {
cy.visit('https://www.saucedemo.com')
cy.get('[data-test="username"]').type('standard_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()  
cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
cy.get('[data-test="remove-sauce-labs-backpack"]').click()
cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
cy.get('[data-test="shopping-cart-link"]').click()
cy.get('[data-test="checkout"]').click()
cy.get('[data-test="firstName"]').type('Young')
cy.get('[data-test="lastName"]').type('Hee')
cy.get('[data-test="postalCode"]').type('234')
cy.get('[data-test="continue"]').click()
cy.get('[data-test="finish"]').click()
cy.get('[data-test="back-to-products"]').click()
  })

})