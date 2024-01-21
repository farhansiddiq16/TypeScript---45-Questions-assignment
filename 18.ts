


// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.


    let countries = ["Dubai", "China", "Germany", "Japan", "Malaysia"]
      

// • Print your array in its original order.

    console.log(countries)


// • Print your array in alphabetical order without modifying the actual list.

    console.log([...countries].sort())              // we used dots for temporarty changes otherise you canuse the simple one
    // console.log(countries.sort())                   //  otherise you canuse the simple one without dotted



// • Show that your array is still in its original order by printing it.

    console.log(countries)


    
// • Print your array in reverse alphabetical order without changing the order of the original list.

    console.log([...countries].reverse())


// • Show that your array is still in its original order by printing it again.


    console.log(countries)



// • Reverse the order of your list. Print the array to show that its order has changed.
    
    countries.reverse();
    console.log(countries)
    
    

// • Reverse the order of your list again. Print the list to show it’s back to its original order.


    countries.reverse();
    console.log(countries)

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.


    countries.sort();
    console.log(countries)




// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


    countries.sort().reverse();
    console.log(countries)
