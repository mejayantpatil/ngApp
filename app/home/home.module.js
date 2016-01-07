/**
 * Created by Jayant on 07-01-2016.
 */
'use strict';
var app = angular.module('home', []);

app.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'homeController',
        controllerAs: 'vm'
    })
});