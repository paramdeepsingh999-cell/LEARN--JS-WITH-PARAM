// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Note: typescript not allow to compare two different data type

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); // NOTE: The reason is that an equality check == and comparisons > < >=
                        //       <= work differently.
                        // Comparison convert null to a number , treating it as 0
                        // that's why (3) case null >= 0 is true and (1) case null > 0 false. 
                        
// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);     


// Note: Strict Check not only check value , it's also check data type ===

console.log("2" === 2);


// Note : Avoid such kind of comparisoan and preffer clean code always








