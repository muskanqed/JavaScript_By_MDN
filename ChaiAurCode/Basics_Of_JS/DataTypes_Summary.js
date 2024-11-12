// Primitive Data types
// 1.string
// 2.Number
// 3.Boolean
// 4.undefined
// 5.null
// 6.Symbol
// 7.BigInt

// Reference Data types(Non-Primitive)
// 1.Arrays
// 2.Objects
// 3.Funtions

const isLoggedIn = true;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 33685785776575757858758757558587587n;

console.log(bigNumber);

function myFunction(){

}

const myObj ={
    name:"Muskan",
    age:20,
}

// Null typeof will be object

// Function typeof will be function object

// Most of non-primitive datatypes are objects

// Array return type is also object


// ***************************************Memory**********************************************

// Stack(Primitive), Heap(Non-Primitive)

let myMemory = "myMemory";
let anotherMemory = myMemory;

console.log(anotherMemory);

anotherMemory = "myMemory2";

console.log(anotherMemory);
console.log(myMemory); 

// This happens because of stack memory as it creates a copy of the value and stores it in another variable

let userOne = {
    username:"Muskan",
    email:"muskan@gmail.com"
}

let userTwo = userOne;

userTwo.username = "Mehak";

console.log(userOne.username);
console.log(userTwo.username);

// The value updates as it point to the origin reference so the value is changed for both the variables
// This happens because of heap memory as it does not create a copy of value but points to the original value
