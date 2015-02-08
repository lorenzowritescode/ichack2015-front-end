'use strict';

/**
 * @ngdoc service
 * @name thankDonateApp.UserProvider
 * @description
 * # UserProvider
 * Service in the thankDonateApp.
 */
angular.module('thankDonateApp')
.service('UserProvider', function (FB, $firebase) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var usersDB = FB.getRef('users');

    this.getUserData = function (userID) {
        return $firebase(usersDB.child(userID)).$asObject();
    }
});