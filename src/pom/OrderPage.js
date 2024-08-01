exports.OrderPage = class OrderPage {


    constructor(page) {

                this.page = page;
                this.searchInput = page.locator('[data-test-id="search-input"]');
                this.searchInput = page.locator('[data-test-id="search-input"]');
                this.trendingItem = page.locator('[data-test-id="trending-item-Suitcases \\& Luggage"]');
                this.productCardLink = page.locator('[data-test-id="product-card-link-seventeen-london-canary-wharf-12l-roll-top-backpack_p-04496666-5deb-45c5-af67-23d4c1738c22"]');
                this.addToBagButton = page.locator('[data-test-id="add-to-bag-button"]');
                this.jetBlackButton = page.getByRole('button', { name: 'Jet Black' });
                this.cartLink = page.locator('[data-test-id="cart-link"]');
                this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
            }
        
            async orderItem() {
                await this.page.goto('https://www.debenhams.com/', { waitUntil: 'domcontentloaded' });
                await this.searchInput.click();
                await this.trendingItem.click();
                await this.page.waitForTimeout(2000);
                await this.productCardLink.click();
                await this.page.waitForTimeout(2000);
                await this.addToBagButton.click();
                await this.page.waitForTimeout(2000);
                await this.jetBlackButton.click();
                await this.page.waitForTimeout(2000);
                await this.cartLink.click();
                await this.checkoutButton.click();
                await this.page.waitForTimeout(2000);
                await this.page.waitForURL('https://checkout.debenhams.com/checkout/details');
            }
        }
    
       
