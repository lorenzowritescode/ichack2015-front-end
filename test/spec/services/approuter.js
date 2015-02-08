'use strict';

describe('Service: AppRouter', function () {

  // load the service's module
  beforeEach(module('thankDonateApp'));

  // instantiate service
  var AppRouter;
  beforeEach(inject(function (_AppRouter_) {
    AppRouter = _AppRouter_;
  }));

  it('should do something', function () {
    expect(!!AppRouter).toBe(true);
  });

});
