const marvel_heros = ["Thor", "Ironman", "Spiderman"];

const dc_heros = ["Batman", "superman", "flash"];

// Concat two array

// Method-01: push method
// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// Method-02: concat method
// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// Method-03: speard method
const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);

// Method-04: flat
const another_array = [1, 2, 3, 4, 5, [6, 7, 8], 9, [10, [11, 12]]]

const real_array = another_array.flat(Infinity);
console.log(real_array);

console.log(Array.isArray("Muskan"));
console.log(Array.from("Khan"));
console.log(Array.from({ name: "muskan" }));

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));
