let homepage = function () {
    let firstEle = element(by.model('first'));
    let secoEle = element(by.model('second'));
    let goBtn = element(by.css('[ng-click="doAddition()"]'));

    this.getBrowser = function (url) {
        browser.get(url);
    }

    this.enterFirstEle = function (firtsNo) {
        firstEle.sendKeys(firtsNo);
    }
    this.enterSecondEle = function (secondNo) {
        secoEle.sendKeys(secondNo);
    }
    this.clickBtn = function () {
        goBtn.click();
    }
    this.verifyResult = function (finalRes) {
        let result = element(by.cssContainingText('.ng-binding', finalRes));
        expect(result.getText()).toEqual(finalRes);
    }
};
module.exports = new homepage();