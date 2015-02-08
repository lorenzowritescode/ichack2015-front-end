'use strict';

describe('Directive: articleInfo', function () {

  // load the directive's module
  beforeEach(module('thankDonateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<article-info></article-info>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the articleInfo directive');
  }));
});
