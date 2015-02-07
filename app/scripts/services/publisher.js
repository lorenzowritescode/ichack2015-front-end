'use strict';

/**
 * @ngdoc service
 * @name thankDonateApp.Publisher
 * @description
 * # Publisher
 * Service in the thankDonateApp.
 */
angular.module('thankDonateApp')
  .service('Publisher', function (simpleLogin, $firebase) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var Publisher = {};
  
    Publisher.publish = function (blogPostData) {
      var uid = simpleLogin.user.auth.uid,
          timestamp = Date.now();
    }
    
    return Publisher;
  });
