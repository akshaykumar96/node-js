var events = require('events');

var eventEmitterObj = new events.EventEmitter();

var firstListener = function () {
   console.log('firstListener  executed.');
}

var secondListener  = function() {
  console.log('secondListener executed.');
}


eventEmitterObj.addListener('connection', firstListener);
eventEmitterObj.on('connection', secondListener);

var eventListeners = events.EventEmitter.listenerCount(eventEmitterObj, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Fire the connection event 
eventEmitterObj.emit('connection');

// Remove the binding of listner1 function
eventEmitterObj.removeListener('connection', firstListener);
console.log("firstListener will not listen now.");

// Fire the connection event 
eventEmitterObj.emit('connection');

eventListeners = events.EventEmitter.listenerCount(eventEmitterObj,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

console.log("Program Ended.");