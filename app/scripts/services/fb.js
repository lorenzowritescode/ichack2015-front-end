'use strict';

/**
 * @ngdoc service
 * @name thankDonateApp.FB
 * @description
 * # FB
 * Service in the thankDonateApp.
 */
angular.module('thankDonateApp')
  .service('FB', function ($firebase, FBURL) {
    var factory = {};
    
    factory.getDB = function (subdir) {
      return $firebase(this.getRef(subdir));
    }
    
    factory.getRef = function (subdir) {
        var path = FBURL + '/' + subdir,
            ref = new Firebase(path);
        
        return ref;
    }
    
    return factory;
  });
