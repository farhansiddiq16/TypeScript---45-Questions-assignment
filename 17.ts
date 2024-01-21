

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

let guestslist2:string[] = ["Zakir","Farhan", "Nabeel", "Ali", "Adeel", "Salman", "Sabir"]

let newMsg = "Unfortunatly, we can only invite two guest due to unavailability of space."

guestslist2.map((item2)=>
    console.log(`Dear ${item2}, ${newMsg}`))



// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

while(guestslist2.length > 2) {
    let removeGuest = guestslist2.pop()
    console.log(`Dear ${removeGuest}, Sorry, i can't invite you to dinner due to space isseuue`)
}
   


// • Print a message to each of the two people still on your list, letting them know they’re still invited.

let newMsg2 = "Your are stil invited"

guestslist2.map((item5)=> (
    console.log(`Dear ${item5}, ${newMsg2}`)
)
)


// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


guestslist2.pop()
guestslist2.pop()
    console.log(guestslist2)