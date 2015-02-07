'use strict';

/**
 * @ngdoc function
 * @name thankDonateApp.controller:ReadCtrl
 * @description
 * # ReadCtrl
 * Controller of the thankDonateApp
 */
angular.module('thankDonateApp')
.controller('ReadCtrl', function ($scope, $routeParams, ArticleRetriever) {
    var articleID = $routeParams.articleID,
        articleData = ArticleRetriever.getArticleByID(articleID);
    
    $scope.articleHtml = articleData.getHtml();
  });
