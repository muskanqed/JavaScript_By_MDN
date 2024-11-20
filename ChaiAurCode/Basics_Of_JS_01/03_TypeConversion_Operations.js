let score = "33ssss";

// we dont know whether we will get a number from frontend end or string
// but we need a number, here comes type conversion

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(typeof score);
console.log(valueInNumber); //NaN that is not a number

// if let score = null // output will be 0 which is incorrect

// "33" => 33
// "33abc" => NaN
// true => 1; 

let isLoggedIn = "1"; // if empty string then false, 0 => false and if string then true

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); // string will be string even if there is number inside it


/* ******************************* Operations*/

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 ** 3); //2^3 that is 8

console.log(2 + "1"); //21
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
// console.log(true+); // not allowed
console.log(+""); // 0



