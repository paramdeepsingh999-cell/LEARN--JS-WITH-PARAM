//const tinderUser = new Object() it's singleton object

const tinderUser = {}
tinderUser.id = "1234abc"
tinderUser.name = "samula"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "samula@yahoo",
    fullname: {
        userFullname: {
            firstname: "param",
            lastname: "thakur"
        }
    }
}

//console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4:"d"}
const obj4 = {5: "e", 6:"f"}

//const obj3 = {obj1, obj2}
// console.log(obj3); it create issue

//const obj3 = Object.assign(obj1, obj2)

//const obj3 = Object.assign({}, obj1, obj2, obj4) // create empty object to store all values in target object

const obj3 = {...obj1, ...obj2, ...obj4} // most useable synetax
//console.log(obj3);

// ++++++++++++++ Array of Objects ++++++++++++++++++++ //

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },

    {
        id: 2,
        email: "y@gmail.com"
    },

    {
        id: 3,
        email: "k@gmail.com"
    },

    {
        id: 4,
        email: "l@gmail.com"
    }
]

users[1].email // can acces value like that

//console.log(tinderUser);
//console.log(Object.keys(tinderUser)); // here we put all key in an array and now we can acccess keys with loop
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser)); // create array under array with key and value

//console.log(tinderUser.hasOwnProperty('isLoggedIn')); // here we can check if that object has specific property or not
//console.log(tinderUser.hasOwnProperty('isLogged'));

// ++++++++++++++++++ Destructue Object +++++++++++++++++ //

// react example

const course = {
    courseName: "JS",
    price: 999,
    courseInstructor: "param"
}

// course.courseInstructor

//const {courseInstructor: instructure} = course

const {courseInstructor: instructure, price, courseName: cName} = course // rename an object is object distructure
//console.log(courseInstructor);
console.log(instructure, price, cName);


// Can destruct array also, will discuss later

// ++++++ API Handeling ++++++++ //

// Firstliy API available in xml FormData, but now its available in JSON Format

// {
//     "name": "Param",
//     "courseName": "js hindi",
//     "price": "free"
// }

// Note: url for API ==> https://api.github.com/users/hiteshchoudhary

// API can also available in array form

// [
//     {

//     },

//      {

//     },

//      {

//     },

// ]

// Note: url => https://randomuser.me/
// Note: url for modify api => https://jsonformatter.org/












