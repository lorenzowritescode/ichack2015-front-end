'use strict';

/**
 * @ngdoc function
 * @name thankDonateApp.controller:ArticleInfoCtrl
 * @description
 * # ArticleInfoCtrl
 * Controller of the thankDonateApp
 */
angular.module('thankDonateApp')
.controller('ArticleInfoCtrl', function ($scope, UserProvider, AppRouter) {    
    _.extend($scope.article, {
        getTitle: function () {
            return this.data.title;
        },
        getTimeStamp: function () {
            return new Date(this.timestamp)
            .toDateString();
        },
        getAuthor: function () {
            return UserProvider
            .getUserData(this.uid, function (snap) {
                
                return snap.val().name;
            });
            
//            console.log(userData);
//            return userData.name;
        },
        getBlurb: function () {
            return this.data.body;
        }
    })
    
    $scope.goto = AppRouter.goto;
});
