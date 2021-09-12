(function(angular) {
  'use strict';
// Module: copyExample
angular.
  module('copyExample', []).
  controller('ExampleController', ['$scope', function($scope) {
    $scope.indicacao = {};

    $scope.reset = function() {
      // Example with 1 argument
      $scope.indicacao = {};
    };

    $scope.update = function(indicacao) {
      // Example with 2 arguments
      $scope.submit = angular.copy(indicacao);
      
    };

    //$scope.reset();
  }]);
})(window.angular);