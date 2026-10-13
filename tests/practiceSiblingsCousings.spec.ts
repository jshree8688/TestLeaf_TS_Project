import { test } from "@playwright/test";
test("Practice All Xpath Locators", async ({ page }) => {
  await page.goto("https://www.playwrightautomation.com/practice.html");

  /*
    Question 1 — Parent to child
- From: The div containing the Name label and its input.
- To: The direct input child inside that div.
- Task: Write an XPath to find the input directly inside the div.
    */
    page.locator('//div/input[@id="name"]')

    /*Question 2 — Child to parent
- From: The input field for Name.
- To: Its immediate parent element.
- Task: Write an XPath that moves from the Name input to its parent.*/
page.locator('//input[@id="name"]/parent::div')

/*
Question 3 — Grandparent to grandchild
- From: The outer container of the Form Controls section.
- To: All input elements nested anywhere inside that container.
- Task: Write an XPath to find all descendant inputs.*/
page.locator('//form[@id="form-text-inputs"]//input')

/*
Question 4 — Grandchild to grandparent
- From: The Name input field.
- To: The element two levels above the input (its grandparent).
- Task: Write an XPath that moves from the Name input to its grandparent.
*/
page.locator('//input[@id="name"]/ancestor::form')

/*
Question 5 — Following sibling
- From: The Name label.
- To: The input immediately after the label, provided both have the same parent.
- Task: Write an XPath to find the input using following-sibling.
*/
page.locator('//label[@for="name"]/following-sibling::input')

/*
Question 6 — Preceding sibling
- From: The Name input field.
- To: The Name label before it, provided both have the same parent.
- Task: Write an XPath to find the label using preceding-sibling.
*/
page.locator('//input[@id="name"]/preceding-sibling::label')

/*
Question 7 — Following
- From: The Name label.
- To: All input elements appearing after the label anywhere in the HTML document.
- Task: Write an XPath using following.
 */
});
