import { type Locator, type Page } from '@playwright/test'
import BasePage from './page';
import { Customer } from '../modal';

export class RegisterPage extends BasePage {
    readonly page: Page;
    readonly inputFirstname: Locator;
    readonly inputLastname: Locator;
    readonly inputStreet: Locator;
    readonly inputCity: Locator;
    readonly inputState: Locator;
    readonly inputZipcode: Locator;
    readonly inputPhoneNum: Locator;
    readonly inputPassword: Locator;
    readonly inputUsername: Locator;
    readonly inputSSN: Locator;
    readonly inputConfirm: Locator;
    readonly btnRegister: Locator;

    constructor(page: Page) {
        super(page);
        this.inputFirstname = page.locator('input[id="customer.firstName"]');
        this.inputLastname = page.locator('input[id="customer.lastName"]');
        this.inputStreet = page.locator('input[id="customer.address.street"]');
        this.inputCity = page.locator('input[id="customer.address.city"]');
        this.inputState = page.locator('input[id="customer.address.state"]');
        this.inputZipcode = page.locator('input[id="customer.address.zipCode"]');
        this.inputPhoneNum = page.locator('input[id="customer.phoneNumber"]');
        this.inputSSN = page.locator('input[id="customer.ssn"]');
        this.inputUsername = page.locator('input[id="customer.username"]');
        this.inputPassword = page.locator('input[id="customer.password"]');
        this.inputConfirm = page.locator('input[id="repeatedPassword"]');
        this.btnRegister = page.locator('input[value="Register"]');
    }

    public async fillRegistrationInfo (customer: Customer) {
        await this.inputFirstname.fill(customer.Firstname);
        await this.inputLastname.fill(customer.Lastname);
        await this.inputStreet.fill(customer.Address.Street);
        await this.inputCity.fill(customer.Address.City);
        await this.inputState.fill(customer.Address.State);
        await this.inputZipcode.fill(customer.Address.Zipcode);
        await this.inputPhoneNum.fill(customer.PhoneNum);
        await this.inputSSN.fill(customer.SSN);
        await this.inputUsername.fill(customer.Username);
        await this.inputPassword.fill(customer.Password);
        await this.inputConfirm.fill(customer.Password);
    }

    public async register () {
        await this.btnRegister.click();
    }
}
