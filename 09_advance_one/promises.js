// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //DB calls, cryptography, network

//     setTimeout(function(){
//         console.log('Async task is complete');      
//         resolve()  
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promis Consumed");
    
// })


// CASE 2

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()        
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolve");    
// })


// // CASE :3
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({
//             username: "Daru",
//             email: "daru@example.com"
//         })
//     }, 1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })



// // CASE: 4
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "param", password: "123455"})
//         }
//         else{
//             reject("Error : Something Went Wrong")
//         }        
//     }, 2000)
// })

// promiseFour.then((user)=>{
// console.log(user);
// return user.username
// }).then((username) => {
// console.log(username);

// }).catch(function(error){
//     console.log(error);
    
// }).finally(() => console.log("Promise either resolved or rejected")  
// )

// // CASE: 5

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "JAVA-SCRIPT", password: "123455"})
//         }
//         else{
//             reject("Error : JS Something Went Wrong")
//         }        
//     }, 2000)
// })
// async function consumePromiseFive() {
//    try{
//      const response = await promiseFive
//         console.log(response);
//    }
//    catch(error){
//     console.log(error);
    
//    }
// }

// consumePromiseFive()

async function getAllUsers() {

    try {
         const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log("E: Error");       
    }
   
}
getAllUsers()

