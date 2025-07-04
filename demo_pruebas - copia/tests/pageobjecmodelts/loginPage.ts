import { expect, type Locator, type Page } from '@playwright/test';

export class loginPage {
  readonly page: Page;
  readonly usernameTextbox: Locator;
  readonly passwordTextbox: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameTextbox = page.locator("//input[@id='user-name']");
    this.passwordTextbox = page.locator("//input[@id='password']");
    this.loginButton = page.locator("//input[@id='login-button']");
  }

  async fillUsername(username: string){
    await this.usernameTextbox.fill(username);
  }

  async fillPassword(password: string){
    await this.passwordTextbox.fill(password);
  }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}