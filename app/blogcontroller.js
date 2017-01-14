
angular.module('blogcontroller', ['ngRoute'])
  .controller('blogcontroller', ['$http', 'userFactory', 'SocketService', '$scope', '$timeout', blogcont])

function blogcont($http, userfactory, socketservice, $scope, $timeout) {
  $scope.entry = '';
  $scope.nupost = [];
  socketservice.eventListner('newmessage', (data) => {
    if(data.user !== userfactory.user){
      $scope.nupost.push(data.user);
      $scope.$digest();
      $timeout(() => {$scope.nupost.shift()}, 4000)
    }
  })


  $scope.submit = () => {
    var req = {
      method: 'POST',
      url: '/message',
      type: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({ user: userfactory.user, password: userfactory.password, post: $scope.entry, userid: userfactory.userid })
    };
    if($scope.entry.length > 0) {
      $http(req).then(response => {
          $scope.entry = '';
      })
  }
  }
  $scope.Posts = () => {
    window.location.replace('/#/posts');
  }
  $scope.search = () => {
    var url = '/message?user=' + userfactory.user;
    var req = {
      method: 'GET',
      url: url,
      type: {
        'Content-Type': 'application/json'
      },
    };
    $http(req).then(response => {
      console.log('made get request for use submissions')
    });
  }
}
