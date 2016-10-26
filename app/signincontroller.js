angular.module('signincontroller', ['ngRoute', 'userFactory'])
  .controller('signincontroller', ['$route', 'userFactory', '$http', signincontroller]);

function signincontroller($route, userFactory, $http) { 
  this.disp = 'this is a test';
  this.user = '';
  this.password = '';
  this.redi = () => { 
    
    
    var req = {
    method: 'POST',
    url: '/signin',
    type: {
      'Content-Type': 'application/json'
    }, 
    data: JSON.stringify({ user: this.user, password: this.password })
  }
    $http(req).then((response) => { 
      if (response.data) {
        userFactory.setdata(this.user, this.password);
        window.location.replace('/#/blog');
      }
      else {
         this.user = '';
         this.password = '';
        }
  })
  }
}