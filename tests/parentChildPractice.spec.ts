import { test } from "@playwright/test";
test("Practice Parent-Child Xpath", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  /*1.Parent to child 
    Find the direct child div inside the login form*/

  page.locator('//form[@id="login"]/div');

  /*2.Child to Parent 
     Starting from the username input, find its parent div.
      Child: input with id username*/

  page.locator('//input[@id="username"]/parent::div');

  /*3.Grandparent to grandchild
    Find every input inside the login form.
     Grandparent: form with id login
    */
  page.locator('//form[@id="login"]//input');

  /*4.Grandchild to grandParent
    Starting from the password input, find its enclosing form.
    Grandchild: input with id password
*/

    page.locator('//input[@id="password"]/ancestor::form');
});
