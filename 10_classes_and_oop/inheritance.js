class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;        
    }
    addCourse(){
        console.log(`new course added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@4444", "123")
chai.addCourse()

const masalaChai = new User ("masalaChai")
//masalaChai.addCourse()
masalaChai.logMe()
// console.log(chai === masalaChai);
// console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);




