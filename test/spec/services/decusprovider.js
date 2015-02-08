'use strict';

describe('Service: DecusProvider', function () {

  // load the service's module
  beforeEach(module('thankDonateApp'));

  // instantiate service
  var DecusProvider;
  beforeEach(inject(function (_DecusProvider_) {
    DecusProvider = _DecusProvider_;
  }));

  it('should do something', function () {
    expect(!!DecusProvider).toBe(true);
  });

});
