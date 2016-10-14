const options = require('./options');

describe('buy some yeezys', function () {
  it('buy em all', function () {
    let size = options.size.length < 2 ? options.size + '.0' : options.size;
    browser.url(options.url);
    browser.click('#pdp_size_select');
    browser.click(`a[data-value*="${size}"]`);
    browser.click('#add_to_cart');
    browser.click('#header_cart_link');
    browser.click('#cart_checkout_button');
    _checkout();
    _payment();
    browser.waitForEnabled('#orderSubmit');
    //browser.click('#orderSubmit') //Uncomment this to finalize the whole payment process
  });
});

function _checkout () {
  browser.waitForExist('#billPaneShipToBillingAddress');
  browser.click('#billPaneShipToBillingAddress');
  browser.setValue('#billFirstName', options.firstName);
  browser.setValue('#billLastName', options.lastName);
  browser.setValue('#billAddress1', options.billing.addressLine1);
  browser.setValue('#billPostalCode', options.billing.zipCode);
  browser.setValue('#billHomePhone', options.phoneNumber);
  browser.setValue('#billEmailAddress', options.email);

  browser.setValue('#shipFirstName', options.firstName);
  browser.setValue('#shipLastName', options.lastName);
  browser.setValue('#shipAddress1', options.shipping.addressLine1);
  browser.setValue('#shipAddress2', options.shipping.addressLine2);
  browser.setValue('#shipPostalCode', options.shipping.zipCode);
  browser.setValue('#shipHomePhone', options.phoneNumber);

  browser.click('#shipPaneContinue')
  browser.pause(30000);
  browser.waitForEnabled('#shipMethodPaneContinue');
  browser.click('#shipMethodPaneContinue');
  browser.pause(30000);
}

function _payment () {
  browser.setValue('#CardNumber', options.payment.number);
  browser.setValue('#CardExpireDateMM', options.payment.expiration);
  browser.setValue('#CardCCV', options.payment.csc);
  browser.click('#payMethodPaneContinue');
}
