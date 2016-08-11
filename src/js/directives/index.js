'use strict';
let angular = window.angular;
let myDierctive = angular.module('myDirective',[]);
myDierctive.directive('qdirective',function () {
    return {
        restrict: 'E A C',
        // replace:true,
        scope:{
            myUrl : '@',
            myLinkText:'@'
        },
        template: '<a href="{{myUrl}}">{{myLinkText}}</a>'
    };
});
// export default myDierctive;