'use strict';

/**
 * @ngdoc directive
 * @name thankDonateApp.directive:articleInfo
 * @description
 * # articleInfo
 */
angular.module('thankDonateApp')
.directive('articleInfo', function () {
    return {
        templateUrl: 'views/article-info.html',
        restrict: 'E',
        scope: {
            article: '=article'
        },
        controller: 'ArticleInfoCtrl'
    };
});