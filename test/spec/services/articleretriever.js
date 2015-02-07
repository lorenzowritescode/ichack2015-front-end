'use strict';

describe('Service: ArticleRetriever', function () {

  // load the service's module
  beforeEach(module('thankDonateApp'));

  // instantiate service
  var ArticleRetriever;
  beforeEach(inject(function (_ArticleRetriever_) {
    ArticleRetriever = _ArticleRetriever_;
  }));

  it('should do something', function () {
    expect(!!ArticleRetriever).toBe(true);
  });

});
