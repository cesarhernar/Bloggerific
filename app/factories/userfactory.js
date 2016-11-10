angular.module('userFactory', ['ngRoute'])
  .factory('userFactory', userFactory)


function userFactory() {
  this.user = '';
  this.password = '';
  // this.socket.on('retreival', data => {
  //   this.id = data.id;
  // })
  this.setdata = (name, password) => {
    this.password = password;
    this.user = name;

  };
  return this;

}
