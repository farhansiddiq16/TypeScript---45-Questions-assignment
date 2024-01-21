"use strict";
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// List of current usernames
let current_users = ['Farhan', 'Ali', 'Asif', 'Babar', 'Aslam'];
// List of new usernames
let new_users = ['Zahid', 'ALI', 'Imran', 'farhan', 'Khalid'];
// Method-1
// Loop through new_users to check for uniqueness
// for (let new_username of new_users) {
//     let isAvailable = true;
//     for (let current_username of current_users) {
//         if(new_username.toLowerCase() === current_username.toLowerCase()) {
//             console.log (`Username ${new_username} is alraedy taken. Please choose a differenct username`)
// isAvailable = false;
// break;
// }
// }
// if(isAvailable) { 
//     console.log(`Username ${new_username} is available!`)
// }
// }
// Method-2
for (let i = 0; i < new_users.length; i++) {
    let isAvailable = true;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            console.log(`Username ${new_users[i]} is alraedy taken. Please choose a differenct username`);
            isAvailable = false;
            break;
        }
    }
    if (isAvailable) {
        console.log(`Username ${new_users[i]} is available!`);
    }
}
