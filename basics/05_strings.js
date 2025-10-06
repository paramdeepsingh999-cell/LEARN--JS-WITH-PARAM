const name = "Param"
const RepoCount = 50

// console.log(name + RepoCount + "value"); // not recomended syntex 

//console.log(`Hello my name is ${name} and my repo count is ${RepoCount}`);

// Moderen way of syntax with backticks and call string interpolation and make changes on the way

const getName = new String(`Param-Deep`) //here we use new keyword and string as object and declare value in constructor
// console.log(getName);
// console.log(typeof getName);

// console.log(getName[0]); // key value pair access
// console.log(getName.__proto__); // we get empty object but in console we can check there are lots of values inside.
// console.log(getName.length);
// console.log(getName.toLocaleUpperCase());
// console.log(getName.charAt(2));
// console.log(getName.indexOf('e'));
const newString = getName.substring(0, 4) // substrings not obey negative value
// console.log(newString);

const anotherString = getName.slice(-9, 3) // you can assign negative value in slice. its statr from reverse order.
// console.log(anotherString);

// const newStringOne = "   Param    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // it remove the whitespace character plus new line

const url = "https://param.com/param%20-singh"
// console.log(url.replace('%20-', 'page'))

// console.log(url.includes('param'))
// console.log(url.includes('viha'))

console.log(getName.split('-'));












