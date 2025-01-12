/*You're tasked with modeling vehicles and cars in a transportation app:
- A Vehicle has type and speed properties.
- All vehicles can start and stop.
- A Car inherits from Vehicle and has an additional drive method.

a- Implement this using ES5 function constructors
 - Limit the number of Vehicle instances to 50. If an attempt is made to create the 51st vehicle, throw an error with the message: 'Vehicle limit reached'.
 - the implementation of the methods can be console.log only or you can leave them empty

b- Write a function that checks whether an object is an instance of Car using two different ways*/

function Vehicle(type, speed) {
  if (++Vehicle.count > 50) throw new Error("Vehicle limit reached!");

  this.type = type;
  this.speed = speed;
}

//To save the memory and make all instance share the same methods
Vehicle.prototype.start = function () {
  console.log(this.type + " has been stared!");
};

Vehicle.prototype.stop = function () {
  console.log(this.type + " has been stopped!");
};

Vehicle.count = 0;

function Car(type, speed, model) {
  Vehicle.call(this, type, speed);
  this.model = model;
  this.drift = function () {
    console.log(this.model + " is drifting");
  };
}

//Behind the scene
/*let newProto = {};                
newProto.__proto__ = Vehicle.prototype;*/

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function isCar(obj) {
  //return Object.getPrototypeOf(obj).constructor === Car;
  return obj instanceof Car;
}

var car = new Car("Sports", 220, "Mustang");
car.drift();
car.start();
car.stop();

console.log(isCar(car));

for (var i = 0; i < 51; i++) {
  new Car();
}
