import { type Locator, type Page } from '@playwright/test'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Functions {

    public static adminUrl = 'https://parabank.parasoft.com/parabank/admin.htm';

    public static async cleanDatabase (page: Page) {
        await page.goto(this.adminUrl);
        const btnClean = page.locator('button[value="CLEAN"]'); 
        await btnClean.click();
    }
}
