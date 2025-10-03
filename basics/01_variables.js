const account_id = 1444553
let accountEmail = "param@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


// account_id = 2 // not allowed
accountEmail = "paro@google.com"
accountPassword = "7868678"
accountCity = "Punjab"

// console.log(account_id);


// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

/* That multitime console log method for display values is not good
   we will use new way to display multiple values in ones 
   and it's console.table([])
*/

console.table([account_id, accountEmail, accountPassword, accountCity, accountState])



