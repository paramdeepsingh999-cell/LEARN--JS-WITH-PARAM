// let a = 10
// const b = 20
// var c = 30

// {} //function, if else have same called scope.  not in object there its for object declaration

// var c = 300
// let a = 300
// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
//     //console.log("INNER: a =", a);
    
// }

//console.log("OUTER: a = ", a);
// console.log(b);
//console.log(c);


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// NOTE : window scope is different and in node js environment scope is different

// ******* Nested Scope ************ //

//child function can access value of parent but parent not

// function one(){
//     const userName = "Paramdeep"
//     function two(){
//         const website = "youtube"
//         console.log(userName);        
//     }
//     //console.log(website);
//     two()    
// }
// one()

// ************************************** //

// if (true){
//     const userName = "Param"
//     if (userName === "Param"){
//         const website = "youtube"
//         console.log(userName + "  " + website);
        
//     }
//     //console.log(website);   
    
// }
//console.log(userName);

// *************************** Interesting **********************

// Two ways for declare a funtion, first without store in variable and second in variable

console.log(addOne(5));


function addOne(num){
return num + 1
}
// addOne(5)

console.log(addTwo(5)); // its HOISTING CONCEPT


const addTwo = function (num){
    return num + 2
}
//addTwo(5)

