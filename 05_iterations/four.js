// forin loop not only for objects

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     pyth: 'python'
// }

// for (const key in myObject) {
//     //console.log(key);   
//     console.log(myObject[key]); // it provide value of keys
//     //console.log(`${key} shortcut is for ${myObject[key]}`);   
    
// }

// forin for array

const programming = ["js", "c++", "python", "net"]
for (const key in programming) {  
    
    //console.log(key);
    //console.log(programming[key]);
    console.log(`${key} index value is ${programming[key]}`);
    
}