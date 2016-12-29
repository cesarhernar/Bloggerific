angular.module('userFactory', ['ngRoute'])
  .factory('userFactory', userFactory)


function userFactory() {
  this.user;
  this.password;
  this.userid;
  this.setdata = (name, password, userid) => {
    this.password = password;
    this.user = name;
    this.userid = userid;
  };
  return this;
}
