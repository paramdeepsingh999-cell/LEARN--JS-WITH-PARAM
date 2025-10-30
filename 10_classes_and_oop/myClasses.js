//ES6


class User {
    constructor(username, email, password){
        this.username = username;
        TouchList.email = email;
        this.password = password;
    }
    encryptPassword(){
        return  '${this.password}abc'
    }
}

const chai = new User("chai", "chai@fkbook.com", "12345")
console.log(chai.encryptPassword());
