'use strict';

/**
 * @ngdoc service
 * @name thankDonateApp.ArticleRetriever
 * @description
 * # ArticleRetriever
 * Service in the thankDonateApp.
 */
angular.module('thankDonateApp')
  .service('ArticleRetriever', function () {
    var ret = {};
  
    ret.getAll = function () {
      return [
        {
          title: "Hello World",
          author: "Guy Riese",
          subtitle: "blah blah blah",
          timestamp: Date.now(),
          article_id: 1
        },
        {
          title: "Alberto is a python beast",
          author: "Alberto Deca",
          subtitle: "blah blah blah python django blah",
          timestamp: Date.now(),
          article_id: 2
        }
      ]
    }
    
    return ret;
  });
