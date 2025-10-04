// We have 2 type of data type i.e PRIMITIVE and NON-PRIMITIVE [Reference Type]
// Difference between them is Call By Value & Call By Reference
// Basically it differentitate on basis of How these all data store in memory and how you can access that data 

// PRIMITIVE Data Types

/*
in Primitive Data type whenever you make a copy of that data  type for use anywhere, you not get memory reference of original data 
you only get copy of that data and whatever changes you will make , it apply in copy only and not in original data.

7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt
           # null (means empty not zero)
           # undefined (when only declare memory space but not provide value)
           # Symbol (when you use a single component multiple times and kin of requirement occur that we need to make that component unique,
           then we use symbol. we wrap that compnanet in symbol and use further. its basicaly use to make things unique.) 
*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

/* Case 1

const id = '123'
const anotherId = '123'
console.log( id === anotherId);

*/


const id = Symbol('123')
const anotherId = Symbol('123')
console.log( id === anotherId);

// NOTE : Here even we have same values but Symbol make return value unique

/* ******************************* */

const bigNumber = 45366565656n  // Note: use n at the end of number and it convert to bigInt
console.log(typeof bigNumber); 


/* Note: 

Is JavaScript Statically or Dynamically Typed?

JavaScript is a dynamically typed language. This means that the type of a variable is determined at 
runtime, rather than at compile time. In dynamically typed languages, you do not need to explicitly 
declare the type of a variable when you create it. Instead, the type is inferred from the value assigned 
to the variable.

*/

// Reference Type (NON-PRIMITIVE) 

/*
    Where we get direct refenece allocation in memmory

    //Array, Objects, Functions
*/






    

