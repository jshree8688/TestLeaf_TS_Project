import { test } from "@playwright/test";

test("Practice All Relative XPath", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");

  //1.Attribute based find the Full Name input using its ID
  await page.locator('//input[@id="userName"]').fill("Jayashree");

  //2.Attribute based find the email input using its ID
  await page.locator('//input[@id="userEmail"]').fill("jshree02@gmail.com");

  //3.Text based find the button using exact text submit
  await page.locator('//button[text()="Submit"]').click();

  //4. Partial Attribute based find the Full Name input using its ID
  await page.locator('(//input[contains(@id,"user")])[1]').fill("Jayashree");

  //5. Partial Attribute based find the email input using its placeholder
  await page.locator('//input[contains(@placeholder,"example.com")]').fill("jshree02@gmail.com");

  //6.Text based find the button using exact text submit
  await page.locator('//button[contains(text(),"Sub")]').click();

  //7.Collection based Xpath using Webelemts second row Edit buitton
  await page.goto('https://demoqa.com/webtables');
  await page.locator('(//span[@title="Edit"])[2]').click()
 await page.locator('//button[@id="submit"]').click()
  await page.locator('(//tbody/tr)[3]').highlight()
});
