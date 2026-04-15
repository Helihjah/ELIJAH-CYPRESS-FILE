let el
describe('GLOBAL FIXTURES',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.title().should('equal','Swag Labs')
        cy.fixture('example').then((sel)=>{
            el=sel
        })

})  

it('STANDARD USER',()=>{
    cy.get(el.usernameField).type(el.standardUser)
    cy.get(el.passwordField).type(el.password)
    cy.get(el.loginButton).click()
})

it('LOCKED_OUT_USER',()=>{
    cy.get(el.usernameField).type(el.lockedUser)
    cy.get(el.passwordField).type(el.password)
    cy.get(el.loginButton).click()
})

it('PROBLEM USER',()=>{
    cy.get(el.usernameField).type(el.problemUser)
    cy.get(el.passwordField).type(el.password)
    cy.get(el.loginButton).click()
})


})