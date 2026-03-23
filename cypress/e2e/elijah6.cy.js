import{elements} from '../fixtures/selector'
describe('signup',()=>{
    beforeEach(()=>{
        cy.visit('/')

})    
it('registration flow',()=>{
cy.get(elements.registerbuttonField).should('be.visible').click()
cy.get(elements.firstNameField).should('be.visible').and('be.empty').type(elements.firstName)
cy.get(elements.lastNameField).should('be.visible').and('be.empty').type(elements.lastName)
cy.get(elements.addressField).should('be.visible').and('be.empty').type(elements.address)
cy.get(elements.cityField).should('be.visible').and('be.empty').type(elements.city)
cy.get(elements.stateField).should('be.visible').and('be.empty').type(elements.state)
cy.get(elements.zipcodeField).should('be.visible').and('be.empty').type(elements.zipcode)
cy.get(elements.phonenumberField).should('be.visible').and('be.empty').type(elements.phonenumber)
cy.get(elements.ssnField).should('be.visible').and('be.empty').type(elements.ssn)
cy.get(elements.customerusernameField).should('be.visible').and('be.empty').type(elements.customerusername)
cy.get(elements.customerpasswordField).should('be.visible').and('be.empty').type(elements.customerpassword)
cy.get(elements.repeatedpasswordField).should('be.visible').and('be.empty').type(elements.repeatedpassword)
cy.get(elements.submitField).should('be.visible').and('be.empty').click()

})
it('login flow',()=> {
cy.get(elements.usernameField).should('be.visible').and('be.empty').type(elements.username)
cy.get(elements.passwordField).should('be.visible').and('be.empty').type(elements.password)
cy.get(elements.loginbuttonField).should('be.visible').click()

})
})