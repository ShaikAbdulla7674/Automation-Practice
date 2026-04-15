import { getDriver } from "../Utils/Driver"
import { LoginPage } from "../Pages/LoginPage"
import { WebDriver } from "selenium-webdriver"
import { CommonClass } from "../Pages/CommonClass";
import { description, severity, epic, feature, story, step } from "allure-js-commons";
export class BaseTest{
    public driver!:WebDriver;

    async setup(){
        this.driver=await getDriver();

        await this.driver.get("https://raajsk1-trials80.orangehrmlive.com");
        
        
        const loginpage=new LoginPage(this.driver);
        await step("login started userName = Admin,Password = BfJXb49w@P",async()=>{
           await loginpage.login("Admin", "BfJXb49w@P");
        
        });
       
       // console.log("Login successfully Completed");

    }
    async teardown(){
       
        let cmnpg=new CommonClass(this.driver)
        cmnpg.Logout();
         await this.driver.quit();
    }

}