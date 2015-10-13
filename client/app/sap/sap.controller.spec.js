'use strict';

describe('Controller: SapCtrl', function () {

  // load the controller's module
  beforeEach(module('fuberApp'));

  var SapCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SapCtrl = $controller('SapCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
