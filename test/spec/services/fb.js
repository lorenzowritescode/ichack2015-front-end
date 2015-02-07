'use strict';

describe('Service: FB', function () {

  // load the service's module
  beforeEach(module('thankDonateApp'));

  // instantiate service
  var FB;
  beforeEach(inject(function (_FB_) {
    FB = _FB_;
  }));

  it('should do something', function () {
    expect(!!FB).toBe(true);
  });

});
