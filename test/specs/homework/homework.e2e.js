
import RegistrationPage from '../../pageobjects/homework.page.js'
function generateRandomEmail() {
    const domains = [ "gmail.com", "mail.com", "test.com"];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const randomNumber = Math.floor(Math.random() * 10000);
    const email = `user${randomNumber}@${randomDomain}`;
    return email;
}

describe('Registration page', async () => {
    beforeEach(async () => {
        await RegistrationPage.open();        
    });

    it('Should show registration form', async () => {
        await expect(await RegistrationPage.nameField).toBeDisplayed();
        await expect(await RegistrationPage.nameField).toBeEnabled();
        await expect(await RegistrationPage.emailField).toBeDisplayed();
        await expect(await RegistrationPage.emailField).toBeEnabled();
        await expect(await RegistrationPage.passwordField).toBeDisplayed();
        await expect(await RegistrationPage.passwordField).toBeEnabled();
        await expect(await RegistrationPage.confirmPassField).toBeDisplayed();
        await expect(await RegistrationPage.confirmPassField).toBeEnabled();
        await expect(await RegistrationPage.registrationButton).toBeDisplayed();
        await expect(await RegistrationPage.registrationButton).toBeEnabled();   
    });

    it('User registration with valid credentials', async () => {
        RegistrationPage.registrace('Any name', generateRandomEmail(), 'Password1', 'Password1');
        await RegistrationPage.userNameDropdown.waitForDisplayed();
        await expect(await RegistrationPage.getCurrentUser()).toEqual('Any name');
       
    });
    it('User registration with an existing email', async () => {

        RegistrationPage.registrace('Any name', 'ilkivlidavol@gmail.com', 'Password1', 'Password1');
        await RegistrationPage.fieldError.waitForDisplayed();
        await expect(await RegistrationPage.getFieldError()).toEqual('Účet s tímto emailem již existuje');
        await expect(await RegistrationPage.getToastMessage()).toEqual('Špatně zadané pole');
        await expect(await RegistrationPage.rightNavbar.getText()).not.toEqual('Any name');
        await expect(await RegistrationPage.registrationButton.getText()).toEqual('Zaregistrovat');
     
    });

    it('User registration with an invalid password', async () => {
        RegistrationPage.registrace('Any name', generateRandomEmail(), '123456', '123456');
        await RegistrationPage.fieldError.waitForDisplayed();               
        await expect(await RegistrationPage.getFieldError()).toEqual('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');
        await expect(await RegistrationPage.getToastMessage()).toEqual('Špatně zadané pole');
        await expect(await RegistrationPage.rightNavbar.getText()).not.toEqual('Any name');
        await expect(await RegistrationPage.registrationButton.getText()).toEqual('Zaregistrovat');
    });

});