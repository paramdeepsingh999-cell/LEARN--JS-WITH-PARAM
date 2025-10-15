// mostly used loop foreach

const coding = ["js", "ruby", "java", "cpp"]

//foreach bydefault injected in js. itd higher order loop

// coding.forEach(function name(){}) // for each need callback function

// coding.forEach(function (item){
//     console.log(item);
    
// })

// //*********** case 2 */

// const coding = ["js", "ruby", "java", "cpp"]
// coding.forEach( (item) => {
//     console.log(item);
    
// })

// //*********** case 3 */
// // can we passon that function
// function printMe(item){
//     console.log(item);    
// }

// coding.forEach(printMe) // give reference only not execute it here

// //*************** case: 5

// coding.forEach((item, index, arr) => {
// console.log(item, index, arr);

// })

//**************** vase 6

[{}, {}, {}] // how we put objects in an array

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js",
    },

    {
        languageName: "Paython",
        languageFileName: "py",
    },

      {
        languageName: "DotNet",
        languageFileName: "dn",
    },

]

myCoding.forEach((item) => {
console.log(item.languageName);

})