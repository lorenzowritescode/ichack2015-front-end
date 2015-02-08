'use strict';

/**
 * @ngdoc service
 * @name thankDonateApp.UserProvider
 * @description
 * # UserProvider
 * Service in the thankDonateApp.
 */
angular.module('thankDonateApp')
.service('UserProvider', function (FB) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var usersDB = FB.getRef('users');

    return {
        getUserData: function (userID, callback) {
            var userData = {};
            
            usersDB.child(userID)
            .once('value', callback);
        }
    }
});
