// Learning about modern way to declare strings

const username = "ChaiAurCode";
const repoCount = 50;

// console.log(username + repoCount + "Value"); // this is old way to declare strings

// Now we do it via string Interpolation

console.log(`Hello ${username} and your repo Count is ${repoCount}`);

// ``is called backticks


// Another way to declare strings

const newString = new String("ChaiAurCode");

console.log(newString[0]);

console.log(newString.__proto__);

console.log(newString.length);

console.log(newString.toUpperCase());

console.log(newString.charAt(2));

console.log(newString.indexOf('c'));

const newString2 = newString.substring(0,4); // you can't use negative index in substring


// The length of "ChaiAurCode" is 11.
// start = -8: Resolves to 3 (11 - 8 = 3).
// end = 4.

const newString3 = newString.slice(-11,11);
console.log(newString3);

const name = " MuskanNoorjhan ";

console.log(name);
console.log(name.trim());

const url = "https://muskan.com%20muskan";

console.log(url.replace('%20','-'));

console.log(url.includes('muskan'));

console.log(url.split(':'));

















