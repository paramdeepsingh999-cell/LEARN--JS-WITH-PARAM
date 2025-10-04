/* first case

let score = 33

console.log(typeof score);
console.log(typeof (score));

*/


/*second case

let score = "33"

console.log(typeof score);
console.log(typeof (score));

*/


/* Third case

let score = "33"

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

*/


/* Fourth case

let score = "33abc"

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

*/



/* FIFTH case

let score = null

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

*/


/* SIXTH Case

let score = undefined

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

*/

/* SEVENTH Case

let score = true

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

*/


// EIGHTH Case

// let score = "PARAM"

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber);

// console.log(valueInNumber);

/* Notes :

"33" => 33
33abc => NaN
TRUE => 1; false => 0;

*/

/* Ninth Case

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

*/

/* Tenth Case
let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

*/

/* Eleventh Case

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

*/

/* Twelveth Case

let isLoggedIn = "PARAM"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

*/


// 1 => true;  0 => false;

// "" => false

// "hitesh" => true

/*
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);
*/

// ***************** OPERATIONS ********************* 

let value = 3
let negValue = -value
// console.log(negValue);

/*  console.log(2+2);
    console.log(2-2);
    console.log(2*2);
    console.log(2/2);
    console.log(2**2);
    console.log(2%2);
*/

let str1 = "Hello"
let str2 = " Param"

let str3 = str1 + str2
// console.log(str3);

//console.log("1" + 2)
//console.log(1 + "2")

// ToPrimitive 

// console.log("1" + 2 + 2) // First string conver all to string
// console.log(1 + 2 + "2") // if first value numeric then its numeric untill string occur

// LINK TO STUDY  
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

/*
let gamescore = 100
++gamescore;
console.log(gamescore);
*/

/*
let gamescore = 100
gamescore++;
console.log(gamescore);
*/


















