// object literal

// const user = {
//     username: "Param",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         // console.log("detail from DB");
//         // console.log(`UserName: ${this.username}`);
//         // console.log(this);
        
//     }
// }
// // console.log(user.username);
// console.log(user.getUserDetails())
//  console.log(this);


//  const user2 = {
//     username: "Karam",
//     loginCount: 89,
//     signedIn: true,
//     getUserDetails: function(){
//         // console.log("detail from DB");
//         // console.log(`UserName: ${this.username}`);
//         // console.log(this);
        
//     }
// }
// // console.log(user.username);
// console.log(user.getUserDetails())

// Note: like here if we wanna make user 2, user3 and so onabort, that work will lengthy and time consuming
// so then we use constructor function.

// const promiseOne = new Promise()
// const date = new Date()

// note: that new keyword is constructor function

function User(username, loginCount, isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn
    this.greeting = function(){
        console.log(`Wlcome ${this.username}`);
        
    }
    return this 
    // Its imlicitly defined that value will return
}
const userOne = new User("Param", 12, true)
// const userTwo = new User("DaruAurCode", 11, true)
console.log(userOne.constructor);
// console.log(userTwo);

// when we use new keyword, empty object craeate first , called instance.
// constructor function called due to new keyword. it wrapup all argument in that and provide to user for further process.
// this keyword that you write, all argument inject in that this
// last it available in function

    


