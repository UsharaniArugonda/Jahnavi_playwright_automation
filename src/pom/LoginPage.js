exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.username_textbox = page.locator('input[name="username"]')
        this.password_textbox = page.locator('input[name="password"]');
        this.login_button = page.locator('[data-test-id="login-button"]');
        this.searchInput = page.locator('[data-test-id="search-input"]');
       // this.cookie_banner = page.locator('body > div.cky-consent-container.cky-banner-bottom > div > div > p')


    }

    //class Debenhams {
    async login() {
        await this.page.goto(`https://www.debenhams.com`, {
          waitUntil: 'domcontentloaded'
        })
        //await this.page.goto('https://www.debenhams.com'); // navigate to the website
        await this.page.getByRole('button', { name: 'ACCEPT ALL' }).click();
        await this.page.locator('[data-test-id="account-link"]').click();
        await this.username_textbox.click();
        await this.username_textbox.fill('jahnavibalu@gmail.com');
        await this.password_textbox.click();
        await this.password_textbox.fill('Welcome123!');
        await this.login_button.click();
        await this.page.waitForURL('https://www.debenhams.com/account');
    }


    async searchForItem(item) {
        await this.page.goto('https://www.debenhams.com/', { waitUntil: 'domcontentloaded' });
        await this.searchInput.click();
        await this.page.waitForTimeout(2000);  
        await this.searchInput.fill(item);
        await this.searchInput.press('Enter');
        await this.page.waitForTimeout(2000); 
        await this.page.waitForURL(`https://www.debenhams.com/search?text=${item}`);
    }
}



