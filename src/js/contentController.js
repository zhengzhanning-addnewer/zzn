'use strict';

module.exports = function(list) {

    list.controller('contentController', ['$scope', '$http','$timeout', function($scope, $http,$timeout) {

        $scope.expr = 'wefwef';
        $scope.email = 'names';
        $scope.submitted = false;
        $scope.signupForm = function() {
            if ($scope.signup_form.$valid) {
                // ????
            } else {
                $scope.signup_form.submitted = true;
            }
        };
        $scope.ahref = {
            hrefs :'http://aliyun.com',
            names:'aliyuun'
        };
        $scope.isDisabled = true;
        $timeout(
            function () {
                $scope.isDisabled = false;
                console.log(typeof (isDisabled))
            },5000
        );
    }]).controller('SomeController', function($scope) {
        // ????????????式
        $scope.someModel = {
            someValue: 'hello computer'
        };
// ??式???
        $scope.someBareValue = 'hello computer';
// ?? $scope ??的????样没??
        $scope.someAction = function() {
// ?SomeController?ChildController中??{{ someBareValue }}
            $scope.someBareValue = 'hello human, from parent';
            $scope.someModel.someValue = 'hello human, from parent';
        };
    })
        .controller('ChildController', function($scope) {
            $scope.childAction = function() {
// ?ChildController中??{{ someBareValue }}
                $scope.someBareValue = 'hello human, from child';
                $scope.someModel.someValue = 'hello human, from child';
            };
        });
};
