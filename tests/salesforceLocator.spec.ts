import { test } from "@playwright/test";
test("Create Lead", async ({ page }) => {
  await page.goto("https://login.salesforce.com/");
  //Enter the Username
  await page.locator('input[id="username"]').fill("jshree02_tlvadnhp@gmail.com");
  await page.locator('input[id="Login"]').click();
  //Enter the password
  await page.locator('input[id="password"]').fill("Shree@8688");
  await page.locator('input[id="Login"]').click();
});
