// function simply means the code that you have write can wrap in a package and that package copy can use as per requirement

// here its not good to do same thing again and again. so we have function to solve that repetitive task in once is function
// console.log("A");
// console.log("B");
// console.log("C");
// console.log("D");
// console.log("E");

// function sayMyname(){ // is function definition under curley braces and outside function keyword and name
// console.log("A");
// console.log("B");
// console.log("C");
// console.log("D");
// console.log("E");
// }

//sayMyname() //its function reference and parentheses whwen added its execute

//++++++++++++++ Example ++++++++++++++++++//

// function addTwoNumbers(number1, number2){ // its function parametres with function definition
//    console.log(number1 + number2);
// }

// addTwoNumbers(3,4) //its arguments when we call function

// we can save it in variable also

//const result = addTwoNumbers(3,4) //its arguments when we call function
// console.log("Result :",  result); // it provide output undefined because what we return with function


// +++++++++++++++++ CASE 2 +++++++++++++++++++++ //

// function addTwoNumbers(number1, number2){ // its function parametres with function definition
//    let result = number1 + number2
//    console.log("Param");
//    return result
//    console.log("Param"); // unreachable code detected. bcz once we declare return, no further code execute,
//                          // so we need to declare this before return   
   
// }

// const result = addTwoNumbers(3,4)
// console.log("Result :",  result); 

// +++++++++++++++++ Case : 3 ++++++++++++ //

// function addTwoNumbers(number1, number2){ // its function parametres with function definition
//    return number1 + number2
// }

//const result = addTwoNumbers(3,4)
// console.log("Result :",  result); 

// scope of variable will discuss later bur here we declare result inside and outside function , both are f=different


// function logUserMessage(username){
//     return `${username} Just logged in`
// }

// logUserMessage("Param")
// console.log(logUserMessage); // another mistake bcz function execute only and not store in any variable

//console.log(logUserMessage("Param"));

// const result2 = logUserMessage("Param")
// console.log(result2)

// Note: if we not pass any value it return undefine 


// ++++++++++++++++ case 4 +++++++++++++ //

// function logUserMessage(username){
//     if(username === undefined) {
//         console.log("please enter username");
//         return // add return here so function stop here only, otherwise it print value outside also
//     }
        
//     return `${username} Just logged in`
// }

// console.log(logUserMessage());


// // ++++++++++++++++ case 5 +++++++++++++ //

// function logUserMessage(username = "Param"){ // to avoid undefined we can use by default value also
//     if(username === undefined) {
//         console.log("please enter username");
//         return // add return here so function stop here only, otherwise it print value outside also
//     }
        
//     return `${username} Just logged in`
// }

// console.log(logUserMessage());


// ++++++++++++++++ case 6 +++++++++++++ //

function logUserMessage(username){ 
    if(!username) { // its same as username === undefined
        console.log("please enter username");
        return // add return here so function stop here only, otherwise it print value outside also
    }
        
    return `${username} Just logged in`
}

// console.log(logUserMessage());

// +++++++ Case 6 is REST ++++++++++++++++++ // 

// function calculatePrice(num1){
//     return num1
// }
// console.log(calculatePrice(200));

// function calculatePrice(...num1){ //rest operator (...) it return value in an array. so now we can work on array with loop and add number of values easily.
//     return num1
// }
// console.log(calculatePrice(200, 400, 500));


// function calculatePrice(val1, val2, ...num1){ // it put [ 500, 2000]  in array. bcz first 2 are in val1, val2
//     return num1
// }
// console.log(calculatePrice(200, 400, 500, 2000));

// ++++++++++++++ How to pass and use and object in function +++++++++++++//

// const user = {
//     username: "param",
//     price: 999
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
    
// }
// //handleObject(user)

// handleObject({
//     username: "Somu",
//     price: 999
// })


// ************  Array Pass in function ************** //

const myNewArray = [200, 400, 600, 900]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 600, 900]));









