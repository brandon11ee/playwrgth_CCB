import { test } from "@playwright/test";
import { loginPage } from "./pageobjecmodelts/loginPage.ts";
import { ProductoCarrito } from "./pageobjecmodelts/productoCarrito.ts";
import { CarritoCheckout } from "./pageobjecmodelts/carritoCheckout.ts";
import { CheckoutPurchase } from "./pageobjecmodelts/checkoutPurshase.ts";
import { Logout } from "./pageobjecmodelts/Logout.ts";

test.describe('prueba saucedemo', () => {
  test('Login y selección de productos', async ({ page }) => {
    // Ir a la página principal
    await page.goto("https://www.saucedemo.com/v1/index.html");
    await page.waitForLoadState("networkidle");

    // Login
    const login = new loginPage(page);
    await login.fillUsername("standard_user");
    await login.fillPassword("secret_sauce");
    await login.clickLoginButton();

    // Selección de productos
    const productoCarrito = new ProductoCarrito(page);
    await productoCarrito.clicknombreProducto1();
    await productoCarrito.clickBotonToCart();
    await productoCarrito.clickBotonBackToProducts();
    await productoCarrito.clicknombreProducto2();
    await productoCarrito.clickBotonToCart();
    await productoCarrito.clickBotonBackToProducts();
    await productoCarrito.clickprecioProducto3();
    await productoCarrito.clickBotonToCart();
    await productoCarrito.clickBotonBackToProducts();

    // Verificar que los productos se han añadido al carrito
    const carritoCheckout = new CarritoCheckout(page);
    await carritoCheckout.clickBotonCart();
    await carritoCheckout.clickBotonCheckout();

    // Completar el formulario de checkout
    const checkoutPurchase = new CheckoutPurchase(page);
    await checkoutPurchase.fillNombre("Juan");
    await checkoutPurchase.fillApellido("Pérez");
    await checkoutPurchase.fillCodigoPostal("12345");
    await checkoutPurchase.clickBotonContinue();
    await checkoutPurchase.clickBotonFinalizar();

    //Log de finalización
    const logout = new Logout(page);
    await logout.clickMenuBoton();
    await logout.clickBotonLogout();

  });
});