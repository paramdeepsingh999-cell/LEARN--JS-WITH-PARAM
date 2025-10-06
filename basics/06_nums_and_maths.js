const score = 100
//console.log(score);
//console.log(typeof score);

const balance = new Number(100)
//console.log(balance);
//console.log(typeof balance);

//console.log(balance.toString().length);
//console.log(typeof balance);

// console.log(balance.toFixed(2));

const otherNumber = 123.8956

//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++

//console.log(Math);
//console.log(Math.abs(-4)); // it conver -ve values to +ve
//console.log(Math.round(4.2)); 

//console.log(Math.ceil(4.6)); 

//console.log(Math.floor(4.2)); 

// console.log(Math.random());  // it provide value between 0 to 1 Always

//console.log(Math.floor(Math.random()*10 )+ 1); // to avoid 0.01 scenerio, we add 1 to make sure value will not be 0.

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1))+ min)

// For LUDO Game Where we need 1 min and max 6

const minLudo = 1
const maxLudo = 6

console.log(Math.floor(Math.random() * (maxLudo - minLudo + 1))+ minLudo)

















