/**
 ** @Author: Fender Mora
 ** Date  : September 3rd
 *
 ** Description: Testing to the pase
 *? https://lambdatest.github.io/sample-todo-app/
 */

const { Builder, By, Key } = require("selenium-webdriver");

async function example() {
  // launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to out application
  await driver.get("https://lambdatest.github.io/sample-todo-app/");

  //add a todo

  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("Fender Mora - Selenium", Key.RETURN);

  //Close Browser
  await driver.quit();

  //close the browser
}

example();
