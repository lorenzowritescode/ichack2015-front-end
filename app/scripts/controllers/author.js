'use strict';

/**
 * @ngdoc function
 * @name thankDonateApp.controller:AuthorCtrl
 * @description
 * # AuthorCtrl
 * Controller of the thankDonateApp
 */
angular.module('thankDonateApp')
  .controller('AuthorCtrl', function ($scope, $routeParams, ArticleRetriever, UserProvider) {
    
    var authorID = $routeParams.authorID;
    
    var user = UserProvider.getUserData(authorID);
    
    user.$loaded(function (snap) {
        $scope.name = snap.name;
    })
    
    var articles = ArticleRetriever
        .getArticlesByUserID(authorID);
    
    articles.$loaded(function (data) {        
        $scope.articles = _.filter(data, function (d) {
            return d.uid == authorID;
        });
    })
    console.log("Hello");
  });
