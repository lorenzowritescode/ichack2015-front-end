'use strict';

/**
 * @ngdoc function
 * @name thankDonateApp.controller:AuthorCtrl
 * @description
 * # AuthorCtrl
 * Controller of the thankDonateApp
 */
angular.module('thankDonateApp')
  .controller('AuthorCtrl', function ($scope, $routeParams, ArticleRetriever) {
    
    var authorID = $routeParams.authorID;
    
    var articles = ArticleRetriever
        .getArticlesByUserID(authorID);
    
    articles.$loaded(function (data) {
        console.log(data);
        
        $scope.articles = _.filter(data, function (d) {
            console.log(d, d.uid, authorID);
            return d.uid == authorID;
        });
    })
    console.log("Hello");
  });
