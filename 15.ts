

// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 

let guestslist:string[] = ["Farhan", "Nabeel", "Ali", "Adeel", "Salman"]

//Invitation

let invitation1 = "You are cordially invited to a dinner"
guestslist.map((item)=>console.log(`Dear ${item}, ${invitation1}`) )



// Removal

let cantAttend = "Adeel"
console.log(cantAttend + " " + "can't make it for Dinner")


//Replacing

let newGuests = "Faraz"

guestslist[guestslist.indexOf(cantAttend)] = newGuests;
console.log(guestslist)
guestslist.map((item)=>console.log(`Dear ${item}, ${invitation1}`) )






