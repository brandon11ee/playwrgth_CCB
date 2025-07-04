import { expect, type Locator, type Page } from '@playwright/test';

export class CarritoCheckout {

    readonly page;
    readonly botonCart: Locator;
    readonly botonCheckout: Locator;


  constructor(page: Page) {
    this.page = page;
    this.botonCart = page.locator("//div[@id='shopping_cart_container']//a");
    this.botonCheckout = page.locator("//a[@class='btn_action checkout_button']");
  }
    async clickBotonCart() {
        await this.botonCart.click();
    }
    async clickBotonCheckout() {
        await this.botonCheckout.click();
    }
}
