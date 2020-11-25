const assert = require('assert'),
puppeteer = require('puppeteer');
jest.setTimeout(10000);
let browser, page;

beforeEach(async()=>{
  browser = await puppeteer.launch({
	args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true
  });
  page = await browser.newPage();
  await page.goto("http://localhost/performance");
});

test("test home page url", async()=>{
  const url  = await page.url();
  assert(url==="http://localhost/performance");

})
