import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPurchase {
    readonly page;
    readonly nombreText: Locator;
    readonly apellidoText: Locator;
    readonly codigoPostalText: Locator;
    readonly botonContinue: Locator;
    readonly botonFinalizar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nombreText = page.locator("//input[@id='first-name']");
        this.apellidoText = page.locator("//input[@id='last-name']");
        this.codigoPostalText = page.locator("//input[@id='postal-code']");
        this.botonContinue = page.locator("//input[@class='btn_primary cart_button']")
        this.botonFinalizar = page.locator("//a[@class='btn_action cart_button']");
        
    }
    async fillNombre(nombre: string) {
        await this.nombreText.fill(nombre);
    }

    async fillApellido(apellido: string) {
        await this.apellidoText.fill(apellido);
    }

    async fillCodigoPostal(codigoPostal: string) {
        await this.codigoPostalText.fill(codigoPostal);
    }
    async clickBotonContinue() {
        await this.botonContinue.click();
    }

    async clickBotonFinalizar() {
        await this.botonFinalizar.click();
    }
}
