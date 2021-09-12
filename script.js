// Module: copyExample
angular.
  module('copyExample', []).
  controller('ExampleController', ['$scope', function($scope) {
    $scope.submit = {};

    $scope.reset = function() {
      $scope.indicacao = {}
    };

    $scope.update = function(user) {
      $scope.submit = angular.copy(indicacao);
    };

    $scope.reset();
  }]);