describe('LOGIN', () => {
it('verify login with valid credentials', ()=> {
cy.visit('https://www.saucedemo.com')                       
cy.get('[data-test="username"]').type('standard_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()
    })  

it('verify login valid credentials', ()=> {
cy.visit('https://www.saucedemo.com')
cy.get('[data-test="username"]').type('locked_out_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()    
    })

it('verify login valid credentials', ()=> {
cy.visit('https://www.saucedemo.com')
cy.get('[data-test="username"]').type('problem_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()        
    })

it('verify login valid credentials', ()=> {
cy.visit('https://www.saucedemo.com')
cy.get('[data-test="username"]').type('performance_glitch_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()    
    })

it('verify login valid credentials', ()=> {
cy.visit('https://www.saucedemo.com')
cy.get('[data-test="username"]').type('error_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()    
    })

it('verify login valid credentials', ()=> {
cy.visit('https://www.saucedemo.com')
cy.get('[data-test="username"]').type('visual_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()    
    })    
})