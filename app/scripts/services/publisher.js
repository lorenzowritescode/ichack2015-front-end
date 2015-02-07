'use strict';

/**
 * @ngdoc service
 * @name thankDonateApp.Publisher
 * @description
 * # Publisher
 * Service in the thankDonateApp.
 */
angular.module('thankDonateApp')
.service('Publisher', function (simpleLogin, $firebase, FB) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  var Publisher = {},
      firebase = FB.getDB('articles');

  Publisher.publish = function (blogPostData) {
    var uid = simpleLogin.user.auth.uid,
        timestamp = Date.now(),
        articleData = {
          uid: uid,
          timestamp: timestamp,
          data: blogPostData
        };

    firebase.$push(articleData)
    .then(function(newChildRef) {
      console.log("added record with id " +   newChildRef.key());
    });
  }

  return Publisher;
});
