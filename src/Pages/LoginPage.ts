import { By, WebDriver } from "selenium-webdriver";

export class LoginPage {
    private driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    username = By.name("username");
    password = By.name("password");
    loginBtn = By.xpath("//button[@type='submit']");

    async login(user: string, pass: string) {
        await this.driver.findElement(this.username).sendKeys(user);
        await this.driver.findElement(this.password).sendKeys(pass);
        await this.driver.findElement(this.loginBtn).click();
    }
}