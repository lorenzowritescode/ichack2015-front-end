'use strict';

/**
 * @ngdoc function
 * @name thankDonateApp.controller:DecusdataCtrl
 * @description
 * # DecusdataCtrl
 * Controller of the thankDonateApp
 */
angular.module('thankDonateApp')
  .controller('DecusDataCtrl', function ($scope, DecusProvider, $routeParams) {
    var userID = $routeParams.userID;
    
    DecusProvider.getUserData(userID)
    .then(function (response) {
        $scope.response = response.data;
    })
    
    console.log(userID, $scope.response);
    
    DecusProvider.getWallet(userID)
    .then(function(response) {
        $scope.wallet = response.data;
    })
  });
