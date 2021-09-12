(function (angular) {
  'use strict';
  // Module: copyExample
  angular.
    module('copyExample', []).
    controller('ExampleController', ['$scope', function ($scope) {
      $scope.indicacao = {};

      //Limpar campos [0]
      $scope.reset = function () {
        $scope.indicacao = {};
        document.getElementById('pre-response').innerHTML = 'response = {}'
      };

      //Listar todas as indicações [1]
      $scope.listar = function () {
        requestAPI('GET', 'indicacoes')
      };

      //Criar uma nova indicação [2]
      $scope.update = function (indicacao) {
        var raw = JSON.stringify(angular.copy(indicacao))
        requestAPI('POST', 'indicacao', raw)
      };

      //Deletar uma indicação vigente [3]
      $scope.deletar = function () {
        var codindicacao = prompt("Atenção, insira o codigo da indicação que deseja excluir: ", "");
        requestAPI('DELETE', 'avancastatus', null, codindicacao)
      };

      //Avançar Status da indicação [4]
      $scope.avancar = function () {
        var codindicacao = prompt("Atenção, insira o codigo da indicação que deseja excluir: ", "");
        requestAPI('POST', 'avancastatus', null, codindicacao)
      };

      $scope.reset();
    }]);
})(window.angular);



function requestAPI(type, rota, raw = null, codindicacao = '') {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer 9f10a9cbc46a4faebcd8e904d1c24d25");
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: type,
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://www.quadrosdaroberta.com.br/laravelphp/api/" + rota + '/' + codindicacao, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      document.getElementById('pre-response').innerHTML = 'response = ' + JSON.stringify(JSON.parse(result), null, 2);
    }).catch(error => {
      console.log('error', error)
      document.getElementById('pre-response').innerHTML = 'response = Não é possível acessar essa informação'
    });

  document.getElementById('pre-response').innerHTML = 'response = Loading...';
}