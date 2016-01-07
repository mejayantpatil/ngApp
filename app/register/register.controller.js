/**
 * Created by Jayant on 06-01-2016.
 */
'use strict';
angular.module('register').controller('registerController', registerController);

function registerController(registerService, $location) {
    var vm = this;
    vm.successMessage = '';
    vm.errorMessage = '';
    function initialize() {
        registerService.getUser();
    }

    initialize();
    vm.register = function (user) {
        registerService.setUser(user);
        vm.successMessage = 'User Saved Successfully...';
        vm.user = {};
        //send user to home
        $location.url('/home');
    };
}