import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

   it('should open login page', async () => {

       await browser.reloadSession();

       await browser.url('/prihlaseni');
       const emailField = await $('#email');
       const passwordField = await $('#password');
       console.log(await emailField.isDisplayed());
       console.log(await emailField.isEnabled());
       console.log(await passwordField.isDisplayed());
       console.log(await passwordField.isEnabled());
       const loginButton = await $('.btn-primary');
       console.log(await loginButton.getText());
       const forgotPasswordLink = await $('=Zapomněli jste své heslo?');
       console.log(await forgotPasswordLink.getAttribute('href'));
       await emailField.setValue('monika@czechitas.cz');
       await passwordField.setValue('hesloooo');
       await loginButton.click();
       




        //const windowSize = await browser.getWindowSize();
        //console.log(windowSize);


        //await browser.saveScreenshot('login_page.png');
        
        //await browser.pause(5000);

    });

});






