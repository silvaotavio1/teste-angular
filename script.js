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
      $scope.response = {};
    };

    $scope.update = function(indicacao) {



      $scope.response = angular.copy(indicacao);
    };

    //$scope.reset();
  }]);
})(window.angular);