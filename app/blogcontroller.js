
angular.module('blogcontroller', ['ngRoute', 'userFactory', 'ngFileUpload'])
  .controller('blogcontroller', ['$http', 'userFactory', 'SocketService', 'Upload', blogcont])


function blogcont($http, userfactory, socketservice, Upload) {
  this.entry = '';
  socketservice.eventListner('newmessage', (data) => {
  console.log('there is a new message', 'data: ', data);})
  
    // Upload.upload({
    //   url: './',
    //   data: {file: file}
    // }).then(function (resp) {
    //         console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
    //     }, function (resp) {
    //         console.log('Error status: ' + resp.status);
    //     }, function (evt) {
    //         var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    //         console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    //     });

  }



  this.submit = () => {
  console.log('this is upload', Upload);
    var req = {
      method: 'POST',
      url: '/message',
      type: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({ user: userfactory.user, password: userfactory.password, post: this.entry })
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
