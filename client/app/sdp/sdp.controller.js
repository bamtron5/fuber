'use strict';

angular.module('fuberApp')
  .controller('SdpCtrl', function ($scope, $location, $http) {
    $scope.menu = $location.hash();


    $http.get('/api/menus#' + $location.hash()).success(function(menu) {
		$scope.menu = menu[0];
    });

    $http.get('/api/menuItems#' + $scope.menu.name).success(function(menuItems){
    	console.log(menuItems);
    });

  });
