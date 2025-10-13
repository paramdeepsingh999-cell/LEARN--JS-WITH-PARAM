// // Case 1: we assume that the value that inside userEmail is true
// const userEmail = "param@gmail"

// if (userEmail) {
//     console.log("Got User EMAIL");    
// }
// else{
//     console.log("Don't have an email");    
// }

// // Case 2: if we have an empty string, we assume that its false
// const userEmail = ""

// if (userEmail) {
//     console.log("Got User EMAIL");    
// }
// else{
//     console.log("Don't have an email");    
// }

// Case 3: if we have an empty array, we assume that its true
// const userEmail = []

// if (userEmail) {
//     console.log("Got User EMAIL");    
// }
// else{
//     console.log("Don't have an email");    
// }


// // Falsy Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 
// rest all are truthy values

// Truthy Values

// "0", 'false', "false", " " if have space inside its tuthy now, [], {}, function(){} empty function also truthy

//****** How to check for an empty array */

// // Case 3: if we have an empty array
// const userId = [2]

// if (userId.length === 0) {
//     console.log("Array Empty");    
// }
// else{
//     console.log(`User Email id is ${userId}`);    
// }

// Case 3: if we have an empty object
const emptyObje = {}

if (Object.keys(emptyObje).length === 0) {
    console.log("object Empty");    
}
