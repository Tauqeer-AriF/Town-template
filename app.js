var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/menu', {
    templateUrl : 'pages/menu.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .when('/contact', {
    templateUrl : 'pages/contact.html',
    controller  : 'ContactController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('MenuController', function($scope) {
  $scope.message = 'Hello from MenuController';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'Hello from AboutController';
});

app.controller('ContactController', function($scope) {
    $scope.message = 'Hello from ContactController';
  });
