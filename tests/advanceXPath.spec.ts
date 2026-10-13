//Write the typescript code to login to leaftaps application using Advanced Xpaths.
import { test } from "@playwright/test";

test("Advanced Xpaths using Leaftaps Application", async ({ page }) => {
  await page.goto("https://leaftaps.com/opentaps/control/main");
});
