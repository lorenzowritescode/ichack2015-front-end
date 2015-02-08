'use strict';

describe('Controller: DecusdataCtrl', function () {

  // load the controller's module
  beforeEach(module('thankDonateApp'));

  var DecusdataCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DecusdataCtrl = $controller('DecusdataCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
