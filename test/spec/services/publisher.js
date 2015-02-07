'use strict';

describe('Service: Publisher', function () {

  // load the service's module
  beforeEach(module('thankDonateApp'));

  // instantiate service
  var Publisher;
  beforeEach(inject(function (_Publisher_) {
    Publisher = _Publisher_;
  }));

  it('should do something', function () {
    expect(!!Publisher).toBe(true);
  });

});
