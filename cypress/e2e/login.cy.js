import { faker } from '@faker-js/faker'
import LoginPage from '../POM/login'
const demo = new LoginPage

describe('LOGIN USER',()=>{
    beforeEach(()=>{
        cy.visit('https://automationexercise.com/login')
  
    })
const generateUser = () => {
  return {
    name: faker.person.firstName(),
    email: `test${Date.now()}@mail.com`, 
    password: faker.internet.password()
  }}
    it('SIGNUP', ()=>{
        demo.setsignupName()
        demo.setsignupEmail()
        demo.setsignupButton()
        demo.setsignupTitle()
        demo.setsignupPassword() 
        demo.setsignupFirstName()
        demo.setsignupLastName()
        demo.setuserCompany()
        demo.setuserAddress()
        demo.setuserAddress2()
        demo.setuserCountry()
        demo.setuserState()
        demo.setuserCity()
        demo.setuserZipCode()
        demo.setuserMobileNumber()   
        demo.setuserCreateAccount()
        demo.setuserContinueButton()
    })
    
    it('LOGIN',()=>{
        demo.setloginEmail()
        demo.setloginPassword()
        demo.setloginButton()
    })
})