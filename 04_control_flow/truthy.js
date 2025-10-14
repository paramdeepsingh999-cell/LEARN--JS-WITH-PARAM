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
// const emptyObje = {}

// if (Object.val(emptyObje).length === 0) {
//     console.log("object Empty");    
// }

// // console work

// false == 0 // it will true
// false == '' // it will true
// 0 == '' // it will true

// Nullish Coalescing operator (??) : null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

//console.log(val1);

// Note: when call from DB , We get 2 values and can get null and undefined. to how treat value
// this operator for null and undefined

//************** Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

