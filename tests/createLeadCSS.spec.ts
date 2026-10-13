/*
1. Navigate to the URL: http://leaftaps.com/opentaps/control/main
2. Enter the username as democsr2.
3. Enter the password as crmsfa.
4. Click the Login button.
5. Click CRM/SFA.
6. Click Leads.
7. Click Create Lead.
8. Use only CSS selectors to locate all web elements.
9. Fill the Company Name.
10. Fill the First Name.
11. Fill the Last Name.
12. Fill the Salutation.
13. Fill the Title.
14. Fill the Annual Revenue.
15. Fill the Department.
16. Locate the Source dropdown using a CSS selector.
17. Iterate through all options in the Source dropdown.
18. Print each dropdown value/text in the console.
19. Fill the Phone Number.
20. Click the Create Lead button.
*/

import { test } from "@playwright/test";
test("Create a Lead Using CSS Selectors", async ({ page }) => {
  //1.Navigate to the URL
  await page.goto("https://leaftaps.com/opentaps/control/main");
  //2.Enter the username
  await page.locator('input[id="username"]').fill("democsr2");
  //3.Enter the Password
  await page.locator("#password").fill("crmsfa");
  //4.Click the Login Button
  await page.locator(".decorativeSubmit").click();
  //5. Click CRM/SFA.
  await page.locator("text=CRM/SFA").click();
  //6. Click Leads.
  await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
  //7.Click Create Lead
  await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
  //8. Fill the Company Name.
  await page.locator("#createLeadForm_companyName").fill("TestLeaf");
  //9. Fill the First Name.
  await page.locator("#createLeadForm_firstName").fill("Jayashree");
  //10.Fill the LastName
  await page.locator("#createLeadForm_lastName").fill("Ravi");
  //11. Fill the Salutation.
  await page.locator("input#createLeadForm_personalTitle").fill("Mrs");
  //12. Fill the Title.
  await page
    .locator("#createLeadForm_generalProfTitle")
    .fill("Senior Associate");
  //13.Fill the Annual Revenue.
  await page.locator('input[name="annualRevenue"]').fill("120000");
  //14.Fill the Department.
  await page
    .locator("#createLeadForm_departmentName")
    .fill("Information Technology");
  //15.Locate the Source dropdown using a CSS selector.
  const sourceDropdown = page.locator(
    'select[id="createLeadForm_dataSourceId"]',
  );
  //16.Iterate through all options in the Source dropdown.
  const sourceOptions = page.locator(
    'select[id="createLeadForm_dataSourceId"] option',
  );
  const optionCount = await sourceOptions.count();
  //17. Print each dropdown value/text in the console.
  for (let i = 0; i < optionCount; i++) {
    console.log(await sourceOptions.nth(i).innerText());
  }
  //18.Fill the Phone Number
  await page
    .locator('input[id="createLeadForm_primaryPhoneNumber"]')
    .fill("9791525440");
  //19.Click the Create Lead button.
  await page.locator(".smallSubmit").click();
});
