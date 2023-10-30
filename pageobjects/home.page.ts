import { type Locator, type Page } from '@playwright/test'
import BasePage from './page';

export class HomePage extends BasePage {
    readonly page: Page;
    readonly inputUsername: Locator;
    readonly inputPassword: Locator;
    readonly btnLogin: Locator;
    readonly aForgotPassword: Locator;
    readonly aRegister: Locator;

    constructor(page: Page) {
        super(page);
        this.inputUsername = page.locator('input[name="username"]');
        this.inputPassword = page.locator('input[name="password"]');
        this.btnLogin = page.locator('input[value="Log In"]');
        this.aForgotPassword = page.locator('a', { hasText: 'Forgot login info?' });
        this.aRegister = page.locator('a', { hasText: 'Register' })
    }

    public async login (username: string, password: string) {
        await this.inputUsername.fill(username);
        await this.inputPassword.fill(password);
        await this.btnLogin.click();
    }

    public async register () {
        await this.aRegister.click();
    }

    public async forgotPassword () {
        await this.aForgotPassword.click();
    }
}
