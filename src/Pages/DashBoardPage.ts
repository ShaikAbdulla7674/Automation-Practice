import{By,WebDriver} from "selenium-webdriver";
import { until } from "selenium-webdriver";
import { elementLocated } from "selenium-webdriver/lib/until";
export class Dashboard{
    private driver:WebDriver
 constructor (driver:WebDriver)
{
    this.driver=driver;
}

//locators
private  AdminLeftPanelbutton = By.xpath("//span[text()='Admin']");
private  dashboardtab = By.xpath("//h6[text()='Dashboard']");

//Actions
async GOtoAdminTab(){
    await this.driver.wait(elementLocated(this.AdminLeftPanelbutton),20000).click();

}
async IsDashboardTab():Promise<boolean>
{
    const elementdsd=await this.driver.wait(elementLocated(this.dashboardtab),10000);
    const isDashboardTab=elementdsd.isDisplayed();
    return isDashboardTab;
}
}