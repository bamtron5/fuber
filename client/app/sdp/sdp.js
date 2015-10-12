'use strict';

angular.module('fuberApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sdp', {
        url: '/sdp',
        templateUrl: 'app/sdp/sdp.html',
        controller: 'SdpCtrl'
      });
  });