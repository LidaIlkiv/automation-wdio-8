class AppPage{
        
    get rightNavbar() { return $('.navbar-right');}
    get userNameDropdown() { return this.rightNavbar.$('[data-toggle="dropdown"]'); }
    get toast() { return $('.toast-title'); }
    
    
    
    async open() {
        await browser.url('/');
    }
    async getToastMessage() {
        return await this.toast.getText();
    }
    async getCurrentUser() {
        return await this.userNameDropdown.getText();
    }
}
export default AppPage;
