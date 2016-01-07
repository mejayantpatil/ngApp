/**
 * Created by Jayant on 07-01-2016.
 */
'use strict';
angular.module('home').controller('homeController', homeController);

function homeController(registerService, $location) {
    var vm = this;
    var template = '<div class="text-center">' +
        '<a href="javascript:void(0)" type="button" class="btn btn-xs" ng-click="grid.appScope.vm.edit(row.entity)" data-toggle="modal" data-target="#myModal">' +
        '<span class="glyphicon glyphicon-edit"></span></a>' +
        '<a href="javascript:void(0);" ng-click="grid.appScope.vm.delete(row.entity)">' +
        '<span class="glyphicon glyphicon-trash"></span></a>' +
        '</div>';
    vm.currentUser = {};
    vm.currentUser = registerService.getUser();
    vm.user = {};
    vm.editing = false;
    vm.title = 'New';
    vm.userIndex = -1;
    vm.successMessage = '';
    vm.errorMessage = '';
    vm.data = [
        {
            firstName: 'jayant',
            lastName: 'patil',
            emailId: 'jayant.patil@capgemini.com',
            phone: '9975180732',
            city: 'Pune',
            state: 'Maharashtra'
        },
        {
            firstName: 'jayant',
            lastName: 'patil',
            emailId: 'jayant.patil@capgemini.com',
            phone: '9975180732',
            city: 'Pune',
            state: 'Maharashtra'
        },
        {
            firstName: 'jayant',
            lastName: 'patil',
            emailId: 'jayant.patil@capgemini.com',
            phone: '9975180732',
            city: 'Pune',
            state: 'Maharashtra'
        },
        {
            firstName: 'jayant',
            lastName: 'patil',
            emailId: 'jayant.patil@capgemini.com',
            phone: '9975180732',
            city: 'Pune',
            state: 'Maharashtra'
        }
    ];
    vm.gridOptions = {
        data: vm.data,
        columnDefs: [
            {
                field: 'id', name: 'Id', width: 50, cellTemplate:'<div>{{grid.appScope.vm.data.indexOf(row.entity) + 1}}</div>'
            },
            {
                field: 'firstName'
            },
            {
                field: 'lastName'
            },
            {
                field: 'emailId'
            },
            {
                field: 'phone', type: 'number'
            },
            {
                field: 'city'
            },
            {
                field: 'state'
            },
            {
                field: 'Action',
                cellTemplate: template
            }
        ]
    };
    // edit user
    vm.edit = function (entity) {
        vm.title = 'Edit User';
        vm.user = {};
        vm.userIndex = vm.data.indexOf(entity);
        angular.copy(entity, vm.user);
        vm.editing = true;
        vm.successMessage ='';

    };
    // save/update user data
    vm.update = function (user) {
        if (vm.title == 'Edit User') {
            angular.copy(user, vm.data[vm.userIndex]);
            vm.editing = false;
            vm.successMessage = 'User Updated Successfully...';
        } else if (vm.title == 'New') {
            vm.editing = false;
            vm.data.push(user);
            vm.successMessage = 'User Saved Successfully...';
        }

    };
    vm.new = function () {
        vm.userIndex = -1;
        vm.editing = true;
        vm.user = {};
        vm.user = {};
        vm.title = 'New';
        vm.successMessage ='';

    };
    vm.delete = function (entity) {
        var id = vm.data.indexOf(entity);
        vm.data.splice(id, 1);
    };
    vm.logout = function () {
        registerService.clear();
        $location.url('/register')
    };
}