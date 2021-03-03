let homepage = require('../pages/homepage');


describe("demo calculator test", function () {
  
    it("addition test", function() {
      // browser.get('http://juliemr.github.io/protractor-demo/'); // moved to pages
      homepage.getBrowser('http://juliemr.github.io/protractor-demo/')
      browser.sleep(2000);

      // let firstEle = element(by.model('first')); // moved to pages
      // firstEle.sendKeys("5");
      homepage.enterFirstEle('5');

      // let oper = element(by.model('operator'));
      // oper.click();

      // let secoEle = element(by.model('second')); // moved to pages
      // secoEle.sendKeys("4");
      homepage.enterSecondEle('4');

      // let goBtn = element(by.css('[ng-click="doAddition()"]')); // moved to pages
      // goBtn.click();
      homepage.clickBtn();

      // let result = element(by.cssContainingText('.ng-binding', '9')); // moved to pages
      // expect(result.getText()).toEqual('9');
      homepage.verifyResult('9');
      
      browser.sleep(3000);

    });

    it("substraction test", function () { //For fail case
      homepage.getBrowser('http://juliemr.github.io/protractor-demo/')
      browser.sleep(2000);
      homepage.enterFirstEle('5');

      homepage.enterSecondEle('4');

      homepage.clickBtn1(); // failing condition

      homepage.verifyResult('9');
      
      browser.sleep(3000);
    });
  });