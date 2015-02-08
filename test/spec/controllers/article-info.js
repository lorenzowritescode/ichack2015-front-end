'use strict';

describe('Controller: ArticleInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('thankDonateApp'));

  var ArticleInfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticleInfoCtrl = $controller('ArticleInfoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
