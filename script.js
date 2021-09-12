(function(angular) {
  'use strict';
// Module: copyExample
angular.
  module('copyExample', []).
  controller('ExampleController', ['$scope', function($scope) {
    $scope.indicacao = {};

    $scope.reset = function() {
      // Example with 1 argument
      $scope.submit = angular.copy($scope.indicacao);
    };

    $scope.update = function(indicacao) {
      // Example with 2 arguments
      angular.copy(indicacao, $scope.indicacao);
    };

    $scope.reset();
  }]);
})(window.angular);