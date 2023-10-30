import { test, expect } from '@playwright/test';
import Functions from '../support/functions';
import { Customer } from '../modal';
import { HomePage, RegisterPage, AccountOverviewPage } from '../pageobjects';

test('As a new user i want to register in parabank', async ({ page }) => {
  // Given
  await Functions.cleanDatabase(page);
  const home = new HomePage(page);
  await home.navigate('/');
  await home.register();
  // When
  const customer = new Customer();
  customer.setDefaultValues();
  const register = new RegisterPage(page);
  await register.fillRegistrationInfo(customer);
  await register.register();
  // Then
  const successMessage = await register.getMessage();
  expect(successMessage).toBe('Your account was created successfully. You are now logged in.');
});

test('As a new user I can log into the parabank with invalid login info', async ({ page }) => {
  // Given
  const home = new HomePage(page);
  await home.navigate('/');

  // When
  await home.login('foobar', 'barfoo');
  
  // Then
  const account = new AccountOverviewPage(page)
  expect(await account.init()).toBe(false);
  const errorMessage = await account.getMessage();
  expect(errorMessage).toBe('An internal error has occurred and has been logged.');
});

test('As a new user I can log into the parabank with valid login info', async ({ page }) => {
  // Given
  const home = new HomePage(page);
  await home.navigate('/');

  // When
  const customer = new Customer();
  customer.setDefaultValues();
  await home.login(customer.Username, customer.Password);

  // Then
  const account = new AccountOverviewPage(page);
  expect(await account.init()).toBe(true);
});
