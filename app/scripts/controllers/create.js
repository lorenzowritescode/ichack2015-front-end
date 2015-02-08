'use strict';

/**
 * @ngdoc function
 * @name thankDonateApp.controller:CreatectrlCtrl
 * @description
 * # CreatectrlCtrl
 * Controller of the thankDonateApp
 */
angular.module('thankDonateApp')
.controller('CreateCtrl', function ($scope, Publisher) {
    $scope.preview = false;

    $scope.togglePreview = function () {
        $scope.preview = !$scope.preview;
    }

    $scope.publish = function () {
        if (!validatePost())
            return;
        else
            $scope.postError = null;
        
        var articleData = packagePost();
        Publisher.publish(articleData);
    }

    function packagePost () {
        return {
            title: $scope.title,
            body: $scope.htmlPost
        };
    }
    
    function validatePost () {
        var errors = [];
        
        if (empty($scope.title))
            errors.push("the title can't be empty")
        if (empty($scope.htmlPost))
            errors.push("the body can't be empty.")
            
        $scope.postError = errors.join(' and ');
        
        return errors.length == 0;
        
        function empty (s) {
            return s === undefined ||
                s === null || 
                s === '' || 
                s.toString() === '' ||
                s.toString().trim() == '';
        }
    }

});
