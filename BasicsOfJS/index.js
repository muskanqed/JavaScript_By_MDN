// Comments in JS
// Print something
console.log("Hi Browser");

// Variable Declaration in Js
// var,let,const
let name = "Muskan";
console.log(name);

let interstRate = 0.3;
interstRate = 1;
// We see the latest value
console.log(interstRate);

const value = 1;
// value = 0.9; will throw error
console.log(value);

// Primitive Datatype/Value Type
let firstName = "Muskan"; // String literal
let age = 24; // Number literal
let isApproved = true; // Boolean literal
let salary = undefined;
let amt = null;

// Reference Datatype
// Objects
// Array
// Function

// Object
let person = {
    personName: "Mosh", // Key: value
    age: 30,
};
// Access object property using
// Dot notation
person.personName = "John";
// Bracket Notation
person["personName"] = "Muskan";
console.log(person["personName"]);

// Arrays
let selectColors = ["red", "blue", 1];
selectColors[3] = "green";
console.log(selectColors.length);

function greet(name, lastName) {
    console.log("Hi " + name + ' ' + 'Noorjhan');
}

// greet('Muskan', 'Badeghar');
greet();

// Types of Function
function square(number) {
    return number * number;
}

console.log(square(2));
