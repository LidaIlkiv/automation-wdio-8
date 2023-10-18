describe('Homework Lesson1', async () => {

    it('Registrace page', async () => {

        await browser.reloadSession();
        await browser.url('/registrace');
        await browser.saveScreenshot('registrace_page.png');
        await browser.pause(5000);

    });

});
