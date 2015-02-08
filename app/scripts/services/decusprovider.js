'use strict';

/**
 * @ngdoc service
 * @name thankDonateApp.DecusProvider
 * @description
 * # DecusProvider
 * Service in the thankDonateApp.
 */
angular.module('thankDonateApp')
  .service('DecusProvider', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var baseURL = 'http://beanstalk001.herokuapp.com/';
    
    this.getUserData = function (userID) {
        var queryURL = 'user/' + userID + '/';
        
        return hget(queryURL);
    }
    
    this.getWallet = function (userID) {
        var queryURL = 'getwallet/' + userID + '/';
        
        return hget(queryURL);
    }
    
    function hget (queryURL) {
        return $http.get(baseURL + queryURL);
    }
    
  });
