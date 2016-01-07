/**
 * Created by Jayant on 06-01-2016.
 */
'use strict';
var app = angular.module('register', []);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/register', {
            templateUrl: 'register/register.html',
            controller: 'registerController',
            controllerAs: 'vm'
        });
});
