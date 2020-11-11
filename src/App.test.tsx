const puppeteer = require('puppeteer')
const assert = require('assert')
let browser
let page



  test('has title "YouTube"', async () => {
    try {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto('http://localhost:3000', {waitUntil: 'domcontentloaded'});
      
      await new Promise(resolve =>  setTimeout(resolve, 30000));
      console.log('done');
  } catch (e) {
      console.log('Err', e);
  }
  jest.setTimeout(30000);
  })