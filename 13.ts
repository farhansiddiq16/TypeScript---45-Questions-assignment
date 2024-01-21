

// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”




let vehicle = ["Car", "Bike", "Suzuki"]

console.log("I would like to own a" + " " + vehicle[0])
console.log("I would like to own a" + " " + vehicle[1])
console.log("I would like to own a" + " " + vehicle[2])


// or 

console.log(`I would like to own a ${vehicle}`)



// or use mapping system


vehicle.map((item)=> console.log(`I would like to own a ${item}`))