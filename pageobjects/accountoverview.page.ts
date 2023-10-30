import { type Locator, type Page } from '@playwright/test'
import BasePage from './page';

export class AccountOverviewPage extends BasePage {
    readonly page: Page;
    readonly h1title: Locator;
    readonly alogout: Locator;

    constructor(page: Page) {
        super(page);
        this.h1title = page.locator('h1[class="title"]');
        this.alogout = page.locator('a', { hasText: 'Log Out' })
    }

    public async init (): Promise<boolean> {
        return (await this.h1title.innerText()) === "Accounts Overview";
    }

    public async logout () {
        await this.alogout.click();
    }
}
