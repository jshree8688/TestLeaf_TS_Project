import{test} from '@playwright/test'

test('Practice Dropdown',async ({page}) => {

   await page.goto('https://leaftaps.com/opentaps/control/main')
   await page.locator('#username').fill('democsr2');
   await page.locator('#password').fill('crmsfa');
   await page.locator('.decorativeSubmit').click();

   await page.locator('text=CRM/SFA') .click();
   await page.locator('div[class="x-panel-header"]>a').nth(1).click();
   await page.locator('text=Create Lead').nth(1).click();
})