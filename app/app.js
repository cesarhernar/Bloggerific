
const app = angular
  .module('myApp', [
    'ngRoute',
    'blogcontroller',
    'signincontroller',
    'SocketService',
    'ngFileUpload',
    'userFactory'
  ]);

app.config(configFunction);


function configFunction($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './app/partials/signin.html',
      controller: 'signincontroller'
    })
    .when('/blog', {
      templateUrl: './app/partials/blog.html',
      controller: 'blogcontroller'
    })
    .when('/posts', {
      templateUrl: './app/partials/posts.html',
      contoller: 'postscontroller'
    });
}
