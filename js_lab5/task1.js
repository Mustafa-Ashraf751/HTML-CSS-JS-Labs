// NOTE: Use let const and arrow functions please

/*1- You're tasked with modeling vehicles and cars in a transportation app:
    - A Vehicle has type and speed properties.
    - All vehicles can start and stop.
    - A Car inherits from Vehicle and has an additional drive method.

    a- Implement this using ES6 classes
     - Limit the number of Vehicle instances to 50. If an attempt is made to create the 51st vehicle, throw an error with the message: 'Vehicle limit reached'.
     - the implementation of the methods can be console.log only or you can leave them empty
 
    b- Write a function that checks whether an object is an instance of Car using two different ways
*/
class Vehicle {
  constructor(type, speed) {
    if (++Vehicle.count > 50) throw new Error("Vehicle limit reached!");

    this.type = type;
    this.speed = speed;
  }
  //To save the memory and make all instance share the same methods
  start() {
    console.log(this.type + " has been stared!");
  }
  stop() {
    console.log(this.type + " has been stopped!");
  }
}

Vehicle.count = 0;

class Car extends Vehicle {
  constructor(type, speed, model) {
    super(type, speed);
    this.model = model;
  }

  drift = () => {
    console.log(this.model + " is drifting");
  };
}

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
