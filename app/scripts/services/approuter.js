'use strict';

/**
 * @ngdoc service
 * @name thankDonateApp.AppRouter
 * @description
 * # AppRouter
 * Service in the thankDonateApp.
 */
angular.module('thankDonateApp')
  .service('AppRouter', function ($location) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.goto = function (type, id) {
          $location.path(type + '/' + id);
      }
  });
