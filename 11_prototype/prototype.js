// // let myName = "hitesh"
// // console.log(myName.length);

// let myName = "hitesh   "
// console.log(myName.truelength);
// // console.log(myName.trim().length); not good way 


// let myHeroes = ["thor", "spiderMan", "Hulk"]

// let heroPower = {
//     thor: "hammer",
//     spiderMan: "sling",
//     getSpiderPower: function(){
//         console.log(`Spidey power is ${this.spiderMan}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`param is present in all objects`);
// }

// Array.prototype.hyhitesh = function(){
//     console.log("param says hello");    
// }

// heroPower.hitesh();
// myHeroes.hitesh();
// myHeroes.hyhitesh();
// heroPower.hyhitesh();

// INHERITANCE

const user = {
    name: "chai",
    email: "chai@gmail"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: true
}

const taSupport = {
    makeAssignment: `js assignment`,
    fulltime: true,
    __proto__: teachingSupport
}

// teacher.__proto__ = user

// new approach model syntex

// Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = "chaiAurCode      "

String.prototype.truelength = function(){       
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
    
}

anotherUserName.truelength()
"hitessh".truelength()
"iceTea".truelength()



