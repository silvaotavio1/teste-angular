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

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 9f10a9cbc46a4faebcd8e904d1c24d25");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "cpf_indica": "12453503669",
          "cpf_indicado": "40678960003",
          "email_indicado": "otaviosilva96@gmail.com"
        });

        console.log($raw)

        raw = angular.copy(indicacao);

        console.log($raw)

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://www.quadrosdaroberta.com.br/laravelphp/api/indicacao/", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

        $scope.response = angular.copy(indicacao);
      };

      //$scope.reset();
    }]);
})(window.angular);