"use strict";
// 23.  Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Test - 1
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True otherwise false.");
console.log(fruit == 'apple');
console.log(fruit == 'banana');
// Test - 2
let age = 25;
console.log("Is age == '25'? I predict True otherwise false.");
console.log(age === 25);
console.log(age === "25");
// Test - 3
let num = 30;
console.log("Is num  > '30'? I predict True otherwise false.");
console.log(num > 20);
console.log(num < 20);
// Test - 4
let salary = 50000;
console.log("Is salary  == '50000'? I predict True otherwise false.");
console.log(salary == 50000);
console.log(salary != 50000);
// Test - 5
let Car = 'subaru';
let JapaneseCar = true;
console.log("Is car == 'subaru' and Japanese Car is True? I predict True otherwise false");
console.log(Car === 'subaru' && JapaneseCar);
console.log(Car === 'mehran' && JapaneseCar);
