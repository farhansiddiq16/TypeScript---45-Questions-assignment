"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
// Define the showMagicians function
function show_Magicians(magicians2) {
    magicians2.forEach((magician) => {
        console.log(magician);
    });
}
function make_Great(magicians2) {
    return magicians2.map((magician) => `the Great ${magician}`);
}
// magician names
const magician_Names = ["Harry potter", "Albus Dumbledore", "Hermione", "Ron ", "Luna"];
const great_Magicians = make_Great([...magician_Names]);
console.log("Original Magicians:");
show_Magicians(magician_Names);
console.log("\nGreat Magicians:");
show_Magicians(great_Magicians);
