const webdriverio = require('webdriverio');
const options = {desiredCapabilities: {browserName: 'chrome'}}
const client = webdriverio.remote(options);

client
  .init(options)
  .url('http://www.footlocker.com/product/model:260702/' +
  'sku:31069100/nike-free-rn-flyknit-mens/white/black/')
  .waitForExist('[data-modelsize*="9_5"]',750)
  .click('[data-modelsize*="9_5"]')
  .waitForEnabled('input[value*="Add To Cart"]', 750)
  .click('input[value*="Add To Cart"]')
  .waitForExist('[data-btnname*="FullCart"]', 10000)
  .waitForVisible('[data-btnname*="FullCart"]', 10000)
  .click('[data-btnname*="FullCart"]')
  .end();



