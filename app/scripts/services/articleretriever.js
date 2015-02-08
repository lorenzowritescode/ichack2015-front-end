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
        articlesDB = FB.getDB('articles'),
        articlesRef = FB.getRef('articles');

    ret.getAll = function () {
        return articlesDB.$asArray();
    };

    ret.getArticlesByUserID = function (userID) {
        return articlesDB.$asArray();
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
