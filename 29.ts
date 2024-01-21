
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.


// • Make a array of your three favorite fruits and call it favorite_fruits.

let favoriteFruits: string[] = ["apple", "banana", "orange"];



// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

if (favoriteFruits.includes ("banana")) {
    console.log ("I really like bananas")
}

if (favoriteFruits.includes('apple')) {
    console.log("I really like apples.");
  }
  
  if (favoriteFruits.includes('orange')) {
    console.log("I really like orange.");
  }
  
  if (favoriteFruits.includes('strawberry')) {
    console.log("I really like strawberry.");
  } else {
    console.log("strawbetty is not in my list of favorite fruits.");
  }
  
  if (favoriteFruits.includes('grape')) {
    console.log("I really like grapes.");
  } else {
    console.log("Grapes is not in my list of favorite fruits.");
  }


