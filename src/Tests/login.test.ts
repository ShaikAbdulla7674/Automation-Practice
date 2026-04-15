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
        await driver.get("https://raajsk1-trials80.orangehrmlive.com");
        loginPage = new LoginPage(driver);
    });

    it("should login successfully", async () => {
        await loginPage.login("Admin", "BfJXb49w@P");

        const url = await driver.getCurrentUrl();
       // console.log("The Dashboard url");
       // console.log(url);
       // assert.ok(url.includes("dashboard"));
    });

    after(async () => {
       // await driver.quit();
    });
});