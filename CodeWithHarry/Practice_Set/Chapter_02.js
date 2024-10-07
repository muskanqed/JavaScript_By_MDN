// Use logical operator to tell a persons age lies betwwen 10 and 20

/*
const prompt = require("prompt-sync")();
const age = prompt("Hey, Enter your age: ")
function personAge(age) {
    if (age > 10 && age < 20) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
*/

// personAge(age);

// Demonstrate the use of switch case in JS
/*
const personsAge = prompt("Enter age: ")
const a = Number.parseInt(personsAge);
switch (a) {
    case 10:
        console.log("You are too young");
        break;
    case 20:
        console.log("You are in your 20's");
        break;
    case 30:
        console.log("Pretty old");
        break;
}
*/

// Check whether a number is divisible by 2 and 3

function divisible(number) {
    const divideByTwo = number % 2;
    const divideByThree = number % 3;
    if (divideByTwo == 0 && divideByThree == 0) {
        console.log("divisible by both");
    }
    else {
        console.log("Not divisible");
    }
}

// divisble(6);

// Use Ternary Operator to match the string

const prompt = require("prompt-sync")();

const ageDrive = prompt("Enter your age ");

const result = (ageDrive > 18) ? "You can drive" : "Cannot Drive";

console.log(result);