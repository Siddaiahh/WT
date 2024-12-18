// step 1 importing event
const events = require("events");

// step 2 creating an Event emitter object
const eventEmitter = new events.EventEmitter();

//write a function of event 1
function listner1() {
    console.log("Event recevied by Listner 1");
}

//write a function of event 2
function listner2() {
    console.log("Event recevied by Listner 2");
}

// step 3 adding listener through addlistener or on
eventEmitter.addListener("write", listner1);
eventEmitter.on("write", listner2);

// step 4 emiting event 
eventEmitter.emit("write");
console.log(eventEmitter.listenerCount("write"));

// step 5  removing listener 
eventEmitter.removeListener("write", listner1);
console.log("Listener 1 is removed");
eventEmitter.emit("write");

console.log(eventEmitter.listenerCount("write"));

console.log("Program Ended");
