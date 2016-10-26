

angular.module('blogcontroller', ['userFactory'])
  .controller('blogcontroller', ['$http', 'userFactory',  blogcont])


function blogcont($http, userfactory) {
  this.entry = '';
  this.submit = () => { 
  console.log(userfactory.user, userfactory.password)
  var req = {
    method: 'POST',
    url: '/submitentry',
    type: {
      'Content-Type': 'application/json'
    }, 
    data: JSON.stringify({submission: this.entry})
  }
  $http(req).then((err) => { 
    if (err) {
      console.log('this is an error')
      console.error(err);
    }
  })
  this.entry = '';
  console.log(this.entry);
}
}









// .controller('blogcontroller', function($scope) {
//   $scope.number = '';

//   $scope.$watch('number', function() {
//     $scope.entry = $scope.number;
//   })
// });