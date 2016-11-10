angular.module('SocketService', ['ngRoute'])
  .service('SocketService', SocketService);

  function SocketService () {
      this.socket = io.connect()
    this.eventEmitter = (event) => {
      this.socket.emit(event);
    }
    this.eventListner = (event, callback) => {
      this.socket.on(event, callback);
    }
  }
