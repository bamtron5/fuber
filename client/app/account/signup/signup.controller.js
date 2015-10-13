'use strict';

angular.module('fuberApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, $http) {
    $scope.user = {};
    $scope.errors = {};
    $scope.addMenu = function(username){
      $http.post('/api/menus', { userName: username });
      // Account created, redirect to home
      $location.path('/');
    };

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          $scope.addMenu($scope.user.name);
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

  });
