const webdriverio = require('webdriverio');
const options = {desiredCapabilities: {browserName: 'chrome'}}
const client = webdriverio.remote(options);

client
  .init()
  .url('http://www.eastbay.com/product/model:249030/sku:AQ7651/' +
    'adidas-2015-crazylight-boost-primeknit-mens/andrew-wiggins/blue/white/')
  .click('#pdp_size_select')
  .end();