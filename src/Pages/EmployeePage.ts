    import{By, WebDriver} from "selenium-webdriver";
    import { until } from "selenium-webdriver";
    import { CommonClass } from "./CommonClass";


    export class EmployeePage{
        private driver:WebDriver;
        private firstName:string="Abdullashaik098";
        private lastName:string="shaik09";
        cmnpg:CommonClass;
        constructor(driver:WebDriver)
        {
            this.driver=driver;
            this.cmnpg=new CommonClass(this.driver);
        }
    
        //locators
        private addEMPbutton=By.xpath("//a[@id='addEmployeeButton']");
        private addEMPDtlTab=By.xpath("//div[@class='modal-content ']");
        private addEMPFirstName=By.xpath("//input[@placeholder='First Name']");
        private addEMPLastName=By.xpath("//input[@placeholder='Last Name']");
        private EMPlocationDropdown=By.xpath("//div[@class='modal-content ']//i[text()='arrow_drop_down']");
        //private EMPlocationDropdownValue=By.xpath("//div[@class='modal-content ']//span[text()='India Office']");
        private EMPlocationDropdownValue:string="//div[@class='modal-content ']//span[text()='{0}']";
        private selectedDrpdownValue:string ="//input[@value='India Office']"
        private pageNextButton=By.xpath("//button[text()='Next']");
        private OnboardingEventTeamplateDropdown=By.xpath("//input[@class='select-dropdown']")
        private OnboardingEventTeamplateDropdownValue=By.xpath("//span[text()='Onboarding - India']");
        private onboardingTabSaveButton=By.xpath("//button[text()='Save']");
        private personalDetailsNextBt=By.xpath("//button[text()='Next']");
        private profileData:string="//div[contains(text(),'Abdullashaik4567  Shaik12')]"
    //Actions

    async AddEmployee()
    {
        const location="India Office";
   // await this.cmnpg.Click(this.leftpanelEMPManagementbutton);
    await this.cmnpg.Click(this.addEMPbutton);
    // if(await this.cmnpg.IsElementPresent(this.addEMPDtlTab))
    // {
    await this.driver.wait(
        until.elementLocated(this.addEMPDtlTab),
        15000
    );
    console.log("employe model tab is visible")
        await this.cmnpg.SendKeys(this.addEMPFirstName,this.firstName);
        await this.cmnpg.SendKeys(this.addEMPLastName,this.lastName);
        await this.cmnpg.Click(this.EMPlocationDropdown);
        const EMPlocationDropdownValue=`//div[@class='modal-content ']//span[text()='${location}']`;
        await this.driver.findElement(By.xpath(EMPlocationDropdownValue)).click();
        await this.cmnpg.Click(this.pageNextButton);
    
     
      // await this.cmnpg.StaleElementClick(this.pageNextButton);
        await this.cmnpg.sleep(5000);
       const element = await this.driver.wait(
       until.elementLocated(this.personalDetailsNextBt),
       40000
      );
     // await this.driver.wait(until.elementIsVisible(element), 40000);
     // await this.driver.wait(until.elementIsEnabled(element), 40000);
      await element.click();

        await this.cmnpg.sleep(5000);
       const element2 = await this.driver.wait(
       until.elementLocated(this.personalDetailsNextBt),
       40000
      );
     // await this.driver.wait(until.elementIsVisible(element), 40000);
     // await this.driver.wait(until.elementIsEnabled(element), 40000);
      await element2.click();
      await this.cmnpg.sleep(5000);
      await this.cmnpg.Click(this.OnboardingEventTeamplateDropdown);
      await this.cmnpg.sleep(2000);
      await this.cmnpg.Click(this.OnboardingEventTeamplateDropdownValue);
      await this.cmnpg.sleep(2000);
      await this.cmnpg.Click(this.onboardingTabSaveButton);
      await this.cmnpg.sleep(2000);
    }
    async IsEmployeeDetailsAdded():Promise<boolean>
    { 
        const element=`//div[contains(text(),'${this.firstName}  ${this.lastName}')]`;
        return (await this.driver.findElements(By.xpath(element))).length>0;

    }
    }


