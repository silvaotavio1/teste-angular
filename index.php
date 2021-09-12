<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Teste Angular - Otávio</title>


  <script src="//code.angularjs.org/1.8.2/angular.min.js"></script>
  <script src="script.js"></script>



</head>

<body ng-app="copyExample">
  <div ng-controller="ExampleController">
    <form novalidate class="simple-form">
      <label>CPF Indica: <input type="text" ng-model="indicacao.cpf_indica" /></label><br><br>
      <label>CPF Indicado: <input type="text" ng-model="indicacao.cpf_indicado" /></label><br><br>
      <label>Email Indicado: <input type="text" ng-model="indicacao.email_indicado" /></label><br><br>

      <button ng-click="reset()">Limpar</button>
      <button onclick="update(indicacao)">Salvar</button>
    </form>
    <pre>indicacao = {{indicacao | json}}</pre>
    <pre>response = {{response | json}}</pre>
  </div>
</body>

</html>

<!-- 
Copyright 2021 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
-->