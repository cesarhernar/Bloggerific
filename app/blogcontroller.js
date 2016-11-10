
angular.module('blogcontroller', ['ngRoute'])
  .controller('blogcontroller', ['$http', 'userFactory', 'SocketService', blogcont])


function blogcont($http, userfactory, socketservice) {
  this.entry = '';
  socketservice.eventListner('newmessage', (data) => {
  console.log('there is a new message', 'data: ', data);
})


  this.submit = () => {
    var req = {
      method: 'POST',
      url: '/message',
      type: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({ user: userfactory.user, password: userfactory.password, post: this.entry })
    };
    if(this.entry.length > 0) {
      $http(req).then(response => {
          this.entry = '';
      })
  }
  }
  this.Posts = () => {
    window.location.replace('/#/posts');
  }
  this.search = () => {
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
