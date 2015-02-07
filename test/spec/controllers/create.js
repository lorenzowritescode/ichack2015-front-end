'use strict';

describe('Controller: CreatectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('thankDonateApp'));

  var CreatectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatectrlCtrl = $controller('CreatectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
