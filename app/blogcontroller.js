
angular.module('blogcontroller', ['ngRoute', 'userFactory'])
  .controller('blogcontroller', ['$http', 'userFactory',  blogcont])


function blogcont($http, userfactory) {
  this.entry = '';
  userfactory.socket.on('newmessage', () => {
    console.log('there is a new message')
  })
  this.submit = () => {
    var req = {
      method: 'POST',
      url: '/message',
      type: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({ user: userfactory.user, id: userfactory.id, post: this.entry })
    };
    $http(req).then(response => {
        this.entry = '';
    })
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
