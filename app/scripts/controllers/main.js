'use strict';

/**
 * @ngdoc function
 * @name thankDonateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thankDonateApp
 */
angular.module('thankDonateApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
