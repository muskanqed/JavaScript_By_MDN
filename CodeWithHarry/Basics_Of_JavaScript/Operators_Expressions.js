let a = 10;
let b = 4;
// Arthimetic Operators
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b);//Exponentiation means a^b
console.log(a / b);
console.log(a % b);
console.log(++a);
console.log(a--);
console.log(a);

// Assignment Operators 
let assignment = 1;
assignment += 5;
console.log(assignment);

// Comparison Operators
let comp1 = 7;
let comp2 = "7";
let comp3 = 10;

console.log(comp1 == comp2);   // true (== allows type coercion)
console.log(comp1 === comp2);  // false (=== does not allow type coercion)

console.log(comp1 != comp2);   // true
console.log(comp1 !== comp2);  // true

console.log(comp3 > comp1);    // true
console.log(comp3 >= comp2);   // true
console.log(comp1 < comp3);    // true
console.log(comp1 <= comp2);   // true

// Logical Operators
let x = 5;
let y = 6;
console.log(x == y && y == x);
console.log(x == y || x == 5);
console.log(!false);