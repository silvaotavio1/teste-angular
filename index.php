<!doctype html>
<html>
<body>
<div ng-controller="WelcomeController">
  {{greeting}}
</div>

<script src="angular.js"></script>
<script>
  var app = angular.module('demo', [])
  .controller('WelcomeController', function($scope) {
      $scope.greeting = 'Welcome!';
  });
  angular.bootstrap(document, ['demo']);
</script>
</body>
</html>