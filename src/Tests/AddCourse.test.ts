import { WebDriver } from "selenium-webdriver";
import { LeftPanel } from "../Pages/LeftPanel";
import { BaseTest } from "./BaseTest";
import { CommonClass } from "../Pages/CommonClass";
import assert from "assert";
import { Trainingpage } from "../Pages/TrainingPage";
import { allure } from "allure-mocha/runtime";
import { description, severity, epic, feature, story ,step} from "allure-js-commons";
describe("AddCourse",function(){
    this.timeout(60000);
    let basetest:BaseTest;
    let Cmnpg:CommonClass;
    let driver:WebDriver;
    //const addContext = require("mochawesome/addContext");
    before(async()=>{
        basetest=new BaseTest();
       await basetest.setup();
        driver=basetest.driver;
        Cmnpg=new CommonClass(driver);
       // await description("Login successfully Completed");
    })
    
  it("Add Course",async function(){
  const leftpaanel=new LeftPanel(driver);
  await allure.step( "step1:Navigating to Training Page",async()=>{
    
     await leftpaanel.GotoTraineePage();
   });    
        await description("Go to TraineePage successfully Completed");
       
        this.timeout(60000);
         const traningpg=new Trainingpage(driver);
        await allure.step("Step 2: Adding the course details",async()=>{
            
       
       //console.log("Step 3: Before AddCourse");

       await traningpg.AddCourse();
        });
       
      await description("Adding the course details successfully Completed");
       
        this.timeout(60000);
         await allure.step("Step 3:Navigating to Training Page for cource details validation ",async()=>{
         await leftpaanel.GotoTraineePage();
        });
      
       const result = await traningpg.IsCourseAdded();
      assert.strictEqual(result, true, "Course adding failed");
     await description("Adding the course details successfully Completed");
    });
    after(async()=>{
       // basetest.teardown();
    })
});
