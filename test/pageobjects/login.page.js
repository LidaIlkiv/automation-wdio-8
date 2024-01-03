class LoginPage {

    constructor() {
        this._url = '/prihlaseni';
    }

    get emailField() {
        return $('#email');
    }
    get passwordField() {
        return $('#password');
    }
    get loginButton() {
        return $('.btn-primary');
    }
    async open() {
        await browser.reloadSession();
        await browser.url(this._url);
    }
    async logining(nameUser, passwordUser) {
    await this.emailField.setValue(nameUser);
    await this.passwordField.setValue(passwordUser);
    await this.loginButton.click();
    }
    get rightNavbar() {
        return $('.navbar-right');
    }
    get userNameDropdown() {
        return this.rightNavbar.$('[data-toggle="dropdown"]');
    }

    get toast() {
        return $('.toast-message');
    }
    get fieldError() {
        return $('.invalid-feedback');
    }
    get logoutLink() {
        return $('#logout-link');
    }
}

export default new LoginPage();
