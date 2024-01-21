"use strict";
// 24.  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let fruit1 = 'apple';
let fruit2 = 'banana';
console.log(fruit1 === fruit2);
console.log(fruit1 !== fruit2);
// • Tests using the lower case function
let city1 = "KARACHI";
let city2 = "karachi";
console.log(city1.toLowerCase() === city2);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let myAge = 38;
console.log(myAge === 25);
console.log(myAge !== 25);
console.log(myAge > 25);
console.log(myAge < 25);
console.log(myAge >= 25);
console.log(myAge <= 25);
// or
let num1 = 38;
let num2 = 55;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
let fruits1 = 'apple';
let vegetable = false;
console.log(fruits1 === "apple" && vegetable);
console.log(fruits1 === "apple" || vegetable);
// • Test whether an item is in a array
let shapes = ["square", "oval", "triangle", "rectangle"];
console.log(shapes.includes("oval"));
// • Test whether an item is not in a array
console.log(shapes.includes("star"));
