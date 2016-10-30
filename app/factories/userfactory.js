angular.module('userFactory', ['ngRoute'])
  .factory('userFactory', userFactory)


function userFactory() { 
  this.user = '';
  this.id;
  this.socket = io.connect();
  this.id;
  // this.socket.on('retreival', data => { 
  //   this.id = data.id;
  // })
  this.setdata = (name) => {
   this.id = this.socket.id;
    this.user = name;

  };
  return this; 
  
}