// full code not execute in once. it should execute on conditional basis

//if statement

// if(condition => true/false){
//     Any condition
// }

//********** Case:1

// const isUserLoggedIn = true

// if(isUserLoggedIn){
    
// }

//******** Comparison Operators
// Note: single equal (=) for assign value and double eqaul (==) for comparison
// < , >, <=, >=, ==, != like 3!= 2 kya 3 is not equal to 2, ===, !==

// if(2 == "2"){
//     console.log("executed");    
// }

// if(2 === "2"){
//     console.log("executed");    
// }

// if(2 !== 3){
//     console.log("executed");    
// }

// //********** Case:3

// const tempratue = 51
// if (tempratue < 50) {
//     console.log("Less than 50");       
// }
// console.log("tempratue is greater than 50");

// //********** Case:4

// const tempratue = 61
// if (tempratue < 50) {
//     console.log("Less than 50");       
// }
// else{
// console.log("tempratue is greater than 50");
// }
// console.log("executed");

// //********** Case:5

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);       
// }
// console.log(`User Power: ${power}`);  
// Note : ReferenceError: power is not defined
// its bcz scope issue


// //********** Case:6 Short hand notation

// const balance = 1000

// if (balance > 500) console.log(`User balance is greater then 500 and it's : ${balance}`);       

// note : here we not use parantheses. now the question is then where's
// the Scope. So its implicit ScriptProcessorNode. bcz
// we write code in single AudioListener, we can write in multiline also but need ti use , after one condtion. or use semocolon in one line code.

// 

//********** Case:8 

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}

