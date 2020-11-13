const assert = require('assert'),
puppeteer = require('puppeteer');

let browser, page;

beforeEach(async()=>{
  browser = await puppeteer.launch({
    headless: true
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/Performance");
});
afterEach(async()=>{
  await browser.close();
})

test("test home page url", async()=>{
  const url  = await page.url();
  assert(url==="http://localhost:3000/Performance");
})