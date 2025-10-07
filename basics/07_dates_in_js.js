// Dates

let myDate = new Date()
    //console.log(myDate);

// let's convert date into String

//console.log(myDate.toString());
//console.log(typeof myDate);

//console.log(myDate.toDateString()); // Mon Oct 06 2025
//console.log(myDate.toISOString()); // 2025-10-06T11:52:51.503Z
//console.log(myDate.toJSON()); // 2025-10-06T11:52:51.503Z
//console.log(myDate.toLocaleDateString()); // 10/6/2025
//console.log(myDate.toLocaleString()); // 10/6/2025, 11:52:51 AM
//console.log(myDate.toLocaleTimeString()); // 11:52:51 AM
//console.log(myDate.toTimeString()); // 11:52:51 GMT+0000 (Coordinated Universal Time)

//console.log(typeof myDate);

//let myCreateDate = new Date(2025, 0, 27)
//console.log(myCreateDate.toDateString());

//let myCreateDateTime = new Date(2025, 0, 27, 5, 3)
//console.log(myCreateDateTime.toLocaleString());
let myCreateDate = new Date("2025-10-07")

//let myCreateDate = new Date("07-14-2025")
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()  //useful in poll type conditions
//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// `${newDate.getDay()}` 

newDate.toLocaleString('default', {
    weekday: "long"    
})




















    

