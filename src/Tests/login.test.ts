import { getDriver } from "../Utils/Driver";
import { LoginPage } from "../Pages/LoginPage";
import { WebDriver } from "selenium-webdriver";
import { strict as assert } from "assert";

describe("Login Test", function () {
    let driver: WebDriver;
    let loginPage: LoginPage;

    this.timeout(30000);

    before(async () => {
        driver = await getDriver();
        await driver.get("https://opensource-demo.orangehrmlive.com/");
        loginPage = new LoginPage(driver);
    });

    it("should login successfully", async () => {
        await loginPage.login("Admin", "admin123");

        const url = await driver.getCurrentUrl();
        assert.ok(url.includes("dashboard"));
    });

    after(async () => {
        await driver.quit();
    });
});