import { test, expect } from '@playwright/test';

test('learn to launch the browser', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    const URL = page.url();
    console.log(URL);
    await page.waitForTimeout(3000);
    const title =await page.title();
    console.log(title);

})