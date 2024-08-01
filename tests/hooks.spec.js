// import { test, expect } from '@playwright/test'

// test. beforeEach ( async ({ page }) => {

//     await page.goto('https://www.debenhams.com')
//     await page.locator("#onetrust-accept-btn-handler").click()   // Click on the accept button
//     await page.locator("//a[@data-test-id='account-link']//div[@class='flex items-center']//*[name()='svg']").click()  // Click on User icon
//     await page.locator('input[name="username"]').fill('jahnavibalu@gmail.com')
//     await page.locator('input[name="password"]').fill('Welcome123!')
//     await page.locator("//div[contains(text(),'Login Securely')]").click()
//     //await page.close(true)  // Close current tab and switch back to default
// });

// // check each tab on home page 
// test ('home page', async ({ page }) => {

//     await page.locator('[data-test-id="desktop-nav\\:2513-NEW IN"]').click(); // Click on New  In Tab
//     await page.locator('[data-test-id="desktop-nav\\:2906-WOMENS"]').click(); // Click on Womens tab
//     await page.locator('[data-test-id="desktop-nav\\:3066-MENS"]').click(); // Click on Mens tab
//     await page.locator('[data-test-id="desktop-nav\\:3312-KIDS"]').click(); // Click on Kids tab
//     await page.locator('[data-test-id="desktop-nav\\:2551-BEAUTY"]').click(); // Click on Beauty tab
//     await page.locator('[data-test-id="desktop-nav\\:3492-HOME"]').click();// Click on Home tab 
//     await page.locator('[data-test-id="desktop-nav\\:12698-Garden"]').click(); // Click  on Garden tab
//     await page.locator('[data-test-id="desktop-nav\\:9739-Gifts"]').click(); // Click on Gifts tab
//     await page.locator('[data-test-id="desktop-nav\\:3253-WEDDING"]').click();// Click on Wedding tab
//     await page.locator('[data-test-id="desktop-nav\\:3979-SPORTS"]').click(); // Click on Sports tab
//     await page.locator('[data-test-id="desktop-nav\\:10511-Holiday"]').click(); // Click on Holiday tab 
//     await page.locator('[data-test-id="desktop-nav\\:3840-BRANDS"]').click(); // Click on Brands tab
//     await page.locator('[data-test-id="account-link"]').click(); // Click on account icon 
//     await page.getByRole('link', { name: 'Sign Out' }).click(); // Sign out

// })

// // side menu items
// test ('side menu items', async ({ page }) => {
   
//     //await page.pause(5000)
//     // check side menu bar items 
//     await page.getByRole('link', { name: 'My Details' }).click(); // click on My details 
//     await page.getByRole('link', { name: 'Order History' }).click();
//     await page.getByRole('link', { name: 'My Account' }).click();
//     await page.getByRole('link', { name: 'Addresses' }).click();
//     await page.getByRole('link', { name: 'Unlimited', exact: true }).click(); // click on Unlimited  shopping option
//     await page.getByRole('link', { name: 'Contact Preferences' }).click();// click on Contact preferences 
//     await page.getByRole('link', { name: 'Sign Out' }).click();
// })


// // My account - register to beauty club 

// // side menu items

// // test.only('My Details', async ({ page }) => {
// //   await page.getByRole('link', { name: 'My Details' }).click();
// //   await page.waitForSelector('input[name="First name"][value="jahnavi"]');
// //   await page.waitForSelector('input[name="Last name"][value="gaddam"]');
// //   await page.waitForSelector('input[name="Date of birth][value="06/02/2006"]');
// //   await page.waitForSelector('input[name="Email address][value="jahnavibalu@gmail.com"]'); 
// //  }) 