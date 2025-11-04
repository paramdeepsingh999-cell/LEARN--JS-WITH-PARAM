class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    // get password(){
    //     // return this._password.toUpperCase()
    //     return `${this._password}golmal`
    // }
    // set password(value){
    //     this._password = value

    // }

       get email(){
        return this._email.toUpperCase()        
    }
    set email(value){
        this._email = value

    }
}
const paramdeep = new User("param@jfh", "abc")
// console.log(paramdeep.password);
console.log(paramdeep.email);
