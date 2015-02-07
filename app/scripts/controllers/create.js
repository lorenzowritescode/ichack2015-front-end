'use strict';

/**
 * @ngdoc function
 * @name thankDonateApp.controller:CreatectrlCtrl
 * @description
 * # CreatectrlCtrl
 * Controller of the thankDonateApp
 */
angular.module('thankDonateApp')
  .controller('CreateCtrl', function ($scope, Publisher) {
    $scope.preview = false;
  
    $scope.togglePreview = function () {
      $scope.preview = !$scope.preview;
    }
    
    $scope.publish = function () {
      var articleData = packagePost();
      Publisher.publish(articleData);
    }
    
    function packagePost () {
      return {
        title: $scope.title,
        body: $scope.htmlPost
      };
    }
    
  });
