'use strict';

angular.module('fuberApp')
  .controller('SapCtrl', function ($scope, $http, $location, Auth) {
     $scope.user = Auth.getCurrentUser();
  });
