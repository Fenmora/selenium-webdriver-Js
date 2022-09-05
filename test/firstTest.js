/**
 ** @Author: Fender Mora
 ** Date  : September 3rd
 *
 ** Description: Testing to the pase
 *? https://lambdatest.github.io/sample-todo-app/
 *! to run : npx mocha -no-timeouts 'test/*.js' o npx test
 */
const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();

//describe
describe("add to do test", function () {
  //it block
  it("successfully adds a todo application", async function () {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to out application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Fender Mora - Selenium", Key.RETURN);

    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert using chai should
    todoText.should.equal("Fender - Selenium");

    //Close Browser
    await driver.quit();
  });
  //
});
