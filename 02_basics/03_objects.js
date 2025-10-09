// we can declare object as literal or constructor

// Singleton when we create an object through constructor its singleton object

// when we create declare an object like lieral then its not singleton



// Object.create ==> its constructor approach to declare an object

// object literal

const mySym = Symbol("key1")
const jsUser = {
    name: "paramdeep", // key and value pair method
    "full name": "Paramdeep Singh Thakur",
    [mySym]: "myKey1",
    // its the write syntex to declare symbol under object
    // mySym: "myKey1", // its not the right way to use symbol in object
    age: 39,
    location: "Punjab",
    email: "param@yahoo.work",
    isLoggedIn: false,
    lastLoginDays: ["MOnday", "Saturday"] // we can declare array in an object
}

//how to get acces of objects
// mostly people use jsUser.email apraoch to acces object , but htere is one another way to do that , lets discuss

//console.log(jsUser.email);
// console.log(jsUser[email]);
//console.log(jsUser["email"]);

// console.log(jsUser."full name"); You can not acces that key:value with (.) or ("") methods.
//console.log(jsUser["full name"]);
//console.log(jsUser.mySym); Here it will return exact key value
//console.log(typeof jsUser.mySym); But data type is not symbol its string here

//console.log(jsUser[mySym]);
//console.log(typeof jsUser[mySym]);

//jsUser.email= "param@goglu.work"
//Object.freeze(jsUser) // you can use freeze to lock object and nobody can change values of that object
//jsUser.email= "param@goglu.work786"
//console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello JS USER");    
// }

// console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS USER, ${this.name}}`);    
}

console.log(jsUser.greetingTwo());










