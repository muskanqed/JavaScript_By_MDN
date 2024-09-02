// prompt is browser method not avaliable in nodejs thatis js runtime
// We need to use via two methods one is internal and other is external
// Method-01-Internal

// const { type } = require('os');
// const { stdin, stdout } = require('process');
// const readline = require('readline');

// const r1 = readline.createInterface({
//     input: stdin,
//     output: stdout
// })

// r1.question("Enter a number baby: ", (input) => {
//     let a = parseInt(input);
//     console.log(a);
//     console.log(typeof a)
//     r1.close();
// })

// Method-02-External
// npm i prompt-sync install this
const prompt = require('prompt-sync')(); // Import prompt-sync

let a = prompt("Hi Muskan, please enter a number: ");
a = Number.parseInt(a); // Convert the input to an integer
console.log(a);

let age = prompt("Enter a age: ", "90");

if (age > 18) {
    console.log("User is good to go");
}
else {
    console.log("User cannot proceed");
}

// Ternary Operator:
let number = 18;
let result = (number >= 18) ? "You can vote." : "You cannot vote.";
console.log(result);
