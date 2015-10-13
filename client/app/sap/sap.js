'use strict';

angular.module('fuberApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sap', {
        url: '/sap',
        templateUrl: 'app/sap/sap.html',
        controller: 'SapCtrl',
        authenticate: true
      });
  });