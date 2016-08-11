'use strict';

const path = '/views';
module.exports = function(app) {
    app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state('content', {
                url: '/content.html',
                templateUrl: path + '/content.html',
                controller: 'contentController'
            });
    }]);
    require('./contentController')(app);
};


