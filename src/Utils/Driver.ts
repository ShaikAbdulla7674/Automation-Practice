import { Builder, WebDriver } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

export async function getDriver(): Promise<WebDriver> {
    const options = new chrome.Options();
    options.addArguments("--start-maximized");

    return await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();
}