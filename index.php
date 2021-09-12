<!DOCTYPE html>
<html>

<head>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>Angular JS - Teste - Otávio</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <!-- <link rel='stylesheet' type='text/css' media='screen' href='main.css'> -->
  <script src='script.js'></script>
</head>

<body>

  <div ng-controller="ExampleController">
    <form novalidate class="simple-form">
      <label>Name: <input type="text" ng-model="user.name" /></label><br />
      <label>Age: <input type="number" ng-model="user.age" /></label><br />
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