// const user = {
//     username: "Param",
//     price: 9999,
//     welcomeMessage: function(){
//         console.log(`${this.username},  Welcome To Website`);
//         // when we reffere current context then we use this to access variable. this reffer current context
//         //console.log(this);
        
        
//     }

// }

// user.welcomeMessage()
// user.username = "Somu"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username= "Paramdeep Singh"
//     console.log(this.username); // it will print undefined means it context can works on object 
//                                 // not inside function. it wil help in DOM    
// }
// chai()

// ************ Function Declaration with this and arrow 
// const chai = function(){
//     let username = "Param"
//     console.log(this.username);
    
// }


// const chai = () => { // arrow function
//     let username = "Param"
//     //console.log(this);    
//     console.log(this.username);  
// }
// chai()

// ******** Pure Arrow Function

() => { } // arrow function

//we can hold this arrow function in variable also

// const addTwo = (num1, num2) => {
//     return num1 + num2
//  }
// console.log(addTwo(44, 55));


// ******** another way implicit return . here we remove both curley braces and not need to write 
                                        // return, it assume that return is there

// const addTwo = (num1, num2) => num1 + num2
 
// console.log(addTwo(44, 55));

// ***** we can wrap it in parenthesis , then not need to write return

// const addTwo = (num1, num2) => (num1 + num2)
 
// console.log(addTwo(44, 55));

// ********* benefit of uses parenthisis, suppose you need to return object, we can wrap them in parenthisis and curley braces


// const addTwo = (num1, num2) => ({
//     username: "hittesh"
// })
 
// console.log(addTwo(44, 55));
