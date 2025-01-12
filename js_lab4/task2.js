Object.prototype.toString = function () {
  return "This is an object";
};

var anyThing = {};
console.log(anyThing.toString());
console.log(String(anyThing));

var obj = { message: "This is a message" };
Object.setPrototypeOf(obj, {
  toString() {
    return this.message;
  },
});

console.log(obj.toString());
console.log(String(obj));
