import { expect, type Locator, type Page } from '@playwright/test';

export class Logout {
    readonly page;
    readonly menuBoton: Locator;
    readonly botonLogout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuBoton = page.locator("//button[text()='Open Menu']");
        this.botonLogout = page.locator("//a[@id='logout_sidebar_link']");
    }

    async clickMenuBoton() {
        await this.menuBoton.click();
    }
    async clickBotonLogout() {
        await this.botonLogout.click();
    }
    
}
