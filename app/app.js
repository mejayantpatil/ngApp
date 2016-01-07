'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'register',
    'home',
    'ui.grid',
    'ui.grid.autoResize'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/register'});
    }]);
