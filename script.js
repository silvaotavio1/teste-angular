// Module: copyExample
angular.
  module('copyExample', []).
  controller('ExampleController', ['$scope', function($scope) {
    $scope.submit = {};

    $scope.reset = function() {
      // Example with 1 argument
      // $scope.user = angular.copy($scope.leader);
      $scope.indicacao = {}
    };

    $scope.update = function(user) {
      // Example with 2 arguments
      angular.copy(indicacao, $scope.submit);
    };

    $scope.reset();
  }]);