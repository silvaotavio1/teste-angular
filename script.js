// Module: copyExample
angular.
  module('copyExample', []).
  controller('ExampleController', ['$scope', function($scope) {
    $scope.indicacao = {};

    $scope.reset = function() {
      $scope.indicacao = {}
    };

    $scope.update = function(user) {
      $scope.indicacao = angular.copy(indicacao);
    };

    //$scope.reset();
  }]);