import { expect } from '@playwright/test'

exports.LogoutPage = class LogoutPage {


    constructor(page) {
        this.page = page;
        this.signOutButton = page.getByRole('link', { name: 'Sign Out' });
    }


    async logout() {
        await this.page.waitForURL('https://www.debenhams.com/account');
        await expect(this.signOutButton).toBeVisible();
        await this.signOutButton.click();
        await this.page.waitForNavigation({ waitUntil: 'domcontentloaded' });
        await expect(this.signOutButton).not.toBeVisible();
        await this.page.waitForURL('https://www.debenhams.com');
    }
}

