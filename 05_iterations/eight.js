// reduce method execute a user-supplied "reducer"

//Example

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 10

// // Example 2

// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)
// console.log(
//     myTotal
// );

// Example 3

// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( (acc, currval) => acc + currval , 0 ) 
// console.log(
//     myTotal
// );

// Example 4

const shoppingCart = [
    {
        itemName: "Js Course",
        Price: 9999
    }, 

     {
        itemName: "Russian",
        Price: 6000
    },

     {
        itemName: "Python Course",
        Price: 7999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.Price, 0)
console.log(priceToPay);

