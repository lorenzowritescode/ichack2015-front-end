'use strict';

/**
 * @ngdoc service
 * @name thankDonateApp.ArticleRetriever
 * @description
 * # ArticleRetriever
 * Service in the thankDonateApp.
 */
angular.module('thankDonateApp')
.service('ArticleRetriever', function (FB, $firebase) {
    var ret = {},
        articlesDB = FB.getDB('articles');

    ret.getAll = function () {
        return articlesDB.$asArray();
        
        /*      
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
      ]*/
    };

    ret.getArticleByID = function (article_id) {
        return {
            getHtml: function () {
                return "<h1>PORCA EVA</h1>"
            }
        }
    }

    return ret;
});
