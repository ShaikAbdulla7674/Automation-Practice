import { By,WebDriver } from "selenium-webdriver";
import { until } from "selenium-webdriver";
import { CommonClass } from "./CommonClass";

export class LeftPanel {
    private driver: WebDriver;
    cmnpg1:CommonClass;
    constructor(driver: WebDriver) {
        this.driver = driver;
      this.cmnpg1=new CommonClass(this.driver)
    }
    //locators
    private leftpanelEMPManagementbutton=By.xpath("//div[@id='left-menu']//span[text()='Employee Management']");
    private Trainingtab=By.xpath("//div[@id='left-menu']//span[text()='Training']")
    
   //Actions
  async GotoEMployeManagementPage()
  {
   this.cmnpg1.Click(this.leftpanelEMPManagementbutton);
  }
  async GotoTraineePage()
  { 
    this.cmnpg1.ScrolltoView(this.Trainingtab);
  }


}