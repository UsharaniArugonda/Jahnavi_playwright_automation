import { test, expect } from '@playwright/test'
import { LoginPage } from '../src/pom/LoginPage';
import { OrderPage } from '../src/pom/OrderPage';
import { BasketPage } from '../src/pom/BasketPage';
import { LogoutPage } from '../src/pom/LogoutPage';

test('login scenario', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login()

})

test('search should work', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login()
    await page.goto('https://www.debenhams.com/');
    waitUntil: 'domcontentloaded'
    await loginPage.searchForItem('tops');
});


test('Order an item ', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login()
    await page.goto('https://www.debenhams.com/');
    waitUntil: 'domcontentloaded'
    const orderPage = new OrderPage(page);
    await orderPage.orderItem();
});


test('check your basket', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.login()
    await page.goto('https://www.debenhams.com/');
    waitUntil: 'domcontentloaded'
    const basketPage = new BasketPage(page);
    await basketPage.addItemToBasket();
});

test('logout scenario', async ({ page }) => {
    // Login then logout
    const loginPage = new LoginPage(page);
    await loginPage.login()
    await page.goto('https://www.debenhams.com/account');
    waitUntil: 'domcontentloaded'
    const logoutPage = new LogoutPage(page);
    await logoutPage.logout();
});








