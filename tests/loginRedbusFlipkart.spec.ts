import { webkit, test, chromium } from "@playwright/test";

test("Launch browsers RedBus and Flipkart", async () => {
  let webkitBrowser = await webkit.launch();
  let webkitContext = await webkitBrowser.newContext();
  let webkitPage = await webkitContext.newPage();

  await webkitPage.goto("https://www.flipkart.com/");
  //await page.waitForLoadState('domcontentloaded');

  //To retrieve current page URL
  const URL = webkitPage.url();
  console.log(URL);

  //To retrieve Page Title
  const pageTitle = await webkitPage.title();
  console.log(pageTitle);

  let edgeBrowser = await chromium.launch({ channel: "msedge" });
  let edgeContext = await edgeBrowser.newContext();
  let edgePage = await edgeContext.newPage();

  await edgePage.goto("https://www.redbus.in/");
  //await page.waitForLoadState('domcontentloaded');

  //To retrieve current page URL
  const edgeURL = edgePage.url();
  console.log(edgeURL);

  //To retrieve Page Title
  const edgePageTitle = await edgePage.title();
  console.log(edgePageTitle);

  await webkitBrowser.close();
  await edgeBrowser.close();
});
