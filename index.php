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