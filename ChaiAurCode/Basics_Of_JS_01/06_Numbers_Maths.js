const score = 400;

const balance = new Number(100);

console.log(balance);
console.log(typeof balance);

console.log(balance.toString());

console.log(balance.toFixed(2));

const otherNumber = 11123.8966;

console.log(otherNumber.toPrecision(5)); // remember precision always looks for the number before the decimal point

const hundreds = 1000000000;

console.log(hundreds.toLocaleString('en-IN'));

// *********************** Maths ********************************

console.log(Math);

// Math is an object in JS

console.log(Math.abs(-4)); // absolute value that is positive value of number

console.log(Math.round(4.6)); // rounds the number to the nearest integer

console.log(Math.ceil(4.2)); // rounds the number to nearest greater integer

console.log(Math.floor(4.9)); // rounds the number to nearest smaller integer

console.log(Math.min(4,5,67,89)); //returns smallest number

console.log(Math.max(4,5,67,89)); //returns largest number

console.log(Math.random()); // returns a random number between 0 and 1

console.log(Math.floor(Math.random()*10) + 1); //return number between 1 to 10 

const min = 10;

const max = 20;

console.log(Math.floor(Math.random() * (max-min)+1) + min); // very important formula

// we have Math.floor() to round to minimum value
// Then we have Math.random() to generate random number betwwen 0 and 1
// Then we have to max and min number
// then we have min to get itna toh chahiye he chahiye means that 10 to 20 not 1 to 20





















