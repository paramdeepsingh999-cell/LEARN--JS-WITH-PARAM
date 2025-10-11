// Immediately Invoked Function Expression (IIFE)

// function chai(){
// console.log("DB Connected");
// }
// chai()

// To avoid global scope polute. create scope and execute immediately

// How to write IIFI

// (function chai(){
// console.log("DB Connected");
// })(); // use semicolon here explicitly to inform function to stop there. if we create more then pne function side by side in same way with iifi

// ()()

//********* Arrow Function in IIFI */

// (() => { console.log("DB Connected");
// }) ();

// ++++++++++ How to pass parameters, argument and values in IIFI

((name) => {
    console.log(`DB Connected ${name}`);
    
})("Param-SA")

// Note : Interview question is write two IIFI
// and user mostly forgot to apply semicoln after finish first IIFI
// and get errors. So remember that.





