import { By,WebDriver } from "selenium-webdriver";
import { until } from "selenium-webdriver";
export class LoginPage {
    private driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }
    private userName1 = By.xpath("//input[@name='txtUsername']");
    private password = By.xpath("//input[@name='txtPassword']");
    private loginbtn = By.xpath("//button[@type='submit']");

    //Action
    async EnterUserNAme(username:string)
    {
        const element=await this.driver.wait(until.elementLocated(this.userName1),20000);
        element.click();
        element.sendKeys(username);
    }
    async EnterPassword(userpassword:string)
    {
      const elementpw=await this.driver.wait(until.elementLocated(this.password),5000)
       elementpw.click();
      elementpw.sendKeys(userpassword);
    }
     async ClickLoginButton()
    {
      const elementlgb=await this.driver.wait(until.elementLocated(this.loginbtn),5000)
      elementlgb.click();
    }

    async login(username:string,password:string)
    {
        await this.EnterUserNAme(username);
        await this.EnterPassword(password);
        await this.ClickLoginButton();
    }
}