describe('Signup Test - Generate Random Email', () => {

it('should signup with a new email each time', () => {

const randomEmail = `user${Date.now()}@mail.com`

cy.visit('https://automationexercise.com/login')

cy.get('[data-qa="signup-name"]').type('Elijah')
cy.get('[data-qa="signup-email"]').type(randomEmail)
cy.get('[data-qa="signup-button"]').click()
cy.get('.clearfix > :nth-child(3)').click()
cy.get('[data-qa="password"]').type('elijah1234')
cy.get(':nth-child(6) > .row > :nth-child(1)').click()
cy.get('[data-qa="days"]').select('5')
cy.get('[data-qa="months"]').select('May')
cy.get('[data-qa="years"]').select('1990')
cy.get('[data-qa="first_name"]').type('Elijah')
cy.get('[data-qa="last_name"]').type('Hee')
cy.get('[data-qa="company"]').type('Helihjah Company')
cy.get('[data-qa="address"]').type('1, Ayobo street, Ishefun')
cy.get('[data-qa="address2"]').type('Ipaja-Ayobo')
cy.get('[data-qa="country"]').select('United States')
cy.get('[data-qa="state"]').type('Lagos')
cy.get('[data-qa="city"]').type('Ayobo')
cy.get('[data-qa="zipcode"]').type('234')
cy.get('[data-qa="mobile_number"]').type('09097957017')
cy.get('[data-qa="create-account"]').click()
cy.get('[data-qa="continue-button"]').click()

  })

it('verify login with valid credentials', ()=> {
cy.visit('https://automationexercise.com/login')
cy.get('[data-qa="login-email"]').type('mine@hee.com')
cy.get('[data-qa="login-password"]').type('elijah1234')
cy.get('[data-qa="login-button"]').click()
cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn')
.click({ force: true })
cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn')
.click({ force: true })
cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn')
.click({ force: true })
cy.get(':nth-child(9) > .product-image-wrapper > .single-products > .productinfo > .btn')
.click({ force: true })
cy.get(':nth-child(10) > .product-image-wrapper > .single-products > .productinfo > .btn')
.click({ force: true })  
cy.get('u').click()  
cy.get('.col-sm-6 > .btn').click()
cy.get('[name="message"]').type('Thank you for shopping boss')
cy.get(':nth-child(7) > .btn').click()
cy.get('[data-qa="name-on-card"]').type('Elijah Young')
cy.get('[data-qa="card-number"]').type('1234567890')
cy.get('[data-qa="cvc"]').type('009')
cy.get('[data-qa="expiry-month"]').type('05')
cy.get('[data-qa="expiry-year"]').type('1990')
cy.get('[data-qa="pay-button"]').click()
cy.get('[data-qa="continue-button"]').click()


})

})
