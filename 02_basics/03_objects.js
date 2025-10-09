// we can declare object as literal or constructor

// Singleton when we create an object through constructor its singleton object

// when we create declare an object like lieral then its not singleton



// Object.create ==> its constructor approach to declare an object

// object literal
const jsUser = {
    name: "paramdeep", // key and value pair method
    "full name": "Paramdeep Singh Thakur",
    age: 39,
    location: "Punjab",
    email: "param@yahoo.work",
    isLoggedIn: false,
    lastLoginDays: ["MOnday", "Saturday"] // we can declare array in an object
}

//how to get acces of objects
// mostly people use jsUser.email apraoch to acces object , but htere is one another way to do that , lets discuss

console.log(jsUser.email);
// console.log(jsUser[email]);
console.log(jsUser["email"]);

// console.log(jsUser."full name"); You can not acces that key:value with (.) or ("") methods.
console.log(jsUser["full name"]);





