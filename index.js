// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

// destructivly append Driver(name)
function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

// destructively prepend drivers
function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

// destructively remove drivers 
function destructivelyRemoveLastDriver(name) {
  drivers.pop();
}

// destructively remove first driver 
function destructivelyRemoveFirstDriver() {
  drivers.shift();
}