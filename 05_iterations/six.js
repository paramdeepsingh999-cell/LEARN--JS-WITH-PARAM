// const coding = ["js", "ruby", "cpp", "python"]

// //Note: forEach not eturn values

// const values = coding.forEach((item) => {
//     console.log(item);    
//     return item
// })

// console.log(values);


// // ************************** Case: 2
// // Note: filter return values
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);

// // ************************** Case: 2
// // Note: filter return values
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => { // Note: if you open scope, then must use return
//     return num > 4 
// })
// console.log(newNums);


// // ************************** Case: 4
// // Note: forEach

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)        
//     }
// } )

// console.log(newNums);

// ************************** Case: 5

const books = [
    {
        title: 'Book1', genre: 'History', publish: 1981, edition: 2004
    },

      {
        title: 'Book2', genre: 'Science', publish: 2002, edition: 2008
    },

      {
        title: 'Book3', genre: 'History', publish: 1989, edition: 2014
    },

      {
        title: 'Book4', genre: 'Non-Fiction', publish: 1971, edition: 2009
    },

      {
        title: 'Book5', genre: 'History', publish: 1999, edition: 2004
    },

      {
        title: 'Book6', genre: 'Science', publish: 2000, edition: 2014
    },

      {
        title: 'Book7', genre: 'Fiction', publish: 1991, edition: 2000
    },

      {
        title: 'Book8', genre: 'History', publish: 1961, edition: 2025
    },
]

//const userBooks = books.filter( (bk) => bk.genre === 'History' )

// const userBooks = books.filter( (pblsh) => pblsh.publish >= 2000 )

// const userBooks = books.filter( (pblsh) => {return pblsh.publish >= 2000 })

//Note in above case we open scope so we need return

const userBooks = books.filter( (bk) => bk.publish >= 1995 &&  bk.genre === 'History')
console.log(userBooks);



