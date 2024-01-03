import AppPage from '../pageobjects/app.page.js'

class RegistrationPage extends AppPage {
    constructor() {
        super();
        this._url = '/registrace';       
    }

    get nameField() { return $('#name');}
    get emailField() { return $('#email');}
    get passwordField() { return $('#password');}
    get confirmPassField() { return $('#password-confirm');}
    get registrationButton() { return $('.btn-primary');}    
    get fieldError() { return $('.invalid-feedback'); }

    async open() {
        await browser.reloadSession();
        await browser.url(this._url);
    }
        
    async registrace(username, useremail, password, confirmPassword) {
        await this.nameField.setValue(username);
        await this.emailField.setValue(useremail);        
        await this.passwordField.setValue(password);
        await this.confirmPassField.setValue(confirmPassword);
        await this.registrationButton.click();
    }
    async getFieldError() {
        return await this.fieldError.getText();
    }
}
export default new RegistrationPage();
