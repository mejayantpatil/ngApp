/**
 * Created by Jayant on 06-01-2016.
 */
'use strict';
angular.module('register').service('registerService', registerService);

function registerService() {
    var service = this;
    service.setUser = function (user) {
        return localStorage.setItem('user', JSON.stringify(user));
    };
    service.getUser = function (user, id) {
        return JSON.parse(localStorage.getItem('user'));
    };
    service.clear = function(){
        localStorage.clear();
    }
    return service;
}