// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 0; index < 10; index++) { // here it will initialise starting point of iteration first
//                                            // then check condition and then print log and 
//                                            // last value will increase or decrease accordingly
//                                            // and again check condition and print untill condition will false

                                                        
//     const element = index;
//     console.log(element);
// }

// // **************** case 2

// for (let i= 0; i <= 10; i++) {                      
//     const element = i;
//     if (element == 5) {
//         //console.log("5 is best number");
//         //break;
//     }
//     //console.log(element);
// }

// // **************** case 2

// for (let i= 0; i <= 10; i++) {  
//     console.log(`Outer Loop ${i}`);
                        
//     for (let j = 0; j <= 10; j++) {        
//         console.log(`Inner Loop ${j} and outer loop ${i}`);
//     }
//      //console.log(`Outer Loop ${i}`);
// }

// // **************** case 3

// for (let i= 1; i <= 2; i++) {  
//     console.log(`Table for ${i}`);
                        
//     for (let j = 1; j <= 10; j++) {        
//         console.log(`${i} * ${j} = ${i*j}`);        
//     }
    
// }

// // **************** case 3

// let myArray = ["Param", "Sachin", "Sukha"]
// console.log(myArray.length);

// for (let i = 0; i < myArray.length; i++) {     
//     const element = myArray[i];
//     console.log(element); 
// }


// **************** case 4 break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("5 is Detected");
//         break; // to break the conrolFlow use break       
//     }
//     console.log(`Value of i is : ${i}`);   
    
// }

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is Detected");
        continue; // to skip one suggested condition and it will not print       
    }
    console.log(`Value of i is : ${i}`);   
    
}

