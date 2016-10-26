angular.module('userFactory', ['ngRoute'])
  .factory('userFactory', userFactory)


function userFactory() { 
  this.user = '';
  this.password = '';
  this.setdata = (name, passwrd) => {
    this.user = name;
    this.password = passwrd;
  };
  return this; 
  
}