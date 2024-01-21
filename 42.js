"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39.Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// magician names
let magicianNames1 = ["Harry potter", "Albus Dumbledore", "Hermione", "Ron ", "Luna"];
let greatMagicians = makeGreat(magicianNames1);
function showMagicians1(magicians1) {
    magicians1.forEach((magician) => {
        console.log(magician);
    });
}
function makeGreat(magicians1) {
    return magicians1.map((magician) => `the Great ${magician}`);
}
showMagicians1(greatMagicians);
