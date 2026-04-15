import { WebDriver,By } from "selenium-webdriver";
import { CommonClass } from "./CommonClass";
import { until } from "selenium-webdriver";

export class Trainingpage{
    private driver:WebDriver;
    cmnpg:CommonClass;
    tittleName:string="Artificial inteligence"
    coordinatorName:string="Odis Adalwin";
    constructor(driver:WebDriver){  
       this.driver=driver;
       this.cmnpg=new CommonClass(this.driver);
    }

    //locators
    private addCourseButton = By.xpath("//div[@id='list_item_add']");
    private courseTittle=By.xpath("//input[@id='addCourse_title']");
    private coordinator=By.xpath("//input[@id='addCourse_coordinator_empName']");
    private courseSaveButton=By.xpath("//a[text()='Save']");
    //Actions
    async AddCourse()
    {
       // await this.cmnpg.Click(this.addCourseButton);
        // const element = await this.driver.wait(
        // until.elementLocated(this.addCourseButton),
        // 60000
        // );
          await this.cmnpg.sleep(10000);
        // const frame = await this.driver.findElement(By.id("noncoreIframe")); // or specific locator
        // await this.driver.switchTo().frame(frame);
        const frame = await this.driver.wait(
    until.elementLocated(By.css("iframe")),
    20000
);

        await this.driver.switchTo().frame(frame);
        console.log("switched to frame");
        const addBtn = await this.driver.findElement(this.addCourseButton)
         await addBtn.click();
        // await this.driver.switchTo().defaultContent();
        // console.log("switched to default frame");
        // await this.driver.wait(until.elementIsVisible(element), 20000);
        // await this.driver.wait(until.elementIsEnabled(element), 20000);
        // await element.click();

        await this.cmnpg.SendKeys(this.courseTittle,this.tittleName);
        await this.cmnpg.sleep(2000);
        await this.cmnpg.AutoCompleteDropdown(this.coordinator,this.coordinatorName);
        await this.cmnpg.sleep(3000);
        await this.cmnpg.Click(this.courseSaveButton);
        await this.cmnpg.sleep(5000);
    }
async IsCourseAdded(): Promise<boolean> {
    const titleXpath = `//table[@id='resultTable']//a[text()='${this.tittleName}']`;
    const coordXpath = `//table[@id='resultTable']//td[text()='${this.coordinatorName}']`;
     await this.cmnpg.sleep(4000);
    const titleExists = (await this.driver.findElements(By.xpath(titleXpath))).length > 0;
    const count1=(await this.driver.findElements(By.xpath(titleXpath))).length;
    const coordExists = (await this.driver.findElements(By.xpath(coordXpath))).length > 0;
    const count2=(await this.driver.findElements(By.xpath(coordXpath))).length;
    console.log(count1+" ===title elements count");
    console.log(count2+" ===title elements count");
    return titleExists && coordExists;
}

}