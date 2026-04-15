import { Key, WebDriver } from "selenium-webdriver";
import { By,until } from "selenium-webdriver";


export class CommonClass{
    private driver:WebDriver;
    constructor(driver:WebDriver)
    {
      this.driver=driver;
    }

    //locators
private logOutButton=By.xpath("//span[text()='Log Out']");
//Actions




    async Click(locator: By) {
    const element = await this.driver.wait(
        until.elementLocated(locator),
        20000
    );

    await this.driver.wait(until.elementIsVisible(element), 20000);
    await this.driver.wait(until.elementIsEnabled(element), 20000);

    await element.click();
}
    async SendKeys(locator: By, data: string) {
    const element = await this.driver.wait(
        until.elementLocated(locator),
        20000
    );

    await this.driver.wait(until.elementIsVisible(element), 20000);

    await element.click();
    await element.sendKeys(data);
}
    async IsElementPresent(locator: By): Promise<boolean> {
    const elements = await this.driver.findElements(locator);
    return elements.length > 0;
}

   async StaleElementClick(locator: By) {
    for (let i = 0; i < 3; i++) {
        try {
            const element = await this.driver.findElement(locator);
            await this.driver.wait(until.elementIsVisible(element), 10000);
            await element.click();
            return;
        } catch (error) {
             if (error instanceof Error) {
            if (error.name === "StaleElementReferenceError") {
                console.log("Retrying due to stale element...");
            } else {
                throw error;
            }
        }
    }
    }
    throw new Error("Element not clickable after retries");
}
 async sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async Logout()
{
   this.Click(this.logOutButton);

}
async ScrolltoView(locator:By)
{
 const element = await this.driver.findElement(locator);
await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
this.sleep(4000);
await element.click();
}

async AutoCompleteDropdown(locator:By,text:string)
{
     const element = await this.driver.wait(
        until.elementLocated(locator),
        20000
    );

    await this.driver.wait(until.elementIsVisible(element), 20000);

    await element.click();
    await element.sendKeys(text);
   // await this.driver.sleep(2000);
   // await element.sendKeys(Key.ARROW_DOWN,Key.ENTER);
  const dropvalue=`//div//strong[text()='${text}']`;

  const option = await this.driver.wait(
  until.elementLocated(By.xpath(dropvalue)),
  5000
  );

  await this.driver.wait(until.elementIsVisible(option), 5000);
  await option.click();
 }
 }
