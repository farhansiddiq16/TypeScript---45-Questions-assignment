"use strict";
// 16.  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guestslist1 = ["Farhan", "Nabeel", "Ali", "Adeel", "Salman"];
let newletter = "We have found bigger table now";
guestslist1.map((item1) => console.log(`Dear ${item1}, ${newletter}`));
// • Add one new guest to the beginning of your array.
let onenewguest = "Zakir";
guestslist1.unshift(onenewguest);
console.log(guestslist1);
// • Add one new guest to the middle of your array. 
let middleguest = "Saleem";
let middleIndex = guestslist1.length / 2;
guestslist1.splice(middleIndex, 0, "Saleem");
console.log(guestslist1);
// • Use append() to add one new guest to the end of your list. 
let onenewguest1 = "Sabir";
guestslist1.push(onenewguest1);
console.log(guestslist1);
// • Print a new set of invitation messages, one for each person in your list.
let newGuestListMessage = "You are cordially invited to a dinner";
guestslist1.map((item1) => console.log(`Dear ${item1}, ${newGuestListMessage}`));
