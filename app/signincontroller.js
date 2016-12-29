
angular.module('signincontroller', ['ngRoute'])
  .controller('signincontroller', ['$route', 'userFactory', '$http', 'SocketService', signincontroller]);




function signincontroller($route, userFactory, $http, socketservice) {
  this.disp = 'this is a test';
  this.user = '';
  this.password
  this.redi = () => {
    socketservice.eventEmitter('signin')
    userFactory.setdata(this.user, this.password);
    var req = {
    method: 'POST',
    url: '/signin',
    type: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ username: this.user, password: this.password })
  }
    $http(req).then((response) => {
      if (response.data) {
        userFactory.setdata(this.user, this.password, response.data.userid);
        window.location.replace('/#/blog');
      }
      else {
        this.user = '';
        this.password = '';
        }
  })
  }
}
