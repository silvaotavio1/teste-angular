(function (angular) {
  'use strict';
  // Module: copyExample
  angular.
    module('copyExample', []).
    controller('ExampleController', ['$scope', function ($scope) {
      $scope.indicacao = {};

      $scope.reset = function () {
        // Example with 1 argument
        $scope.indicacao = {};
        $scope.response = {};
      };

      $scope.update = function (indicacao) {

        raw = JSON.stringify(angular.copy(indicacao));

        var settings = {
          "url": "https://www.quadrosdaroberta.com.br/laravelphp/api/indicacao/",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer 9f10a9cbc46a4faebcd8e904d1c24d25",
            "Content-Type": "application/json"
          },
          "data": raw,
        };
        
        $.ajax(settings).done(function (response) {
          console.log(response);
        });

        $scope.response = response;
      };

      //$scope.reset();
    }]);
})(window.angular);