'use strict';

/**
 * @ngdoc function
 * @name thankDonateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thankDonateApp
 */
angular.module('thankDonateApp')
  .controller('MainCtrl', function ($scope, ArticleRetriever) {
    $scope.articles = ArticleRetriever.getAll();
  });
