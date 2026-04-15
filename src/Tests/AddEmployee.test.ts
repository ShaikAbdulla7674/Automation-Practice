import { getDriver } from "../Utils/Driver";
import { WebDriver } from "selenium-webdriver";
import { EmployeePage } from "../Pages/EmployeePage";
import { BaseTest } from "./BaseTest";
import { assert, log } from "console";
import { strict as asserts } from "assert";
import { CommonClass } from "../Pages/CommonClass";
import { LeftPanel } from "../Pages/LeftPanel";

describe("AddEmployeeData",function (){
   this.timeout(60000);
   
    let driver: WebDriver;
    let basetest: BaseTest;
    let commnpg:CommonClass;
     before(async () => {
            basetest = new BaseTest();
           await basetest.setup();
            driver=basetest.driver 
          commnpg=new CommonClass(driver);
        })
     
    it("should add employe details successfully",async function(){
      console.log("Test started");
      const leftpnpg=new LeftPanel(driver);
       const emppage=new EmployeePage(driver); 
       await leftpnpg.GotoEMployeManagementPage();
       await emppage.AddEmployee();
       // const currenturl=await driver.getCurrentUrl();
       // console.log("== Validating urls ==")
       // console.log(currenturl);
    //asserts.ok(currenturl.includes("https://raajsk1-trials80.orangehrmlive.com/client/#/pim/employees/217/profile"));
      //this.timeout(60000);

      commnpg.sleep(10000);
      
    if(await emppage.IsEmployeeDetailsAdded())
     {
        console.log("Employee Details Added Succesfully");
     }
    });

     after(async () => {
    //  await basetest.teardown();
    })
});