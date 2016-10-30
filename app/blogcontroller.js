
angular.module('blogcontroller', ['userFactory'])
  .controller('blogcontroller', ['$http', 'userFactory',  blogcont])


function blogcont($http, userfactory) {
  // var socket = io.connect();
  this.entry = '';
  
  this.submit = () => { 
  userfactory.socket.emit('message')  
  console.log('userId:', userfactory.id)
  console.log('user:', userfactory.user)
  this.entry = '';
}
}









// .controller('blogcontroller', function($scope) {
//   $scope.number = '';

//   $scope.$watch('number', function() {
//     $scope.entry = $scope.number;
//   })
// });