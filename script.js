(function (angular) {
  'use strict';
  // Module: copyExample
  angular.
    module('copyExample', []).
    controller('ExampleController', ['$scope', function ($scope) {
      $scope.indicacao = {};

      $scope.reset = function () {
        // Example with 1 argument
        testeAlerta()
        $scope.indicacao = {};
        document.getElementById('pre-response').innerHTML = 'response = {}'
      };

      $scope.deletar = function () {
        var codindicacao = prompt("Atenção, insira o codigo da indicação que deseja excluir: ", "");
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 9f10a9cbc46a4faebcd8e904d1c24d25");
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
          method: 'DELETE',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://www.quadrosdaroberta.com.br/laravelphp/api/indicacao/" + codindicacao, requestOptions)
          .then(response => response.text())
          .then(result => {
            console.log(result);
            document.getElementById('pre-response').innerHTML = 'response = ' + JSON.stringify(JSON.parse(result), null, 2);
          }).catch(error => {
            console.log('error', error)
            document.getElementById('pre-response').innerHTML = 'response = Não é possível acessar essa informação'
          });

        document.getElementById('pre-response').innerHTML = 'response = Loading...';
      };

      $scope.avancar = function () {
        var codindicacao = prompt("Atenção, insira o codigo da indicação que deseja avançar o status: ", "");
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 9f10a9cbc46a4faebcd8e904d1c24d25");
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://www.quadrosdaroberta.com.br/laravelphp/api/avancastatus/" + codindicacao, requestOptions)
          .then(response => response.text())
          .then(result => {
            console.log(result);
            document.getElementById('pre-response').innerHTML = 'response = ' + JSON.stringify(JSON.parse(result), null, 2);
          }).catch(error => {
            console.log('error', error)
            document.getElementById('pre-response').innerHTML = 'response = Não é possível acessar essa informação'
          });

        document.getElementById('pre-response').innerHTML = 'response = Loading...';
      };

      $scope.listar = function () {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 9f10a9cbc46a4faebcd8e904d1c24d25");
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://www.quadrosdaroberta.com.br/laravelphp/api/indicacoes/", requestOptions)
          .then(response => response.text())
          .then(result => {
            console.log(result);
            document.getElementById('pre-response').innerHTML = 'response = ' + JSON.stringify(JSON.parse(result), null, 2);
          }).catch(error => {
            console.log('error', error)
            document.getElementById('pre-response').innerHTML = 'response = Não é possível acessar essa informação'
          });

        document.getElementById('pre-response').innerHTML = 'response = Loading...';
      };

      $scope.update = function (indicacao) {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 9f10a9cbc46a4faebcd8e904d1c24d25");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(angular.copy(indicacao));

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://www.quadrosdaroberta.com.br/laravelphp/api/indicacao/", requestOptions)
          .then(response => response.text())
          .then(result => {
            console.log(result);
            document.getElementById('pre-response').innerHTML = 'response = ' + JSON.stringify(JSON.parse(result), null, 2);
          }).catch(error => {
            console.log('error', error)
            document.getElementById('pre-response').innerHTML = 'response = Não é possível acessar essa informação'
          });

        document.getElementById('pre-response').innerHTML = 'response = Loading...';
      };

      $scope.reset();
    }]);
})(window.angular);



function testeAlerta()
{
  alert('oi');
}