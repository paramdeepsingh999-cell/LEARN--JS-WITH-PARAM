//Array

//how to declare an array

const myArr = [0, 1, 2, 3, 4, 5, "hitesh"]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)

//console.log(myArr[0]);
//console.log(myArr[1]);

// javascript arrats are resizable

//arrays-copy-operation create shallow copy means a shallow copy of an object is a copy whoes properties share the same rference.

// deep copy of an object is a copy whoes properties do not share the same references


// Array Methods

//myArr.push(6) // that use to add value at the last postion of array that just added
//myArr.push(7)
//console.log(myArr);

//myArr.pop() // that use to remove last value from array

//myArr.unshift(99)
//myArr.shift()
//console.log(myArr);

//console.log(myArr2.includes(2));
//console.log(myArr2.indexOf(3));

//console.log(myArr2);

const newArr = myArr2.join()

//console.log(myArr2);
//console.log(newArr);
//console.log(typeof newArr);


//slice, splice

console.log("A", myArr2);

const myn1 = myArr2.slice(1,3) // Not include 3
console.log(myn1)

console.log("B" , myArr2);

const myn2 = myArr2.splice(1,3) // array containing the elements that were deleted

console.log("C", myArr2);
console.log(myn2)













