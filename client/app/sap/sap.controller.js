'use strict';

angular.module('fuberApp')
  .controller('SapCtrl', function ($scope, $http, $location, Auth) {
  	 $scope.user = Auth.getCurrentUser();

  	 //redirects work fine, but non sap owner should not access this page
  	 if($scope.user.name !== $location.hash()){
  	 	$location.path("/");
  	 }

     $http.get('/api/menus/' + $scope.user.name).success(function(menu){
     	$scope.menu = menu;
     });

     $scope.shopName;

     $scope.postMenu = function(){
     	$http.put('/api/menus/' + $scope.user.name, {
     		shopName: $scope.shopName
     		}
 		);

 		alert('updated');
     };
  });
