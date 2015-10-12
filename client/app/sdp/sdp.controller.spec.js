'use strict';

describe('Controller: SdpCtrl', function () {

  // load the controller's module
  beforeEach(module('fuberApp'));

  var SdpCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SdpCtrl = $controller('SdpCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
