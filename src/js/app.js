'use strict';

/**
 * @Date 2016-07-07
 * @auther asdf
 *
 * angularJS配置文件
 * 路由：angular ui-router
 *
 */
//样式
import '../css/index.styl';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css';
//angular
import 'angular';
import 'angular-ui-router';
import './service';
import './dreck';
let app = angular.module('app', [
    'ui.router',
    'service',
    'dreck'
    ]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider.when('','/content.html');
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/content.html");
    
    $locationProvider.html5Mode([true]);
}]);

export default app;

require('./index')(app);