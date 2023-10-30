import { type Locator, type Page } from '@playwright/test'

export default class BasePage {
    readonly window: Page;
    readonly message: Locator;

    constructor(page: Page) {
        this.window = page;
        this.message = page.locator('#rightPanel p');       
    }

    async navigate(path: string) {
        await this.window.goto(`https://parabank.parasoft.com${path}`);
    }

    async getMessage (): Promise<string> {
        return await this.message.innerText();
    }
}
