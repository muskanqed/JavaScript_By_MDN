// nn bb ss u
// Primitive Datatype
// Represents the intentional absence of any object value.
let a = null;
// Represents both integer and floating-point numbers.
let b = 20;
// Represents a logical value, either true or false.
let c = true;
// (ES2020) Represents integers with arbitrary precision, useful for working with very large numbers beyond the safe integer limit for Number.
let d = BigInt("290");
// Represents a sequence of characters (text).
let e = "Muskan";
// (ES6/ES2015) Represents a unique and immutable value that is often used as an identifier for object properties.
let f = Symbol("Hey Everyone");
// Represents a variable that has been declared but not assigned a value.
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof b);

// Non-Primitive Datatype
// Object
let person = {
  firstName: "Muskan",
  age: 24,
  Designation: "Developer",
};

console.log(person.firstName);
console.log(person);

// Array
let fruits = ["Apple", 1, true];

console.log(fruits[2]);

// Function
function greet() {
  return "Hello, World!";
}

console.log(greet());

// Date
let currentDate = new Date();

console.log(currentDate);
