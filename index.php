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
    <label>Name: <input type="text" ng-model="user.name" /></label><br />
    <label>Age:  <input type="number" ng-model="user.age" /></label><br />
    Gender: <label><input type="radio" ng-model="user.gender" value="male" />male</label>
            <label><input type="radio" ng-model="user.gender" value="female" />female</label><br />
    <button ng-click="reset()">RESET</button>
    <button ng-click="update(user)">SAVE</button>
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