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
      Publisher.publish("HELLOOO");
    }
    
  });
