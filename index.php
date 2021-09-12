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
      <label>CPF Indica: <input type="text" ng-model="user.cpf_indica" /></label><br><br>
      <label>CPF Indicado: <input type="text" ng-model="user.cpf_indicado" /></label><br><br>
      <label>Email Indicado: <input type="text" ng-model="user.email_indicado" /></label><br><br>

      <button ng-click="reset()">Limpar</button>
      <button ng-click="update(user)">Salvar</button>
    </form>
    <pre>form = {{user | json}}</pre>
    <pre>leader = {{leader | json}}</pre>
  </div>
</body>

</html>

<!-- 
Copyright 2021 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
-->