'use strict';

/**
 * @ngdoc function
 * @name thankDonateApp.controller:ArticleInfoCtrl
 * @description
 * # ArticleInfoCtrl
 * Controller of the thankDonateApp
 */
angular.module('thankDonateApp')
.controller('ArticleInfoCtrl', function ($scope, UserProvider, AppRouter) {     
    $scope.title = $scope.article.data.title;
    $scope.timestamp = new Date($scope.article.timestamp)
            .toDateString();
    $scope.blurb = $scope.article.data.body;
    $scope.goto = AppRouter.goto;
    
    var user = UserProvider
        .getUserData($scope.article.uid);
    
    user.$loaded(function (val) { 
        $scope.authorName = val.name;
    })
    
    
});
