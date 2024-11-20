// array

const myArray = [1, 2, 3, {
    name: "muskan",
    designation: "Developer"
}];

console.log(typeof myArray); // return type is object

// other way to declare array
const myarr = new Array(1, 2, 3, 4);

console.log(myarr);
// Array methods

// myarr.push(2);
// myarr.pop();

// myarr.unshift(9); // useless
// myarr.shift();

console.log(myarr.includes(9)); // false
console.log(myarr.indexOf(9)); // -1

const newarr = myArray.join();

console.log(newarr);


// slice and splice
const mynew1 = [1, 2, 3, 4, 5, 6];

console.log("A ", mynew1);

const myn1 = mynew1.slice(1, 3); // [2,3] i.e 1 index ko include karo aur 2 ko

console.log(myn1);

console.log("B ", mynew1);

const myn2 = mynew1.splice(1, 3); // [2,3,4] i.e ki 1, 2 ,3 index

console.log(myn2);

console.log("Splice array ", mynew1);




