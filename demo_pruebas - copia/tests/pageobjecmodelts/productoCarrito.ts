import { expect, type Locator, type Page } from '@playwright/test';

export class ProductoCarrito {

    // Definición de los atributos del producto en el carrito
    readonly page: Page;
    readonly nombreProducto1: Locator;
    readonly nombreProducto2: Locator;
    readonly precioProducto3: Locator;
    readonly botonToCart: Locator;
    readonly botonBackToProducts: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nombreProducto1 = page.locator("//a[@id='item_4_title_link']");
        this.nombreProducto2 = page.locator("//a[@id='item_1_title_link']");
        this.precioProducto3 = page.locator("//a[@id='item_5_title_link']");
        this.botonToCart = page.locator("//button[text()='ADD TO CART']");
        this.botonBackToProducts = page.locator("//button[@class='inventory_details_back_button']");
    }

    async clicknombreProducto1() {
        await this.nombreProducto1.click();
    }

    async clicknombreProducto2() {
        await this.nombreProducto2.click();
    }

        async clickprecioProducto3() {
            await this.precioProducto3.click();
        }

        async clickBotonToCart() {
            await this.botonToCart.click();
        }

        async clickBotonBackToProducts() {
            await this.botonBackToProducts.click();
    }
}
