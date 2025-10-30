function multiplyBy5(num){
    return num*5
}
// multiplyBy5(5)
// multiplyBy5.power = 2
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score

}
createUser.prototype.increment = function(){
this.score++
}

createUser.prototype.printMe = function(){
    console.log(`chai is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 233)

chai.printMe()

/* 
Here is what happenes behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creations of new javascript object.

A prototype is linked: the newly created object gets linked to the prototypes property of the constructor function. 
This means that it has access to properties and methodes defined on the constructor's prototype.

The constructor is called: The constructor functon is called with the specified arguments and this is
bound to the newly created object. if no explicit return value is specified from the constructor, 
javascript assumes this, the newley created object, to be intended return value.

The new object is returned: After the constructor function has been called, if it does'nt return a 
non-primitive value (object, array, function etc), the newley created object is returned.

*/


