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
describe("searching in google", function () {
  //it block
  it("searching in google", async function () {
    var searchString = "Automation testing with Selenium";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    //To fetch http://google.com from the browser with our code.
    await driver.get("http://google.com");

    //To send a search query by passing the value in searchString.
    await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);

    //Verify the page title and print it
    var title = await driver.getTitle();
    console.log("Title is:", title);

    //It is always a safe practice to quit the browser after execution
    await driver.quit();
  });
  //
});
