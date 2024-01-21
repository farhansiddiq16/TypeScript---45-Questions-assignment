"use strict";
37.;
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirts(size = "Large", message = "I love Type script") {
    console.log(`Size of the Shirt is ${size} and the message printed on it is "${message}"`);
}
make_shirts();
make_shirts("Medium");
make_shirts("Small");
