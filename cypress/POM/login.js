import { faker } from '@faker-js/faker'
export const generateUser = () => {
 
  return {
    name: faker.person.firstName(),
    email: `david${Date.now()}@mail.com`, 
    password: faker.internet.password()
  }
}


class LoginPage{
   signupNameField =  '[data-qa="signup-name"]'
   signupEmailField = '[data-qa="signup-email"]'
   signupButton = '[data-qa="signup-button"]'
   signupTitleField = '.clearfix > :nth-child(3)'
   signupPasswordField = '[data-qa="password"]'
   signupDateofBirthField = ':nth-child(6) > .row > :nth-child(1)'
   signupDateField = '[data-qa="days"]'
   signupMonthField = '[data-qa="months"]'
   signupYearField = '[data-qa="years"]' 
   userFirstNameField = '[data-qa="first_name"]'
   userLastNameField = '[data-qa="last_name"]'
   userCompanyField = '[data-qa="company"]'
   userAddressField = '[data-qa="address"]'
   userAddress2Field = '[data-qa="address2"]'
   userCountryField = '[data-qa="country"]'
   userStateField = '[data-qa="state"]'
   userCityField = '[data-qa="city"]'
   userZipCodeField = '[data-qa="zipcode"]'
   userMobileNumberField = '[data-qa="mobile_number"]'
   userCreateAccountField = '[data-qa="create-account"]'
   userContinueButtonField = '[data-qa="continue-button"]'
   loginEmailField = '[data-qa="login-email"]'
   loginPasswordField = '[data-qa="login-password"]'
   loginButtonField = '[data-qa="login-button"]'
   loginEmail = `david${Date.now()}@mail.com`
   loginPassword = 'hee'
   signupName = 'David'
   userFirstName = 'David'
   userLastName = 'Hee'
   signupEmail = `david${Date.now()}@mail.com`
   signupPassword = 'hee'
   userCompany = 'David Company'
   signupDate = '5'
   signupMonth = '5'
   signupYear = '1990'
   userAddress = '23, Akanji street'
   userAddress2 = 'Ebute Meta'
   userCountry = 'United States'
   userState = 'Texas'
   userCity = 'Houston'
   userZipCode = '01'
   userMobileNumber ='+1234567890'
   loginEmail =  `david${Date.now()}@mail.com`
   loginPassword = 'hee'

setsignupName(){
      cy.get(this.signupNameField).type(this.signupName)
}      
setsignupEmail(){
      cy.get(this.signupEmailField).type(this.signupEmail)
}
setsignupButton(){
   cy.get(this.signupButton).click() 
}
setsignupTitle(){
   cy.get(this.signupTitleField).click()
}
setsignupFirstName(){
   cy.get(this.userFirstNameField).type(this.userFirstName)
}
setsignupLastName(){
   cy.get(this.userLastNameField).type(this.userLastName)
}
setsignupPassword(){
   cy.get(this.signupPasswordField).type(this.signupPassword)
}
setsignupDateofBirth(){
   cy.get(this.signupDateofBirthField).click()
}
setsignupDate(){
   cy.get(this.signupDateField).select(this.signupDate)
}
setsignupMonth(){
   cy.get(this.signupMonthField).select(this.signupMonth)
}
setsignupYear(){
   cy.get(this.signupYearField).select(this.signupYear)
}
setuserFirstName(){
   cy.get(this.userFirstNameField).type(this.userFirstName)
}   
setuserLastName(){
   cy.get(this.userLastNameField).type(this.userLastName)
}
setuserCompany(){
   cy.get(this.userCompanyField).type(this.userCompany)
}
setuserAddress(){
   cy.get(this.userAddressField).type(this.userAddress)
}
setuserAddress2(){
   cy.get(this.userAddress2Field).type(this.userAddress2)
}
setuserCountry(){
   cy.get(this.userCountryField).select(this.userCountry)
}
setuserState(){
   cy.get(this.userStateField).type(this.userState)
}
setuserCity(){
   cy.get(this.userCityField).type(this.userCity)
}
setuserZipCode(){
   cy.get(this.userZipCodeField).type(this.userZipCode)
}
setuserMobileNumber(){
   cy.get(this.userMobileNumberField).type(this.userMobileNumber)
}
setuserCreateAccount(){
   cy.get(this.userCreateAccountField).click()
}
setuserContinueButton(){
   cy.get(this.userContinueButtonField).click()
}
setloginEmail(){
   cy.get(this.loginEmailField).type(this.loginEmail)
}
setloginPassword(){
   cy.get(this.loginPasswordField).type(this.loginPassword)
}
setloginButton(){
   cy.get(this.loginButtonField).click()
}
}
export default LoginPage